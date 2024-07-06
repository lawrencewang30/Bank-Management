import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID, // change '_' to '-' to get Plaid configuration after signing up
            'PLAID-SECRET': process.env.PLAID_SECRET // change '_' to '-' to get Plaid configuration after signing up
        }
    }
})

export const plaidClient = new PlaidApi(configuration);