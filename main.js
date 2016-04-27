var input = document.getElementById('input-text');
var selection = document.getElementById('language');
var output = document.getElementById('output-text');
var execute = document.getElementById('translate');

function translate () {
  var language = selection.value;
  var inputText = input.value.split(' ');
  output.innerHTML = external_iife[language](inputText).join(' ');
}

execute.addEventListener('click', translate);
