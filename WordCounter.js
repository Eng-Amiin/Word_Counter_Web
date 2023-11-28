let TextArea = document.getElementById("TextArea");
let characters = document.getElementById("characters");
let words = document.getElementById("words");
let sentences = document.getElementById("sentences");
let paragraphes = document.getElementById("paragraphes");


TextArea.addEventListener("input", () =>{
    characters.textContent = TextArea.value.length;

    let text = TextArea.value.trim();
    words.textContent = text.split(/\s+/).filter((item)=>
    item).length;


    sentences.textContent = text.split(/[.|!|?|;|:]+/g).
    length-1;

    paragraphes.textContent = text.replace(/\n$/gm, '').
    split(/\n/).length;

});





