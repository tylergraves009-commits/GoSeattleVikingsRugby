function askQuestion() {
    var p = prompt('The answer to life the universe and everything')
    if( p != null){
        document.getElementById('question').innerHTML = 'you said ! ' + p + ' The answer is 42'
        
    }
}  