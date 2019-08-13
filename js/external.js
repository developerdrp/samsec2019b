
/*var a=10;
b=20
let c=a+b;

document.write("The sum of "+a+ " and " +b+ " is "+c)
*/

function gretting()
	{
		alert("Good Morning");
	}
function userName()
{
	var name;
	name=prompt("Enter your Name? ");
	document.getElementById('name').innerHTML="Welcome, " +name;
}

function oddEven()
{
	var num;
	num=parseInt(prompt("Enter the Number: "));
	if(num%2==0)
	{
		alert(num + " is Even.")
	}
	else
	{
		alert(num + " is Odd.")
	}
}

function christmas()
{
	var month="December";
	var day="25";

	if(month=="December" && day==25)
	{
		alert("Hurry! Merry Chiistmas");
	}
	else if(month=="December" &&(day>=20 || day<=30))
	{
		alert("Merry! Christmas;")
	}
	else{
		alert("Normal Days");
	}
}


function mulTable()
{

	var num, mul, i;
	num=parseInt(prompt("Enter the Number: "));

	for(i=1;i<=10;i++)
	{
		mul=num*i;

		document.getElementById('mulTable').innerHTML+=num + " x " + i + " = "+ mul +"<br/>";
	}

}


function validation()
{
	var username, password;
	//retrive data from the form
	username=loginFrm.name.value;
	password=loginFrm.password.value;

	//check if all fiedls are blank
	if(username=='' && password=='')
	{
		document.getElementById('error').innerHTML="All Fields are required";
		return false;
	}
return false
}