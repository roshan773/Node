function Palindrome(str) {
    // Convert to lowercase for case-insensitive check
    str = str.toLowerCase();

    // Check characters from start and end moving towards the center
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

module.exports = Palindrome;