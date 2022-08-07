function passavalore(){
    var nome=document.getElementById("Nome").value;
    var cognome=document.getElementById("Cognome").value
    var page=document.getElementById("PageHtml").value
    localStorage.setItem("text1",nome);
    localStorage.setItem("text2",cognome); 
    localStorage.setItem("text3",page); 
    return false;
 }
function setValue(){
    document.getElementById("setName").innerHTML=localStorage.getItem("text1");
    document.getElementById("setSurname").innerHTML=localStorage.getItem("text2");
    
    
}
function clearValue()
{
    localStorage.removeItem("text1");
    localStorage.removeItem("text2");
}
function clearText(){
    document.getElementById("setName").innerHTML=""
    document.getElementById("setSurname").innerHTML="";
}
function backPage(){    
   if(localStorage.getItem("text3")==null)
   {
    document.getElementById("Back").href="#";
   }
   else{
        document.getElementById("Back").href=localStorage.getItem("text3");
   }
}