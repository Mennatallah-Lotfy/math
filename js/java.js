var myText= document.querySelector('#cal-input');
var Remove= document.querySelector('#remove');
var myResult= document.querySelector('#result');
var myClear= document.querySelector('#clear');
var approx= document.querySelector('#approx');
var myBTN=document.querySelectorAll('.MY-BTN');
// var myApprox=()=>{
//     let y = myText.value;
    // let e = y.indexOf('.');
    // if(y[e+1]>=5){myText.value=Math.floor(y)+1;}else{myText.value=Math.floor(y);}
//}
Remove.addEventListener('click',()=>{myText.value=''});
myResult.addEventListener('click',()=>{if(myText.value===''){myText.value=''} else{myText.value=eval(myText.value);}});
myClear.addEventListener('click',()=>{myText.value=myText.value.slice(0,-1)});
approx.addEventListener('click',()=>{myText.value=Math.round(myText.value);});
myBTN.forEach((x)=>{
    x.addEventListener('click',()=>{myText.value+=x.value}) 
})



// console.log(myText)
// console.log(myResult)
//console.log(myBTN)

