slider1();
slider2();
slider3();

variety();

catalog();
//sliders
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
  const initialTranslate1 = 150;
  // const initialTranslate1 = 180;
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

//variety

//open and close HTML variety's section menu(HTML:line 564)
function variety() {
  const variantsForm = document.querySelector("#variantsForm");
  const hightLevelBtns = variantsForm.querySelectorAll("#hightLevelBtn");

  let active = hightLevelBtns[0];

  let openAnother = new CustomEvent("openAnother", {
    bubbles: false,
    cancelable: false,
    detail: {
      prev: undefined,
      current: hightLevelBtns[0],
    },
  });

  //  event listener for form
  variantsForm.addEventListener(
    "openAnother",
    (event) => {
      //determine initial window offset
      let windowOffset = window.pageYOffset;

      //  display and hide blicks
      event.detail.current.nextElementSibling.style.display = "block";
      event.detail.prev.nextElementSibling.style.display = "none";

      //change active, inactive attributes
      event.detail.prev.dataset.active = "inactive";
      event.detail.current.dataset.active = "active";

      //change window coordinations
      window.scroll(0, windowOffset);
    },
    false
  );

  // event listeners for buttons
  for (let hightLevelBtn of hightLevelBtns) {
    hightLevelBtn.addEventListener(
      "click",
      (eventClick) => {
        if (hightLevelBtn.dataset.active === "inactive") {
          //change next and prev elements
          openAnother.detail.prev = openAnother.detail.current;
          openAnother.detail.current = eventClick.currentTarget;

          variantsForm.dispatchEvent(openAnother);
        }
      },
      false
    );
  }
}

