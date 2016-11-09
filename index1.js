var _ = require('underscore');

var pinyin = require("pinyin");

var dict = {
    '21':'a',
    '22':'b',
    '23':'c',
    '31':'d',
    '32':'e',
    '33':'f',
    '41':'g',
    '42':'h',
    '43':'i',
    '51':'j',
    '52':'k',
    '53':'l',
    '61':'m',
    '62':'n',
    '63':'o',
    '71':'P',
    '72':'q',
    '73':'r',
    '74':'s',
    '81':'t',
    '82':'u',
    '83':'v',
    '91':'w',
    '92':'x',
    '93':'y',
    '94':'z'
};

var para = process.argv.slice(2);

var num = para[0];

var keys = _.map(num.match(/(.{1,2})/g),function (a) {return dict[a];}).join('');

console.log(num);
console.log(keys);
