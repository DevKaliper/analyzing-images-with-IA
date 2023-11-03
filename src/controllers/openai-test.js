import axios from "axios";

const generateImage = async () => {

  const prompt = 'A painting of a cat sitting on a chair.';
  const responseFormat = 'url';

  const url = `https://api.openai.com/v1/images/generations`;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_OPEN_IA}`
  };

  const data = {
    'prompt': prompt,
    'response_format': responseFormat
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log(response.data.data[0].url);
  } catch (error) {
    console.error(error);
  }
};

export default generateImage;
