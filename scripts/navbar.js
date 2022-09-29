import logo_link from '../Json/modesnselogo.json' assert {type: 'json'}
var head=document.querySelector("header")//header
var nav=document.createElement("div") // nav-main-div
var a_logo=document.createElement("a") // # current page left corner
let left_div=document.createElement("div")// left tabs
let right_div=document.createElement("div")//right corner
let tabs=[ {"name":"WOMEN"},{"name":"MEN"},{"name":"BEAUTY"},{"name":"KIDS"},{"name":"HOME"},{"name":"DESIGNERS"},{"name":"COMMUNITY"},{"name":"WHY MODESENS"},{"name":"SALE"},] //child-left tab
let spans=[
    { "src":"./Images/nav/unitedstate2.jpg","span":"COUNTRIES & LANGUAGES"},
    {"src":"./Images/nav/icons8-notification-25.png","span":"notification"},
    {"src":"./Images/nav/shopping-bag.jpg","span":"checkout"},
    {"src":"./Images/nav/icons8-male-user-24.png","span":"avtar"},
    {"src":"./Images/nav/search_icon.jpg","span":"search"}
]

let i=document.createElement("i")
// i.innerHTML="<i class='fa-thin fa-bell'></i>"
console.log(i)
spans.forEach(function(el){
    let div=document.createElement("div");
    let btn=document.createElement("button");
    let img=document.createElement("img")
    img.src=el.src
    let span=document.createElement("span")
    span.innerText=el.span
    btn.append(img,span)
    span.style.visibility="hidden"
    document.createAttribute("class","hidden-span")
    div.append(btn);
    right_div.append(div)
})


let logoImg=document.createElement("img");
// logoImg.src
logoImg.src=logo_link[0].modesenseLogo;
a_logo.append(logoImg)


tabs.forEach(function(el){
    let child=document.createElement("a")
    child.innerText=el.name
    console.log(el.name)
    left_div.append(child)    
})


let space_div=document.createElement("div");


nav.append(a_logo,left_div,space_div,right_div)
head.append(nav)












