
$(document).ready(function(){

//Active Page Set
  $('.nav li').removeClass('current');
  var currenturl = jQuery(location).attr('href');
  console.log(currenturl);
  var url = currenturl.split("/");
  var page = url[4];
  //alert(page);
  //console.log(page);
  var bunk_page = url[3];
  var ship_page = url[3];
  var insurance_page = url[3];
  var lab_page = url[3];
  if(bunk_page=='bunker')
  {
    //console.log(page);
    if(page=='my-transaction-orders'){
      //jQuery(this).parents('li').addClass('open');
      $('#my-transaction-orders').parent().parent().addClass('open');
      $('#my-transaction-orders').addClass('current');
    }
    else if(page=='my-transaction-lab-test-result'){
      $('#my-transaction-lab-test-result').parent().parent().addClass('open');
      $('#my-transaction-lab-test-result').addClass('current');
    }
    else if(page=='my-transaction-insurance'){
      $('#my-transaction-insurance').parent().parent().addClass('open');
      $('#my-transaction-insurance').addClass('current');
    }
    else if(page=='approvals-oil'){
      $('#approvals-oil').parent().parent().addClass('open');
      $('#approvals-oil').addClass('current');
    }
    else if(page=='approvals-lab-test'){
      $('#approvals-lab-test').parent().parent().addClass('open');
      $('#approvals-lab-test').addClass('current');
    }
    else if(page=='approvals-insurance-claim'){
      $('#approvals-insurance-claim').parent().parent().addClass('open');
      $('#approvals-insurance-claim').addClass('current');
    }
    else if(page=='manage-operations-oil-types'){               
      $('#manage-operations-oil-types').parent().parent().addClass('open');
      $('#manage-operations-oil-types').addClass('current');
    }
    else if(page=='manage-operations-executive'){
      $('#manage-operations-executive').parent().parent().addClass('open');
      $('#manage-operations-executive').addClass('current');
    }
    else if(page=='manage-operations-manage-rates'){
      $('#manage-operations-manage-rates').parent().parent().addClass('open');
      $('#manage-operations-manage-rates').addClass('current');
    }
    else{
      $('#index_page').addClass('current');
    }
  }
    
 else if(ship_page=='shipping')
    { 
    if(page=='my-transaction-purchase'){
      $('#my-transaction-purchase').parent().parent().addClass('open');
      $('#my-transaction-purchase').addClass('current');
    }
    else if(page=='my-transaction-lab-test-result'){
      $('#my-transaction-lab-test-result').parent().parent().addClass('open');
      $('#my-transaction-lab-test-result').addClass('current');
    }
    else if(page=='my-transaction-insurance'){
      $('#my-transaction-insurance').parent().parent().addClass('open');
      $('#my-transaction-insurance').addClass('current');
    }
    else if(page=='approvals-oil'){
      $('#approvals-oil').parent().parent().addClass('open');
      $('#approvals-oil').addClass('current');
    }
    else if(page=='approvals-lab-test'){
      $('#approvals-lab-test').parent().parent().addClass('open');
      $('#approvals-lab-test').addClass('current');
    }
    else if(page=='approvals-insurance'){
      $('#approvals-insurance').parent().parent().addClass('open');
      $('#approvals-insurance').addClass('current');
    }
    else if(page=='manage-operations-bunkers'){
      $('#manage-operations-bunkers').parent().parent().addClass('open');
      $('#manage-operations-bunkers').addClass('current');
    }
    else if(page=='manage-operations-vessel-details'){
      $('#manage-operations-vessel-details').parent().parent().addClass('open');
      $('#manage-operations-vessel-details').addClass('current');
    }
    else if(page=='manage-operations-ship-engineers'){
      $('#manage-operations-ship-engineers').parent().parent().addClass('open');
      $('#manage-operations-ship-engineers').addClass('current');
    }
    else if(page=='manage-operations-supervisors'){
      $('#manage-operations-supervisors').parent().parent().addClass('open');
      $('#manage-operations-supervisors').addClass('current');
    }
    else{
      $('#index_ship_page').addClass('current');
    }
  }

  else if(insurance_page=='insurance')
    { 
    if(page=='my-transactions-for-bunker-pending-claim'){
      $('#my-transactions-for-bunker-pending-claim').parent().parent().addClass('open');
      $('#my-transactions-for-bunker-pending-claim').addClass('current');
    }
    else if(page=='my-transactions-for-shipping-pending-claim'){
      $('#my-transactions-for-shipping-pending-claim').parent().parent().addClass('open');
      $('#my-transactions-for-shipping-pending-claim').addClass('current');
    }
    else if(page=='approval-claim-status-bunker'){
      $('#approval-claim-status-bunker').parent().parent().addClass('open');
      $('#approval-claim-status-bunker').addClass('current');
    }
    else if(page=='approval-requested-claims-shipping'){
      $('#approval-requested-claims-shipping').parent().parent().addClass('open');
      $('#approval-requested-claims-shipping').addClass('current');
    }
    else if(page=='manage-operations-client'){
      $('#manage-operations-client').parent().parent().addClass('open');
      $('#manage-operations-client').addClass('current');
    }
    else if(page=='manage-operations-employee'){
      $('#manage-operations-employee').parent().parent().addClass('open');
      $('#manage-operations-employee').addClass('current');
    }
    else if(page=='manage-operations-types-of-problems'){
      $('#manage-operations-types-of-problems').parent().parent().addClass('open');
      $('#manage-operations-types-of-problems').addClass('current');
    }
    else{
      $('#index_insurance_page').addClass('current');
    }
  }

  else if(lab_page=='lab')
    { 
    if(page=='results-for-bunker-pending-claim'){
      $('#results-for-bunker-pending-claim').parent().parent().addClass('open');
      $('#results-for-bunker-pending-claim').addClass('current');
    }
    else if(page=='results-for-shipping-pending-claim'){
      $('#results-for-shipping-pending-claim').parent().parent().addClass('open');
      $('#results-for-shipping-pending-claim').addClass('current');
    }
    else if(page=='approval-test-bunkering'){
      $('#approval-test-bunkering').parent().parent().addClass('open');
      $('#approval-test-bunkering').addClass('current');
    }
    else if(page=='approval-test-shipping'){
      $('#approval-test-shipping').parent().parent().addClass('open');
      $('#approval-test-shipping').addClass('current');
    }
    else if(page=='manage-operations-employee'){
      $('#manage-operations-employee').parent().parent().addClass('open');
      $('#manage-operations-employee').addClass('current');
    }
    else if(page=='manage-operations-types-of-problems'){
      $('#manage-operations-types-of-problems').parent().parent().addClass('open');
      $('#manage-operations-types-of-problems').addClass('current');
    }
    else if(page=='manage_list'){
      $('#manage_list').parent().parent().addClass('open');
      $('#manage_list').addClass('current');
    }
    else{
      $('#index_lab_page').addClass('current');
    }
  }

  



  $('.signup').click(function(e) {
    window.location.href = "insurance/dashboard"; 
  })


  $(".submenu > a").click(function(e) {
    e.preventDefault(); 
    var $li = $(this).parent("li");
    var $ul = $(this).next("ul");

    if($li.hasClass("open")) {
      $ul.slideUp(350);
      $li.removeClass("open");
    } else {
      $(".nav > li > ul").slideUp(350);
      $(".nav > li").removeClass("open");
      $ul.slideDown(350);
      $li.addClass("open");
    }
  });

//$('.left-bar').load('menu');  


    var table = $('#purchase').DataTable( {
        responsive: true
    } );
 
 //   new $.fn.dataTable.FixedHeader( table );

 // Manage Operation Oil Type Page Add table row with text box

 
  $(".addButton").click(function(){
      $(this).closest("tr").clone(true).insertAfter("#addform");
  });

  $(".deleteButton").click(function(){
      $(this).closest("tr").remove();
  });

  //Date Picker

  /*$('.datepicker').datetimepicker(
$("body").on( "focus", ".datetimepicker", function() {
  $(this).datetimepicker(
    { 
      pickTime: false,
      format: "dd-mm-yyyy",
      minView: "month",
      language: "fr"
});*/

$("body").on( "focus", ".datepicker", function() {
  $(this).datetimepicker(
    { 
      pickTime: false,
      format: "dd-mm-yyyy",
      minView: "month",
      language: "fr"
}
  );
});
$("body").on( "focus", ".timepicker", function() {

$(this).datetimepicker({
  pickDate: false,
  minuteStep: 15,
  pickerPosition: 'bottom-right',
  format: 'HH:ii p',
  autoclose: true,
  showMeridian: true,
  startView: 1,
  maxView: 1,
});
});
$("body").on( "focus", ".timepicker", function() {
$(this).find('thead th').remove();
});
$("body").on( "focus", ".timepicker", function() {
  $(this).find('thead').append($('<th class="switch">').text('Pick Time'));
  $('.switch').css('width','190px');
});


$("body").on( "focus", ".datetimepicker", function() {
$(this).datetimepicker(
  {    
    format: "dd-mm-yyyy HH:ii p",   
    language: "fr"
});
});





 
 

  
});


  // Add-new-row in my transaction purchase order - 17/12/2018-D
