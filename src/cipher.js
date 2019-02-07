window.cipher = {
  encode: function(string,offset) {
    var result = [];
    for (var i = 0; i < string.length; i++) { //Función cifrar CORRECTO
      var c = string.charCodeAt(i);
      if (65 <= c && c <=  90) { //Letras Mayúsculas
        result = result + String.fromCharCode((c - 65 + offset) % 26 + 65);
      }
      else if (97 <= c && c <= 122) { //Letras Minúsculas CORRECTO
        result = result + String.fromCharCode((c - 97 + offset) % 26 + 97);
      }
    }
    return result;
  }, //Separar cosas del window no borrar coma

  decode: function(string,offset) {
    var result = [];
    for (var i = 0; i < string.length; i++) { //Función descifrar
      var c = string.charCodeAt(i);
      if (65 <= c && c <=  90) { //Letras Mayúsculas
        result = result + String.fromCharCode((c + 65 - offset) % 26 + 65);
      }
      else if (97 <= c && c <= 122) { //Letras Minúsculas
        result = result + String.fromCharCode((c + 59 - offset) % 26 + 97);
      }
    }
    return result;
  }
};

/*ENCODING with map
var map = Array.prototype.map;
var valores = map.call('ABCabc', function(char) { return char.charCodeAt(0) + 2 ;}); console.log(valores);
var newArr = [];
for(var i = 0; i < valores.length; i++) {
  var elements = String.fromCharCode(valores[i]); console.log(elements);
  document.write(elements);
};

var map = Array.prototype.map;
var valores = map.call('ABCabc', function(char) { return char.charCodeAt(0) - 2 ;}); console.log(valores);
var newArr = [];
for(var i = 0; i < valores.length; i++) {
  var elements = String.fromCharCode(valores[i]); console.log(elements);
  document.write(elements);
};
/*ENCODING with map end*/

/*BEGINING: Descifrado ya funciona con mayúsculas y 5 FEB 2019
var string = 'ABC';
var offset = 2;
var result = [];

for (var i = 0; i < string.length; i++) { //Función cifrar CORRECTO
  var c = string.charCodeAt(i);
  if (65 <= c && c <=  90) { //Letras Mayúsculas
  result = result + String.fromCharCode((c - 65 + offset) % 26 + 65);
  }
  else if (97 <= c && c <= 122) { //Letras Minúsculas CORRECTO
  result = result + String.fromCharCode((c - 97 + offset) % 26 + 97);
  };
};

for (var i = 0; i < string.length; i++) { //Función descifrar
  var c = string.charCodeAt(i);
  if (65 <= c && c <=  90) { //Letras Mayúsculas
  result = result + String.fromCharCode((c + 65 - offset) % 26 + 65);
  }
  else if (97 <= c && c <= 122) { //Letras Minúsculas
  result = result + String.fromCharCode((c + 97 - offset) % 26 + 97);
  };
};

/*ENDS: Cifrado con letras mayúsculas y minúsculas 5 FEB 2019*/
/*BEGINING: Descifrado ya funciona 5 FEB 2019
var string = 'ABC';
var offset = 2;
var result = [];

for (var i = 0; i < string.length; i++) { //Función cifrar
  var c = string.charCodeAt(i);
  if (65 <= c && c <=  90) { //Letras Mayúsculas
  result = result + String.fromCharCode((c - 65 + offset) % 26 + 65);
  }
  else if (97 <= c && c <=  122) { //Letras Minúsculas
  result = result + String.fromCharCode((c - 97 + offset) % 26 + 97);
  };
};

for (var i = 0; i < string.length; i++) { //Función descifrar
  var c = string.charCodeAt(i);
  console.log(c);
  if (65 <= c && c <=  90) { //Letras Mayúsculas
  result = result + String.fromCharCode((c + 65 - offset) % 26 + 65);
  console.log(result);
  }
  else if (97 <= c && c <=  122) { //Letras Minúsculas
  console.log('Hi');
  };
};

/*ENDS: Descifrado ya funciona 5 FEB 2019*/
/*BEGINING: Intento de usar todos los rangos ASCII 5 FEB 2019
var string = 'ABC';
var string = 'ABCabc!"#$%&';
var offset = 2;
var result = [];

for (var i = 0; i < string.length; i++) { //Función cifrar
  var c = string.charCodeAt(i);
  if (32 <= c && c <= 126) { //Rango ASCII
  result = result + String.fromCharCode((c - 32 + offset) % 95 + 32);
  }
};

for (var i = 0; i < string.length; i++) { //Función descifrar
  var c = string.charCodeAt(i);
  console.log(c);
  if (65 <= c && c <=  90) { //Letras Mayúsculas
  result = result + String.fromCharCode((c - 65 - offset) % 26 + 65);
  console.log(result);
  }
  else if (97 <= c && c <=  122) { //Letras Minúsculas
  console.log('Hi');
  };
};

/*ENDS:Intento de usar todos los rangos ASCII 5 FEB 2019*/

