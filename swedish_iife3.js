var external_iife = (function (sent_iife) {

  var internal_iife = sent_iife ? sent_iife : {};

  var codex = {
    merry:'god',
    christmas:'jul',
    and:'och',
    a: 'en',
    happy:'gott',
    new:'nytt',
    year:'&aring;r'
  };

  internal_iife.getSwedishCodex = function () {
    return codex;
  };

  internal_iife.translateToSwedish = function (word_array) {
    return word_array.map(function (word) {
      word = word.toLowerCase();
      return codex[word] ? codex[word] : word;
    });
  };

  return internal_iife

})(external_iife);
