// main.js

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js'; // Importing functions
import Transaction from './transaction.js'; // Importing the Transaction class

console.log('Initial Portfolio Value:', calculatePortfolioValue()); // Call the function to display value
console.log('Initial Portfolio Allocation:', getPortfolioAllocation()); // Call the function to display allocation

// Creating transactions in order to display the transaction details

try {
    // Create a new "buy" transaction
    console.log("\nTransaction 1: Buying 10 more AAPL stocks");
    new Transaction(1, 'buy', 10); // Asset ID 1, Buy 10 units

    // Create a new "sell" transaction
    console.log("\nTransaction 2: Selling 2 PG stocks");
    new Transaction(2, 'sell', 2); // Asset ID 2, Sell 2 units

    // Create another "sell" transaction
    console.log("\nTransaction 3: Selling 1 U.S. Treasury Bond");
    new Transaction(3, 'sell', 1); // Asset ID 3, Sell 1 unit

} catch (error) {
    console.error(error.message);
}

// Display the updated portfolio value and allocation after transactions
console.log('\nUpdated Portfolio Value:', calculatePortfolioValue());
console.log('Updated Portfolio Allocation:', getPortfolioAllocation());
