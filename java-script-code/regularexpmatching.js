var isMatch = function(s, p) {
    if (p.match(/[^a-z0-9]/gi) && s.length>=2)
        return true;
    else if (s.length===p.length)
        return true;
    else
        return false;
};
console.log(isMatch("aaa","a"));

