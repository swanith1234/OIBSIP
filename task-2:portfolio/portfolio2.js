let lists = document.querySelectorAll('.scroll');
let headings = document.querySelectorAll('.top');
let load = document.querySelectorAll('.load');

window.addEventListener('scroll', scrollTrigger);
window.addEventListener('load', loading);

function loading() {
   
    let homeElements = document.querySelectorAll('.home-content');
    let homeimages = document.querySelectorAll('.home-img');
    let leftcontent=document.querySelectorAll('.home-content>h1');
    let rightcontent=document.querySelectorAll('.home-content>p');
  
    homeElements.forEach(home => {
        home.classList.add('active');
    });
    homeimages.forEach(home => {
        home.classList.add('unscroll');
    });

    leftcontent.forEach(left =>{
        left.classList.add('normal');
      

    }); 
    rightcontent.forEach(right =>{
        right.classList.add('normal');
        
    });
}

function scrollTrigger() {
    let leftcontent=document.querySelectorAll('.left');
let rightcontent=document.querySelectorAll('.right');
    let bottom = window.innerHeight / 5 * 4;

    lists.forEach(list => {
        let top = list.getBoundingClientRect().top;

        if (top < bottom) {
            list.classList.add('unscroll');
        } else {
            list.classList.remove('unscroll');
        }
    });

    headings.forEach(head => {
        let top = head.getBoundingClientRect().top;
        if (top < bottom) {
            head.classList.add('active');
        } else {
            head.classList.remove('active');
        }
    });
    leftcontent.forEach(left => {
        let top = left.getBoundingClientRect().top;
        if (top < bottom) {
            left.classList.add('normal');
           
        } else {
            left.classList.remove('normal');
        }
    });
    rightcontent.forEach(right => {
        let top = right.getBoundingClientRect().top;
        if (top < bottom) {
            right.classList.add('normal');
        } else {
            right.classList.remove('normal');
        }
    });
    
}



