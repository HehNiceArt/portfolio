import crypto from 'crypto';

const generateApiKey = () => {
    // Generate a 32-byte random string and convert it to hex
    const apiKey = crypto.randomBytes(32).toString('hex');
    console.log('Your Generated API Key:', apiKey);
    console.log('\nAdd this to your .env file as:\nAPI_KEY=', apiKey);
};

generateApiKey(); 