let btn = document.getElementById("search-btn");
btn.onclick = async function() {
    let title = document.getElementById("word-title");
    let phonetic = document.getElementById("phonetic");
    let meaning = document.getElementById("definition");
    let examples = document.getElementById("example");
    let card = document.getElementById("word-card");
    let error = document.getElementById("error");
    let input = document.getElementById("word-input").value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    if (input === "") {
        error.style.display = "block";
        error.textContent = "Please enter a word!";
        return;
    }
    try {
        let response = await fetch(url);
        let data = await response.json();
        let def1 = data[0].meanings[0].definitions[0].definition;
        let def2 = data[0].meanings[0].definitions[1]?.definition || "";
        let def3 = data[0].meanings[0].definitions[2]?.definition || "";
        card.style.display = "block";
        title.innerHTML = data[0].word;
        phonetic.innerHTML = data[0].phonetics[0].text;
        meaning.innerHTML = def1 + "<br>" + def2 + "<br>" + def3;
        let ex1 = data[0].meanings[0].definitions[0].example || "";
        examples.innerHTML = ex1;

    } catch (e) {
        error.textContent = "Something went wrong. Try again!";
    }

}