function generatePoem(event) {
    event.preventDefault();

    new TypeWriter("poem", {
        strings: "",
        autostart: true,
        delay: 1,
        cursor: "",

    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatepoem);