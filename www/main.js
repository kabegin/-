// This is a JavaScript file
function doClick(){
   var fstr=document.getElementById('text1').value;
   var text=document.getElementById('area1').value;
   while(true){
       var str=text.replace(fstr,'★');
       if(str==text){
           break;
       }
       text=str;
   }
   document.getElementById('msg').innerHTML=text;
}

