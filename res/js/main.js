const cube = document.getElementById("cube");
const cube2 = document.getElementById("cube2");
let gameInterval;
cube.onclick = () => {
  const audio = new Audio("./res/audio/song.mp3");
  audio.play();
  changeColor(cube, 255, 6, 6, 0.418);
  changeColor(cube2, 255, 6, 6);
  setNumber(cube2, 1);
  setCookieClicker(cube2);
  setNumber(cube2, 1);
  startGameInterval();
};

const changeColor = (element, red, green, blue) => {
  element.style.backgroundColor = `rgb(${255} ,${255},${255}, 0.5)`;
};

const setNumber = (element, number) => {
  element.innerHTML = number;
};

let timeStart = 0;
const setCookieClicker = (element) => {
  element.onclick = () => {
    element.innerText++;
    moveElement(
      cube2,
      getRandomnumber(200, window.innerWidth),
      getRandomnumber(200, window.innerHeightHeight)
    );
    let customSize = getRandomnumber(10, 100);
    setSize(element, customSize, customSize);
    if (timeStart == 0) {
      timeStart = performance.now();
    } else {
      let timeEnd = performance.now();
      let result = timeEnd - timeStart;
      cube.innerHTML = `${result}ms`;
      timeStart = performance.now();
    }
  };
};

const moveElement = (element, x, y) => {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
};

const getRandomnumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const setSize = (element, width, height) => {
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
};

const startGameInterval = () => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(
      cube2,
      getRandomnumber(0, window.innerWidth),
      getRandomnumber(0, window.innerHeight)
    );
    let customSize = getRandomnumber(20, 100);
    setSize(cube2, customSize, customSize);
  }, 1000);
};
