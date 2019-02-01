window.cipher = {
  cipher.encode(cipherKey, plainText) {
	
  }
  cipher.decode(offset, string){

  }
};
/*Ciphering working with one letter*/
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

/*JUST TESTS
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
