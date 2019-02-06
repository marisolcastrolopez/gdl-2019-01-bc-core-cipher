
//Función Encriptar
let crypt = () => {
	let toCipherText = document.getElementById('toCipherText').value;
	let cipherKey = parseInt(document.getElementById('cipherKey').value);
	let cipherResult = document.getElementById('cipherResult');
	let cipherPrinted = cipher.encode(toCipherText,cipherKey);
	cipherResult.value = cipherPrinted;
};
//Función Desencriptar
let decrypt = () => {
	let toCipherText = document.getElementById('toCipherText').value;
	let cipherKey = parseInt(document.getElementById('cipherKey').value);
	let cipherResult = document.getElementById('cipherResult');
	let cipherPrinted = cipher.encode(toCipherText,cipherKey);
	cipherResult = cipherPrinted;
};

document.getElementById('cipherButton').addEventListener('click',crypt);
document.getElementById('cipherButton').addEventListener('click',decrypt); //