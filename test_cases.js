const {
    isValidHTMLTag,
    isValidHashtag,
    isValidAmount,
    isValidPhoneNumber,
} = require('./regexAssignment');

console.log(isValidHTMLTag('<div class="example">'));       // true
console.log(isValidHashtag("#hello123"));                   // true
console.log(isValidAmount("$1,234.56"));                    // true
console.log(isValidPhoneNumber("(123) 456-7890"));          // true