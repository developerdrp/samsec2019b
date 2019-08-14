
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


function currentDate()
{
	var day, date, month, year;
	//d object of Date Class
	 d= new Date();

	 day=d.getDay(); // 0-6
	 date=d.getDate(); //1-31
	 month=d.getMonth(); //0-11
	 year=d.getFullYear(); // YYYY

	if(day==0) day="Sunday";
	else if(day==1) day="Monday";
	else if(day==2) day="Tuesday";
	else if(day==3) day="Wednesday";
	else if(day==4) day="Thursday";
	else if(day==5) day="Friday";
	else day="Saturday";

	if(month==0) month="Januray";
	else if(month==1) month="February";
	else if(month==2) month="March";
	else if(month==3) month="April";
	else if(month==4) month="May";
	else if(month==5) month="June";
	else if(month==6) month="July";
	else if(month==7) month="August";
	else if(month==8) month="September";
	else if(month==9) month="October";
	else if(month==10) month="November";
	else  month="December";

	document.getElementById('currentDate').innerHTML=day + ", "+date+" "+month+ " "+year;
	//Calling the refreshTime 
	refreshTime();
}

function currentTime()
{
	var hh, mm, ss, ampm;
	t=new Date();
	hh=t.getHours();//0-23
	mm=t.getMinutes();
	ss=t.getSeconds();
	ampm=hh<=11?"AM":"PM";
	document.getElementById('hh').innerHTML=hh;
	document.getElementById('mm').innerHTML=mm;
	document.getElementById('ss').innerHTML=ss +" "+ampm;
}

function refreshTime()
{
	setInterval(currentTime, 1000);
}