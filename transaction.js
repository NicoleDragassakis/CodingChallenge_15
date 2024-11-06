// transaction.js

// Import exports
import { assetsList, getAssetById } from './asset.js';

class Transaction {
    constructor(assetId, type, quantity) { // Defining the class
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.asset = getAssetById(assetId);
        
        // Check if the asset exists
        if (!this.asset) {
            throw new Error('Asset not found');
        }

        // Process the transaction
        this.transactionMethod();
    }

    transactionMethod() {
        if (this.type === 'buy') {
            this.asset.quantity += this.quantity;
            console.log(`Bought ${this.quantity} of ${this.asset.name}. New quantity: ${this.asset.quantity}`);
        } else if (this.type === 'sell') {
            if (this.asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
            }
            this.asset.quantity -= this.quantity;
            console.log(`Sold ${this.quantity} of ${this.asset.name}. New quantity: ${this.asset.quantity}`);
        } else {
            throw new Error('Invalid transaction type. Use "buy" or "sell".');
        }
    }
}

export default Transaction;
