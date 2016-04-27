var external_iife = (function (sent_iife) {

  var internal_iife = sent_iife ? sent_iife : {}; // if sent_iife exists, use it, otherwise use an empty object

  var codex = {
    merry: 'fr&ouml;lich',
    christmas: 'Weinacht',
    and: 'und',
    a: 'ein',
    happy: 'gl&uuml;cklich',
    new: 'neu',
    year: 'Jahr'
  };

  internal_iife.getGermanCodex = function () {
    return codex;
  };

  internal_iife.translateToGerman = function (word_array) {
    return word_array.map(function (word) {
      word = word.toLowerCase();
      return codex[word] ? codex[word] : word; // if codex[word] exists, use it, otherwise just use word
    });
  };

  return internal_iife

})(external_iife);
