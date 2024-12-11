/*
|----------------------------------------
| Empty or spaces string checker
|----------------------------------------
*/
/**
 * 
 * @param {string} str
 */
export function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}





/*
|----------------------------------------
| Format Currency to
|----------------------------------------
*/
/**
 * 
 * @param {number} value
 */
export const formatToPhilPeso = (value) => {
    return new Intl.NumberFormat('en-PH', {style: 'currency', currency: 'PHP'}).format(value);
}
export const formatToUSDollar = (value) => {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value);
}

export const formatNumbersTwoDec = (value) => {
    return Number(value).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};