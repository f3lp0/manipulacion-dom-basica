// Clase 13 cálculo mediante escucha de eventos

const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn1 = document.querySelector('#btnCalcular1');
const pResult1 = document.querySelector('#result1');

const form1 = document.querySelector('#form1');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const btn2 = document.querySelector('#btnCalcular2');
const pResult2 = document.querySelector('#result2');

const form2 = document.querySelector('#form2');
const input5 = document.querySelector('#calculo5');
const input6 = document.querySelector('#calculo6');
const btn3 = document.querySelector('#btnCalcular3');
const pResult3 = document.querySelector('#result3');

// Escuchador de eventos
// NOTA: la función btnOnClick no lleva paréntesis:
btn1.addEventListener('click',btn1OnClick);
form1.addEventListener('submit',btn2OnClick);
btn3.addEventListener('click',btn3OnClick);

function btn1OnClick() {
    const sumaInputs = input1.value + input2.value;
    console.log(sumaInputs);
    pResult1.innerText = "Resultado: " + sumaInputs;
}

function btn2OnClick(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input3.value + input4.value;
    console.log(sumaInputs);
    pResult2.innerText = "Resultado: " + sumaInputs;
}

function btn3OnClick() {
    const sumaInputs = input5.value + input6.value;
    console.log(sumaInputs);
    pResult3.innerText = "Resultado: " + sumaInputs;
}