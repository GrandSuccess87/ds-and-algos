function isBalanced(s) {

    // TRIM STRING
    // CHECK TO SEE IF STRING IS AN EVEN LENGTH

    s = s.trim();

    if (s.length % 2 !== 0) {
        return 'NO';
    }

    // LOOP THROUGH STRING

    let count = s.length;

    while (count > 0 && s.length > 0) {
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        count--; 
    }

    // RETURN RESULT

    return (s.length == 0) ? 'YES' : 'NO';

}

isBalanced("{(([])[])[]}[]");