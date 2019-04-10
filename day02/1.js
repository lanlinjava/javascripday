function foo() {
    student = new Object();
    student.name="张三";
    student.age=18;
    student.id="350124198302194011";

    console.log(student)
    document.getElementById("use").innerHTML=("学生信息+ "+student.name+student.age+student.id);

}