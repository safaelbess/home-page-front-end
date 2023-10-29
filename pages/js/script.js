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
console.log(body[0].style.backgroundColor);
function changeBackground()
{body[0].style.backgroundColor=='pink';
if (body[0].style.backgroundColor=='pink')
     body[0].style.backgroundColor='red';
     else
     body[0].style.backgroundColor='pink';

}

