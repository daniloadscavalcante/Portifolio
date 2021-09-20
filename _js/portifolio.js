function abrirMenu() {
    document.getElementById("nav_wrapper").style.bottom="0";    
    document.querySelector("#open-menu").style.display="none";
    document.querySelector(".title-name").style.display="none";
}
function closeMenu(){
    document.querySelector(".nav_wrapper").style.bottom="-100%";
    document.querySelector("#open-menu").style.display="block";
    document.querySelector(".title-name").style.display="block";
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

 /*Slider */
 $('.carrossel').slick();

 