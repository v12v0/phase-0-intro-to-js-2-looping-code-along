
const names = ["Guadalupe", "Ollie", "Aki"]
const events = ["Surprise"]

function writeCards(names, events){
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }
    return messages;
}


function countDown(positiveNumber){
    while (positiveNumber >= 0) {
        positiveNumber--;
        console.log(positiveNumber);
            
    }
}