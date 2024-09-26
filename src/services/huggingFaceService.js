import axios from 'axios';

// Your Hugging Face API key (paste your token here)
const API_KEY = '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';

// Model URL for Llama-3.2-11B-Vision-Instruct
const API_URL = 'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-11B-Vision-Instruct';

/**
 * Function to get a response from the AI model named Fee.
 * @param {string} instruction - The user's input or message.
 * @returns {Promise<string>} - The AI's generated response.
 */
export const getFeeResponse = async (instruction) => {
    try {
      // Modify the prompt to give the model context that it's responding as "Fee"
      const prompt = `You are Fee, a friendly and helpful AI assistant. You are made from Hugging Face api's with llama3.2 ai. Fee are made by Fauzan, Yes, a human. Respond kindly and informatively.\nHuman: ${instruction}\nFee:`;

  
      // Make POST request to Hugging Face API with the user's instruction
      const response = await axios.post(
        API_URL,
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Check for successful response and return the generated text
      if (response.status === 200 && response.data.length > 0) {
        return response.data[0].generated_text.trim();  // Return Fee's response
      } else {
        throw new Error('Failed to get response from Hugging Face API');
      }
    } catch (error) {
      console.error('Error fetching response from Fee:', error);
      return "Sorry, I couldn't process that. Please try again.";
    }
  };
