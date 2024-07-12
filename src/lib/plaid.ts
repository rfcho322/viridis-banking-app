import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

// INITIALIZE THE CONFIGURATION FOR THE Plaid CLIENT
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox, // USE THE APPROPRIATE ENVIRONMENT
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID, // Plaid CLIENT ID
      "PLAID-SECRET": process.env.PLAID_SECRET, // Plaid SECRET
    },
  },
});

// CREATE A NEW INSTANCE OF THE PlaidApi WITH THE CONFIGURATION
export const plaidClient = new PlaidApi(configuration);
