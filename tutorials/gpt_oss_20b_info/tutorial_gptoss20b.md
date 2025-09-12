# Tutorial: Using GPT-OSS-20B with CUREBench

We now support [OpenAI’s GPT-OSS-20B](https://huggingface.co/openai/gpt-oss-20b), a state-of-the-art open-weight reasoning model trained with the **Harmony response format**.  

This integration enables participants to explore **both competition tracks**:

- **Track 1 (Internal Reasoning):** run GPT-OSS-20B as a standalone model with chain-of-thought reasoning.  
- **Track 2 (Agentic Tool Use):** extend GPT-OSS-20B with built-in tools (e.g. `python`, `browser`), external biomedical tools from [ToolUniverse](https://github.com/mims-harvard/ToolUniverse), **or your own custom tool schemas** for agentic workflows.  

---
### 1. New Capabilities

The `GPTOSS20BModel` wrapper lets participants configure GPT-OSS-20B in powerful ways:

- **`reasoning_lvl`** (`low` | `medium` | `high`) → control multi-step reasoning.  
- **`system_identity`** → override the model’s role (e.g., `"You are a clinical reasoning assistant"`). 
- **`developer_instructions`** → insert extra hidden guidance (e.g., `"Always cite FDA labeling"`).
- **`builtin_tools`** → enable tools like `"browser"` for calculations.  
- **`tools`** → pass any JSON-schema tool, including all of ToolUniverse’s ~215 biomedical tools or your own custom APIs.  
---
### 2. About GPT-OSS-20B

[**GPT-OSS-20B**](https://huggingface.co/openai/gpt-oss-20b) is OpenAI’s smaller open-weight reasoning model (20.9B parameters, 3.6B active per token), and it is a Mixture-of-Experts (MoE) transformer. For full technical details, see the GPT-OSS paper (https://arxiv.org/abs/2508.10925).  

#### Key Features

- **Apache 2.0 license** → free to use, modify, deploy.  
- **MoE Transformer** → 24 layers, 32 experts, top-4 active per token.  
- **Tokenizer:** `o200k_harmony` (201k vocab, includes role/channel tokens).  
- **Powerful reasoning** → trained with reinforcement learning + Harmony format.  
- **Variable effort reasoning** → `low`, `medium`, `high` control chain-of-thought length.  
- **Agentic capabilities** → native support for browser, Python, and developer-defined tools.  
- **131k context length** with FlashAttention + YaRN.  
- **MXFP4 quantization** → runs in ~16GB VRAM with BF16 activations.  

#### Why GPT-OSS-20B matters for CUREBench

- **Biomedical strength:** On *HealthBench*, GPT-OSS-20B (high reasoning) nearly matches OpenAI o3, and outperforms GPT-4o/o1 on realistic doctor–patient dialogues/tasks. Also competitive on reasoning/coding benchmarks (AIME, MMLU, SWE-Bench) and multilingual MMMLU benchmark (~76% avg. accuracy).
- **Scalable reasoning:** Smooth test-time scaling; higher reasoning levels increase chain-of-thought length and accuracy.   

For more background on GPT-OSS and the Harmony format:
* [Introduction to GPT-OSS](https://openai.com/index/introducing-gpt-oss/) 
* [GPT-OSS (GitHub repo)](https://github.com/openai/gpt-oss) 
* [Harmony (GitHub repo)](https://github.com/openai/harmony)  
* [Harmony Cookbook guide](https://cookbook.openai.com/articles/openai-harmony)
---
## 4. Setup

Install dependencies:

```bash
pip install -r requirements.txt
pip install transformers openai-harmony safetensors bitsandbytes accelerate
```

> **Notes:**
> * `bitsandbytes` → enables 8-bit quantization so GPT-OSS-20B can run on a single 16GB GPU.
> * `accelerate` → helps with device placement and multi-GPU inference.


Set tiktoken cache for Harmony encodings  
```
# Add this line to your shell config (~/.bashrc, ~/.zshrc, or equivalent)
echo 'export TIKTOKEN_ENCODINGS_BASE=$HOME/.cache/openai_harmony' >> ~/.bashrc
source ~/.bashrc
```
---
## 5. Using New Capabilities

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
```


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
## 6. Return values

When you call `GPTOSS20BModel.inference()`, it returns:

* **Final response** → the model’s final answer (from the `"final"` channel).
* **Reasoning trace** → the full Harmony-formatted trace (commentary, chain-of-thought markers, tool calls, and final output).

> Other wrappers like `ChatGPTModel` return `(response, complete_messages)` as plain text — so in the CSV, the `reasoning` column just shows the user/assistant messages. GPT-OSS-20B instead exposes Harmony’s structured channels (`analysis`, `final`, `tool`), so you capture both the answer *and* the reasoning path.
---
## 7. Sanity Tests (Task 1 & Task 2) 
We provide `test_GPTOSS20B.py` with **four tests** that map directly to competition tracks:

### Test 1 → Dry-run with ToolUniverse
* Verifies GPT-OSS-20B can load and tokenize ToolUniverse's 215 biomedical tools. 
* Verifies Harmony schema wiring (applies tokenizer/template and loads into GPU but does not generate).  
* Example output:  

```
✓ Loaded 215 ToolUniverse tools
Dry-run successful
Input IDs shape: (1, 15468)
First 20 token IDs: [200006, 17360, 200008, 3575,...]
```

### Test 2 → Task 1 baseline (no tools)
* Plain inference without tools.  
* Demonstrates internal reasoning. (In this example model answers in natural language but also can be other final responses, e.g. multiple choice answer)
* Example output:  

```
Final response: The user asks "What is 2+2?" The answer is straightforward: 4. Might also provide explanation, but they only asked the result. I'll produce a concise answer: 4.
Trace length: 1
```

### Test 3 → Task 2 with builtin tool 

* Enables `builtin_tools=["python"]`.
* This makes the Python tool available to the model, but GPT-OSS-20B may choose either to issue a tool call **or** solve the arithmetic directly in its reasoning trace.
* Example output (here the model solved internally, directly in its reasoning trace):

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
* In this example it shows that GPT-OSS-20B can generate valid JSON arguments for arbitrary user-defined tools (e.g. get_weather).
* Model responds with a function call (schema recognition only; tool not executed).  
* Example output:  

```
Final response: {"location":"Tokyo","format":"celsius"}
Trace roles: [assistant, assistant]
````

Run all tests:

```bash
python test_GPTOSS20B.py
```

#### Testing Hardware Notes

* Tests 2–4 require GPU-backed generation. If you only want to check wiring, use Test 1 (dry-run).

---
## 8. Example Usage

All of the advanced options shown above are configurable via JSON/YAML configs as well.  

Here is a full run with GPT-OSS-20B that evaluates on CUREBench validation set, and creates submission. It is a tested example (`configs/metadata_config_val.json`) that demonstrates multiple overrides:

```json
{
  "metadata": {
    "model_name": "openai/gpt-oss-20b",
    "model_type": "gpt-oss-20b",
    "track": "agentic_reasoning",
    "base_model_type": "OpenWeighted",
    "base_model_name": "openai/gpt-oss-20b",
    "dataset": "curebench_valset_phase1",
    "additional_info": "GPT-OSS-20B run",
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

#### Standard GPT-OSS-20B Parameters:
- `temperature` = 1.0  
- `top_p` = 1.0  
---
## 9. Fine-tuning Support

GPT-OSS-20B can be fine-tuned.

After fine-tuning, simply point `--model-name` to your checkpoint:

```bash
python run.py --model-name myuser/gpt-oss-20b-curebench-ft
```

---
## 10. Important Notes

- **Tool interleaving:** Tools are not separate “modes.” GPT-OSS can **mix chain-of-thought, tool calls, and final answers in a single Harmony trace**. This means you may see `analysis → tool call → analysis → final` all in one response.
- **Instruction hierarchy:** Harmony enforces a strict priority order:  
  **System > Developer > User > Assistant > Tool**.  
  - *System* messages always take precedence (e.g., competition rules).  
  - *Developer* instructions override user prompts and are best used for hidden guardrails or domain-specific rules.  
  - *User* prompts are interpreted within those constraints.  
  - *Assistant* outputs may include both reasoning (`analysis`) and answers (`final`).  
  - *Tool* calls are lowest priority and always embedded within the reasoning trace.
- GPT-OSS models *require* the **Harmony format**. If you call `model.generate` directly without Harmony encoding, the model will not behave correctly. The wrapper provided here automatically handles Harmony encoding/decoding for you.
- **Safety note:** Reasoning traces are not filtered; they may hallucinate.  
- **Tool schemas:** ToolUniverse defines its ~215 biomedical APIs in its own JSON format.  
  Before passing them to GPT-OSS-20B, you must **convert them into OpenAI-style `"type": "function"` schemas**.  
  - See `test_GPTOSS20B.py` for a working converter example.
- **Hardware note**:
  - GPT-OSS-20B runs on a single 16–24 GB GPU using **MXFP4 quantization** (BF16 activations). GPT-OSS-20B uses MXFP4 quantization for MoE weights and BF16 for activations. Use torch_dtype=torch.bfloat16 if not quantized.
  - For full inference, an A100/H100 or equivalent is recommended.
  - CPU-only inference is possible but very slow.
  - If want to run FP16 quantization, takes about ~40–50 GB VRAM (e.g., A100, H100,or equivalent).
---
## 11. Features

* **Harmony compliance** → outputs include reasoning traces + function calls.
* **Advanced controls** reasoning level, system identity, developer instructions, built-in and other tools → allow fine-grained experiments on reasoning styles and grounding.
* **ready-to-go GPT-OSS-20B wrapper**.
* a **safe test script** to check both tracks.