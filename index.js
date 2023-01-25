//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
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
const configuration = new Configuration({
  organization: "org-GsJPqHX5Y8ruNxqW5ZNMMA4Z",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  //completion in documentation
  const { message } = req.body;
  console.log(message);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
  });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listining at http://localhost:${port}`);
});
