var quote=[`“Be yourself; everyone else is already taken.”`, `“A room without books is like a body without a soul.”` , 
`“Be the change that you wish to see in the world.”` , `“A friend is someone who knows all about you and still loves you.”` ,
`“Live as if you were to die tomorrow. Learn as if you were to live forever.”` , `“Without music, life would be a mistake.”` ,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`, `“So many books, so little time.”`,
`“In three words I can sum up everything I've learned about life: it goes on.”` , `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”` ]
var author=[`― Oscar Wilde`,`― Marcus Tullius Cicero` , `― Mahatma Gandhi`, `― Elbert Hubbard` , `― Mahatma Gandhi` , `― Friedrich Nietzsche` ,
`― Albert Einstein` , `― Frank Zappa`, `― Robert Frost`, `― Maya Angelou` ]


console.log(quote.length);


function getQuote(){
    
var random= Math.floor(Math.random() * quote.length);
console.log(random);

document.getElementById('quote').innerHTML= quote[random]
document.getElementById('author').innerHTML= author[random]
}

