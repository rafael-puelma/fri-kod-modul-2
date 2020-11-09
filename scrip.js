// global variables som definieras utanför IIFE och sedan används med ett annat variables inuti i den
const makeListEl = document.querySelector("#btMakeList");
const customEventEl = document.querySelector("#btCostumEvent");
const nameListEl = document.querySelector(".nameList");
const headerEl = document.querySelector(".h2");

(function () {
  makeListEl.addEventListener("click", (event) => {
    event.preventDefault();
    const firstName = ["Rafael", "Roberto", "Rodrigo"];
    firstName.forEach(createNameList);

    function createNameList(firstName, index) {
      const lastName = "Puelma";

      document.querySelector(".nameList").innerHTML +=
        index + ":" + firstName + " " + lastName + "<br>";
    }
  });

  headerEl.addEventListener("changeFont", (e) => {
    headerEl.style.color = e.detail.textcolor;
    headerEl.style.fontSize = e.detail.fontSize;
  });

  nameListEl.addEventListener("changeFont", (e) => {
    nameListEl.style.color = e.detail.textcolor;
    nameListEl.style.fontSize = e.detail.fontSize;
    nameListEl.style.backgroundColor = e.detail.backgroundcolor;
  });

  customEventEl.addEventListener("click", function (event) {
    event.preventDefault();
    changeFont("20px", "pink", "green");
  });

  function changeFont(fontSize, textColor, backgroundColor) {
    let newfontEvent = new CustomEvent("changeFont", {
      detail: {
        fontSize: fontSize,
        textcolor: textColor,
        backgroundcolor: backgroundColor,
      },
    });

    nameListEl.dispatchEvent(newfontEvent);
    headerEl.dispatchEvent(newfontEvent);
  }
})();
