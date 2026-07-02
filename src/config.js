// src/config.js
// Configuration for the application

// Provide a fallback value for NEXTAUTH_SECRET to avoid CI failures when the environment variable is not set.
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || 'dev-secret';

// Export configuration values
module.exports = {
  NEXTAUTH_SECRET,
};