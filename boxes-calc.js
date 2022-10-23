const form = document.querySelector('#form');

form.addEventListener('submit', function (event){
	event.preventDefault();
	const inputPph = event.target.querySelector('#pph');
	const inputPhl = event.target.querySelector('#phl');
	const inputBpp = event.target.querySelector('#bpp');


	const pph = Number(inputPph.value);
	const phl = Number(inputPhl.value);
	const bpp = Number(inputBpp.value);


	if (!pph) {
		setResult('Invalid value', false);
		return;
	}

	if (!phl) {
		setResult('Invalid value', false);
		return;
	}


    if (!bpp) {
		setResult('Invalid value', false);
		return;
	}

	

	const boxes = getBoxes(pph,bpp,phl);
    

	const showmsg = `Pallets of Boxes Needed: ${boxes}`;


	setResult(showmsg, true)

	


});


function getBoxes(pph,bpp,phl){
	const boxes = (pph * phl) / bpp; 
    console.log(boxes);
	return boxes.toFixed(2);
   
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