
function onthearrow(data,key,x,y,div,ul2){
    var ul2=document.createElement("div")
   
    div.innerHTML=null
    ul2.setAttribute("class","featur-ul")
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


