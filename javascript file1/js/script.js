document.write("hello world")
function test()
{
     console.log("this is a test")
}
test()
function greetings(msg){
console.log("hello all",msg)}
greetings("hav a gud day")
greetings("gud mrng")
function add(a,b)
{
     
     let res=a+b;
     console.log("sum :",res)
     return res;
}
add(3,5)
let result=add(23,35)
console.log(result)
console.log(add(3,4))
//console.log(res)

//loop

for(let i=0;i<10;i+=2)             //
{
     if(i==3)
     {
          continue
     }
     console.log(i,"for")
}

let k=0
while(k<10)
{
     console.log(k)
     k++
}

function avg(a1,b1,c1)
{
     
     let res1=(a1+b1+c1)/3;
     return res1;
}

let result1=avg(22,33,45)
console.log("average :",result1)

//function with out name
let demo=function()
{
     console.log("demo fn. called")
}
console.log(demo)        
demo()