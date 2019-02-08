//The user choose an action to start
let selectTab = () => {
	const button1 = document.querySelector('#tabCrypt');
	const button2 = document.querySelector('#tabUncrypt');
	
	button1.onclick = function() {
	document.getElementById("tab1").className = "visible";
    document.getElementById("tab2").className = "invisible";
    button1.className = "activated";
    button2.className = "deactivated";
  };
	button2.onclick = function() {
    document.getElementById("tab1").className = "invisible";
    document.getElementById("tab2").className = "visible";
    button1.className = "deactivated";
    button2.className = "activated";
  };
};
//Encode Function
let crypt = () => {
	let toCipherText = document.getElementById('toCipherText').value;
	let cipherKey = parseInt(document.getElementById('cipherKey').value);
	let cipherResult = document.getElementById('cipherResult');
	let cipherPrinted = cipher.encode(cipherKey,toCipherText);
	cipherResult.value = cipherPrinted;
};
//Decode Function
let decrypt = () => {
	let toUnCipherText = document.getElementById('toUnCipherText').value;
	let unCipherKey = parseInt(document.getElementById('unCipherKey').value);
	let unCipherResult = document.getElementById('unCipherResult');
	let unCipherPrinted = cipher.decode(unCipherKey,toUnCipherText);
	unCipherResult.value = unCipherPrinted;
};
document.getElementById('tabCrypt').addEventListener('click',selectTab);
document.getElementById('tabUncrypt').addEventListener('click',selectTab);
document.getElementById('cipherButton').addEventListener('click',crypt);
document.getElementById('unCipherButton').addEventListener('click',decrypt);