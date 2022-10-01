import prod from '../Json/product.json' assert {type: 'json'}
var main=document.getElementById("maincontent")
function dat(data,key,x,y,div,id1,ul2){
    var ul2=document.createElement("div")
   
    div.innerHTML=null
    ul2.setAttribute("id",id1)
    for(let i=x;i<=(x+y);i++){    
        let di=document.createElement("div")
        di.setAttribute("class","container")
        
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
// console.log(dat(prod,"img",0,3,r_div,"homP"))
console.log(prod[0])
console.log(r_div)