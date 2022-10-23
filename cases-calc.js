const form = document.querySelector('#form');

form.addEventListener('submit', function (event){
	event.preventDefault();
	const inputPph = event.target.querySelector('#pph');
	const inputPhl = event.target.querySelector('#phl');
    const inputBpc = event.target.querySelector('#bpc');
	const inputCpp = event.target.querySelector('#cpp');


	const pph = Number(inputPph.value);
	const phl = Number(inputPhl.value);
    const bpc = Number(inputBpc.value);
	const cpp = Number(inputCpp.value);


	if (!pph) {
		setResult('Invalid value', false);
		return;
	}

	if (!phl) {
		setResult('Invalid value', false);
		return;
	}

    if (!bpc) {
		setResult('Invalid value', false);
		return;
	}

    if (!cpp) {
		setResult('Invalid value', false);
		return;
	}

	

	const cases = getCases(pph, bpc,cpp,phl);
    

	const showmsg = `Pallets of Cases Needed: ${cases}`;


	setResult(showmsg, true)

	


});


function getCases(pph, bpc,cpp,phl){
	const cases = (pph / bpc) / cpp * phl; 
    console.log(cases);
	return cases.toFixed(2);
   
}

function creatP(){
	const p = document.createElement('p');
	return p;
}

function setResult(showmsg, isValid){
	const result = document.querySelector('#result');
	result.innerHTML = '';

	const p = creatP();
    p.classList.add('result')// 	

	p.innerHTML = showmsg
	result.appendChild(p);
	

}