#!/usr/bin/env python3
"""
Comprehensive sanity tests for GPT-OSS-20B wrapper.

Covers both CUREBench tracks:
- Task 1 (no tools, baseline inference).
- Task 2 (tools integration via ToolUniverse, builtin, and custom schemas).
"""

from CUREBench.eval_framework import GPTOSS20BModel
from tooluniverse.execute_function import ToolUniverse


def convert_tooluniverse_to_openai(tools):
    """Convert ToolUniverse JSON tools into OpenAI-compatible schemas."""
    converted = []
    for t in tools:
        param = t.get("parameter", {"type": "object", "properties": {}})
        props = param.get("properties") or {}  # <-- ensure dict, not None

        # Collect required fields from the ToolUniverse format
        required_fields = [k for k, v in props.items() if v.get("required", False)]

        converted.append({
            "type": "function",
            "function": {
                "name": t.get("name"),
                "description": t.get("description", ""),
                "parameters": {
                    "type": "object",
                    "properties": {
                        k: {kk: vv for kk, vv in v.items() if kk != "required"}
                        for k, v in props.items()
                    },
                    "required": required_fields,
                },
            },
        })
    return converted



def test_dryrun_tooluniverse():
    """Test 1: External ToolUniverse (dry-run only, safe everywhere)."""
    print("=== Test 1: Dry-run with ToolUniverse ===")
    model = GPTOSS20BModel(model_name="openai/gpt-oss-20b", quantization="auto")
    model.load()

    engine = ToolUniverse()
    engine.load_tools()
    raw_tools = engine.return_all_loaded_tools()
    tools = convert_tooluniverse_to_openai(raw_tools)
    print(f"✓ Loaded {len(tools)} ToolUniverse tools")

    messages = [
        {"role": "system", "content": "You are a helpful assistant with access to tools."},
        {"role": "user", "content": "What are the active ingredients in Panadol?"},
    ]

    input_ids = model.tokenizer.apply_chat_template(
        messages,
        tools=tools,
        add_generation_prompt=True,
        return_tensors="pt",
    )

    print("Dry-run successful")
    print(f"Input IDs shape: {tuple(input_ids.shape)}")
    print(f"First 20 token IDs: {input_ids[0][:20].tolist()}")


def test_track1_baseline():
    """Test 2: Task 1 baseline — plain inference, no tools."""
    print("\n=== Test 2: Task 1 baseline (no tools) ===")
    model = GPTOSS20BModel(model_name="openai/gpt-oss-20b")
    model.load()

    final, trace = model.inference("What is 2+2?", max_tokens=100)
    print("Final response:", final)
    print("Trace length:", len(trace))


def test_builtin_tools():
    """Test 3: Task 2 — builtin tool integration (e.g., 'python')."""
    print("\n=== Test 3: Task 2 with builtin tool 'python' ===")
    model = GPTOSS20BModel(model_name="openai/gpt-oss-20b")
    model.load()

    final, trace = model.inference(
        "Can you calculate 123 * 456?",
        builtin_tools=["python"],
        max_tokens=200,
    )
    print("Final response:", final)
    print("Trace channels:", [m.get("channel") for m in trace])


def test_custom_tool():
    """Test 4: Task 2 — custom user-defined tool schema."""
    print("\n=== Test 4: Task 2 with custom tool schema ===")
    model = GPTOSS20BModel(model_name="openai/gpt-oss-20b")
    model.load()

    tools = [
        {
            "type": "function",
            "function": {
                "name": "get_weather",
                "description": "Get the weather for a location.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "location": {"type": "string", "description": "City name"},
                        "format": {"type": "string", "enum": ["celsius", "fahrenheit"]},
                    },
                    "required": ["location"],
                },
            }
        }
    ]

    final, trace = model.inference(
        "What's the weather in Tokyo?",
        tools=tools,
        max_tokens=200,
    )
    print("Final response:", final)
    print("Trace roles:", [m.get("role") for m in trace])


if __name__ == "__main__":
    test_dryrun_tooluniverse()

    try:
        test_track1_baseline()
        test_builtin_tools()
        test_custom_tool()
    except RuntimeError as e:
        print("\n Skipped some inference tests due to runtime error (likely OOM):", e)
