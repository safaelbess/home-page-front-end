//alert("hello");


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
var header= document.getElementById('headerDiv');

console.log(body[0].backgroundColor);
function changeBackground()
{

if (body[0].style.backgroundColor=='whitesmoke')
    { body[0].style.backgroundColor='red';
    footer.style.backgroundColor='grey';
   header.style.backgroundColor='grey';

}
else
   { body[0].style.backgroundColor='whitesmoke';
     document.getElementsById("footerDiv").style.backgroundColor='black';
     header.style.backgroundColor='black';

    }
}

var myForm= document.getElementsByClassName('userinput')[0];
var myInput=Document.getElementsByClassName("input")[0];
var myName =Document.getElementsByClassName("myName")[0];

myForm.addEventListener( 'submit',function(e)
{e.preventDefault()
    console.log(e);
    myName.innerHTML=myInput.value
    myInput.value=""
    myName.style.backgroundColor="red"
    myName.style.fontWeight="bold"
    myName.style.fontFamily="arial"
    myName.style.textAligh="center"

})

