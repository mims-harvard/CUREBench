#!/usr/bin/env python3
"""
Bio-Medical AI Competition - Evaluation Script

Simple evaluation script that supports metadata configuration
via command line arguments and configuration files.

Usage:
    # Basic usage
    python run.py                                      # Run with defaults
    
    # With metadata via config file
    python run.py --config metadata_config.json
"""

import os
from eval_framework import CompetitionKit, load_and_merge_config, create_metadata_parser


def main():
    # Create argument parser with metadata support
    parser = create_metadata_parser()
    
    args = parser.parse_args()
    
    # Load configuration from config file if provided and merge with args
    args = load_and_merge_config(args)
    
    # Extract values dynamically with fallback defaults
    output_file = getattr(args, 'output_file', "submission.csv") 
    dataset_name = getattr(args, 'dataset')
    model_name = getattr(args, 'model_path', None) or getattr(args, 'model_name', None)
    model_class = getattr(args, 'model_class', 'auto')
    
    """Run evaluation with metadata support"""
    print("\n" + "="*60)
    print("🏥 CURE-Bench Competition - Evaluation")
    print("="*60)
    
    # Initialize the competition kit
    config_path = getattr(args, 'config', None)
    # Use metadata_config.json as default if no config is specified
    if not config_path:
        default_config = "metadata_config.json"
        if os.path.exists(default_config):
            config_path = default_config
    
    kit = CompetitionKit(config_path=config_path)
    
    print(f"Loading model: {model_name}")
    kit.load_model(model_name, model_class)
    
    # Show available datasets
    print("Available datasets:")
    kit.list_datasets()
    
    # Run evaluation (with optional subset_size)
    subset_size = getattr(args, 'subset_size', None)
    print(f"Running evaluation on dataset: {dataset_name} (subset-size={subset_size})")
    results = kit.evaluate(dataset_name, subset_size=subset_size)
    
    # Generate submission with metadata from config/args
    print("Generating submission with metadata...")
    submission_path = kit.save_submission_with_metadata(
        results=[results],
        filename=output_file,
        config_path=getattr(args, 'config', None),
        args=args
    )
    
    print(f"\n✅ Evaluation completed successfully!")
    print(f"📊 Accuracy: {results.accuracy:.2%} ({results.correct_predictions}/{results.total_examples})")
    print(f"📄 Submission saved to: {submission_path}")
    
    # Show metadata summary if verbose
    final_metadata = kit.get_metadata(getattr(args, 'config', None), args)
    print("\n📋 Final metadata:")
    for key, value in final_metadata.items():
        print(f"  {key}: {value}")
            


if __name__ == "__main__":
    main()
