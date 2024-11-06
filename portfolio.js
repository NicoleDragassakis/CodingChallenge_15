// portfolio.js

// Import exports
import { assetsList, getAssetById } from './asset.js';  // Fixed the import name

console.log('Assets List:', assetsList);
console.log('Asset with ID 1:', getAssetById(1));

export function calculatePortfolioValue() {
    return assetsList.reduce((total, asset) => total + (asset.price * asset.quantity), 0); // Sums the total value of the portfolio
}

export function getPortfolioAllocation() {
    const totalAssetsValue = calculatePortfolioValue(); // Gets the total Value
    return assetsList.map(asset => {
        const assetValue = asset.price * asset.quantity;
        const allocationPercentage = totalAssetsValue ? (assetValue / totalAssetsValue) * 100 : 0;
        return {
            name: asset.name,
            type: asset.type,
            value: assetValue,
            allocationPercentage: allocationPercentage.toFixed(2) + '%',
        };
    });
}
