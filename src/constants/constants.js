// API Configuration - Using environment variables for better security
export const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8000';
export const USERS_URL = process.env.REACT_APP_USERS_URL || '/api/users';

// Dolibarr Configuration
export const DOLIBAR_URL = process.env.REACT_APP_DOLIBAR_URL || 'https://crm.krysto.nc/api/index.php';
export const DOLIBARR_API_KEY = process.env.REACT_APP_DOLIBARR_API_KEY || '';
