function displayPoem(response) {
    console.log("poem generator");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay:55,
        cursor: "",

    });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "cd1d8fd1e2ab70a45dfof94bfcfd8t34";
    let prompt =`User instructions: Generate a poem about ${instructionsInput.value}`;
    let context ="Following the user instructions, please create a short poem.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


    console.log("generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
   

    axios.get(apiUrl).then(displayPoem).catch(error => {
        console.error("Error fetching poem:", error);
    });

 
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);