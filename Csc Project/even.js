const inputSta = document.getElementById("input-sta");
const inputEnd = document.getElementById("input-end");
const btnEl = document.querySelector("#btn");
let sum = 0;
let arr = [];

btnEl.addEventListener('click', function(){
      for(let i = parseInt(inputSta.value); i <= parseInt(inputEnd.value); i++){
          if(i % 2 == 0){
              arr.push(i);
              sum = sum + i;
            }
        }
        document.querySelector("#length").textContent = "The number of even numbers in this range is "+ arr.length
        document.querySelector('#answer').textContent =  'The sum of even numbers from '+ inputSta.value + '-' + inputEnd.value + ' is ' + sum;
    });
