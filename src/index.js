let textToEncode = () => {
	let cipherKey = 2;
	let plainText= 'A';
	let txtNum = plainText.charCodeAt();
	let txtNumEncoded = (txtNum - 65 + cipherKey) % 26 + 65;
	let encodedLetter = String.fromCharCode(txtNumEncoded);


};