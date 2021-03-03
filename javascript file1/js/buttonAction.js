function click_action()
{
    // alert("hello all welcome")
   
}
function load()
{
     let name1=prompt("enter ur name")
     alert("hey  "+name1+"  welcome")
}
function getvalue()
{
     let uname=document.getElementById('username').value
     alert(uname)
}

function add()
{
     let n1=parseInt(document.getElementById("nu1").value)
     let n2=parseInt(document.getElementById("nu2").value)
     let sum=n1+n2
   document.getElementById("result").value=sum
}

