import homeTop from '../Json/HomeBanner.json' assert {type: 'json'}
import featurepatner from '../Json/patner.json' assert {type: 'json'}
import offers from '../Json/specialoffers.json' assert {type: 'json'}
import prod from '../Json/product.json' assert {type: 'json'}
import com from '../Json/comunity.json' assert {type: 'json'}

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
a.href="product.html"
a.style.color="white"
a.style.textDecoration="none"



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
         t_x2=x
        // console.log(click)

       
}
let arr2=document.createElement("div")
arr2.setAttribute("id","arrow2")
arr2.addEventListener("click",right)
function right(){
    console.log("imfunc")
    let x=t_x2 ;
     
        top2div.append(onthearrow(featurepatner,"brand-logo",x,12,top2div,"featur-ul"))
        t_x2 =x  
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
let img2=document.createElement("img")//line1
img2.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
// let img2

img2.style.width="38%"
img2.style.height="20px"
// img2.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
// let img2
let img3=document.createElement("img")//line2
img3.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
img3.style.width="38%"
img3.style.height="20px"
// -------------
let img4=document.createElement("img")//line1
img4.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
// let img2

img4.style.width="38%"
img4.style.height="15px"
// img2.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
// let img2
let img41=document.createElement("img")//line2
img41.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
img41.style.width="38.5%"
img41.style.height="15px"
// -----------
let timg4=document.createElement("img")//line1
timg4.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
// let img2

timg4.style.width="40%"
timg4.style.height="20px"
// img2.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
// let img2
let timg41=document.createElement("img")//line2
timg41.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
timg41.style.width="40%"
timg41.style.height="20px"
// -------------------
let simg4=document.createElement("img")//line1
simg4.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
// let img2

simg4.style.width="40%"
simg4.style.height="20px"
// img2.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
// let img2
let simg41=document.createElement("img")//line2
simg41.src="https://www.pngmart.com/files/3/Horizontal-Line-Transparent-Background.png"
simg41.style.width="40%"
simg41.style.height="20px"
// simg4,spec_h,simg41
let tbtn=document.createElement("div")
tbtn.innerHTML='<a href="product.html"> SHOP MORE </a>'
tbtn.setAttribute("class","button1 view")

// 
let rbtn=document.createElement("div")
rbtn.innerHTML='<a href="product.html"> MORE </a>'
rbtn.setAttribute("class","button1 view1")
// 
let cbtn=document.createElement("div")
cbtn.innerHTML='<a href="#"> VIEW ALL </a>'
cbtn.setAttribute("class","button1 view2")
// 
let specialoffer=document.createElement("div")
specialoffer.setAttribute("id","offer")
let Trending=document.createElement("div")
Trending.setAttribute("id","trend")
let Recently=document.createElement("div")
Recently.setAttribute("id","recent")
let Community=document.createElement("div")
Community.setAttribute("id","community")
let rec_h=document.createElement("span")
// rec_h.style.textAlign="right"

rec_h.innerText=" Recently Viewed "
rec_h.style.fontSize="34px"
rec_h.style.lineHeight="1px"
let tren_h=document.createElement("span")
tren_h.innerText=" Trending Now "
tren_h.style.fontSize="34px"
let spec_h=document.createElement("span")
spec_h.innerText=" Special Offers "
spec_h.style.fontSize="34px"


// timg4,tren_h,timg41


// console.log(offers[0])
mid.append(specialoffer,Trending,Recently,Community)


function dat(data,key,x,y,div,id1,ul2){
    var ul2=document.createElement("div")
   
    div.innerHTML=null
    ul2.setAttribute("id",id1)
    for(let i=x;i<=(x+y);i++){    
        let di=document.createElement("div")
        di.setAttribute("class","container")
        
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
btn.innerHTML='<a href="product.html"> VIEW MORE </a>'
btn.setAttribute("class","button1 view")
let arr45=document.createElement("div")
arr45.innerHTML='<i class="fa-solid fa-arrow-left"></i>'
arr45.setAttribute("class","arrow3")
arr45.style.width="40px"
// arr12.addEventListener("click",left)
let arr46=document.createElement("div")
arr46.setAttribute("class","arrow4")
arr46.innerHTML='<i class="fa-solid fa-arrow-right"></i>'
arr46.style.width="40px"
let offerin=document.createElement("div")
offerin.append(arr45,dat(offers,"img",0,2,specialoffer,"inoffer"),arr46)
offerin.style.display="flex"
offerin.style.margin="20px"
specialoffer.append(simg4,spec_h,simg41,offerin,btn)
// ,simg
// let arr1
let inofer=document.querySelector("#offer>div")


function dat2(data,key,x,y,div,id1,ul2){
    var ul2=document.createElement("div")
   
    div.innerHTML=null
    ul2.setAttribute("id",id1)
    for(let i=x;i<=(x+y);i++){    
        let di=document.createElement("div")
        di.setAttribute("class","container0")
        
        let li1=document.createElement("div");
        let li2=document.createElement("div"); 
        li1.setAttribute("class","container1")
        li2.setAttribute("class","container2")
        let btn=document.createElement("div")
        btn.innerHTML='<a href="#"> Quick View </a>'
        btn.setAttribute("class","button")
        let img=document.createElement("img");
     
        let hed=document.createElement('p');
        hed.setAttribute("class","heading")
        hed.innerText=prod[i]["head"]
        let dis=document.createElement('span');
        dis.innerText=prod[i]["line-disc"]
        let price=document.createElement('p');
        price.innerText=prod[i]["price"]
        price.setAttribute("class","price")
        let stor=document.createElement('p');
        stor.innerText=prod[i]["noofstores"]
        li2.append(hed,dis,price,stor)
        // console.log(hed)
  
        img.src=data[i][key]
        li1.append(img,btn)
      
        
  
       di.append(li1,li2)
       ul2.append(di)
    
    }
    
    return ul2
}

let r_div=document.createElement("div")
let r_div2=document.createElement("div")

Trending.append(timg4,tren_h,timg41,r_div,tbtn)
// ,

let arr12=document.createElement("div")
arr12.innerHTML='<i class="fa-solid fa-arrow-left"></i>'
arr12.setAttribute("class","arrow3")
arr12.style.width="40px"
// arr12.addEventListener("click",left)
let arr22=document.createElement("div")
arr22.setAttribute("class","arrow4")
arr22.innerHTML='<i class="fa-solid fa-arrow-right"></i>'
arr22.style.width="40px"
let arr13=document.createElement("div")
arr13.innerHTML='<i class="fa-solid fa-arrow-left"></i>'
arr13.setAttribute("class","arrow3")
arr13.style.width="40px"
// arr12.addEventListener("click",left)
let arr23=document.createElement("div")
arr23.setAttribute("class","arrow4")
arr23.innerHTML='<i class="fa-solid fa-arrow-right"></i>'
arr23.style.width="40px"
// arr22.addEventListener("click",right)
let r2=4;
let r1=0;
let t_div=document.createElement("div")
t_div.style.textAlign="center"
t_div.append(img4,rec_h,img41)
t_div.style.margin="20px"
r_div2.append(arr12,dat2(prod,"img",r2,3,r_div2,"homP"),arr22)
r_div.append(arr13,dat2(prod,"img",r1,3,r_div,"homP"),arr23)
let cont =document.querySelector(".container")
// onthearrow(data,key,x,y,div,class1,ul2)
console.log((cont))
// cont.append(cont)

// r_div2.style.display="grid"
Recently.append(t_div,r_div2,rbtn)
// Recently.style.display="flex"
let ar1=document.getElementsByClassName("arrow4")
let ar2=document.getElementsByClassName("arrow3")
// console.log(nameera[0])
ar1[1].addEventListener("click",function(){
    let x=r1+1
    if(x>prod.length-1){
        x=prod.length-1
        r1=x
    }else{
        r_div.append(arr13,dat2(prod,"img",x,3,r_div,"homP"),arr23)
        r1=x
    }
   
})
ar1[2].addEventListener("click",function(){
    let x=r2+1
    if(x>prod.length-1){
        x=prod.length-1
        // r2=x
    }else{
        r_div2.append(arr12,dat2(prod,"img",x,3,r_div2,"homP"),arr22)
        r2=x
    }
   
})


ar2[1].addEventListener("click",function(){
    let x=r1-1
    let y=3
    if(x<0){
        // x=0
        x=0

    }else{
        r_div.append(arr13,dat2(prod,"img",x,y,r_div,"homP"),arr23)
    }
    
    r1=x
})
ar2[2].addEventListener("click",function(){
    let x=r2-1
    let y=3
    if(x<3){
        // x=0
        x=3

    }else{
        r_div2.append(arr12,dat2(prod,"img",x,3,r_div2,"homP"),arr22)
    }
    
    r2=x
})
console.log(com)
// Community
let comdiv=document.createElement("div")
comdiv.append(onthearrow(com,"img",0,4 ,comdiv,"com-ul"))
let arr53=document.createElement("div")
arr53.innerHTML='<i class="fa-solid fa-arrow-left"></i>'
arr53.setAttribute("class","arrow3")
arr53.style.width="40px"
// arr12.addEventListener("click",left)
let arr54=document.createElement("div")
arr54.setAttribute("class","arrow4")
arr54.innerHTML='<i class="fa-solid fa-arrow-right"></i>'
arr54.style.width="40px"
comdiv.append(arr53,onthearrow(com,"img",0,4 ,comdiv,"com-ul"),arr54)
comdiv.style.display="flex"
let com_h=document.createElement("span")
com_h.style.textAlign="center"

com_h.innerText=" Community Posts "
com_h.style.fontSize="34px"
// com_h.style.marginBottom="90px"


Community.append(img2,com_h,img3,comdiv,cbtn)
// console.log(onthearrow(com,"img",0,4 ,comdiv,"com-ul"))
// console.log(offerin)
// console.log(inofer)