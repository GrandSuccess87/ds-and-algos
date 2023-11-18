function isSubsequence(pattern, string) {

    var i = 0;
    var j = 0;

    if (!pattern) return true;

    while (j < string.length) {
        if (string[j] === pattern[i]) i++;
        if (i === pattern.length) return true;

        j++;
    }

    return false;
}

isSubsequence('hello', 'hello world');
// isSubsequence('abc', 'acb');