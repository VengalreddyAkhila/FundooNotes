//*********************color-pallet***********************

document.querySelectorAll(".color-palette div").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelectorAll(".color-palette div").forEach((element) => {
      element.classList.remove("selected-color");
    });
    element.classList.add("selected-color");
    document.getElementById("note-section").style.backgroundColor = globalThis
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");

    element.classList.add("selected-color");
    document.getElementById("user-note").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");

    element.classList.add("selected-color");
    document.getElementById("note-close").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");

    document.getElementById("toggle").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");

    document.getElementById("archive-button").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");

    document.getElementById("btn-colors").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");

    document.getElementById("Button1").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color");

    document.getElementById("popup").style.backgroundColor = window
      .getComputedStyle(element, null)
      .getPropertyValue("background-color"); 

   
  });
});
