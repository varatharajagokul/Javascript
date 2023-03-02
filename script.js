//console.log("hello world")

/*const array=[23,34,56,78,96]
console.log(array.indexOf(56))
console.log(array.indexOf(96))
console.log(array.length)*/

/*const students ={
    name:"student1",
    age:23,
    place:"chennai"
    }
console.log(students.name)
console.log(students)
console.log(students.age)*/

/*const arr=[
    {
    name:"student1",
    age:23,
    place:"chennai"
    },
    {
    name:"student2",
    age:26,
    place:"chennai"
    },
    {
    name:"student3",
    age:27,
    place:"chennai"
    }
]
console.log(arr)
console.log(arr[0].name,arr[1].name,arr[2].name)
console.log(arr.length)
console.log(arr[0].age,arr[1].age,arr[2].age)*/


/*var a = 5;
var b = 6;
console.log(a+b)*/

//const array = [1,2,3,4,5,6]
//console.log(array[0]*2,array[1]*2,array[2]*2,array[3]*2,array[4]*2,array[5]*2)

/*const array =[23,4,6,45,67]
array.push(55)
console.log(array)*/

/*const array =[23,4,6,45,67]
array.pop(67)
console.log(array)*/

/*var a = "hello";
var b = "world";
console.log(a+b)*/

/*a=6
b=2
console.log(a*b)*/

/*var string = [23,4,6,45,67]
string.reverse()
console.log(string)*/

/*var a = 2
console.log(a*1000)
console.log(a*100000)*/






//function task ------------------------------------------


/*function addfive(num){
    console.log(num+5)       //declaration function
}

const addfive=function(num){    //expression function
    console.log(num+5)
}

const addfive=(num)=>console.log(num+5)  //arrow function

addfive(5);
addfive(0);
addfive(-5);*/

//---------------------------------------


//oops

class student{
    constructor(){
        console.log("i am constructor")
    }
    studentname(){
        console.log("studentname")
    }
    studentage(){
        console.log("studentage")

    }   
}

class teacher extends student{
    constructor(){
        super()
        console.log("i am teacher")
    }
    studentpresent(){
        console.log("presented")
    }
    studentabsent(){
        console.log("absent")

    }   
}


const tea=new teacher()

tea.studentabsent()
tea.studentage()
tea.studentname()
tea.studentpresent()

for(i=1;i<=10;i++){
    console.log(i*2)
}