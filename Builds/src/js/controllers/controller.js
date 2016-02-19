var $ = require('jquery');
var persona = require('Builds/src/js/collections/persona.js');

$('h1').html('Hola Browserify');

var carlos = new persona("Carlos", 30);
carlos.saludar();
carlos.presentar();