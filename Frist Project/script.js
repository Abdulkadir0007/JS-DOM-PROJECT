'use strict'
//?Frist Style

const matchColor = document.querySelector('.match-color')
const liColor = document.querySelector('.mtcl h2')
const allLi = document.querySelectorAll('.list-li li')

// const red = document.querySelector('.mtcl .red');
//  red.addEventListener('click',function(){
//      matchColor.style.backgroundColor = '#FF0000';
//      liColor.style.backgroundColor = '#ff0000'
//      liColor.style.boxShadow = '0 7px 2rem #ff0000'
//  });

// const defaul = document.querySelector('.mtcl .default');
// defaul.addEventListener('click',function(){
//      matchColor.style.backgroundColor = '#EC6059';
//      liColor.style.backgroundColor = '#EC6059'
//      liColor.style.boxShadow = '0 7px 2rem #EC6059'
//  });

// const yellow = document.querySelector('.mtcl .yellow');
// yellow.addEventListener('click',function(){
//      matchColor.style.backgroundColor = '#FFFF00';
//      liColor.style.backgroundColor = '#FFFF00'
//      liColor.style.boxShadow = '0 7px 2rem #FFFF00'
//  });

allLi.forEach(function(value){
    value.addEventListener('click',function(){
        let className = this.classList[0];
        let color = '';
        if (className === 'default') {
            color = '#EC6059'
        }
        else if (className === 'red') {
            color = '#FF0000'
        }
        else if (className === 'yellow') {
            color = '#FFFF00'
        }
        else if (className === 'purple') {
            color = '#800080'
        }
        else if (className === 'green') {
            color = '#008000'
        }
        else if (className === 'navvy') {
            color = '#0A1172'
        }
        let shadow = '0 7px 2rem '+ color;
        matchColor.style.backgroundColor = color;
        liColor.style.backgroundColor = color;
        liColor.style.boxShadow = shadow;
    })
})

//? BMI
const wRange = document.getElementById('wight')
const shWeight = document.getElementById('showweight')
const wHange = document.getElementById('height')
const shHeight = document.getElementById('showheight')

wRange.addEventListener('input', function () {
    shWeight.value = wRange.value;
});
wHange.addEventListener('input', function () {
    shHeight.value = wHange.value;
});

const bmiSub = document.getElementById('cl-button');
bmiSub.addEventListener('click', function () {
    const bmiWeight = shWeight.value; 
    const bmiHeight = shHeight.value; 
    
    const weight = Number(bmiWeight)
    const height = Number(bmiHeight / 100)

    const bmi =  weight / ( height ** 2)
    const rejult = bmi.toFixed(2);

    document.querySelector('p.show-bmi').innerHTML = rejult;
    let bani = '';

    if(rejult < 18.6){
        bani = 'Your BMI is low. You are underweight. You need to gain weight.'
    }
    else if(18.5 <= rejult  && rejult < 24.9){
        bani = 'Your BMI is normal. Your weight is normal. Keep your weight.'
    }
    else if(25 <= rejult  && rejult < 29.9){
        bani = 'Your BMI is high. You are overweight. Lose your weight'
    }
    else if(rejult > 30 ){
        bani = 'Your BMI is too high. you are Obese'
    }
    document.querySelector('p.bani').innerText = bani
});


// window.addEventListener('load', function () {
//     const loader = document.getElementById('loader');
//     const content = document.getElementById('content');

//     setTimeout(() => {
//         loader.style.display = 'none';
//     }, 2000);
// });
