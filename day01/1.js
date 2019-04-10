function foo() {

    //通过js中的var 来申明一个变量 element 去接收数据
    var element=document.getElementById("use");
    //通过js中的documet对象的getElementById 获取网页中指定元素id为use的内容
    console.log(element);//在控制台中显示获取到的内容
    document.write("<h1>我是通过js中foo函数来输出到html页面中的内容</h1>");
    var elm2 = document.getElementById("use2");
    elm2.innerHTML="原来的use2盒子数据是b，通过js函数中foo方法的执行改变了所以看到现在的这行数据"





}