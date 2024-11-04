// TASK THREE
// Import exports
import { assetsList, getAssetById } from './asset.js';
console.log('Assets List:', assetsList); //to read the list
export class Transaction {
    constructor(assetId, type, quantity) { // defining the class
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.asset = getAssetById(assetId);
        
        // Process the transaction
        this.transactionMethod();
    }

    transactionMethod() {
        if (this.type === 'buy') {
            this.asset.quantity += this.quantity;
        } else if (this.type === 'sell') {
            if (this.asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
            }
            this.asset.quantity -= this.quantity;
        }
    }
}
