console.log("JavaScript gets executed automatically when the preview re-renders");
document.getElementsByTagName('button')[0].onclick =  function() {
    console.log('onclick engaged')
    document.getElementsByClassName('counter-value')[0].innerHTML 
    = parseInt(document.getElementsByClassName('counter-value')[0].innerHTML) + 1
}