/*
*
* Well Formed Json
* Subsume JSON
*
*/

//Antes
JSON.stringify('\uD800');
// '"�"'

// Agora
JSON.stringify('\uD800');
// '"\\ud800"'

// A string containing a raw U+2028 character.
const LineSeparator = ' ';
// → ES2018: SyntaxError
// → ES2019: no exception

// A string containing a raw U+2029 character, produced by `eval`:
const ParagraphSeparator = eval('"\u2029"');
// → ES2018: SyntaxError
// → ES2019: no exception