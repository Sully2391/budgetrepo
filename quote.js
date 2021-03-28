const quoteBtn = document.querySelector('#quotegen');

quoteBtn.addEventListener('click', getQuote);

const url = "https://api.quotable.io/random";

function getQuote(){
    fetch(url)
    .then(function(data){
        return data.json();
    })
    .then(function(data){
        document.getElementById("view-quote").innerHTML = data.content; document.querySelector("#author").innerHTML = "- " + data.author;
    })
    .catch(function(err){
        console.log(err);
    });
}