# Tutorial: Using GPT-OSS-20B with CUREBench

This tutorial shows how to run **GPT-OSS-20B** with the CUREBench starter kit for both **Track 1 (Internal Reasoning)** and **Track 2 (Tool-Augmented Reasoning)**.  

---

## 1. Introduction

[**GPT-OSS-20B**](https://huggingface.co/openai/gpt-oss-20b) is OpenAI’s smaller open-weight reasoning model (20.9B parameters, 3.6B active per token). For full technical details, see the GPT-OSS paper (https://arxiv.org/abs/2508.10925).  

Key features:
- **Apache 2.0 license** → free to use, modify, deploy.  
- **MoE Transformer** → 24 layers, 32 experts, top-4 active per token.  
- **Tokenizer:** `o200k_harmony` (201k vocab, includes role/channel tokens).  
- **Powerful reasoning** → trained with reinforcement learning + Harmony format.  
- **Variable effort reasoning** → `low`, `medium`, `high` control chain-of-thought length.  
- **Agentic capabilities** → native support for browser, Python, and developer-defined tools.  
- **131k context length** with FlashAttention + YaRN.  
- **MXFP4 quantization** → runs in ~16GB VRAM with BF16 activations.  

### About GPT-OSS-20B

**Evaluations (from the model card):**
- **HealthBench (biomedical Q&A):** GPT-OSS-20B (high reasoning) outperforms GPT-4o and OpenAI o1, and comes close to o3.  
- **Multilingual (MMMLU):** strong across 14 languages (~76% avg. accuracy).  
- **Reasoning/coding benchmarks:** competitive on AIME, MMLU, SWE-Bench.  

### Why GPT-OSS-20B matters for CUREBench

- **Biomedical strength:** On *HealthBench*, GPT-OSS-20B (high reasoning) nearly matches OpenAI o3, and outperforms GPT-4o/o1 on realistic doctor–patient dialogues. Also competitive on reasoning/coding benchmarks (AIME, MMLU, SWE-Bench). 
- **Scalable reasoning:** Smooth test-time scaling — higher reasoning levels increase chain-of-thought length and accuracy.  
- **Multilingual:** Evaluated across 14 languages; ~76% average accuracy.  
- **Instruction hierarchy:** Roles are prioritized as **System > Developer > User > Assistant > Tool**, ensuring developer and system guardrails override user prompts.  
- **Safety note:** Reasoning traces are not filtered; they may hallucinate. Do not expose raw CoT directly to end-users.  

This makes GPT-OSS-20B a beneficial model for CUREBench:
- **Track 1:** strong internal reasoning  
- **Track 2:** robust tool-use → integrates smoothly with [ToolUniverse's](https://github.com/mims-harvard/ToolUniverse) 200+ biomedical APIs.  

**Important:** GPT-OSS models *require* the **Harmony format**. If you call `model.generate` directly without Harmony encoding, the model will not behave correctly.  
The wrapper provided here automatically handles Harmony encoding/decoding for you.

For more background on GPT-OSS and the Harmony format:
* [Introduction to GPT-OSS](https://openai.com/index/introducing-gpt-oss/) 
* [GPT-OSS (GitHub repo)](https://github.com/openai/gpt-oss) 
* [Harmony (GitHub repo)](https://github.com/openai/harmony)  
* [Harmony Cookbook guide](https://cookbook.openai.com/articles/openai-harmony)
---

## 2. Setup

Install dependencies:

```bash
pip install -r requirements.txt
pip install transformers openai-harmony safetensors bitsandbytes accelerate
```

> **Notes:**
>
> * `bitsandbytes` → enables 8-bit quantization so GPT-OSS-20B can run on a single 16GB GPU.
> * `accelerate` → helps with device placement and multi-GPU inference.


Set tiktoken cache for Harmony encodings  
```
# Add this line to your shell config (~/.bashrc, ~/.zshrc, or equivalent)
echo 'export TIKTOKEN_ENCODINGS_BASE=$HOME/.cache/openai_harmony' >> ~/.bashrc
source ~/.bashrc
```

> Hardware note: GPT-OSS-20B requires \~16GB VRAM.
>
> * For safe testing, use the **dry-run** test (no GPU OOM risk).
> * For full inference, an A100/H100 or equivalent is recommended.

> Precision note: GPT-OSS-20B uses MXFP4 quantization for MoE weights and BF16 for activations. Use torch_dtype=torch.bfloat16 if not quantized.

---


## 3. Sanity Tests (Task 1 & Task 2) 
We provide `test_GPTOSS20B.py` with **four tests** that map directly to competition tracks:

> **Note:** Test 1 requires the [`tooluniverse`](https://github.com/mims-harvard/ToolUniverse) package. Install it first with:
>
> ```bash
> pip install tooluniverse
> ```

### Test 1 → Dry-run with ToolUniverse
* Loads 215 biomedical tools from ToolUniverse.  
* Verifies Harmony schema wiring (applies tokenizer/template but does not generate).  
* Example output:  

```
✓ Loaded 215 ToolUniverse tools
Dry-run successful
Input IDs shape: (1, 15468)
First 20 token IDs: [200006, 17360, 200008, 3575,...]
```

### Test 2 → Task 1 baseline
* Plain inference without tools.  
* Demonstrates internal reasoning.  
* Example output:  
```

Final response: The user asks "What is 2+2?" The answer is straightforward: 4. Might also provide explanation, but they only asked the result. I'll produce a concise answer: 4.
Trace length: 1

```

### Test 3 → Task 2 with builtin tool

* Enables `builtin_tools=["python"]`.
* This makes the Python tool available to the model, but GPT-OSS-20B may choose either to issue a tool call **or** solve the arithmetic internally.
* Example output (here the model solved it directly in its reasoning trace):

```
Final response: We just need to multiply 123 * 456. It's trivial. 
123*456 = 560... let's calculate: 
123*400 = 49200, 123*50 = 6150, 123*6 = 738, 
total = 49200+6150+738=56088. 
So answer is 56088.
Trace channels: ['analysis']
```

### Test 4 → Task 2 with custom schema
* Defines a dummy `get_weather` tool.  
* Model responds with a function call (schema recognition only; tool not executed).  
* Example output:  
```

Final response: {"location":"Tokyo","format":"celsius"}
Trace roles: [assistant, assistant]

````

Run all tests:

```bash
python test_GPTOSS20B.py
````
```
---

## 4 Return values

When you call `GPTOSS20BModel.inference()`, it returns:

* **Final response** → the model’s final answer (from the `"final"` channel).
* **Reasoning trace** → the full Harmony-formatted trace (commentary, chain-of-thought markers, tool calls, and final output).

> Other wrappers like `ChatGPTModel` return `(response, complete_messages)` as plain text — so in the CSV, the `reasoning` column just shows the user/assistant messages. GPT-OSS-20B instead exposes Harmony’s structured channels (`analysis`, `final`, `tool`), so you capture both the answer *and* the reasoning path.

---

## 5. Advanced Options

The GPT-OSS-20B wrapper supports several options you can use to your advantage in CUREBench:

* **`reasoning_lvl`** → `"low"`, `"medium"`, `"high"`.
  *Example:*

  ```python
  model = GPTOSS20BModel("openai/gpt-oss-20b", reasoning_lvl="high")
  ```

  e.g. can test `"high"` for multi-step planning, `"low"` for quick retrieval.

* **`system_identity`** → Override the system role.
  *Example:*

  ```python
  model = GPTOSS20BModel("openai/gpt-oss-20b", system_identity="You are a clinical trial assistant.")
  ```

  e.g. can test if useful for domain-specific framing

* **`developer_instructions`** → Insert hidden guidance.
  *Example:*

  ```python
  model = GPTOSS20BModel(
      "openai/gpt-oss-20b",
      developer_instructions="Always cite FDA drug labels when possible."
  )
  ```

* **`builtin_tools`** → Enable built-in functions.
  *Example:*

  ```python
  final, trace = model.inference("What’s 45 * 67?", builtin_tools=["python"])
  ```

* **`tools`** → Pass ToolUniverse or custom tools.

Example with ToolUniverse (schema conversion required):

```python
from tooluniverse.execute_function import ToolUniverse

# Load ToolUniverse definitions
engine = ToolUniverse()
engine.load_tools()
raw_tools = engine.return_all_loaded_tools()

# Convert ToolUniverse JSON into OpenAI-style schema
# (you must write a converter — see test_GPTOSS20B.py for an example)
tools = convert_tooluniverse_to_openai(raw_tools)

final, trace = model.inference(
    "What are the active ingredients in Panadol?",
    tools=tools
)
````

---

**Important Notes**

- **Instruction hierarchy:** Harmony enforces a strict priority order:  
  **System > Developer > User > Assistant > Tool**.  
  - *System* messages always take precedence (e.g., competition rules).  
  - *Developer* instructions override user prompts and are best used for hidden guardrails or domain-specific rules.  
  - *User* prompts are interpreted within those constraints.  
  - *Assistant* outputs may include both reasoning (`analysis`) and answers (`final`).  
  - *Tool* calls are lowest priority and always embedded within the reasoning trace.

- **Tool interleaving:** Tools are not separate “modes.” GPT-OSS can **mix chain-of-thought, tool calls, and final answers in a single Harmony trace**. This means you may see `analysis → tool call → analysis → final` all in one response.

- **Tool schemas:** ToolUniverse defines its ~215 biomedical APIs in its own JSON format.  
  Before passing them to GPT-OSS-20B, you must **convert them into OpenAI-style `"type": "function"` schemas**.  
  - See `test_GPTOSS20B.py` for a working converter example.

- **Safety caveat:** Reasoning traces are **not filtered**. They can contain hallucinations or unsafe content. Do not expose raw traces directly to end-users — filter, summarize, or log them for analysis only.

---

Example with a custom schema:

```python
tools = [
  {
    "type": "function",
    "function": {
      "name": "get_weather",
      "description": "Get the weather for a location.",
      "parameters": {
        "type": "object",
        "properties": { "location": {"type": "string"} },
        "required": ["location"]
      }
    }
  }
]
final, trace = model.inference("What's the weather in Tokyo?", tools=tools)
```
---

## 6. Example Config

All of the advanced options shown above are configurable via JSON/YAML configs as well.  
Here is a tested example (`configs/metadata_config_val.json`) that demonstrates multiple overrides:

```json
{
  "metadata": {
    "model_name": "openai/gpt-oss-20b",
    "model_type": "gpt-oss-20b",
    "track": "agentic_reasoning",
    "base_model_type": "OpenWeighted",
    "base_model_name": "openai/gpt-oss-20b",
    "dataset": "curebench_valset_phase1",
    "additional_info": "Stress test config for GPT-OSS-20B wrapper",
    "subset_size": 100
  },
  "dataset": {
    "dataset_name": "curebench_valset_phase1",
    "dataset_path": "data/curebench_valset_phase1.jsonl",
    "description": "Subset of CUREBench validation set (phase 1)"
  },
  "model_kwargs": {
    "quantization": "bf16",
    "reasoning_lvl": "high",
    "system_identity": "You are a clinical reasoning assistant.",
    "developer_instructions": "Always cite FDA drug labels when possible.",
    "builtin_tools": ["python"],
    "temperature": 1.0,
    "top_p": 1.0,
    "tools": [
      {
        "type": "function",
        "function": {
          "name": "get_weather",
          "description": "Get the weather for a location.",
          "parameters": {
            "type": "object",
            "properties": {
              "location": {"type": "string"},
              "format": {"type": "string", "enum": ["celsius", "fahrenheit"]}
            },
            "required": ["location"]
          }
        }
      }
    ]
  }
}
````

Run with:

```bash
python run.py --config configs/metadata_config_val.json
```

This shows how to:

* Use **BF16 quantization** (`quantization: "bf16"`)
* Set **reasoning level** to `high`
* Override **system identity** with a domain-specific role
* Add **developer instructions** (hidden guidance)
* Enable a built-in tool (`python`)
* Register a **custom tool schema** (`get_weather`)
* Set subset_size to 100 so it doesn't run full evaluation
---
### Sampling Parameters
Standard decoding options (not unique to GPT-OSS):  
- `temperature` = 1.0  
- `top_p` = 1.0  

Both are already included in the example config above. You can tune them like any other Hugging Face model.
---

## 7. Fine-tuning Support

GPT-OSS-20B can be fine-tuned.

After fine-tuning, simply point `--model-name` to your checkpoint:

```bash
python run.py --model-name myuser/gpt-oss-20b-curebench-ft
```

---

## 8. Features

* **Harmony compliance** → outputs include reasoning traces + function calls.
* **Advanced controls** reasoning level, system identity, developer instructions, built-in and other tools → allow fine-grained experiments on reasoning styles and grounding.
* **ready-to-go GPT-OSS-20B wrapper**.
* a **safe test script** to check both tracks.