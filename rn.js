var A = 'a'.charCodeAt(),
    Z = 'z'.charCodeAt();

function rnWord() {
    var i = Math.round(Math.random() * 6 + 4), s = '';
    for (;i--;) {
        s += String.fromCharCode((Z - A) * Math.random() + A);
    }
    return s;
}

function rnText() {
    var i = Math.round(Math.random() * 10 + 5), s = '';
    for (;i--;) {
        s += rnWord();
        i && (s += ' ');
    }
    return s;
}
