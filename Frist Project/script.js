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


//?IMG API

const imgBoxes = document.querySelector('.img-boxes')
const urlAPI = 'https://picsum.photos/v2/list';

const getImg = ()=>{
    fetch(urlAPI).then(data=>data.json()).then(items=>{
        console.log(items);
        const itemsEntries = Object.entries(items);
        function randomItems(array){
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
              }
              return array;
        }
        const randomFive = randomItems(itemsEntries).slice(0, 2);
        console.log(randomFive);


        // items.forEach(function(img){
        //     const newBox = document.createElement('div');
        //     newBox.classList.add('image-box');

        //     const addImg = document.createElement('img');
        //     addImg.src = img.download_url;
        //     newBox.appendChild(addImg)
            
        //     const imgAuthor = document.createElement('h3');
        //     imgAuthor.classList.add('img-author');
        //     imgAuthor.textContent = img.author;
        //     newBox.appendChild(imgAuthor)
        //     imgBoxes.appendChild(newBox)
        // })
        randomFive.forEach(([key, value]) => {
            const newBox = document.createElement('div');
            newBox.classList.add('image-box');

            const addImg = document.createElement('img');
            addImg.src = value.download_url;
            newBox.appendChild(addImg)
            
            const imgAuthor = document.createElement('h3');
            imgAuthor.classList.add('img-author');
            imgAuthor.textContent = value.author;
            newBox.appendChild(imgAuthor)
            imgBoxes.appendChild(newBox)
          });
    });
}
getImg()

//?Loded
// window.addEventListener('load', function () {
//     const loader = document.getElementById('loader');
//     const content = document.getElementById('content');

//     setTimeout(() => {
//         loader.style.display = 'none';
//     }, 1200);
// });


//? Screen Light on off
// function highlightSection() {
//     const sections = document.querySelectorAll(".section");
//     const scrollPosition = window.scrollY;
  
//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop; 
//       const sectionHeight = section.offsetHeight;
//       if (
//         scrollPosition >= sectionTop - sectionHeight / 3 &&
//         scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
//       )
//        {
//         section.classList.add("active"); 
//       } else {
//         section.classList.remove("active"); 
//       }
//     });
//   }
  
//   window.addEventListener("scroll", highlightSection);

//   highlightSection();
  