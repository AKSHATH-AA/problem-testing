var nameofstudentsarray=[];

function submit() {

var displaystudentarray=[];

for (var j = 1; j <=4; j++){

var nameofthestudent=document.getElementById("nameofthestudent"+j).value;
console.log(nameofthestudent);
nameofstudentsarray.push(nameofthestudent);

}


var lengthofnameofthestudentarray=nameofstudentsarray.length;

for (var k = 0; k=lengthofnameofthestudentarray; k++)
{

  displaystudentarray.push("<h4>NAME-"+ nameofstudentsarray[k]+ "</h4");
}  

document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;


var removecommas=displaystudentarray.join("");
document.getElementById("display_name_without_commas").innerHTML=removecommas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline_block";
}