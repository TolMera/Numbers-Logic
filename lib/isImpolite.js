const isPolite = require('./isPolite');

function isImpolite(n) {
    return !isPolite(n);
};

module.exports = isImpolite;
