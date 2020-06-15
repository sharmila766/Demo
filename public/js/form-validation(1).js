$(function(){
    var form = $("#form-register");
    $("#form-register").validate({
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
        "rc_date[]":{
            required:true,    
        }, 
        "rc_time[]":{
            required:true,    
        }, 
        "rc_shipInitials[]":{
            required:true,    
        }, 
        "rc_bargeInitials[]":{
            required:true,    
        }

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
                },
                "rc_date[]":{
                    required:"Please provide a date",    
                }, 
                "rc_time[]":{
                    required:"Please provide a time",    
                }, 
                "rc_shipInitials[]":{
                    required:"Please provide a Initials for Ship",    
                }, 
                "rc_bargeInitials[]":{
                    required:"Please provide a Initials for Barge",    
                } 
        },
      
    });
  

        $("#form-total").steps({
            headerTag: "h2",
            bodyTag: "section",
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
               // alert('Sumited');
               //form submitted
              //  var data = form.serialize();
//Get bunkers To Be Transferred Array Data
                var gradeTot=$('input[name="grade[]"]').length;     
                var bunkersToBeTransferred=[]; 
                var grade = document.getElementsByName('grade[]');
                var tonnes = document.getElementsByName('tonnes[]');
                var volAtLoadTemp = document.getElementsByName('volAtLoadTemp[]');
                var loadTemp = document.getElementsByName('loadTemp[]');
                var maxTransferRate = document.getElementsByName('maxTransferRate[]');
                var maxLinePressure = document.getElementsByName('maxLinePressure[]');
               
         
                 for(var i=0; i < gradeTot; i++)
                 {
                    bunkersToBeTransferred.push({'grade':grade[i].value,'tonnes':tonnes[i].value,'volAtLoadTemp':volAtLoadTemp[i].value,'loadTemp':loadTemp[i].value,'maxTransferRate':maxTransferRate[i].value,'maxLinePressure':maxLinePressure[i].value});  
                 }

//Get bunker Tanks To Be Loaded Array Data
                 var btlgradeTot=$('input[name="btl_grade[]"]').length;     
                var bunkerTanksToBeLoaded=[]; 
                var tankNo = document.getElementsByName('tankNo[]');
                var btl_grade = document.getElementsByName('btl_grade[]');
                var volOfTank = document.getElementsByName('volOfTank[]');
                var volOfOilInTankBeforeLoad = document.getElementsByName('volOfOilInTankBeforeLoad[]');
                var availVol = document.getElementsByName('availVol[]');
                var volToBeLoaded = document.getElementsByName('volToBeLoaded[]');
                var totalVolGrades = document.getElementsByName('totalVolGrades[]');  
         
                 for(var i=0; i < btlgradeTot; i++)
                 {
                    bunkerTanksToBeLoaded.push({'tankNo':tankNo[i].value,'grade':btl_grade[i].value,'volOfTank':volOfTank[i].value,'volOfOilInTankBeforeLoad':volOfOilInTankBeforeLoad[i].value,'availVol':availVol[i].value,'volToBeLoaded':volToBeLoaded[i].value,'totalVolGrades':totalVolGrades[i].value});  
                 }


//Get Checks Prior To Berthing Array Data
                var bunkeringTot=$('input[name="bunkering[]"]').length;     
                var checksPriorToBerthing=[]; 
                var bunkering = document.getElementsByName('bunkering[]');
                var ship = document.getElementsByName('ship[]');
                var barge = document.getElementsByName('barge[]');
                var remarks = document.getElementsByName('remarks[]');           

                for(var i=0; i < bunkeringTot; i++)
                {
                    checksPriorToBerthing.push({'bunkering':bunkering[i].value,'ship':ship[i].value,'barge':barge[i].value,'remarks':remarks[i].value});  
                }

//Get checks Prior To Transfer Array Data
                var tclbunkeringTot=$('input[name="tcl_bunkering[]"]').length;     
                var checksPriorToTransfer=[]; 
                var tcl_bunkering = document.getElementsByName('tcl_bunkering[]');
                var tcl_ship = document.getElementsByName('tcl_ship[]');
                var tcl_barge = document.getElementsByName('tcl_barge[]');
                var tcl_remarks = document.getElementsByName('tcl_remarks[]');           

                for(var i=0; i < tclbunkeringTot; i++)
                {
                    checksPriorToTransfer.push({'bunkering':tcl_bunkering[i].value,'ship':tcl_ship[i].value,'barge':tcl_barge[i].value,'remarks':tcl_remarks[i].value});  
                }

//Get repetitive Check Array Data
                var rcdateTot=$('input[name="rc_date[]"]').length;     
                var repetitiveCheck=[]; 
                var rc_date = document.getElementsByName('rc_date[]');
                var rc_time = document.getElementsByName('rc_time[]');
                var rc_shipInitials = document.getElementsByName('rc_shipInitials[]');
                var rc_bargeInitials = document.getElementsByName('rc_bargeInitials[]');           

                for(var i=0; i < rcdateTot; i++)
                {
                    repetitiveCheck.push({'date':rc_date[i].value,'time':rc_time[i].value,'shipInitials':rc_shipInitials[i].value,'bargeInitials':rc_bargeInitials[i].value});  
                }

//Get ship Declaration  Array Data             
                var shipDeclaration={
                        "name": $("input[name=s_name]").val(),
                        "rank": $("input[name=s_rank]").val(),
                        "date": $("input[name=s_date]").val(),
                        "time": $("input[name=s_time]").val(),
                }  

//Get barge Declaration  Array Data             
            var bargeDeclaration={
                    "name": $("input[name=b_name]").val(),
                    "rank": $("input[name=b_rank]").val(),
                    "date": $("input[name=b_date]").val(),
                    "time": $("input[name=b_time]").val(),
                }                           
                                      
var order_id=$.session.get("order_id");                
                             var data={
                                     "orderId": order_id,
                                     "portId": $("input[name=portId]").val(),
                                     "portName": $("input[name=portname]").val(),
                                     "bunkerId": $("input[name=bunkerId]").val(),
                                     "shippingId": $("input[name=shippingId]").val(),
                                     "vesselId": $("input[name=vesselId]").val(),
                                     "vesselName": $("input[name=vesselName]").val(),
                                     "bargeName": $("input[name=bargeName]").val(),
                                     "startDateTime": $("input[name=startDateTime]").val(),
                                     "endDateTime": $("input[name=endDateTime]").val(),
                                     "bunkersToBeTransferred": $.makeArray(bunkersToBeTransferred),
                                     "bunkerTanksToBeLoaded": $.makeArray(bunkerTanksToBeLoaded),
                                     "checksPriorToBerthing": $.makeArray(checksPriorToBerthing),
                                     "checksPriorToTransfer": $.makeArray(checksPriorToTransfer),
                                     "repetitiveCheck": $.makeArray(repetitiveCheck),
                                     "shipDeclaration": shipDeclaration,
                                     "bargeDeclaration": bargeDeclaration,
                                     "createdBy":createdBy,
                             }
                   console.log(data);        
         				var url = '/api/createBDN';
         				$.ajax({
         					type: 'POST',
         					data: data,
                             headers: {
                                 "Authorization": "Bearer "+$.session.get("token"),
                                 "cache-control": "no-cache",   
                                 },
         					url: url,
                             dataType:"json",
         					success: renderList,
         				});
         				return false;
         				function renderList(result) {
         					if (result.status == 'Success') {						
         						$('#fmsg').addClass('hidden');
                                 $('#smsg').removeClass('hidden');
         						$('#smsg').html("Successfully Create Execute List");
                                 $("#form-register")[0].reset();
         					}
         					else {
         						$('#smsg').addClass('hidden');
         						$('#fmsg').removeClass('hidden');
         						//$('#fmsg').html(result.Message);
         					}
         
         
         
         
         				}
         		
         			/* form submit */

            },
            onStepChanged: function (event, currentIndex, priorIndex)
            {
    
             
            }
        });
   /* $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
         enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back',
            next : 'Next',
            finish : 'Submit',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) {  

            $("#form-register").validate();
            return $("#form-register").valid();
        }
    }); */
});
