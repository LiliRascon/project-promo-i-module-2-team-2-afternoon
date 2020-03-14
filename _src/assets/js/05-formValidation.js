'use strict'

// restauredColorInput(event) {
//     event.curretTargetclassList.remove('errorBorder');

// }

function validateFormInput(inputKey){
    let input = document.querySelector(inputKey);
   
    if(input.value === ''){
        input.classList.add('errorBorder');
        input.nextElementSibling.classList.remove('hiddenInputMessage');
        // input('keyup',restauredColorInput());
        return false;
    } else{
        return true;
    }
}


function buttonActivation() {

    let button = document.querySelector("#buttonValidation");
    let errorMesagge = document.querySelector("#error-message");

    let returnInput1 = validateFormInput('#name-input');
    let returnInput2 = validateFormInput('#job-input');
    let returnInput3 = validateFormInput('.search');
    let returnInput4 = validateFormInput('#email-input');


    if (returnInput1 === false || returnInput2 === false 
    || returnInput3 === false || returnInput4 === false) {

        button.setAttribute('disabled','disabled');
        button.classList.add('buttonDisabled');
        errorMesagge.classList.remove('hiddenMessage');
    }
    else {
        button.classList.remove('buttonDisabled');
        errorMesagge.classList.add('hiddenMessage');
        button.removeAttribute("disabled");
        
    }
}


topShare.addEventListener('click', buttonActivation);

