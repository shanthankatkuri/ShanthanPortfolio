function callAlert(msg){
    alert(msg,4000)
}
window.alert=function(message,timeout){
    const alert=document.createElement('div');
    alert.classList.add('alert');
    const alertButton=document.createElement('button')
    alertButton.innerText='OK';
    alert.setAttribute('style','position:fixed;top:60%;left:40%;padding:20px;border: double 0.125rem #854fee;border-radius:10px;box-shadow: 0 0.625rem 1.875rem rgb(118 85 225 / 30%);;display:flex;flex-direction:column;');
    alertButton.setAttribute('style','border: double 0.125rem #854fee;background:white;border-radius:5px;padding:5px;');
    alert.innerHTML=`<span style="padding:10px">${message}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click',(e)=>{
        alert.remove();
    });
    if(timeout!=null){
        setTimeout(()=>{
            alert.remove();
        },Number(timeout))
    }
    document.body.appendChild(alert);

}
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})