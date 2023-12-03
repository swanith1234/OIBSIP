

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.addEventListener('click',()=>{console.log("hi");
    if(navbar.style.display=='none'){
        navbar.style.display='block';
}else{
    navbar.style.display='none';
}})
