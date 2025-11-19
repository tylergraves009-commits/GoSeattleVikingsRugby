function askQuestion() {
    var p = prompt('How long can you last without shelter?')
    if( p != null){
        document.getElementById('question').innerHTML = 'you said ! ' + p + ' The answer is 3 hours'
        
    }
}  


function twoQuestion() {
    var p = prompt('How long can you last without Water?')
    if( p != null){
        document.getElementById('question2').innerHTML = 'you said ! ' + p + ' The answer is 3 days'
        
    }
}  



function threeQuestion() {
    var p = prompt('How long can you last without Food?')
    if( p != null){
        document.getElementById('question3').innerHTML = 'you said ! ' + p + ' The answer is 3 days'
        
    }
}  

