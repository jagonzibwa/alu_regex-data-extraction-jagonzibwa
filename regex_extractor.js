function isValidHTMLTag(tag) {
    const pattern = /^<\/?[a-zA-Z][a-zA-Z0-9-]\b[^>]>$/;
    return pattern.test(tag);
}
