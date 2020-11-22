catalog()


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
    });
  
    catalogPrevBtn.addEventListener("click", (event) => {
      changeActiveCategoryBlock.detail.action = "prev";
      changeActiveCategoryBlock.detail.currentBlock =
        changeActiveCategoryBlock.detail.currentBlock.previousElementSibling;
  
      catalog.dispatchEvent(changeActiveCategoryBlock);
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
      });
    }
  }