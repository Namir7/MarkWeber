//sliders
slider1();
slider2();
slider3();

function slider1() {
  //slider1
  const slider1Track = document.querySelector(".slider1__track");
  const slider1Items = document.querySelectorAll(".slider1__item");

  //  buttons
  const prevBtn1 = document.querySelector("#prevBtn1");
  const nextBtn1 = document.querySelector("#nextBtn1");

  //  counter
  let counter1 = 1;

  //  size
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
    slider1Track.style.transition = "transform 700ms ease-in-out";
    counter1++;
    slider1Track.style.transform = `translateX(${
      -size1 * counter1 - initialTranslate1
    }px)`;
  });

  prevBtn1.addEventListener("click", () => {
    if (counter1 <= 0) return;
    slider1Track.style.transition = "transform 700ms ease-in-out";
    counter1--;
    slider1Track.style.transform = `translateX(${
      -size1 * counter1 - initialTranslate1
    }px)`;
  });

  slider1Track.addEventListener("transitionend", () => {
    if (slider1Items[counter1].id === "lastClone1") {
      slider1Track.style.transition = "none";
      counter1 = slider1Items.length - 4;
      slider1Track.style.transform = `translateX(${
        -size1 * counter1 - initialTranslate1
      }px)`;
    }
    if (slider1Items[counter1].id === "firstClone1") {
      slider1Track.style.transition = "none";
      counter1 = slider1Items.length - counter1 - 2;
      slider1Track.style.transform = `translateX(${
        -size1 * counter1 - initialTranslate1
      }px)`;
    }
  });
}

function slider2() {
  //slider2
  const slider2Track = document.querySelector(".slider2__track");
  const slider2Items = document.querySelectorAll(".slider2__item");

  //  buttons
  const prevBtn2 = document.querySelector("#prevBtn2");
  const nextBtn2 = document.querySelector("#nextBtn2");

  //  counter
  let counter2 = 1;

  // size
  const width2 = slider2Items[0].clientWidth;
  const marginRight2 = Number.parseFloat(
    window
      .getComputedStyle(slider2Items[0], null)
      .getPropertyValue("margin-right")
  );

  const size2 = width2 + marginRight2;

  //  initial transform
  slider2Track.style.transform = `translateX(${-size2 * counter2}px)`;

  //  buttons listeners
  nextBtn2.addEventListener("click", () => {
    if (counter2 >= slider2Items.length - 1) return;
    slider2Track.style.transition = "transform 400ms ease-in-out";
    counter2++;
    slider2Track.style.transform = `translateX(${-size2 * counter2}px)`;
  });

  prevBtn2.addEventListener("click", () => {
    if (counter2 <= 0) return;
    slider2Track.style.transition = "transform 400ms ease-in-out";
    counter2--;
    slider2Track.style.transform = `translateX(${-size2 * counter2}px)`;
  });

  slider2Track.addEventListener("transitionend", () => {
    if (slider2Items[counter2].id === "lastClone2") {
      slider2Track.style.transition = "none";
      counter2 = slider2Items.length - 2;
      slider2Track.style.transform = `translateX(${-size2 * counter2}px)`;
    }
    if (slider2Items[counter2].id === "firstClone2") {
      slider2Track.style.transition = "none";
      counter2 = slider2Items.length - counter2;
      slider2Track.style.transform = `translateX(${-size2 * counter2}px)`;
    }
  });
}

function slider3() {
  //slider3
  const slider3Track = document.querySelector(".slider3__track");
  const slider3Items = document.querySelectorAll(".slider3__item");

  //  buttons
  const prevBtn3 = document.querySelector("#prevBtn3");
  const nextBtn3 = document.querySelector("#nextBtn3");

  //  counter
  let counter3 = 1;

  // size
  const width3 = slider3Items[0].clientWidth;
  const marginRight3 = Number.parseFloat(
    window
      .getComputedStyle(slider3Items[0], null)
      .getPropertyValue("margin-right")
  );

  const size3 = width3 + marginRight3;

  //  initial transform
  slider3Track.style.transform = `translateX(${-size3 * counter3}px)`;

  //  buttons listeners
  nextBtn3.addEventListener("click", () => {
    if (counter3 >= slider3Items.length - 2) return;
    slider3Track.style.transition = "transform 400ms ease-in-out";
    counter3++;
    slider3Track.style.transform = `translateX(${-size3 * counter3}px)`;
  });

  prevBtn3.addEventListener("click", () => {
    if (counter3 <= 0) return;
    slider3Track.style.transition = "transform 400ms ease-in-out";
    counter3--;
    slider3Track.style.transform = `translateX(${-size3 * counter3}px)`;
  });

  slider3Track.addEventListener("transitionend", () => {
    if (slider3Items[counter3].id === "lastClone3") {
      slider3Track.style.transition = "none";
      counter3 = slider3Items.length - 3;
      slider3Track.style.transform = `translateX(${-size3 * counter3}px)`;
    }
    if (slider3Items[counter3].id === "firstClone3") {
      slider3Track.style.transition = "none";
      counter3 = slider3Items.length - counter3 - 1;
      slider3Track.style.transform = `translateX(${-size3 * counter3}px)`;
    }
  });
}



//variety__variants

