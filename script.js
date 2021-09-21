const texts = document.querySelector('.texts');
const text = document.querySelector('.text')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "RU-ru"; 

let p = document.createElement('p');
recognition.lang = "En-en";
recognition.addEventListener('result', (e) => {

    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);
    console.log(texts)
    if(e.results[0].isFinal){
            if(text.includes()) {
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = "Opening kun.uz";
                texts.appendChild(p)
                window.open('https://yandex.uz/search/?lr=10335&text=${text.value}')
            }else if(text.includes("учебный центр")){
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = "Opening najottalim.uz";
                texts.appendChild(p)
                window.open('https://najottalim.uz')
            }else if(text.includes("красный")){
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = "body background-color red";
                section.style.backgroundColor = "red";
            }else if(text.includes("зелёный")){
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = "body background-color green";
                section.style.backgroundColor = "green";
            }else if(text.includes("жёлтый")){
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = "body background-color gold";
                section.style.backgroundColor = "gold";
            }else if(text.includes("синий")){
                p = document.createElement('p');
                p.classList.add('replay');
                p.innerText = "body background-color blue";
                section.style.backgroundColor = "blue";
            }
    }

    console.log(e);
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})

form.addEventListener('click',function(e) {
    e.preventDefault()

    recognition.start();
})
