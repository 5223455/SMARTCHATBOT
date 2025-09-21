// Configuration for different environments
const config = {
  development: {
    API_BASE_URL: 'http://localhost:5000'
  },
  production: {
    // For Vercel deployment, API routes are under /api
    API_BASE_URL: '/api'
  }
};

// Auto-detect environment
const environment = window.location.hostname === 'localhost' ? 'development' : 'production';
const currentConfig = config[environment];

// Export the current configuration
window.APP_CONFIG = currentConfig;
