var _ = require('underscore');

var pinyin = require("pinyin");

var dict = {
    a:'21',
    b:'22',
    c:'23',
    d:'31',
    e:'32',
    f:'33',
    g:'41',
    h:'42',
    i:'43',
    j:'51',
    k:'52',
    l:'53',
    m:'61',
    n:'62',
    o:'63',
    p:'71',
    q:'72',
    r:'73',
    s:'74',
    t:'81',
    u:'82',
    v:'83',
    w:'91',
    x:'92',
    y:'93',
    z:'94'
};

var word = process.argv.slice(2);

var py = pinyin(word[0], {style: pinyin.STYLE_NORMAL});

var pinyin1 = _.map(_.reduce(_.flatten(py), function(a,b){return a.concat(b)}), function (a) {return dict[a]});

console.log(pinyin1.join(''));
