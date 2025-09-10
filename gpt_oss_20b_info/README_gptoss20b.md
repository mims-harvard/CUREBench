## Using GPT-OSS-20B with CUREBench

We now support [OpenAI’s GPT-OSS-20B](https://huggingface.co/openai/gpt-oss-20b), a state-of-the-art open-weight reasoning model trained with the **Harmony response format**.  

This integration enables participants to explore **both competition tracks**:

- **Track 1 (Internal Reasoning):** run GPT-OSS-20B as a standalone model with chain-of-thought reasoning.  
- **Track 2 (Agentic Tool Use):** extend GPT-OSS-20B with built-in tools (e.g. `python`, `browser`), external biomedical tools from [ToolUniverse](https://github.com/mims-harvard/ToolUniverse), **or your own custom tool schemas** for agentic workflows.  

### New Capabilities

The `GPTOSS20BModel` wrapper lets participants configure GPT-OSS-20B in powerful ways:

- **`reasoning_lvl`** (`low` | `medium` | `high`) → control multi-step reasoning.  
- **`system_identity`** → override the model’s role (e.g., `"You are a clinical reasoning assistant"`). 
- **`developer_instructions`** → insert extra hidden guidance (e.g., `"Always cite FDA labeling"`).
- **`builtin_tools`** → enable tools like `"browser"` for calculations.  
- **`tools`** → pass any JSON-schema tool, including all of ToolUniverse’s ~215 biomedical tools or your own custom APIs.  

---
### About GPT-OSS-20B

GPT-OSS-20B is an **open-weight Mixture-of-Experts (MoE) transformer** released under the **Apache 2.0 license**.

- **131k context length** 
- **Tokenizer:** `o200k_harmony` (201k vocab; includes Harmony role/channel tokens).  
- **Post-training:** RL with Harmony format, variable effort reasoning, and native tool use.  

⚠️ **Instruction hierarchy:** GPT-OSS enforces: **System > Developer > User > Assistant > Tool**.  
⚠️ **Reasoning traces:** Chains of thought are not filtered and may hallucinate. Do not expose raw traces directly to end-users without moderation.  
---

### Example usage

Run evaluation with GPT-OSS-20B on CUREBench:

Example config code (`metadata_config_val.json`):

```json
{
  "metadata": {
    "model_name": "gpt-oss-20b",
    "model_type": "gpt-oss-20b",
    "track": "internal_reasoning",
    "base_model_type": "OpenWeighted",
    "base_model_name": "openai/gpt-oss-20b",
    "dataset": "curebench_valset_phase1"
  }
}
```

Run the included **sanity test script**:

Before running the tests, install `tooluniverse` (required for **Test 1**):

```bash
pip install tooluniverse
```

Run test:
```bash
python test_GPTOSS20B.py
```

Example of script output:

1. **Dry-run with ToolUniverse tools** → verifies GPT-OSS-20B can load and tokenize ToolUniverse's biomedical tools. (Model still loads into GPU, but no generation is performed.)
2. **Track 1 baseline (no tools)** → plain inference; in this example the model answers in natural language, e.g.:
   "The user asks "What is 2+2?" ... I'll produce a concise answer: 4."
3. **Track 2 with builtin tool (`python`)** → enables Python as an available tool. The model may either solve the arithmetic directly in its reasoning trace *or* issue a structured Python tool call. In this example, it solved internally and still produced the correct answer (`123 × 456 = 56088`).
4. **Track 2 with custom tool schema** → in this example it shows that GPT-OSS-20B can generate valid JSON arguments for arbitrary user-defined tools (e.g. get_weather). It outputs the function call payload, but does not execute the tool itself.

Example output (abbreviated):
```
✓ Loaded 215 ToolUniverse tools
Dry-run successful
Input IDs shape: (1, 15468)
First 20 token IDs: [200006, 17360, 200008, 3575, 553, ...]

=== Test 2: Task 1 baseline (no tools) ===
Final response: The user asks "What is 2+2?" The answer is straightforward: 4. Might also provide explanation, but they only asked the result. I'll produce a concise answer: 4.
Trace length: 1

=== Test 3: Task 2 with builtin tool 'python' ===
Final response: We just need to multiply 123 * 456. It's trivial. 123*456 = 560... let's calculate: 123*456 -> 123*400 = 49200, 123*56 = 123*50=6150, 123*6=738, total = 49200+6150+738=56088. So answer is 56088.
Trace channels: ['analysis']

=== Test 4: Task 2 with custom tool schema ===
Final response: {"location":"Tokyo","format":"celsius"}
Trace roles: [<Role.ASSISTANT: 'assistant'>, <Role.ASSISTANT: 'assistant'>]

```

⚠️ **Note:** Tests 2–4 require generation (and therefore GPUs). If you only want to confirm wiring, run the dry-run (Test 1).

**Hardware requirement:** GPT-OSS-20B runs on a single 16–24GB GPU using **MXFP4 quantization**, with BF16 activations. CPU-only inference is possible but extremely slow.

> **Note:** For a detailed, step-by-step guide (including configuration options and advanced examples), see [gpt_oss_20b_info/tutorial_gptoss20b.md](gpt_oss_20b_info/tutorial_gptoss20b.md).