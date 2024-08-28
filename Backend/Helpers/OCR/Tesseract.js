const tesseract = require('tesseract.js');

// Function to extract text from an image using tesseract.js
const extractTextFromImage = async (filePath) => {
    try {
        // Use tesseract to recognize text in the image
        const { data: { text } } = await tesseract.recognize(filePath, 'eng', {
            logger: m => console.log(m) // Log progress (optional)
        });

        return text; // Return the extracted text
    } catch (error) {
        console.error('Error extracting text from image:', error);
        throw error; // Propagate the error to handle it in the calling function
    }
};

module.exports = { extractTextFromImage }
