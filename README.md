# CURE-Bench Starter Kit

[![ProjectPage](https://img.shields.io/badge/CUREBench-Page-red)](https://curebench.ai) [![ProjectPage](https://img.shields.io/badge/CUREBench-Kaggle-green)](https://www.kaggle.com/competitions/cure-bench) [![Q&A](https://img.shields.io/badge/Question-Answer-blue)](QA.md)

A simple inference framework for the CURE-Bench bio-medical AI competition. This starter kit provides an easy-to-use interface for generating submission data in CSV format.

## Updates
 2025.08.08: **[Question&Answer page](QA.md)**: We have created a Q&A page to share all our responses to questions from participants, ensuring fair competition.
 
 2025.09.10: Added starterkit code and tutorials for running **GPT-OSS-20B**, OpenAI’s 20B open-weight reasoning model.
  Now includes:
  * **Config-driven options** — control reasoning depth, system identity, developer instructions, and external/internal tools (for Track 2), directly from your config.
  * **ToolUniverse integration (Track 2)** — easily plug in ToolUniverse tools with GPT-OSS-20B. A schema conversion step is still required, but we’ve provided an example converter in `test_gptoss20b.py` to make this straightforward.
  * **Structured reasoning trace logging** — Harmony-formatted reasoning steps and final answers are automatically saved in your submissions.
  * **Subset evaluation (`--subset-size`)** — run/debug on a smaller slice of *any* dataset before full submissions (works with all models, not just GPT-OSS-20B). Example:
    ```bash
    python run.py --config metadata_config_test.json --subset-size 20
    ```
    
## Quick Start

### Installation Dependencies
```bash
pip install -r requirements.txt
```

## Baseline Setup

If you want to use the ChatGPT baseline:
1. Set up your Azure OpenAI resource
2. Configure environment variables:
```bash
export AZURE_OPENAI_API_KEY_O1="your-api-key"
export AZURE_OPENAI_ENDPOINT="https://your-resource.openai.azure.com/"
```

If you want to use the open-ended models, (e.g., Qwen, GPT-OSS-20B):
For local models, ensure you have sufficient GPU memory:
```bash
# Install CUDA-compatible PyTorch if needed
# pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
pip install transfomers
```

## 📁 Project Structure

```
├── eval_framework.py      # Main evaluation framework
├── dataset_utils.py       # Dataset loading utilities
├── run.py                 # Command-line evaluation script
├── metadata_config.json   # Example metadata configuration
├── requirements.txt       # Python dependencies
└── competition_results/   # Output directory for your results
```

## Dataset Preparation

Download the val and test dataset from the Kaggle site:
```
https://www.kaggle.com/competitions/cure-bench
```

For val set, configure datasets in your `metadata_config_val.json` file with the following structure:
```json
{
  "dataset": {
    "dataset_name": "cure_bench_pharse_1",
    "dataset_path": "/path/to/your/curebench_valset.jsonl",
    "description": "CureBench 2025 val questions"
  }
}
```

For test set, configure datasets in your `metadata_config_test.json` file with the following structure:
```json
{
  "dataset": {
    "dataset_name": "cure_bench_pharse_1",
    "dataset_path": "/path/to/your/curebench_testset.jsonl",
    "description": "CureBench 2025 test questions"
  }
}
```

## Usage Examples

### Basic Evaluation with Config File
```bash
# Run with configuration file (recommended)
python run.py --config metadata_config_test.json
```

## 🔧 Configuration

### Metadata Configuration
Create a `metadata_config_val.json` file. Below is an example:

```json
{
  "metadata": {
    "model_name": "gpt-4o-1120",
    "model_type": "ChatGPTModel",
    "track": "internal_reasoning",
    "base_model_type": "API",
    "base_model_name": "gpt-4o-1120",
    "dataset": "cure_bench_phase_1",
    "additional_info": "Zero-shot ChatGPT run",
    "average_tokens_per_question": "",
    "average_tools_per_question": "",
    "tool_category_coverage": ""
  },
  "dataset": {
    "dataset_name": "cure_bench_phase_1",
    "dataset_path": "/path/to/curebench_valset.jsonl",
    "description": "CureBench 2025 val questions"
  },
  "output_dir": "competition_results",
  "output_file": "submission.csv"
}
```

**Notes:**

* Other API models and open-weight models (e.g. Qwen) can be used in the same way
* For fine-tuned model (e.g. GPT-OSS-20B) replace `"model_name"` with your fine-tuned checkpoint, e.g.:
```json
"model_name": "myuser/gpt-oss-20b-curebench-ft"
```

### Required Metadata Fields
- `model_name`: Display name of your model
- `track`: Either "internal_reasoning" or "agentic_reasoning"
- `base_model_type`: Either "API" or "OpenWeighted"
- `base_model_name`: Name of the underlying model
- `dataset`: Name of the dataset

Note: You can leave the following fields empty for the first round of submissions:
`additional_info`,`average_tokens_per_question`, `average_tools_per_question`, and `tool_category_coverage`.
**Please ensure these fields are filled for the final submission.**


### Question Type Support
The framework handles three distinct question types:
1. **Multiple Choice**: Questions with lettered options (A, B, C, D, E)
2. **Open-ended Multiple Choice**: Open-ended questions converted to multiple choice format  
3. **Open-ended**: Free-form text answers


## Output Format

The framework generates submission files in CSV format with a zip package containing metadata. The CSV structure includes:
- `id`: Question identifier
- `prediction`: Model's answer (choice for multiple choice, text for open-ended)
- `reasoning_trace`: Model's reasoning process
- `choice`: The choice for the multi-choice questions.

The metadata structure (example):
```json
{
  "meta_data": {
    "model_name": "gpt-4o-1120",
    "track": "internal_reasoning",
    "model_type": "ChatGPTModel",
    "base_model_type": "API", 
    "base_model_name": "gpt-4o-1120",
    "dataset": "cure_bench_pharse_1",
    "additional_info": "Zero-shot ChatGPT run",
    "average_tokens_per_question": "",
    "average_tools_per_question": "",
    "tool_category_coverage": ""
  }
}
```

## Model Tutorials

* Step-by-step tutorial for running [OpenAI’s open-weight 20B model](https://huggingface.co/openai/gpt-oss-20b) on CUREBench: [tutorials/gpt-oss-20b/tutorial_gptoss20b.md](tutorials/gpt-oss-20b/tutorial_gptoss20b.md)

## Support

For issues and questions: 
1. Check the error messages (they're usually helpful!)
2. Ensure all dependencies are installed
3. Review the examples in this README
4. Open an Github Issue.

Happy competing!
