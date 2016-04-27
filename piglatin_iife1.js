var external_iife = (function (sent_iife) {

  var internal_iife = sent_iife ? sent_iife : {};

  var codex = {
    merry: 'errymay',
    christmas: 'ristmaschay',
    and: 'anday',
    a: 'ayay',
    happy: 'appyhay',
    new: 'ewnay',
    year: 'earyay'
  };

  internal_iife.getPiglatinCodex = function () {
    return codex;
  };

  internal_iife.translateToPiglatin = function (word_array) {
    return word_array.map(function (word) {
      word = word.toLowerCase();
      return codex[word] ? codex[word] : word;
    });
  };

  return internal_iife

})(external_iife);