//catalog
function catalog() {
  //    categories constants
  const catalog = document.querySelector(".catalog");
  const categoriesBtns = catalog.querySelectorAll("#categoriesBtn");

  //    blocks constatns
  const catalogNextBtn = catalog.querySelector("#catalogNextBtn");
  const catalogPrevBtn = catalog.querySelector("#catalogPrevBtn");

  const catalogCategoriesBlocks = catalog.querySelectorAll("#categoryBlock");

  const categoryContentBlocks = catalog.querySelectorAll("#contentBlock");
  //disable
  //    TAB
  disableTAB();
  // empty categories
  disableEmpty();

  //  listeners and events
  const changeActive = new CustomEvent("changeActive", {
    detail: {
      prev: null,
      current: categoriesBtns[0],
    },
  });

  catalog.addEventListener("changeActive", (event) => {
    console.log(`catalog Listener: active category changed`);
    // smoothScroll();

    setAndRemoveActiveAttributeToIcons();

    changeCategoryContent();

    changeBlockContent();

    dispatchActiveCategoryBlockEvent();

    function smoothScroll() {
      window.scroll({
        top: 520,
        // top: 790,
        left: 0,
        behavior: "smooth",
      });
    }

    function setAndRemoveActiveAttributeToIcons() {
      event.detail.prev.removeAttribute("data-active");
      event.detail.current.setAttribute("data-active", "active");
    }

    function changeCategoryContent() {
      let previousCategoryNumber = event.detail.prev.getAttribute(
        "data-categoryNumber"
      );

      catalogCategoriesBlocks[previousCategoryNumber - 1].removeAttribute(
        "data-active"
      );

      let currentCategoryNumber = event.detail.current.getAttribute(
        "data-categoryNumber"
      );

      catalogCategoriesBlocks[currentCategoryNumber - 1].setAttribute(
        "data-active",
        "active"
      );
    }

    function changeBlockContent() {
      //  current
      let currentCategoryNumber = event.detail.current.getAttribute(
        "data-categoryNumber"
      );
      let currentBlockNumber = 1;
      let currentBlock = catalogCategoriesBlocks[
        currentCategoryNumber - 1
      ].querySelector(
        `#contentBlock[data-blockNumber='${currentBlockNumber}']`
      );

      currentBlock.setAttribute("data-active", "active");
      // previous
      let previousCategoryNumber = event.detail.prev.getAttribute(
        "data-categoryNumber"
      );
      let previousBlockNumber = changeActiveCategoryBlock.detail.currentBlock.getAttribute(
        "data-blockNumber"
      );
      let previousBlock = catalogCategoriesBlocks[
        previousCategoryNumber - 1
      ].querySelector(
        `#contentBlock[data-blockNumber='${previousBlockNumber}']`
      );

      previousBlock.removeAttribute("data-active");
    }

    function dispatchActiveCategoryBlockEvent() {
      let currentCategoryNumber = event.detail.current.getAttribute(
        "data-categoryNumber"
      );
      let currentBlock = catalogCategoriesBlocks[
        currentCategoryNumber - 1
      ].querySelector(`#contentBlock[data-blockNumber='1']`);

      changeActiveCategoryBlock.detail.currentBlock = currentBlock;
      changeActiveCategoryBlock.detail.action = null;

      catalog.dispatchEvent(changeActiveCategoryBlock);
    }
  });

  const changeActiveCategoryBlock = new CustomEvent(
    "changeActiveCategoryBlock",
    {
      detail: {
        currentBlock: categoryContentBlocks[0],
        action: null,
      },
    }
  );

  catalog.addEventListener("changeActiveCategoryBlock", (event) => {
    console.log(`catalog Listener: active block changed`);

    //    display current block
    // hide prev block

    if (event.detail.action === "next")
      event.detail.currentBlock.previousElementSibling.removeAttribute(
        "data-active"
      );

    if (event.detail.action === "prev")
      event.detail.currentBlock.nextElementSibling.removeAttribute(
        "data-active"
      );

    //    show current block
    event.detail.currentBlock.setAttribute("data-active", "active");

    //    disable
    if (
      Number.parseInt(
        event.detail.currentBlock.getAttribute("data-blockNumber")
      ) === 1
    ) {
      catalogPrevBtn.setAttribute("disabled", "disabled");
    } else {
      catalogPrevBtn.removeAttribute("disabled");
    }
    if (
      Number.parseInt(
        event.detail.currentBlock.getAttribute("data-blockNumber")
      ) === 3
    ) {
      catalogNextBtn.setAttribute("disabled", "disabled");
    } else {
      catalogNextBtn.removeAttribute("disabled");
    }
    //  catalog content
  });

  //        buttons listeners

  Array.from(categoriesBtns).forEach((categoriesBtn) => {
    //when focus
    categoriesBtn.addEventListener("focus", (event) => {
      changeActive.detail.prev = changeActive.detail.current;
      changeActive.detail.current = event.target;

      catalog.dispatchEvent(changeActive);
    });
  });

  catalogNextBtn.addEventListener("click", (event) => {
    changeActiveCategoryBlock.detail.action = "next";
    changeActiveCategoryBlock.detail.currentBlock =
      changeActiveCategoryBlock.detail.currentBlock.nextElementSibling;

    catalog.dispatchEvent(changeActiveCategoryBlock);
    // console.log(changeActiveCategoryBlock.detail.currentBlock);
  });

  catalogPrevBtn.addEventListener("click", (event) => {
    changeActiveCategoryBlock.detail.action = "prev";
    changeActiveCategoryBlock.detail.currentBlock =
      changeActiveCategoryBlock.detail.currentBlock.previousElementSibling;

    catalog.dispatchEvent(changeActiveCategoryBlock);
    // console.log(changeActiveCategoryBlock.detail.currentBlock);
  });

  //initial changes
  document.addEventListener("DOMContentLoaded", () => {
    categoriesBtns[0].focus();
  });

  //    functions
  //      disables TAB for unessessary elements
  function disableTAB() {
    const disableTABKeydownElements = document.querySelectorAll(
      "button:not(#categoriesBtn), a, select, input"
    );

    Array.from(disableTABKeydownElements).forEach(
      (disableTABKeydownElement) => {
        disableTABKeydownElement.setAttribute("tabindex", -1);
      }
    );
  }

  function disableEmpty() {
    Array.from(categoriesBtns).forEach((categoriesBtn, categoriesBtnIndex) => {
      let categoryElement = catalog.querySelector(
        `#categoryBlock[data-categoryNumber='${categoriesBtnIndex + 1}']`
      );
      if (categoryElement.children.length === 0)
        categoriesBtn.setAttribute("disabled", "disabled");
      console.log(categoriesBtn);
    });
  }
}
