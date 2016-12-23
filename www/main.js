// This is a JavaScript file
function start(){
    for(var i=1;i<=3;i++){
        document.getElementById('msg'+i).style.zIndex=1;
    }
}
function change(target){
    var num=target.style.zIndex;
    for(var i=1;i<=3;i++){
        var obj=document.getElementById('msg'+i).style;
        var n=obj.display='block';
        
    }
    target.style.display='none';
}
