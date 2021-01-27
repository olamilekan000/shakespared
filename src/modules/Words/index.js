const fileReader = require('../../helpers/file-reader');
const WordSearchRequestHandler = require('./words-request-handler');

const wordSearcher = new WordSearchRequestHandler({ fileReader });

module.exports = wordSearcher;
