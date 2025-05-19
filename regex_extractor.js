function isValidHTMLTag(tag) {
    const pattern = /^<\/?[a-zA-Z][a-zA-Z0-9-]\b[^>]>$/;
    return pattern.test(tag);
}

function isValidHashtag(hashtag) {
    const pattern = /^#[a-zA-Z0-9]+$/;
    return pattern.test(hashtag);
}

function isValidAmount(amount) {
    const pattern = /^\$\d{1,3}(,\d{3})*\.\d{2}$/;
    return pattern.test(amount);
}

function isValidPhoneNumber(phone) {
    const pattern = /^(\(?\d{3}\)?)[-. ](\d{3})[-.](\d{4})$/;
    return pattern.test(phone);
}

module.exports = {
    isValidHTMLTag,
    isValidHashtag,
    isValidAmount,
    isValidPhoneNumber,
};