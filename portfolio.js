//TASK TWO

// Import exports
import { assetsList, getAssetsById } from './asset.js';

console.log('Assets List:', assetsList);
console.log('Asset with ID 1:', getAssetsById(1));

export const calculatePortfolioValue(){
    return assetsList.reduce((total,asset)=> total + asset.price * asset.quantity, 0); //Sums the total value of the portfolio
}

export const getPortfolioAllocation(){
    const totalAssetsValue = calculatePortfolioValue(); //gets the total Value
    return assetsList.map(asset => {
        const assetValue = asset.price * asset.quantity;
        const allocationPercentage = totalAssetsValue ? (assetValue / totalAssetsValue) * 100 : 0;
        return {
            name: asset.name,
            type: asset.type,
            value: assetValue,
            allocationPercentage: allocationPercentage.toFixed(2) + '%'
        };
    });
};
