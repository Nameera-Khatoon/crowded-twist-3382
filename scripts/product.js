import prod from '../Json/product.json' assert {type: 'json'}
import cloth from '../Json/clothes.json' assert {type: 'json'}
var main=document.getElementById("maincontent")
let addtocat=JSON.parse(localStorage.getItem("product"))||[]
function dat(data,key,x,y,div,id1,ul2){
    var ul2=document.createElement("div")
   
    // div.innerHTML=null
    ul2.setAttribute("id",id1)
    for(let i=x;i<=(x+y);i++){    
        let di=document.createElement("div")
        di.setAttribute("class","container")
        
        let li1=document.createElement("div");
        let li2=document.createElement("div"); 
        li1.setAttribute("class","container1")
        li2.setAttribute("class","container2")
        let btn=document.createElement("div")
        btn.innerHTML='<a href="#"> Add to Cart </a>'
       
        btn.addEventListener("click",function(){
            addtocat.push(data[i])
            // alert("added to cart")
            localStorage.setItem("product",  JSON.stringify(addtocat))
            console.log(addtocat)
        })
        btn.setAttribute("class","button")
        let img1=document.createElement("img");
     
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
        // console.log(cloth[i])
        img1.src=data[i]["img"]
        li1.append(img1,btn)
      
        
  
       di.append(li1,li2)
       ul2.append(di)
    
    }
    
    return ul2
}


function wantdata(data,key,x,y,div,id1,option1="",ul2){
    var ul2=document.createElement("div")
    if(y>cloth.length){
        y=cloth.length
    }
    div.innerHTML=null
    ul2.setAttribute("id",id1)
    for(let i=x;i<y;i++){ 

      
            let di=document.createElement("div")
            di.setAttribute("class","container")
            
            let li1=document.createElement("div");
            let li2=document.createElement("div"); 
            li1.setAttribute("class","container1")
            li2.setAttribute("class","container2")
            let btn=document.createElement("div")
            btn.innerHTML='<a href="#"> Add to cart </a>'
            btn.setAttribute("class","button")
              btn.addEventListener("click",function(){
            addtocat.push(data[i])
          
            localStorage.setItem("product",  JSON.stringify(addtocat))
            console.log(addtocat)
        })
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
            let src2=data[i][key]
            // console.log(src2)
            img.src=src2
            li1.append(img,btn)
          
            
      
           di.append(li1,li2)
           ul2.append(di)
        console.log(i)
        console.log(ul2)
 
    }
    
    return ul2
}



let div=document.createElement("div")

let l_div=document.createElement("div")
l_div.setAttribute("id","left")
let r_div=document.createElement("div")
r_div.setAttribute("id","right")
div.append(l_div,r_div)

main.append(div)

// for(let i=0;i<9;i++){
//     let carts=document.createElement("div")
//     r_div.append(carts)
// }
r_div.append(dat(prod,"img",0,64,r_div,"homP"))
// wantdata(prod,key,x,y,div,id1,option1,ul2)
// console.log(wantdata(prod,"img",0,10,"id1","ETRO"))
// console.log(dat(prod,"img",0,3,r_div,"homP"))
console.log(prod[0])
console.log(r_div)
let drop=["CATEGORY",
    "DESIGNER",
    "STOCK",
    "COLOR",
   "PRICE RANGE",
    "ON SALE",
    "STORE",
    "KEYWORD"]
// let l_div=document.getElementById("left")
for(let i=0;i<5;i++){
    let divl=document.createElement("div")
    console.log(divl)
    let id1="divL"+i
    console.log(id1)
    divl.setAttribute("id",id1)
    l_div.append(divl)
}

let x="Namera"
// console.log(Lv)

for(let i=0;i<drop.length;i++){

let selct1=document.createElement("div");
let selct=document.createElement("button")
selct.type="button"
selct.value=drop[i]
selct.setAttribute("class","select")
let ids=drop[i].toLowerCase()
// console.log(drop[i])
selct1.setAttribute("id",ids)
let opt=document.createElement("option")
opt.value=drop[i]
opt.innerText=drop[i]
let indiv=document.createElement("div")
selct.append(opt)
let d=document.getElementById("divL1")
console.log(d)
selct1.append(selct,indiv)
d.append(selct1)
}
let catagery=["Clothing",
"Shoes",
"Bags",
"Accessories",
"Beauty",
"Home",]


let catabtn=document.querySelector("#category>button")
let cata_div=document.querySelector("#category>div")
// cata_div.Style.

// console.log(cata_div)
var click=0
catabtn.addEventListener("click",function(){
    console.log(catabtn.value)
//    click++;
    if(click==0){
        click=1;
        // console.log(cata_div)
        // cata_div.innerText=
        for(let i=0;i<catagery.length;i++){
            let catalog=document.createElement("button")
            catalog.setAttribute("id",catagery[i])
            catalog.setAttribute("class","subcata")
            catalog.value=catagery[i];
            catalog.innerText=catagery[i];
            cata_div.append(catalog)
        }
        
    }else{
        click=0;
        cata_div.innerHTML=null
        console.log(click)
    }
    // function
    let subcat=document.getElementById("Clothing")
    subcat.addEventListener("click",function(){
        myfunc("Clothing")
    })
    let hom=document.getElementById("Home")
    hom.addEventListener("click",function(){
        myfunc("Home")
    })
   
})

// r_div.append(dat(cloth,"img",0,64,r_div,"homP")
function myfunc(val){
//    if()
    if(val==="Clothing"){
    // console
    r_div.append(wantdata(cloth,"img",0,64,r_div,"homP"))
    }
    if(val==="Home"){
        // console
        r_div.append(wantdata(prod,"img",0,64,r_div,"homP"))
    }
}







