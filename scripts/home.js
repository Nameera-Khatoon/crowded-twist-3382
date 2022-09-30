import homeTop from '../Json/HomeBanner.json' assert {type: 'json'}
import featurepatner from '../Json/patner.json' assert {type: 'json'}
import offers from '../Json/specialoffers.json' assert {type: 'json'}

var main=document.getElementById("maincontent")
let div=document.createElement("div")

div.setAttribute("id","main-div")
// console.log(main)
main.append(div)

let top=document.createElement("div")
top.setAttribute("id","top")
let mid=document.createElement("div")
mid.setAttribute("id","mid")
var trenddiv=document.createElement("div")
let bot=document.createElement("div")
// console.log(homeTop)
// ----top data------------------
let top1=document.createElement("div")
let top2=document.createElement("div")
// child1
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

// endchild1

// child2
let top2_head=document.createElement("p")
let top2_txt=document.createElement("p")
top2_head.innerText="Featured Partners"
top2_txt.innerText="Compare across our 500+ partner stores to find the products you want at the best price."
top1.append(topbanner,tDiv,p)
top2.append(top2_head,top2_txt)
div.append(top,mid)
main.append(div)
console.log(featurepatner[0]["brand-logo"])
let top2div=document.createElement("div")
top2div.append(onthearrow(featurepatner,"brand-logo",0,12,top2div,"featur-ul"))
// console.log(top2div.innerHTML=null)
// top2div.append(onthearrow(featurepatner,20))

top2.append(top2div)
top.append(top1,top2)
// onthearrow(featurepatner,0)

// function onthearrow(data,key,x,y,div,ul2){
//     var ul2=document.createElement("div")
   
//     div.innerHTML=null
//     ul2.setAttribute("class","featur-ul")
//     for(let i=x;i<x+y;i++){    
//         let di=document.createElement("div")
//         let li=document.createElement("div");
      
//         let img=document.createElement("img")
//         img.src=data[i][key]
//         li.setAttribute("type","none")
//         li.appendChild(img)
//         li.setAttribute("class","ul-li")
//        console.log(i)
//        di.appendChild(li)
//        ul2.appendChild(di)
//     }
//     // console.log(ul2)
//     return ul2
// }
// --------top-end---------------------------------

function onthearrow(data,key,x,y,div,atribute,ul2){
    var ul2=document.createElement("div")
   
    div.innerHTML=null
    ul2.setAttribute("class",atribute)
    for(let i=x;i<x+y;i++){    
        let di=document.createElement("div")
        let li=document.createElement("div");
      
        let img=document.createElement("img")
        img.src=data[i][key]
        li.setAttribute("type","none")
        li.appendChild(img)
        li.setAttribute("class","ul-li")
       console.log(i)
       di.appendChild(li)
       ul2.appendChild(di)
    }
    // console.log(ul2)
    return ul2
}


// mid

// let offer12=document.createElement("div")
let div1=document.createElement("div")
div1.append(onthearrow(offers,"specialOffers",0,3,div1,"midoffer"))

// offer12.append(onthearrow(offers,"specialOffers",0,3,offer12))

// mid.append(offer12)

let trend=[
    {"link":"https://cdn.modesens.com/availability/51061386?w=400&"}
]
let div2=document.createElement("div")
div2.append((onthearrow(offers,"specialOffers",0,4,div2,"trend")))
let div3=document.createElement("div")

div3.append((onthearrow(offers,"specialOffers",0,4,div3,"mid-3")))
// mid.append(div2)
mid.append(div1,div2,div3)