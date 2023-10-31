// /*
// // {} - scope
// function fce() {
//     console.log("Ahoj svete");
// }

// // () => - arrow funkce
// const fce2= () => {
//     console.log("Ahoj svete")
// }

// //               item - parametr
// function konsel(item){
//     console.log(`Prinesl jsem ${item} `)
// }


// //                item - parametr
// const konsel2 = (item, item2) => {
//     console.log(`Prinesl jsem ${item} a ${item2}`)
// }
// //              argument
// konsel("piti")
// //              argument
// konsel("urbana")
// //              argument2
// konsel2("zidle", "bobika")
// //              argument2
// konsel2("jidlo", "piti")

// */

// // function sum(a, b) {
// //     console.log(a + b)
// // }

// // let resultOne = sum(6,4);
// // let resultTwo = sum(10, 4);

// // console.log(resultOne+ resultTwo)
// // sum(6, 4)
// // sum(10, 4)
// // sum(2, 4)
// // sum(5, 4)
// // sum(5, 4)
// // sum(8, 4)
// // sum(6, 4)
// // sum(7, 4)
// // sum(3, 4)

// let numberOne = 5;
// let numberTwo = 8;

// let numberThree = 6;
// let numberFour = 7;

// function sumF(a, b){
//     return a + b
// }

// const sum = (a,b) => a + b;
// //  {
// //     // console.log(a + b);
// //     return a + b;
// // }

// let resultOne = sum( numberOne,numberTwo);
// let resultTwo = sum(numberThree, numberFour);
// console.log (sum(resultOne, resultTwo));

// let name = "Ondra"
// let age = 18;

// const getSentence = (person, age) => `Tvoje jméno je ${person} a je ti ${age}  let`

// let sentence = getSentence(name, age);
// console.log(sentence);

const cube = document.getElementById("cube");

cube.onclick = () =>{
        changeColor(cube, 242, 152, 32);        
        changeColor(cube2, 242, 152, 32);
        setNumber(cube2, 5);
        setCookieClicker(cube2);
        setNumber(cube2, 5);
};

const changeColor = (element, red, green, blue) => {
    element.style.backgroundColor = `rgb(${red} ,${green},${blue})`;
}

const setNumber = (element, number) => {
    element.innerHTML = number;
};

const setCookieClicker = (element) => {
    element.onclick = () => {
        element.innerText++;
        moveElement(cube2, getRandomnumber(200, 600), getRandomnumber(200,600));
            let customSize = getRandomnumber(20,100);
            setSize(element, customSize, customSize);
            if (timeNow == 0){
                timeStart = performance.now();
            }else{
                let timrEnd = performance.now();
                let result = timeEnd - timeStart;
                cube.innerHTML = `${result}ms`;
                timeStart = performance.now()
            }
      }
}

const moveElement = (element, x, y) =>{
    element.style.top = `${y}px`
    element.style.left = `${x}px`
}

const getRandomnumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1))+ minimum;

const setSize = (element, width, height) => {
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
}

let gameInterval = setInterval(() =>{
    moveElement(cube2, getRandomnumber(200, 600), getRandomnumber(200,600));
            let customSize = getRandomnumber(20,100);
            setSize(element, customSize, customSize);
}, 500)