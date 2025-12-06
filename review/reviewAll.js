const s = "shaashwatt";

function string(s) {
    let start = 0;
    let maxStart = 0;
    let maxLen = 0;
    const set = new Set();

    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])) {
            set.delete(s[start]);
            start++;
        }

        set.add(s[end]);

        if (end - start + 1 > maxLen) {
           maxLen = end - start + 1;
            maxStart = start;
        }
    }

    const substring = s.slice(maxStart, maxStart + maxLen);
    console.log("Substring:", substring);
    console.log(maxLen);

    return substring;
}

string(s);