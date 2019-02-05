window.cipher = {
  cipher.encode(offset, string) {
	
  }
  cipher.decode(offset, string){

  }
};


/*BEGINING: Cifrado con letras mayúsculas y minúsculas 5 FEB 2019*/
var string = 'ABC';
var offset = 2;
var result = [];

for (var i = 0; i < string.length; i++) {
  var c = string.charCodeAt(i);
  if (65 <= c && c <=  90) { //Letras Mayúsculas
  result = result + String.fromCharCode((c - 65 + offset) % 26 + 65);
  }
  else if (97 <= c && c <=  122) { //Letras Minúsculas
  result = result + String.fromCharCode((c - 97 + offset) % 26 + 97);
  };
};
/*ENDS: Cifrado con letras mayúsculas y minúsculas 5 FEB 2019*/

/*BEGINING: Cifrado con letras separadas 1 FEB 2019*/
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
