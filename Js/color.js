document.querySelectorAll(".color-palette div").forEach((element) => {
    // Wire up a click listener on every color
    element.addEventListener("click", () => {
      // Unselect every other color
      document.querySelectorAll(".color-palette div").forEach((element) => {
        element.classList.remove("selected-color");
      });
      // Select clicked color
      element.classList.add("selected-color");
      // Change body background color with selected color
      document.body.style.backgroundColor = window
        .getComputedStyle(element, null)
        .getPropertyValue("background-color");
    });
  });
  