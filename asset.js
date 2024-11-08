// asset.js

// Listed Assets
export const assetsList = [
    { id: 1, name: 'AAPL', type: 'Stock', price: 175, quantity: 5 },
    { id: 2, name: 'PG', type: 'Stock', price: 150, quantity: 4 },
    { id: 3, name: 'U.S. Treasury Bond', type: 'Bond', price: 1000, quantity: 1 },
];

// Function to get asset by ID
export function getAssetById(id) {
    return assetsList.find(asset => asset.id === id);
}
