
//Función Encriptar
let cryptTab = () => {
	document.getElementById("tab2").setAttribute("class", "invisible");
	document.getElementById("tabUncrypt").setAttribute("class", "visible");
};
let decryptTab = () => {
	document.getElementById("tab1").setAttribute("class", "invisible");
	document.getElementById("tabCrypt").setAttribute("class", "visible");
};
let crypt = () => {
	let toCipherText = document.getElementById('toCipherText').value;
	let cipherKey = parseInt(document.getElementById('cipherKey').value);
	let cipherResult = document.getElementById('cipherResult');
	let cipherPrinted = cipher.encode(cipherKey,toCipherText);
	cipherResult.value = cipherPrinted;
};
//Función Desencriptar
let decrypt = () => {
	let toUnCipherText = document.getElementById('toUnCipherText').value;
	let unCipherKey = parseInt(document.getElementById('unCipherKey').value);
	let unCipherResult = document.getElementById('unCipherResult');
	let unCipherPrinted = cipher.decode(unCipherKey,toUnCipherText);
	unCipherResult.value = unCipherPrinted;
};
document.getElementById('tabUncrypt').addEventListener('click',decryptTab);
document.getElementById('tabCrypt').addEventListener('click',cryptTab);
document.getElementById('cipherButton').addEventListener('click',crypt);
document.getElementById('unCipherButton').addEventListener('click',decrypt);