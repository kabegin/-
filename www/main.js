// This is a JavaScript file
function doClick(){
   var date1=new Date();
   var str=document.getElementById('text1').value;
   var date2=new Date(str);
   date1.setMilliseconds(0);
   date1.setSeconds(0);
   date1.setMinutes(0);
   date1.setHours(0);
   date2.setMilliseconds(0);
   date2.setSeconds(0);
   date2.setMinutes(0);
   date2.setHours(0);
   var time1=date1.getTime();
   var time2=date2.getTime();
   var result=(time2-time1)/(60*60*24*1000);
   
   document.getElementById('msg').textContent=result+'日間あります。';
}

