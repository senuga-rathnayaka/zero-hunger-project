let progressBarOutlineElm = document.querySelector('.progress-bar-outline')
function progressBarDisplay(){
    progressBarOutlineElm.style.display = 'block';
    
}
//step1
let progressBarElm = document.querySelector('#progress-bar')
let progressBarValueElm = document.querySelector('#progress-value')
let popup1Elm = document.querySelector('#pop-up-1')
let popup2Elm = document.querySelector('#pop-up-2')
let popup3Elm = document.querySelector('#pop-up-3')
let popup4Elm = document.querySelector('#pop-up-4')
let popup5Elm = document.querySelector('#pop-up-5')
let popup6Elm = document.querySelector('#pop-up-6')

//step 2
let popup7Elm = document.querySelector('#pop-up-7')
let popup8Elm = document.querySelector('#pop-up-8')
let popup9Elm = document.querySelector('#pop-up-9')
let popup10Elm = document.querySelector('#pop-up-10')
let popup11Elm = document.querySelector('#pop-up-11')

//step3
let popup12Elm = document.querySelector('#pop-up-12')
let popup13Elm = document.querySelector('#pop-up-13')
let popup14Elm = document.querySelector('#pop-up-14')
let popup15Elm = document.querySelector('#pop-up-15')
let popup16Elm = document.querySelector('#pop-up-16')

let final1OutputElm = document.querySelector('.final-output-1')
let final2OutputElm = document.querySelector('.final-output-2')

let step1Outhtml = '';
let step2Outhtml = '';
let step3Outhtml = '';

let step1Out = [];
let step1OutDetails = ['First Name', 'Last Name', 'Age', 'Gender','Student ID']
let step1Output = document.querySelector('#output-step1')
let firstNameElm = document.querySelector('#first-name-input')
let lastNameElm = document.querySelector('#last-name-input')
let ageElm = document.querySelector('#age-input')
let genderElm = document.querySelector('#gender-input')
let stdIDElm = document.querySelector('#std-input')

let step2Out = [];
let step2OutDetails = ['University', 'Area of Study', 'Country', 'Completion Year']
let step2Output = document.querySelector('#output-step2')
let universityElm = document.querySelector('#university-input')
let areaofStudyElm = document.querySelector('#study-area-input')
let countryElm= document.querySelector('#country-input')
let completeYrElm = document.querySelector('#completion-year-input')


let step3Out = [];
let step3OutDetails = ['Email', 'Contact Number', 'Min Hours Per week']
let step3Output = document.querySelector('#output-step3')
let emailElm = document.querySelector('#email-input')
let contactNumberElm = document.querySelector('#contact-number-input')
let minHrsElm = document.querySelector('#min-hours-input')

function nextBtnPress(amount, qnumber){
    progressBarElm.value += amount;
    progressBarValueElm.innerText = `${progressBarElm.value}%`;
    step1Display(qnumber)
}

function step1Display(qnumber){

    if (qnumber === 1){
        popup1Elm.style.display = 'none'
        popup2Elm.style.display = 'block';
        step1Out.push(firstNameElm.value);
    }
    else if (qnumber === 2){
        popup2Elm.style.display = 'none'
        popup3Elm.style.display = 'block';
        step1Out.push(lastNameElm.value)
    }
    else if (qnumber === 3){
        popup3Elm.style.display = 'none'
        popup4Elm.style.display = 'block';
        step1Out.push(ageElm.value)

    }
    else if (qnumber === 4){
        popup4Elm.style.display = 'none'
        popup5Elm.style.display = 'block';
        step1Out.push(genderElm.value)

    }
    else if (qnumber === 5){
        popup5Elm.style.display = 'none'
        popup6Elm.style.display = 'block';
        step1Out.push(stdIDElm.value)
    }
    else if (qnumber === 6){
        popup6Elm.style.display = 'none'
        popup7Elm.style.display = 'block';
        step1Output.style.display = 'none';
    }
    else if (qnumber === 7){
        popup7Elm.style.display = 'none'
        popup8Elm.style.display = 'block';
        step2Out.push(universityElm.value);
    }
    else if (qnumber === 8){
        popup8Elm.style.display = 'none'
        popup9Elm.style.display = 'block';
        step2Out.push(areaofStudyElm.value)
    }
    else if (qnumber === 9){
        popup9Elm.style.display = 'none'
        popup10Elm.style.display = 'block';
        step2Out.push(countryElm.value)
    }
    else if (qnumber === 10){
        popup10Elm.style.display = 'none'
        popup11Elm.style.display = 'block';
        step2Out.push(completeYrElm.value)
    }
    else if (qnumber === 11){
        popup11Elm.style.display = 'none'
        popup12Elm.style.display = 'block';
        step2Output.style.display = 'none';
    }
    else if (qnumber === 12){
        popup12Elm.style.display = 'none'
        popup13Elm.style.display = 'block';
        step3Out.push(emailElm.value)
    }
    else if (qnumber === 13){
        popup13Elm.style.display = 'none'
        popup14Elm.style.display = 'block';
        step3Out.push(contactNumberElm.value)
    }
    else if (qnumber === 14){
        popup14Elm.style.display = 'none'
        popup15Elm.style.display = 'block';
        step3Out.push(minHrsElm.value)
    }
    else if (qnumber === 15){
        popup15Elm.style.display = 'none';
        popup16Elm.style.display = 'block';
        let finalOutput1Html = step1Outhtml;
        let finalOutput2Html = step2Outhtml + step3Outhtml;
        final1OutputElm.innerHTML = finalOutput1Html;
        final2OutputElm.innerHTML = finalOutput2Html;
    }
    step1Outhtml = '';
    step2Outhtml = '';
    step3Outhtml = '';

    for(let i=0; i<step1Out.length; i++){
        let step1outputVal = step1Out[i];
        let step1outputDetails = step1OutDetails[i];
        let step1OutHTML = `<p>${step1outputDetails}:${step1outputVal}</p>`;
        step1Outhtml += step1OutHTML;
    }
    step1Output.innerHTML = step1Outhtml;

    for(let i=0; i<step2Out.length; i++){
        let step2outputVal = step2Out[i];
        let step2outputDetails = step2OutDetails[i];
        let step2OutHTML = `<p>${step2outputDetails}:${step2outputVal}</p>`;
        step2Outhtml += step2OutHTML;
    }
    step2Output.innerHTML = step2Outhtml;

    for(let i=0; i<step3Out.length; i++){
        let step3outputVal = step3Out[i];
        let step3outputDetails = step3OutDetails[i];
        let step3OutHTML = `<p>${step3outputDetails}:${step3outputVal}</p>`;
        step3Outhtml += step3OutHTML;
    }
    step3Output.innerHTML = step3Outhtml;

}

