$(document).ready(function(){
$('#form').submit(function(e){
	e.preventDefault();
	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var password1 = $('#password1').val();
	var password2 = $('#password2').val();
	var email = $('#email').val();
	var number = $('#number').val();
	var msex = $('.gender').val();
	var msex = $('.cars').val();
	


	$(".error").remove();
		
		if(firstname.length<1){
		$('#firstname').after('<span class="error">First name is required</span>');
		}
		
		if(lastname.length<1){
		$('#lastname').after('<span class="error">Last name is required</span>');
		}

		if(password1.length<5){
		$('#password1').after('<span class="error">Password should have 8 character</span>');
		}
		
		if(password1!=password2){
		$('#password2').after('<span class="error">Passwords must be same</span>');
		}
		
		if(email.length<1){
     		 $('#email').after('<span class="error">Enter the email</span>');
    		} else {
     		 var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      		var validEmail = regEx.test(email);
      		if (!validEmail) {
       		 $('#email').after('<span class="error">Enter a valid email</span>');
      		}
    		}

		if(number.length<10){
		$('#number').after('<span class="error">Enter a contact number</span>');
		}

		if($('input[name="sex"]:checked').length == 0){
		
			 $('.gender').after('<span class="error">select any</span>');
		}
		


  });
});

