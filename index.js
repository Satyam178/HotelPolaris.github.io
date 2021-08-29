
{
    var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
}



function myFunction1() {
  Swal.fire({
    icon: 'info',
    title: 'Under Development',
    text: 'thank you for your patience'
  })

  
}


function myFunction2(){
  var fname= document.getElementById("fname").value;
  var lname= document.getElementById("lname").value;
  var emailId= document.getElementById("emailId").value;
  var message= document.getElementById("message").value;
  if(fname.length< 1)
      {
          alert("First name should have 4 or more characters");
          return false;
      }
      if(lname.length<10)
      {
        alert("Invalid Phone number");
        return false;
      }
 
  if(emailId.indexOf("@")== -1)
      {
          alert("Enter a valid email id");
          return false;
      }
  if(message.length<10)
      {
          alert("Feedback should have 10 characters or more");
          return false;
      }
  alert("Feedback is submitted");
  return true;
}

function validate(){
  var a=document.getElementById("inn");
   var b=document.getElementById("out");
   var c=document.getElementById("nroom");
   var d=document.getElementById("email");
  if(a.value =="" || b.value =="" || c.value =="" || d.value =="")
    {
     alert("Fields can't be empty");
     return false;
    }
    else
    {
      alert("Further details have been sent, Check your Email!");
      return true;
    }
}