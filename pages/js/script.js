alert("hello");


function myFunction(){
    document.getElementById("demo").innerHTML="paragraph changed";
    console.log('hi');
}


function sumFunction(num1,num2)
{
    let sum= num1+num2;
    console.log(sum);
    return(sum);
}
sumFunction(20,40);
console.log(sumFunction(30,10));


var body=document.getElementsByTagName('body');
var footer=document.getElementsById("footerDiv");

console.log(body[0].backgroundColor);
function changeBackground()
{

if (body[0].style.backgroundColor=='whitesmoke')
     body[0].style.backgroundColor='red';
    // document.getElementsById("footerDiv").style.backgroundColor='grey';}
else
    body[0].style.backgroundColor='whitesmoke';
     //document.getElementsById("footerDiv").style.backgroundColor='black';}


