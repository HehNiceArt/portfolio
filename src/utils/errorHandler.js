const logError = (error, context) => {
    // Log sanitized error for development
    if (process.env.NODE_ENV === 'development') {
        console.error(`Error in ${context}:`, {
            message: error.message,
            type: error.name,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
    // Return user-friendly message
    return 'An error occurred. Please try again later.';
};

export default logError; 