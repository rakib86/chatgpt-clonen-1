const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const app = express();
const port = 3000;
app.get("/", async (req, res) => {
  

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "whats your name ?",
    temperature: 0.5,
    max_tokens: 60,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  res.send(response.data.choices[0].text);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
