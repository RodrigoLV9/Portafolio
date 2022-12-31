const contenedor=document.getElementById("contenedor")
contenedor.childNodes.forEach((elementos)=>{
    elementos.addEventListener("mouseenter",(e)=>{
        const id=document.getElementById(e.target.id)
        const nuevo=document.createElement("div");
        nuevo.textContent=e.target.id
        nuevo.classList.add("item-skill")
        id.appendChild(nuevo)
    })
    elementos.addEventListener("mouseleave",(e)=>{
        e.target.childNodes[3].remove()
    })
})

const button=document.getElementById("button");
button.addEventListener("click",(e)=>{
    button.style.fontSize=1.1+"rem";
    button.style.width=110+"px"
})

/* Menu desplegable */

const logo=document.getElementById("container-lv");
const menu=document.getElementById("menu");
logo.addEventListener("click",(e)=>{
    menu.classList.toggle("menu-nuevo")
})
/* if(screen.width<=640){
    console.log("abbas")
} */