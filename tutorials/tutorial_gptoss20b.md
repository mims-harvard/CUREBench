# Tutorial: Running GPT-OSS-20B on CUREBench

This tutorial explains how to use [OpenAI’s open-weight `gpt-oss-20b`](https://huggingface.co/openai/gpt-oss-20b) with the CUREBench starter kit.

---

## Why GPT-OSS-20B?


- Optimized for **reasoning** (trained with Harmony format). Access to model's reasoning process, facilitating simpler debugging and output trust.
- 📖 **Open-weight + Apache 2.0 license** (able to fine-tune and build freely).
- Strong performance on **health-related benchmarks** strong results on *HealthBench*, surpassing GPT-4o/o1 and approaching o3 on real doctor–patient tasks.
- Runs on 16-24 GB GPUs with MXFP4 quantization. 

---

## 1. Install Dependencies

Make sure you have the starter kit installed:

```bash
pip install -r requirements.txt
pip install transformers bitsandbytes accelerate

> **Notes:**
>
> * `bitsandbytes` → enables 8-bit quantization so GPT-OSS-20B can run on a single 16GB GPU.
> * `accelerate` → helps with device placement and multi-GPU inference.

````
```
---

## 2. Configure Dataset

Here’s an example `metadata_config_val.json` for running GPT-OSS-20B zero-shot:

```json
{
  "metadata": {
    "model_name": "openai/gpt-oss-20b",
    "model_type": "LocalModel",
    "track": "internal_reasoning",
    "base_model_type": "OpenWeighted",
    "base_model_name": "openai/gpt-oss-20b",
    "dataset": "cure_bench_phase_1",
    "additional_info": "Zero-shot GPT-OSS-20B run",
    "average_tokens_per_question": "",
    "average_tools_per_question": "",
    "tool_category_coverage": ""
  },
  "dataset": {
    "dataset_name": "cure_bench_phase_1",
    "dataset_path": "data/curebench_valset_phase1.jsonl",
    "description": "CureBench 2025 validation questions"
  },
  "output_dir": "competition_results",
  "output_file": "submission_val.csv"
}
```

---

## 3. Run Zero-Shot Evaluation

Run the evaluation with:

```bash
python run.py --config metadata_config_val.json
```

This will:

* Load GPT-OSS-20B via Hugging Face.
* Evaluate it on the CUREBench validation set.
* Save predictions and reasoning traces to `competition_results/submission_val.csv`.

---

## 4. Hardware Requirements

* MXFP4 quantization: 16–24 GB GPU.
* FP16: \~40–50 GB VRAM (e.g., A100, H100, MI300).
* 8-bit quantization: runs on 16–24 GB GPUs (`bitsandbytes`).
* CPU: possible, but very slow.

---

## 5. Fine-Tuned Usage (Optional)

If you fine-tune GPT-OSS-20B, simply change the model name:

```json
"model_name": "myuser/gpt-oss-20b-curebench-ft"
```

No wrapper changes or code modifications are required: the framework will load your checkpoint automatically.