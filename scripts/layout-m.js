var body=document.querySelector("body")
// var layout= document.createElement("div")
// layout.setAttribute("id","")
var layout=document.createElement("div")
layout.setAttribute("id","_layout")
var root_container= document.createElement("div")
root_container.setAttribute("id","root-container");

var header=document.createElement("header")
var main=document.createElement("main")
main.setAttribute("id","maincontent")
var footer=document.createElement("footer")
root_container.append(header,main,footer)
layout.append(root_container)
body.append(layout)




