
var tablebody=document.getElementById("tablebody");

var elementscontainer= [];

function addelement(){
var SiteNameinput=document.getElementById("SiteNameinput")
var SiteURLinput=document.getElementById("SiteURLinput")
var urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9\-._~:?#\[\]@!$&'()*+,;%=]*)?$/;

if(urlPattern.test(SiteURLinput)==true) {
    var element={
        name: SiteNameinput.value,
        URL:SiteURLinput.value,
    
    }
    
    elementscontainer.push(element)
    displayproducts();
    clear();
    }

 else{
   window.alert("Site Name or Url is not valid, Please follow the rules below :")
 }}

function displayproducts(){
var cartonaa="";
for(var i=0 ;i < elementscontainer.length;i++){

cartonaa +=`
<tr>
<td> ${i}</td>
<td>${ elementscontainer[i].name}</td>
<td><button onclick="visit(${i})"> visit </button></td>
<td>
<button onclick="Delete(${i})"> Delete </button>
</td>
`

}

 
    tablebody.innerHTML=cartonaa;
}
function Delete(index) {
    elementscontainer.splice(index, 1); 
    displayproducts();  
}
function visit(index) {
    window.location.href = elementscontainer[index].URL;
   
}
function clear(){
    SiteNameinput.value="";
    SiteURLinput.value="";
}