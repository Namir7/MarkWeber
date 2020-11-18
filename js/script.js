//slider1
const slider1Track = document.querySelector(".slider1__track");
const slider1Items = document.querySelectorAll(".slider1__item");

//  buttons
const prevBtn1 = document.querySelector("#prevBtn");
const nextBtn1 = document.querySelector("#nextBtn");

//  counter
let counter1 = 1;

const initialTranslate1 = 180;
const width1 = slider1Items[0].clientWidth;
const marginRight1 = Number.parseFloat(
  window
    .getComputedStyle(slider1Items[0], null)
    .getPropertyValue("margin-right")
);

const size1 = width1 + marginRight1;

//  initial transform
slider1Track.style.transform = `translateX(${
  -size1 * counter1 - initialTranslate1
}px)`;

//  buttons listeners
nextBtn1.addEventListener("click", () => {
  if (counter1 >= slider1Items.length - 3) return;
  slider1Track.style.transition = "transform 400ms ease-in-out";
  counter1++;
  slider1Track.style.transform = `translateX(${
    -size1 * counter1 - initialTranslate1
  }px)`;
});

prevBtn1.addEventListener("click", () => {
  if (counter1 <= 0) return;
  slider1Track.style.transition = "transform 400ms ease-in-out";
  counter1--;
  slider1Track.style.transform = `translateX(${
    -size1 * counter1 - initialTranslate1
  }px)`;
});

slider1Track.addEventListener("transitionend", () => {
  if (slider1Items[counter1].id === "lastClone") {
    slider1Track.style.transition = "none";
    counter1 = slider1Items.length - 4;
    slider1Track.style.transform = `translateX(${
      -size1 * counter1 - initialTranslate1
    }px)`;
  }
  if (slider1Items[counter1].id === "firstClone") {
    slider1Track.style.transition = "none";
    counter1 = slider1Items.length - counter1 - 2;
    slider1Track.style.transform = `translateX(${
      -size1 * counter1 - initialTranslate1
    }px)`;
  }
  console.log(`counter:${counter1}`);
});
