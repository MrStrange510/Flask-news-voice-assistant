// const texts = document.getElementById['#innercontaint'] //error
const texts = document.querySelector('.texts')

window.SpeechRecognition = window.SpeechRecognition ||window.webkitSpeechRecognition;

const recognition  = new window.SpeechRecognition();
recognition.interimResults = true;

function readOut(message){
const speech = new SpeechSynthesisUtterance();
const voices = window.speechSynthesis.getVoices();
speech.text = message;
speech.volume = 1;
// speech.voice = voices.filter(function(voice) { return voice.name == 'Microsoft David - English (United States)'; })[0];
speech.voice = voices[4];
window.speechSynthesis.speak(speech);
console.log(speech);
}

let p = document.createElement('p');

recognition.addEventListener('result',(e) =>{
    const text = Array.from(e.results)
    .map(results => results[0])
    .map(results => results.transcript)
    .join('');

    p.innerText = text;
    p.classList.add('inputs');
    texts.appendChild(p);
    scrollToBottom()
    // document.getElementById("innercontaint").appendChild(p);//alternative

    if(e.results[0].isFinal){
        //user input commands and there reply's
        if(text.includes('Hi') || text.includes('hi')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Hello There';
            readOut(p.innerText);
            texts.appendChild(p);
            scrollToBottom()
        }
        if(text.includes('Hello') || text.includes('hello')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Hi';
            readOut(p.innerText);
            texts.appendChild(p);
            scrollToBottom()
        }
        if(text.includes('How are you?') || text.includes('how are you?')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'I am fine, how do you do';
            readOut(p.innerText);
            texts.appendChild(p);
            scrollToBottom()
        }
        if(text.includes('Zara') || text.includes('zara')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Hi, how can i help you?';
            readOut(p.innerText);
            texts.appendChild(p);
            scrollToBottom()
        }
        if(text.includes('sports news') || text.includes('Sports News')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Here are the top sports news';
            readOut(p.innerText);
            texts.appendChild(p);
            window.open('http://127.0.0.1:8000' + '/sports','_self');
            scrollToBottom()
        }
        p = document.createElement('p');
    }

    console.log(text);
    // console.log($SCRIPT_ROOT);
})

recognition.addEventListener('end',() =>{
    recognition.start();
})

recognition.start();    

function scrollToBottom(){
    texts.scrollTop = texts.scrollHeight;
}



