const inputSta = document.getElementById("input-sta");
const inputEnd = document.getElementById("input-end");
const btnEl = document.querySelector("#btn");
let sum = 0;

btnEl.addEventListener('click', function(){
      for(let i = inputSta.value; i <= inputEnd.value; i++){
          if(i % 2 == 0){
              sum = sum + i;
            }
        }
        document.querySelector('#answer').textContent =  'The sum of even numbers from '+ inputSta.value + '-' + inputEnd.value + ' is ' + sum;
    });
