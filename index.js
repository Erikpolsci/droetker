const form = document.querySelector('#form');

form.addEventListener('submit', function (event){
	event.preventDefault();
	const inputWeight = event.target.querySelector('#weight');
	const inputHeight = event.target.querySelector('#height');

	const weight = Number(inputWeight.value);
	const height = Number(inputHeight.value);

	if (!weight) {
		setResult('Invalid weight', false);
		return;
	}

	if (!height) {
		setResult('Invalid height', false);
		return;
	}

	

	const bmi = getBmi(weight, height);
	const bmiLevel = getBmiLevel(bmi);

	const showmsg = `Your BMI is: ${bmi} (${bmiLevel})`;
	const level1 = ['Underweight', 'Healthy weight','Overweight','Obese level 1','Obese level 2','Obese level 3'];


	setResult(showmsg, true, level1)

	


});

function getBmiLevel(bmi){
	const level = ['Underweight', 'Healthy weight','Overweight','Obese level 1','Obese level 2','Obese level 3']
	if (bmi >= 39.9) return level[5];
    if (bmi >= 34.9) return level[4];
    if (bmi >= 29.9) return level[3];
    if (bmi >= 24.9) return level[2];
    if (bmi >= 18.5) return level[1];
    if (bmi < 18.5) return level[0];

}

function getBmi(weight, height){
	const bmi = weight / (height * height);
	return bmi.toFixed(2);
}

function creatP(){
	const p = document.createElement('p');
	return p;
}

function setResult(showmsg, isValid, level1){
	const result = document.querySelector('#result');
	result.innerHTML = '';

	const p = creatP();

	if( showmsg.includes(level1[0])){
		p.classList.add('result-paragraph')	
	
	}else if(showmsg.includes(level1[1])){

		p.classList.add('result-paragraph')	

	}else if(showmsg.includes(level1[2])){

		p.classList.add('overweight')
	}
	
	else {

		p.classList.add('bad')
	}

	p.innerHTML = showmsg
	result.appendChild(p);
	

}