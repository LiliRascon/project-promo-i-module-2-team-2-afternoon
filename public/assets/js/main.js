'use strict'

const topDesign = document.querySelector('.containerDesignTop');
const bottomDesign = document.querySelector('.containerDesignBottom');
const topFill = document.querySelector('.containerFillInTop');
const bottomFill = document.querySelector('.containerFillInBottom');
const topShare = document.querySelector('.containerShareTop');
const bottomShare = document.querySelector('.containerShareBottom');

const arrowDesign = document.querySelector('.iconDirection1');
const arrowFill = document.querySelector('.iconDirection2');
const arrowShare = document.querySelector('.iconDirection3');

function toggleDesign(){
    bottomDesign.classList.toggle('action');
    bottomFill.classList.remove('action');
    bottomShare.classList.remove('action');

    arrowDesign.classList.toggle('arrow-rotate');
    arrowFill.classList.remove('arrow-rotate');
    arrowShare.classList.remove('arrow-rotate');
    
}

function toggleFill() {
    bottomFill.classList.toggle('action');
    bottomDesign.classList.remove('action');
    bottomShare.classList.remove('action');

    arrowFill.classList.toggle('arrow-rotate');
    arrowDesign.classList.remove('arrow-rotate');
    arrowShare.classList.remove('arrow-rotate');

}

function toggleShare() {
    bottomShare.classList.toggle('action');
    bottomDesign.classList.remove('action');
    bottomFill.classList.remove('action');

    arrowShare.classList.toggle('arrow-rotate');
    arrowDesign.classList.remove('arrow-rotate');
    arrowFill.classList.remove('arrow-rotate');
  
}


topDesign.addEventListener('click', toggleDesign);
topFill.addEventListener('click', toggleFill);
topShare.addEventListener('click', toggleShare);
'use strict';
// Elementos de la paleta
const paletteOne = document.querySelector('#colorOne');
const paletteTwo = document.querySelector('#colorTwo');
const paletteThree = document.querySelector('#color3');

// Elementos de la tarjeta

const titleCard = document.querySelector('#cardid');
const socialKit = document.querySelector ('.socialKit');


function previewOne (){

    titleCard.classList.add('colorPalette1');
    titleCard.classList.remove('colorPalette2');
    titleCard.classList.remove('colorPalette3');

    socialKit.classList.add ('coloricon1');
    socialKit.classList.remove ('coloricon2');
    socialKit.classList.remove ('coloricon3');

};

function previewTwo (){
    titleCard.classList.add('colorPalette2');
    titleCard.classList.remove('colorPalette1');
    titleCard.classList.remove('colorPalette3');

    socialKit.classList.add ('coloricon2');
    socialKit.classList.remove ('coloricon1');
    socialKit.classList.remove ('coloricon3');

};


function previewThree (){
    titleCard.classList.add('colorPalette3');
    titleCard.classList.remove('colorPalette1');
    titleCard.classList.remove('colorPalette2');

    socialKit.classList.add ('coloricon3');
    socialKit.classList.remove ('coloricon1');
    socialKit.classList.remove ('coloricon2');

};

console.log('hola')

paletteOne.addEventListener('click',previewOne);
paletteTwo.addEventListener('click', previewTwo);
paletteThree.addEventListener('click', previewThree);


'use strict';

const inputName = document.querySelector('#name-input');
const inputJob = document.querySelector('#job-input');
const outputName = document.querySelector('#cardname');
const outputJob = document.querySelector('#cardrole');

function printName(){
    outputName.innerHTML = inputName.value;
};

function printJob(){
    outputJob.innerHTML = inputJob.value;
};

inputName.addEventListener('keyup', printName);
inputJob.addEventListener('keyup', printJob);
'use strict'

const emailInput = document.querySelector('#email-input');
const phoneInput = document.querySelector('#phone-input');
const linkedinInput = document.querySelector('#linkedin-input');
const githubInput = document.querySelector('#github-input');

const emailIcon = document.querySelector('#btn-email');
const phoneIcon = document.querySelector('#btn-phone');
const linkedinIcon = document.querySelector('#btn-linkedin');
const githubIcon = document.querySelector('#btn-github');


function appearIconEmail (){

 emailIcon.classList.remove('hidden');
 
}

function appearIconPhone (){
    phoneIcon.classList.remove('hidden');
}

function appearIconLinkedin (){
    linkedinIcon.classList.remove('hidden');
}

function appearIconGithub (){
    githubIcon.classList.remove('hidden');
    console.log('hey')
}



emailInput.addEventListener('keyup',appearIconEmail);
phoneInput.addEventListener('keyup',appearIconPhone);
linkedinInput.addEventListener('keyup',appearIconLinkedin);
githubInput.addEventListener('keyup',appearIconGithub);
'use strict'

const input1 = document.querySelector('#name-input');
const input2 = document.querySelector('#job-input');
const input3 = document.querySelector('#email-input');


function validateFormInput(input){
   
    if(input.value === ''){
        input.classList.add('errorBorder');
        input.nextElementSibling.classList.remove('hiddenInputMessage');
        return false;
    } else{
        input.classList.remove('errorBorder');
        input.nextElementSibling.classList.add('hiddenInputMessage');
        return true;
    }
}

function buttonActivation() {

    let button = document.querySelector("#buttonValidation");
    let errorMesagge = document.querySelector("#error-message");

    let returnInput1 = validateFormInput(input1);
    let returnInput2 = validateFormInput(input2);
    let returnInput3 = validateFormInput(input3);


    if (returnInput1 === false || returnInput2 === false || returnInput3 === false) {
        button.setAttribute('disabled','disabled');
        button.classList.add('buttonDisabled');
        errorMesagge.classList.remove('hiddenMessage');
    } else {
        button.classList.remove('buttonDisabled');
        errorMesagge.classList.add('hiddenMessage');
        button.removeAttribute("disabled");
    }
}

topShare.addEventListener('click', buttonActivation);
input1.addEventListener('keyup', function(){validateFormInput(this)});
input2.addEventListener('keyup', function(){validateFormInput(this)});
input3.addEventListener('keyup', function(){validateFormInput(this)});





'use strict';

console.log('>> Ready :)');

//# sourceMappingURL=main.js.map
