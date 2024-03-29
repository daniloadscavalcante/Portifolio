
const navLink = document.querySelectorAll('.nav_link');
const vermais = document.getElementById('btn-ver-mais');
const boxCard = document.querySelector('.second-section-card');
const btnDetalhe = document.querySelectorAll('.card .card_description .btn-detail');
const descricacao = document.querySelectorAll('.card .card_description > p');


btnDetalhe.forEach(item =>{
    item.addEventListener('click', showDescription);       
        
});

function showDescription(event){
     const click = event.currentTarget
        for (i = 0; i < descricacao.length; i++){
            if(click === btnDetalhe[i]){
                descricacao[i].classList.toggle('active-descricao');
            } 
        }
}


vermais.addEventListener('click', () =>{
    boxCard.classList.toggle('active-section-card');
    document.querySelector('.btn-ver-mais i').classList.toggle('active');
    
});



navLink.forEach(item => {
    item.addEventListener('click', removeNav);
});
function removeNav(){      
     document.querySelector(".nav_wrapper").style.top="0";            
}

/*Hide/Show  menu mobile */
function abrirMenu() {
    document.getElementById("nav_wrapper").style.top="0";       
}
function closeMenu(){
    document.querySelector(".nav_wrapper").style.top="-100%";    
}

/*Hide/Show  section skill */
function showFront(){
    var showFront = document.querySelector('#box_front');
   
    if(showFront.style.display ==="none"){
        showFront.style.display = "block";  
             
    }else{
        showFront.style.display = "none";
        
    }  
}
function showDesign(){
    var showDesign = document.querySelector('#box_design');
    
    if(showDesign.style.display ==="block"){
        showDesign.style.display = "none";

    }else{
        showDesign.style.display = "block";
    }  
}

/*show/hide section Qualification */
function showWork(){
   document.getElementById("box_exper").style.display = "block";
   document.getElementById("box_educa").style.display = "none";
}
function showEducation(){
    document.getElementById("box_exper").style.display = "none";
    document.getElementById("box_educa").style.display = "block";
 }


function showVermais(){
    
}





 
     /* elemento aparecendo quando scrolla*/
    const debounce = function(func, wait, immediate) {//lib para diminuir as quantidades de vezes que a função é ativada
        let timeout;
        return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        };
    };
    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    function animeScroll(){
        const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
        target.forEach(function(elemento){
            if(windowTop > elemento.offsetTop){
                elemento.classList.add(animationClass);
            }else{
                elemento.classList.remove(animationClass);
            }        
        })
    }

    animeScroll();
    //se nao tive elemento animado na pagina essa funçao nao escuta
    if(target.length){
        window.addEventListener('scroll',debounce(function(){ // função animeScroll  sera ativada com usuario der scroll
            animeScroll();            
        }, 150));
    } 
