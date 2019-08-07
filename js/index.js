//菜单显示
var mylis=document.getElementById("mylis"),
    lis=document.getElementById("lis"),
    li=lis.getElementsByTagName("li");
mylis.onmouseover=function(){
    lis.style.display="block";
}
mylis.onmouseout=function(){
    lis.style.display="none";
}
lis.onmouseover=function(){
    lis.style.display="block";
    for(var i=0;i<li.length;i++){
        li[i].onmouseover=function(){
                this.style.color="rgb(251, 116, 3)";
        }
        li[i].onmouseout=function(){
            this.style.color="black";
        }
    }
}
lis.onmouseout=function(){
    lis.style.display="none";
}

//姓名填写规则

var tipLine=document.getElementById("tip-line");
var rule=document.getElementById("rule");
tipLine.onmouseover=function(){
    rule.style.display="block";
}
tipLine.onmouseout=function(){
    rule.style.display="none";
}
//表单验证
var userpassname=document.getElementById("userpassname"),
    userpwd=document.getElementById("userpwd"),
    reuserpwd=document.getElementById("reuserpwd"),
    username=document.getElementById("username"),
    idtype=document.getElementById("idtype"),
    idnum=document.getElementById("idnum"),
    email=document.getElementById("email"),
    tel=document.getElementById("tel"),
    usertype=document.getElementById("usertype"),
    tips=document.getElementsByClassName("tip"),
    btn=document.getElementById("btn");
var b1=b2=b3=b4=b6=b7=b8=false;
var red=document.getElementById("red"),
    orange=document.getElementById("orange"),
    green=document.getElementById("green");
var checkbox=document.getElementById("checkbox");
userpassname.onblur=function(){
    var ptn=/^[a-zA-Z]\w{5,29}$/;
    if(!userpassname.value){
        tips[0].innerHTML="用户名不能为空";
        tips[0].style.color="red";
    }
    else{
        if(!ptn.exec(userpassname.value)){
            tips[0].innerHTML="6-30位字母、数字或“_”,字母开头";
            tips[0].style.color="red";
        }
        else{
            tips[0].innerHTML="用户名输入正确";
            tips[0].style.color="green";
            b1=true;
        }
    }
}
userpwd.onblur=function(){
    var ptn=/^\S{6,20}$/;
    var priptn=/(^[1-9]{6,20}$)|(^[a-zA-Z]{6,20}$)|(^[a-zA-Z]{6,20}$)/;;
    var midptn=/(^[1-9|a-z]{6,20}$)|(^[\W|a-z]{6,20}$)|(^[\W|1-9]{6,20}$)/i;
    var advptn=/\W[A-Za-z0-9_]*/;
    if(!userpwd.value){
        tips[1].innerHTML="密码不能为空";
        tips[1].style.color="red";
    }
    else{
        if(!ptn.exec(userpwd.value)){
            tips[1].innerHTML="请输入6-20位字母、数字或符号";
            tips[1].style.color="red";
            red.style.background = '#ddd';
            orange.style.background = '#ddd';
            green.style.background= '#ddd';
        }
        else{
            tips[1].innerHTML="";
            b2=true;
            if (priptn.exec(this.value)) {
                //密码强度为弱
    
                red.style.background = 'red';
                orange.style.background = '#ddd';
                green.style.background = '#ddd';
    
            } else if (midptn.exec(this.value)){
                //密码强度为中
                red.style.background = 'red';
                orange.style.background = 'orange';
                green.style.background = '#ddd';
        
            } else if (advptn.exec(this.value)) {
                //密码强度为强
                red.style.background = 'red';
                orange.style.background = 'orange';
                green.style.background = 'green';
            }
        }
        
    }
}
reuserpwd.onblur=function(){
    if(!reuserpwd.value){
        tips[2].innerHTML="密码不能为空";
        tips[2].style.color="red";
    }
    else{
        if(reuserpwd.value!=userpwd.value){
            tips[2].innerHTML="两次密码不一致，请重新输入";
            tips[2].style.color="red";
        }
        else{
            tips[2].innerHTML="两次输入一致";
            tips[2].style.color="green";
            b3=true;
        }
    }
}
username.onblur=function(){
    var ptn=/(^[\u4e00-\u9fa5]{2,15}$)|(^[a-zA-Z]{3,30}$)/;
        if(!ptn.exec(username.value)){
            tips[3].innerHTML="姓名只能包含中文或者英文,且字符在3-30个之间！";
            tips[3].style.color="red";
            tips[3].style.textDecoration="none";
        }
        else{
            tips[3].innerHTML="姓名输入正确";
            tips[3].style.color="green";
            tips[3].style.textDecoration="none";
            b4=true;
        }
    
}
idnum.onblur=function(){
    var ptn=/(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(!idnum.value){
        tips[5].innerHTML="身份证号不能为空";
        tips[5].style.color="red";
    }
    else{
        if(!ptn.exec(idnum.value)){
            tips[5].innerHTML="请输入18位身份证号码";
            tips[5].style.color="red";
        }
        else{
            tips[5].innerHTML="号码输入正确";
            tips[5].style.color="green";
            b6=true;
        }
    }
}
email.onblur=function(){
    var ptn=/^[1-9a-z][0-9a-z]*(?:[\._-][0-9a-z]+)*@[0-9a-z]+(?:[\._-][0-9a-z]+)*\.[a-z]{2,4}$/i;
    if(!email.value){
        tips[6].innerHTML="邮箱不能为空";
        tips[6].style.color="red";
    }
    else{
        if(!ptn.exec(email.value)){
            tips[6].innerHTML="请输入正确的邮箱";
            tips[6].style.color="red";
        }
        else{
            tips[6].innerHTML="邮箱格式正确";
            tips[6].style.color="green";
            b7=true;
        }
    }
}
tel.onblur=function(){
    var ptn=/^1[03456789]\d{9}$/;
    if(!tel.value){
        tips[7].innerHTML="手机号不能为空";
        tips[7].style.color="red";
    }
    else{
        if(!ptn.exec(tel.value)){
            tips[7].innerHTML="您输入的手机号码不是有效的格式！";
            tips[7].style.color="red";
        }
        else{
            tips[7].innerHTML="手机格式正确";
            tips[7].style.color="green";
            b8=true;
        }
    }
}

btn.onclick=function(){
    event.preventDefault();
    if(b1==false||b2==false||b3==false||b4==false||b6==false||b7==false||b8==false||checkbox.checked==false){
        alert("信息有误");
    }else{
        location.href="https://www.imooc.com";
    }
}
