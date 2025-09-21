// Configuration for different environments
const config = {
  development: {
    API_BASE_URL: 'http://localhost:5000'
  },
  production: {
    // Replace with your actual backend URL after deployment
    API_BASE_URL: 'https://your-backend-url.vercel.app' // or your chosen platform
  }
};

// Auto-detect environment
const environment = window.location.hostname === 'localhost' ? 'development' : 'production';
const currentConfig = config[environment];

// Export the current configuration
window.APP_CONFIG = currentConfig;
