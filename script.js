const DEFAULT_SIZE = "16";
const DEFAULT_COLOUR = "black";

let grid = document.getElementById("grid");
let size = prompt("What length of square would you like?");
let blackButton = document.getElementById("black-colour");
let rainbowButton = document.getElementById("rainbow");
let shadingButton = document.getElementById("shading");
let sizeButton = document.getElementById("sizeButton");
let rubberButton = document.getElementById("rubber");
let guidelineButton = document.getElementById("guidelines");
let clearAllButton = document.getElementById("clear");

function setGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let i = 0;
  for (i; i < size * size; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("gridElement");
    gridDiv.classList.add('gridBorder');
    grid.appendChild(gridDiv);
  }
}

setGrid(size);

let gridDivs = document.querySelectorAll(".gridElement");

function changeColour() {
  gridDivs.forEach((gridDiv) =>
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.style.backgroundColor = "black";
    })
  );
}

function changeRainbow() {
  gridDivs.forEach((gridDiv) =>
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.style.backgroundColor =
        "rgb(" + [randNum(256), randNum(256), randNum(256)].join(",") + ")";
    })
  );
}

function changeShading() {
  let j = 0;
  gridDivs.forEach((gridDiv) =>
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.style.backgroundColor =
        "rgb(" + addArray(j, [255, 255, 255]).join(",") + ")";
      console.log(j);
    })
  );
  gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseleave", () => {
      j -= 1;
    });
  });
}

function toggleLines() {
  gridDivs.forEach((gridDiv) => {
    if (!gridDiv.classList.contains("gridBorder")) {
      gridDiv.classList.add("gridBorder");
    } else if (gridDiv.classList.contains("gridBorder")) {
      gridDiv.classList.remove("gridBorder");
    }
  });
}

function erase() {
  gridDivs.forEach((gridDiv) =>
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.style.backgroundColor = "white";
    })
  );
}

function eraseAllColour() {
  gridDivs.forEach((gridDiv) => {
    gridDiv.style.backgroundColor = "white";
  });
}

blackButton.addEventListener("click", () => {
  erase();
  changeColour();
});

rainbowButton.addEventListener("click", () => {
  erase();
  changeRainbow();
});

shadingButton.addEventListener("click", () => {
  erase();
  changeShading();
});

rubberButton.addEventListener("click", () => {
  erase();
});

guidelineButton.addEventListener("click", () => {
  toggleLines();
});

clearAllButton.addEventListener("click", () => {
  eraseAllColour();
});

// Helper functions

function randNum(num) {
  return Math.floor(Math.random() * num);
}

function addArray(num, ...args) {
  if (Array.isArray(args[0])) {
    let newArray = args[0];
    let i = 0;
    for (i; i < newArray.length; i++) {
      newArray[i] += (num * (256 / 10)) % 256;
    }
    return newArray;
  } else {
    return "Please enter an array!";
  }
}
