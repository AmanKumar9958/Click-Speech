document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.speak-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(){
            const text = button.getAttribute('data-text');
            speakText(text);
        });
    });
});

function speakText(text){
    if('speechSynthesis' in window){
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }
    else{
        alert('Your Browser Does not supprot speech');
    }
}






