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
let t_x1=0;
let t_x2=12;

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
// console.log(featurepatner[0]["brand-logo"])
let top2div=document.createElement("div")

let top2_div=document.createElement("div")
top2_div.setAttribute("id","slide-pat")
// console.log(top2div.innerHTML=null)
// top2div.append(onthearrow(featurepatner,20))
let arr1=document.createElement("div")
arr1.innerHTML='<i class="fa-solid fa-arrow-left"></i>'
arr1.setAttribute("id","arrow1")
arr1.addEventListener("click",left)
function left(){
    // console.log("imfunc")
    let x=t_x2;
        var click=x;
         top2div.append(onthearrow(featurepatner,"brand-logo",-12,x,top2div,"featur-ul"))
        
        // console.log(click)

       
}
let arr2=document.createElement("div")
arr2.setAttribute("id","arrow2")
arr2.addEventListener("click",right)
function right(){
    console.log("imfunc")
    let x=t_x2 ;
     
        top2div.append(onthearrow(featurepatner,"brand-logo",x,12,top2div,"featur-ul"))
           
}
console.log(featurepatner.length) 
arr2.innerHTML='<i class="fa-solid fa-arrow-right"></i>'
top2div.append(onthearrow(featurepatner,"brand-logo",12,12 ,top2div,"featur-ul"))
top2_div.append(arr1,top2div,arr2)
top2.append(top2_div)

top.append(top1,top2)

function onthearrow(data,key,x,y,div,class1,ul2){
    var ul2=document.createElement("div")
    if(x<0){
        x=0
    }
    if((x+y)<=0){
        x=y
        y=12
    }
    div.innerHTML=null
    ul2.setAttribute("class",class1)
    
    for(let i=x;i<x+y;i++){    
        let di=document.createElement("div")

        let li=document.createElement("div");
      
        let img=document.createElement("img")
        img.src=data[i][key]
        li.setAttribute("type","none")
        li.appendChild(img)
        li.setAttribute("class","ul-li")
    //    console.log(i)
       di.appendChild(li)
       ul2.appendChild(di)
    }
    // console.log(ul2)
    return ul2
}

// mid

let specialoffer=document.createElement("div")
specialoffer.setAttribute("id","offer")
let Trending=document.createElement("div")
Trending.setAttribute("id","trend")
let Recently=document.createElement("div")
Recently.setAttribute("id","recent")
let Community=document.createElement("div")
Community.setAttribute("id","community")

for(let i=0;i<=5;i++){
    let div=document.createElement("div")
    // let imgdiv
    // let img=document.createElement("img")
    specialoffer.append(div)
}

// console.log(offers[0])
mid.append(specialoffer,Trending,Recently,Community)


function dat(data,key,x,y,div,id1,ul2){
    var ul2=document.createElement("div")
   
    div.innerHTML=null
    ul2.setAttribute("id",id1)
    for(let i=x;i<=(x+y);i++){    
        let di=document.createElement("div")
        di.setAttribute("class","container1")
        
        let li1=document.createElement("div");
        let li2=document.createElement("div"); 
        li1.setAttribute("class","container1-ch1")
        li2.setAttribute("class","container1-ch2")
        let img1=document.createElement("img");
        img1.src=data[i][key]
        let dis=document.createElement("p")
        dis.innerText=data[i]["disc"]
        // dis.ine
        let hed=document.createElement("p")
        hed.innerText=data[i]["head"]
        let type=document.createElement("p")
        type.innerText=data[i]["p"]
        let btn=document.createElement("div")
        btn.innerHTML='<a href="#"> SHOP NOW </a>'
        btn.setAttribute("class","button1")
       
    
        li2.append(hed,type,btn)
        // console.log(hed)
  
       
        li1.append(img1,dis)
      
        
  
       di.append(li1,li2)
       ul2.append(di)
    
    }
    
    return ul2
}
let btn=document.createElement("div")
btn.innerHTML='<a href="#"> view More </a>'
btn.setAttribute("class","button1 view")
let offerin=document.createElement("div")
offerin.append(dat(offers,"img",0,5,specialoffer,"inoffer"),btn)
specialoffer.append(offerin)
// let arr1
let inofer=document.querySelector("#offer>div")

// console.log(offerin)
// console.log(inofer)