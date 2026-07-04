// AI Test Generator for Assignment
// Usage: node agent/generate-test.js <feature-file>

const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateTests(featurePath) {
  const feature = fs.readFileSync(featurePath, 'utf-8');
  const prompt = `Read this React component or feature description and generate positive, negative, boundary, and edge case tests. Only generate tests based on this code.\n\nFeature:\n${feature}`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 800,
  });

  const tests = completion.choices[0].message.content;
  const outPath = path.join(__dirname, 'generated-tests.md');
  fs.writeFileSync(outPath, tests);
  console.log('Generated tests saved to', outPath);
}

if (require.main === module) {
  const featureFile = process.argv[2];
  if (!featureFile) {
    console.error('Usage: node agent/generate-test.js <feature-file>');
    process.exit(1);
  }
  generateTests(featureFile).catch(console.error);
}