/*BEGINING: Cifrado con letras mayúsculas y minúsculas 5 FEB 2019
var string = 'ABC';
var offset = 2;
var result = [];

for (var i = 0; i < string.length; i++) { //Función cifrar
  var c = string.charCodeAt(i);
  if (65 <= c && c <=  90) { //Letras Mayúsculas
  result = result + String.fromCharCode((c - 65 + offset) % 26 + 65);
  }
  else if (97 <= c && c <=  122) { //Letras Minúsculas
  result = result + String.fromCharCode((c - 97 + offset) % 26 + 97);
  };
};

for (var i = 0; i < string.length; i++) { //Función descifrar
  var c = string.charCodeAt(i);
  console.log(c);
  if (65 <= c && c <=  90) { //Letras Mayúsculas
  result = result + String.fromCharCode((c - 65 - offset) % 26 + 65);
  console.log(result);
  }
  else if (97 <= c && c <=  122) { //Letras Minúsculas
  console.log('Hi');
  };
};

/*ENDS: Cifrado con letras mayúsculas y minúsculas 5 FEB 2019*/

/*BEGINING: Cifrado con letras separadas 1 FEB 2019
var normalText = 'ABC';
var cipherKey = 2;
var result = [];

for (var i = 0; i < normalText.length; i++) {
	var c = normalText.charCodeAt(i);
	console.log(c);
  if (65 <= c && c <=  90) {
  result = result + String.fromCharCode((c - 65 + cipherKey) % 26 + 65);
  console.log(String.fromCharCode((c - 65 + cipherKey) % 26 + 65));
  }
  else {
  console.log('Hi');
	};
};
/*ENDS: Cifrado con letras separadas 1 FEB 2019*/

/*TESTS

let array = phrase.split('');
let normalText = 'ABC';
let cipherKey = '2';
let newArr = normalText.split('');
let result = [];

for (var i = 0; i < normalText.length; i++) {
	
  let c = newArr.charCodeAt(i);

  if (65 <= c && c <=  90) {
  let cipheredText += String.fromCharCode((c - 65 + cipherKey) % 26 + 65);
  result.push(String.fromCharCode(cipheredText));
  }
  const output = cipheredText.join('');
  return output;
  console.log(output);
  else {
  console.log('Hi');
  };
};

var normalText = 'ABC';
var cipherKey = '2';
var result = [];

for (var i = 0; i < nArr.length; i++) {
	var c = nArr.charCodeAt(i);
  if (65 <= c && c <=  90) {
  result = String.fromCharCode((c - 65 + cipherKey) % 26 + 65);
  }
  else {
  console.log('Hi');
	};
};

var normalText = 'A';
var cipherKey = '2';
var result = [];

for (var i = 0; i < normalText.length; i++) {
	var c = normalText.charCodeAt(i);
	console.log(c);
  if (65 <= c && c <=  90) {
  result = result + String.fromCharCode((c - 65 + cipherKey) % 26 + 65);
  console.log(String.fromCharCode((c - 65 + cipherKey) % 26 + 65));
  }
  else {
  console.log('Hi');
	};
};

var normalText = 'A';
var cipherKey = '2';
for (var i = 0; i < normalText.length; i++) {
	var c = normalText.charCodeAt(i);
	var result = [];
  if (65 <= c && c <=  90) {
  result = result + String.fromCharCode((c - 65 + cipherKey) % 26 + 65);
  }
  else {
  console.log('Hi');
	};
};

var normalText = 'ABC';
var cipherKey = '2'
for (var i = 0; i < normalText.length; i++) {
	var c = normalText.charCodeAt(i);
	var result = []
  if (65 <= c && c <=  90) {
  result = result + String.fromCharCode((c - 65 + cipherKey) % 26 + 65);
  }
  else {
  console.log('Hi');
	};
};

/*Ciphering working with one letter
var normalText = 'A';
var cipherKey = '2'
for (var i = 0; i < normalText.length; i++) {
	var c = normalText.charCodeAt(i);
	var result = []
  if (65 <= c && c <=  90) {
  result += String.fromCharCode((c - 65 + cipherKey) % 26 + 65);
  }
  else {
  console.log('Hi');
	};
};
};*/

/*
let text = 'ABCDEFG'

let cipherKey = 2;
var plainText= '';
let plainTextSplitted = plainText.split('');
let txtNum = plainTextSplitted.charCodeAt(plainText++);
let txtNumEncoded = (txtNum - 65 + cipherKey) % 26 + 65;
let encodedLetter = String.fromCharCode(txtNumEncoded);


let plainText= 'ABCDEFG';
let plainTextSplitted = plainText.split('');


 let cipherKey = 2;
		let plainText= 'ABC';
		let txtNum = plainText.charCodeAt();
		let txtNumEncoded = (txtNum - 65 + cipherKey) % 26 + 65;
		let encodedLetter = String.fromCharCode(txtNumEncoded);*/