/*
  $(".add-icon").click(function(){
    $("#add-form").append(" <div class='col-md-12'> <div class='container-fluid'> <form> <div class='row'> <div class='col-md-3'> <div class='form-group'> <label for='sel1'>Oil Type</label> <select class='form-control' id='Oil-type'> <option>Select</option> <option>2</option> <option>3</option> <option>4</option> </select> </div> </div> <div class='col-md-3'> <div class='form-group'> <label for='text'>Oil Grade</label> <input type='text' class='form-control' id='Oilgrade-input'> </div> </div> <div class='col-md-3'> <div class='form-group'> <label for='text'>Quantity</label> <input type='text' class='form-control' id='Quantity-input'> </div> </div> <div class='col-md-3'> <div class='form-group'> <label for='text'>Price (Per Unit)</label> <input type='text' class='form-control' id='Price-input'> </div> </div> </div> </form> </div> </div> ");
  });
 */

// $(".add-icon").click(function(){
//     $(this).closest("newrow").clone(true).insertAfter("#add-form");
// });

// $(".deleteButton").click(function(){
//     $(this).closest("tr").remove();
// });



  // Automatically add a first row of data
  $('#addRow').click();

  /*var id=$.session.get("_id");
  var subscriptionId=$.session.get("subscriptionId");
  var userRole=$.session.get("userRole");
  var token=$.session.get("token");
  var userName=$.session.get("userName");
  var emailId=$.session.get("emailId");
  var organizationId=$.session.get("organizationId");*/
  /*if(id != "undefined" && subscriptionId != 'undefined'  && userRole !='undefined' && token !='undefined' && userName !='undefined' && emailId !='undefined'  && organizationId !='undefined'){
  }else{
    window.location.href = "login";
  } */



