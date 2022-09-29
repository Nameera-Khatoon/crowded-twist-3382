import logo_link from '../Json/modesnselogo.json' assert {type: 'json'}
var head=document.querySelector("header")//header
var nav=document.createElement("div") // nav-main-div
nav.setAttribute("id","nav")
var a_logo=document.createElement("a") // # current page left corner
let left_div=document.createElement("div")// left tabs
let right_div=document.createElement("div")//right corner
let tabs=[ {"name":"WOMEN","src":""},{"name":"MEN"},{"name":"BEAUTY"},{"name":"KIDS"},{"name":"HOME"},{"name":"DESIGNERS"},{"name":"COMMUNITY"},{"name":`WHY MODESENS`,"name":`COUPONS`}] //child-left tab
// COUNTRIES & LANGUAGES, "notification"
let spans=[
    { "src":"./Images/nav/unitedstate2.jpg","span":null},
    {"src":"./Images/nav/icons8-notification-25.png","span":null},
    {"src":"./Images/nav/shopping-bag2.png","span":null},
    {"src":"./Images/nav/icons8-male-user-24.png","span":null},
    {"src":"./Images/nav/icons8-search-301.png","span":"SEARCH"}
]

let i=document.createElement("i")
// i.innerHTML="<i class='fa-thin fa-bell'></i>"
// console.log(i)
spans.forEach(function(el){
    let div=document.createElement("div");
    let btn=document.createElement("button");
    let img=document.createElement("img")
    img.src=el.src
    let span=document.createElement("span")
    span.innerText=el.span
    btn.append(img)
    // span.style.visibility="hidden"

    document.createAttribute("class","hidden-span")
    div.append(btn,span);
    right_div.append(div)
})

let ser=document.createElement("span")
// ser.innerText="SEARCH"
// ser.style.fontSize="15px"
// right_div.append(ser)

let logoImg=document.createElement("img");
// logoImg.src
logoImg.src=logo_link[0].modesenseLogo;
a_logo.append(logoImg)


tabs.forEach(function(el){
    let child=document.createElement("a")
    let span=document.createElement("span")
    span.innerText=el.name
    child.append(span)
    // console.log(el.name)
    left_div.append(child)    
})


let space_div=document.createElement("div");


nav.append(a_logo,left_div,space_div,right_div)
let div=document.createElement("div")
div.setAttribute("id","head-ban")

head.append(div,nav)












