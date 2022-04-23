let once=true;
// (function(){
// if(once){
//     document.querySelector('body').style.backgroundImage="url('')";
//     document.querySelector('body').style.backgroundColor="#fc3f19";
// }
// })();

window.addEventListener('load',function(){
    document.querySelector('#body_container').style.display='flex';
    once=false;
});