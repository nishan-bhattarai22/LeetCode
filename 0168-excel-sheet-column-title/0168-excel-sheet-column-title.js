/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = [];
    
    while (columnNumber > 0) {
        // Shift to 0-indexed (A=0, B=1, ..., Z=25)
        columnNumber--;
        
        let remainder = columnNumber % 26;
        // 65 is the ASCII code for 'A'
        result.unshift(String.fromCharCode(remainder + 65));
        
        // Move to the next "digit" position
        columnNumber = Math.floor(columnNumber / 26);
    }
    
    return result.join('');
};