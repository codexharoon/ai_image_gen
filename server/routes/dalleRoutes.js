import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const client = new OpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey: process.env.NEBIUS_API_KEY,
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await client.images.generate({
      "model": "black-forest-labs/flux-schnell",
      "response_format": "b64_json",
      "extra_body": {
          "response_extension": "webp",
          "width": 1024,
          "height": 1024,
          "num_inference_steps": 4,
          "negative_prompt": "",
          "seed": -1
      },
      "prompt": prompt,
  })


    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data || 'Internal server error');
  }
});

export default router;
