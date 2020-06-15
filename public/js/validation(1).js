$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  var form = $(this); 
  $("#Form1").validate({

    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      organizationType: "required",
      userName: "required",
      emailId: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      organizationType: "Please Select a Company Type",
      userName: "Please enter username",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      emailId: "Please enter a valid email address"
    },

    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      var url = 'http://localhost:3000/api/createAdmin';   
      $.ajax({
        type: 'POST',
        data: $(this).signupFormJSON(),
        url: url,
        dataType: "json",
        success: renderList,
      });
      return false;
      function renderList(result) {
        console.log(result);      
        if(result.status == 'Success'){       
     
      $('#smsg').html(result.Message);
      $('#fmsg').addClass('hidden');   
      $('#smsg').removeClass('hidden'); 
        window.location.href = "form2?subid="+subid;
     
        }
        else{
        $('#smsg').addClass('hidden'); 
        $('#fmsg').removeClass('hidden');  
        $('#fmsg').html(result.Message);  
        }
  
  
       
  
      }
    }
  });








  $("form[name='machineValidation']").validate({
    rules: {
      MachineName: {
        required: true
      },
      Description: {
        required: true
      },
      Status: {
        required: true,
      },
      Location: {
        required: true,
      }
    },
    
    messages: {
      MachineName: {
        required: "Please provide your machine Name"
      },
      Description: {
        required: "Please provide your description"
      },
      Status: {
        required: "Please enter your status",
      },
      Location: {
        required: "please provide your location",
      }
    },

    submitHandler: function (form) {
      form.submit();
    }
  });

  $("form[name='locationValidation']").validate({
    rules: {
      LocationName: {
        required: true
      },
      Description: {
        required: true
      },
      Lattitude: {
        required: true,
      },
      Longitude: {
        required: true,
      }
    },
    
    messages: {
      LocationName: {
        required: "Please provide your location Name"
      },
      Description: {
        required: "Please provide your description"
      },
      Lattitude: {
        required: "Please enter your lattitude",
      },
      Longitude: {
        required: "please provide your longitude",
      }
    },

    submitHandler: function (form) {
      form.submit();
    }
  });

  $("form[name='LoginValidation']").validate({
    rules: {
      username: {
        required: true
      },
      password: {
        required: true
      }
    },
    
    messages: {
      username: {
        required: "Please provide your UserName"
      },
      password: {
        required: "Please provide your Password"
      }
    },

    submitHandler: function (form) {
      form.submit();
    }
  });

});


//=======================================================================================================
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='myform']").validate({
        
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        OrganizationName: "required",
        UserName: "required",
        ContactEmail: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        Password: {
          required: true,
          minlength: 5
        },
        ConfirmPassword: {
          required: true,
          minlength: 5,
          equalTo: "#Password"
        },
        Country: {
            required: true
        },
        State:{
          required: true
        },
        Address:{
          required: true
        },
        Pincode:{
          required: true,
          number:true
        },
        ContactPhone: {
          required: true,
          minlength: 10,
          number: true
        }
      },
      // Specify validation error messages
      messages: {
        OrganizationName: "Please enter your organization name",
        UserName: "Please enter username",
        Password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        ConfirmPassword: {
          required: "Please provide a password",
          minlength: "your password must be at least 5 characters long",
          equalTo: "please enter the same password"
        },
        Country: {
            required: "Please enter your Country name"
        },
        State:{
          required:"Please provide your state name"
        },
        Address:{
          required:"Please provide your address"
        },
        Pincode:{
          required:"Please enter your pincode",
          number: "please provide a number"
        },
        ContactPhone: {
          required:"please provide a phone number",
          minlength: "please provide 10 digit number",
          number: "please provide a number"
        },
        ContactEmail: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

  //========================================================================================================================

  $(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
  
    $("form[name='subadmin']").validate({
        
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        subOrganizationName: "required",
        UserName: "required",
        ContactEmail: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        Password: {
          required: true,
          minlength: 5
        },
        ConfirmPassword: {
          required: true,
          minlength: 5,
          equalTo: "#Password"
        },
        Country: {
            required: true
        },
        State:{
          required: true
        },
        Address:{
          required: true
        },
        Pincode:{
          required: true,
          number:true
        },
        ContactPhone: {
          required: true,
          minlength: 10,
          number: true
        }
      },
      // Specify validation error messages
      messages: {
        subOrganizationName: "Please enter your organization name",
        UserName: "Please enter username",
        Password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        ConfirmPassword: {
          required: "Please provide a password",
          minlength: "your password must be at least 5 characters long",
          equalTo: "please enter the same password"
        },
        Country: {
            required: "Please enter your Country name"
        },
        State:{
          required:"Please provide your state name"
        },
        Address:{
          required:"Please provide your address"
        },
        Pincode:{
          required:"Please enter your pincode",
          number: "please provide a number"
        },
        ContactPhone: {
          required:"please provide a phone number",
          minlength: "please provide 10 digit number",
          number: "please provide a number"
        },
        ContactEmail: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();


        
      }
    });
  });


  //==========================================================================================================================

  $(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"

    $("form[name='component']").validate({
        
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side

        ComponentName: "required",
        Description:"required",
        
      },
      // Specify validation error messages
      messages: {
        
      ComponentName:{
          required:"please enter component name"
      },
      Description:{
          required:"please enter description"
      }
    },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
        
      }
    });
  });



