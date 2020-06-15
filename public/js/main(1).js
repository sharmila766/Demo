(function($) {

    var form = $("#form-register");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
             element.before(error); 
        },
        rules: {
            bargeName : {
                required : true,
            },
            startDateTime: {
                required : true,
            },
            endDateTime: {
                required : true,
            }, 
            "tonnes[]":{
                required:true,
                digits: true
        },
        "volAtLoadTemp[]":{
                required:true,
                digits: true
        },
        "loadTemp[]":{
                required:true,
                digits: true
        },
        "maxTransferRate[]":{
                required:true
        },
        "maxLinePressure[]" :{
            required:true 
        },
        "tankNo[]" :{
            required:true 
        },
        "bdb_grade[]" :{
            required:true 
        },
        "volOfTank[]" :{
            required:true,
            digits: true 
        },
        "volOfOilInTankBeforeLoad[]" :{
            required:true,
            digits: true 
        },
        "availVol[]" :{
            required:true,
            digits: true 
        },
        "volToBeLoaded[]" :{
            required:true,
            digits: true 
        },
        "totalVolGrades[]" :{
            required:true,
            digits: true 
        },
        "ship[]" :{
            required:true,
           
        },
        "barge[]" :{
            required:true,
           
        },
        "remarks[]" :{
            required:true,           
        },
        "tcl_ship[]" :{
            required:true,           
        },
        "tcl_barge[]" :{
            required:true,           
        },
        "tcl_remarks[]" :{
            required:true,           
        },
        s_name :{
            required:true,           
        },
        s_rank :{
            required:true,           
        },
        s_date :{
            required:true,           
        },
        s_time :{
            required:true,           
        },        
        b_name :{
            required:true,           
        },
        b_rank :{
            required:true,           
        },
        b_date :{
            required:true,           
        },
        b_time :{
            required:true,           
        },

        },
        messages: {
            bargeName: {
                required: "Please provide a Barge Name"
            },
            startDateTime:{
                required: "Please provide a Start Date Time"
            },
            endDateTime:{
                required: "Please provide an End Date Time"

            },
                "tonnes[]":{
                required:"Please provide Tonnes"
                },
                "volAtLoadTemp[]":{
                required:"Please provide a Volume at Loading Temperature"
                },
                "loadTemp[]":{
                required:"Please provide a Loading Temperature"
                },
                "maxTransferRate[]":{
                required:"Please provide a Maximum Transfer Rate"
                },
                "maxLinePressure" :{
                required:"Please provide a Maximum Line Pressure" 
                },
                "tankNo[]" :{
                    required:"Please provide a Tank No" 
                },
                "bdb_grade[]" :{
                    required:"Please provide a Grade" 
                },
                "volOfTank[]" :{
                    required:"Please provide a Volume of tank " 
                },
                "volOfOilInTankBeforeLoad[]" :{
                    required:"Please provide a Volume of Oil in Tank before loading" 
                },
                "availVol[]" :{
                    required:"Please provide a Available Volume" 
                },
                "volToBeLoaded[]" :{
                    required:"Please provide a Volume to be loaded" 
                },
                "totalVolGrades[]" :{
                    required:"Please provide a Total Volumes grades" 
                },                
                "ship[]" :{
                required:"Please provide a ship",

                },
                "barge[]" :{
                required:"Please provide a barge",

                },
                "remarks[]" :{
                required:"Please provide a remarks",
                },
                "tcl_ship[]" :{
                    required:"Please provide a ship",      
                },
                "tcl_barge[]" :{
                    required:"Please provide a barge",    
                },
                "tcl_remarks[]" :{
                    required:"Please provide a remarks",    
                }, 
                s_name :{
                    required:"Please provide a name",           
                },
                s_rank :{
                    required:"Please provide a rank",           
                },
                s_date :{
                    required:"Please provide a date",           
                },
                s_time :{
                    required:"Please provide a time",           
                },        
                b_name :{
                    required:"Please provide a name",           
                },
                b_rank :{
                    required:"Please provide a rank",           
                },
                b_date :{
                    required:"Please provide a date",           
                },
                b_time :{
                    required:"Please provide a time",           
                }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
        highlight : function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').addClass('form-error');
            $(element).removeClass('valid');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').removeClass('form-error');
            $(element).removeClass('error');
            $(element).addClass('valid');
        }
    });
    form.steps({
        headerTag: "h2",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous : 'Previous',
            next : 'Next',
            finish : 'Finish',
            current : ''
        },
        titleTemplate : '<div class="title">#title#</div>',
        onInit : function (event, currentIndex) { 
            // Suppress (skip) "Warning" step if the user is old enough.
            if(currentIndex === 0) {
                form.find('.actions').addClass('test');
            }
        },
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert('Sumited');
        },
        onStepChanged: function (event, currentIndex, priorIndex)
        {

         
        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });

    // $('#country').parent().append('<ul id="newcountry" class="select-list" name="country"></ul>');
    // $('#country option').each(function(){
    //     $('#newcountry').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    // });
    // $('#country').remove();
    // $('#newcountry').attr('id', 'country');
    // $('#country li').first().addClass('init');
    // $("#country").on("click", ".init", function() {
    //     $(this).closest("#country").children('li:not(.init)').toggle();
    // });
    
    // var allOptions = $("#country").children('li:not(.init)');
    // $("#country").on("click", "li:not(.init)", function() {
    //     allOptions.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#country").children('.init').html($(this).html());
    //     allOptions.toggle();
    // });

    // var inputs = document.querySelectorAll( '.inputfile' );
	// Array.prototype.forEach.call( inputs, function( input )
	// {
	// 	var label	 = input.nextElementSibling,
	// 		labelVal = label.innerHTML;

	// 	input.addEventListener( 'change', function( e )
	// 	{
	// 		var fileName = '';
	// 		if( this.files && this.files.length > 1 )
	// 			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
	// 		else
	// 			fileName = e.target.value.split( '\\' ).pop();

	// 		if( fileName )
	// 			label.querySelector( 'span' ).innerHTML = fileName;
	// 		else
	// 			label.innerHTML = labelVal;
	// 	});

	// 	// Firefox bug fix
	// 	input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
	// 	input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    // });
    
    
})(jQuery);
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.your_picture_image')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
