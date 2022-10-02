let tbody=document.querySelector('main')
let buylist=JSON.parse(localStorage.getItem("product"))||[]

// let buylist1=JSON.parse(localStorage.getItem("buy-list"))||[]



console.log(buylist)
console.log(buylist[0]["img"])
// display(buylist)
let maindiv=document.createElement("div")
tbody.append(maindiv)
maindiv.setAttribute("id","main")

// console.log()

let div=document.createElement("div")
   
    for(let i=0;i<buylist.length;i++){
        // console.log(buylist[i])
        let div0=document.createElement("div")
        let div1=document.createElement("div")
        let imag=document.createElement("img")
        imag.src=buylist[i]["img"]
        div1.append(imag)
        let div2=document.createElement("div")
        let hed=document.createElement("p")
        hed.innerText=buylist[i]["head"]
        let dis=document.createElement("p")
        dis.innerText=buylist[i]["line-disc"]
        let pric=document.createElement("p")
        pric.innerText=buylist[i]["price"]
        let btn=document.createElement("button")
        btn.innerText="REMOVE"
        btn.addEventListener("click",function(){
            alert("deleted")
            removing(buylist[i],i)
            location.reload();
        })
        div2.append(hed,dis,pric,btn)
    
        div0.append(div1,div2)
        div.append(div0)
    
    }


console.log(div)
div.style.display='grid'

maindiv.append(div)



function removing(element,index){
   
    buylist.splice(index,1)
    
    localStorage.setItem("product",JSON.stringify(buylist))
}

