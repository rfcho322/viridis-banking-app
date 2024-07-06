import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

// Initialize the configuration for the Plaid client
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox, // Use the appropriate environment
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID, // Plaid Client ID
      "PLAID-SECRET": process.env.PLAID_SECRET, // Plaid Secret
    },
  },
});

// Create a new instance of the PlaidApi with the configuration
export const plaidClient = new PlaidApi(configuration);
