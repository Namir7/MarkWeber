slider1()


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
    
    const initialTranslate1 = window.innerWidth >= 1680 ? 150 :(window.innerWidth / 2 - 690);
    console.log(initialTranslate1);
    // const initialTranslate1 = 150;
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
      slider1Track.style.transition = "transform 1000ms ease-in-out";
      counter1++;
      slider1Track.style.transform = `translateX(${
        -size1 * counter1 - initialTranslate1
      }px)`;
    });
  
    prevBtn1.addEventListener("click", () => {
      if (counter1 <= 0) return;
      slider1Track.style.transition = "transform 1000ms ease-in-out";
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
  
    //  automatic switcher
    // switcher();
  
    function switcher() {
      let timerId = setInterval(() => {
        nextBtn1.click();
      }, 3000);
  
      //  stop switch when hovered
  
      for (let sliderElement of [slider1Track, prevBtn1, nextBtn1]) {
        sliderElement.addEventListener("mouseover", () => {
          setTimeout(() => {
            clearInterval(timerId);
          }, 0);
        });
      }
  
      //  continue switch when not hovered
      slider1Track.addEventListener("mouseout", () => {
        timerId = setInterval(() => {
          nextBtn1.click();
        }, 3000);
      });
    }
  }