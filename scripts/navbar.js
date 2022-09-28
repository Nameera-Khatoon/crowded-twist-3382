import logo_link from '../Json/modesnselogo.json' assert {type: 'json'}
var head=document.querySelector("header")//header
var nav=document.createElement("div") // nav-main-div
var a_logo=document.createElement("a") // # current page left corner
let left_div=document.createElement("div")// left tabs
let right_div=document.createElement("div")//right corner

let tabs=[ {"name":"WOMEN"},{"name":"MEN"},{"name":"BEAUTY"},{"name":"KIDS"},{"name":"HOME"},{"name":"DESIGNERS"},{"name":"COMMUNITY"},{"name":"WHY MODESENS"},{"name":"SALE"},] //child-left tab
let span=[
    { "img":"","span":"COUNTRIES & LANGUAGES"},
    {"i":'<i class="fa-thin fa-bell"></i>',"span":"notification"},
    {"span":"checkout"},
    {"span":"avtar"},
    {"span":"search"}
]

let i=document.createElement("i")
// i.innerHTML="<i class='fa-thin fa-bell'></i>"
console.log(i)
span.forEach(function(el){
    let div=document.createElement("div");
    let btn=document.createElement("button");
})










let noti=document.createElement("div")


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












