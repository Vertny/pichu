student_array=[]
function submit(){
    display_student_array=[];
    for (var d = 1; d <= 4; d++) 
    {var student_name= document.getElementById("name_of_the_student_"+d).value;
console.log(student_name);
student_array.push(student_name);
}
console.log(student_name);
var student_array_length= student_array.length;
console.log(student_array_length);
for (var k = 0; k < student_array_length; k++)
{ display_student_array.push("<h3>NAME -"+ student_array[k] + "</h4>");
console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML = display_student_array;
var remove_commas = display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display= "inline-block";
}
function sorting()
{ student_array.sort();
console.log(student_array);

var display_student_array_sorting= [];
console.log(display_student_array_sorting);

var student_array_length = student_array.length;
console.log(student_array_length);
console.log(student_name);
var student_array_length= student_array.length;
console.log(student_array_length);
for (var k = 0; k < student_array_length; k++)
{ display_student_array.push("<h3>NAME -"+ student_array[k] + "</h4>");
console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML = display_student_array;
var remove_commas = display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display= "inline-block";

}