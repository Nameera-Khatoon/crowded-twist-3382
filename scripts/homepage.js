import homeTop from '../Json/HomeBanner.json' assert {type: 'json'}
import featurepatner from '../Json/patner.json' assert {type: 'json'}
var main=document.getElementById("maincontent")
let div=document.createElement("div")
div.setAttribute("id","main-div")
// console.log(main)
main.append(div)

let top=document.createElement("div")
top.setAttribute("id","top")
let mid=document.createElement("div")
let bot=document.createElement("div")
// console.log(homeTop)

let top1=document.createElement("div")
let top2=document.createElement("div")
// top1
let topbanner=document.createElement("img")

topbanner.src=homeTop[0].banner
topbanner.setAttribute("id","banner-top")

let tDiv=document.createElement("div")
let p1=document.createElement("p");
p1.innerText="New Season New Home"
let p2=document.createElement("p");
p2.innerText="The Latest Home Goods"
let a=document.createElement("a");
a.innerText="shop Now"



let p=document.createElement("p")
p.innerText="Photo: MACY'S"
tDiv.append(p1,p2,a)
top1.append(topbanner,tDiv,p)

// endtop1

// top2
let top2_head=document.createElement("p")
let top2_txt=document.createElement("p")
top2_head.innerText="Featured Partners"
top2_txt.innerText="Compare across our 500+ partner stores to find the products you want at the best price."

top1.append(topbanner,tDiv,p)
top2.append(top2_head,top2_txt)



div.append(top,mid,bot)
main.append(div)

console.log(featurepatner[0]["brand-logo"])
let top2div=document.createElement("div")
let ul=document.createElement("div")
ul.setAttribute("class","featur-ul")
for(let i=0;i<10;i++){
    let li=document.createElement("li");
    let img=document.createElement("img")
    img.src=featurepatner[i]["brand-logo"]
    li.setAttribute("type","none")
    li.appendChild(img)
    li.setAttribute("class","ul-li")
   
   ul.append(li)
}
top2div.append(ul)
top2.append(top2div)
top.append(top1,top2)

// console.log(homeTop[0].banner)