import axios from 'axios';

// Your Hugging Face API key (paste your token here)
const API_KEY = 'hG';

// Model URL for Llama-3.2-11B-Vision-Instruct
const API_URL = 'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-11B-Vision-Instruct';

// Your biodata
const biodata = {
  name: "Fauzan",
  age: 17,
  profession: "Software Developer",
  hobbies: ["coding", "gaming", "basketball"],
  education: "Studied in Smkn 65 Jakarta Vacational High School",
  achievements: ["Created AI Assistant 'Fee'", "Published AI research paper on NLP"],
  city: "Jakarta",
  country: "Indonesia",
};

/**
 * Function to get a response from the AI model named Fee, including biodata context.
 * @param {string} instruction - The user's input or message.
 * @returns {Promise<string>} - The AI's generated response.
 */
export const getFeeResponse = async (instruction) => {
    try {
      // Include biodata in the prompt so the AI knows about you
      const prompt = `
      You are Fee, a friendly and helpful AI assistant. You are made from Hugging Face APIs with the Llama 3.2 model.
      You have been created by Fauzan. Here is some information about Fauzan:
      
      - Name: ${biodata.name}
      - Age: ${biodata.age}
      - Profession: ${biodata.profession}
      - Hobbies: ${biodata.hobbies.join(", ")}
      - Education: ${biodata.education}
      - Achievements: ${biodata.achievements.join(", ")}
      - City: ${biodata.city}, ${biodata.country}

      Respond kindly and informatively, and feel free to use this information to answer any questions about Fauzan.
      Human: ${instruction}
      Fee:`;
  
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
