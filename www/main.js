// This is a JavaScript file
function doClick(){
   var data=new Date();
   var n=document.getElementById('text1').value;
   var time=data.getTime();
   var result=time+(60*60*24*1000)*n;
   var data2=new Date(result);
   document.getElementById('msg').textContent=data2.toLocaleDateString();
}

