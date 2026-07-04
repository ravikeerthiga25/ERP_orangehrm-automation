# AI Test Generator

This tool reads a feature/component file and uses OpenAI to generate test cases.

## Usage

1. Set your OpenAI API key in the environment:
   export OPENAI_API_KEY=your-key
2. Run:
   node agent/generate-test.js <feature-file>

Generated tests will be saved to agent/generated-tests.md.
