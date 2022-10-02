let tbody=document.querySelector('main')
let buylist=JSON.parse(localStorage.getItem("product"))



console.log(buylist)
console.log(buylist[0]["img"])
// display(buylist)
let maindiv=document.createElement("div")
tbody.append(maindiv)
maindiv.setAttribute("id","main")



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
        hed.setAttribute("class","hed")
        hed.innerText=buylist[i]["head"]
        
        let dis=document.createElement("p")
        dis.innerText=buylist[i]["line-disc"]
        let pric=document.createElement("p")
        pric.innerText=buylist[i]["price"]
        pric.setAttribute("id","price")
        div2.append(hed,dis,pric)
    
        div0.append(div1,div2)
        div.append(div0)
    
    }


console.log(div)
maindiv.append(div)

