var check_name;
var user_id;
var	last_name;
var	phone_number;

	// check for validity
	// function login()
	// 		{
	// 			check_name = $('#o_first_name').val();
	// 			var	last_name = $('#o_last_name').val();
	// 			var	phone_number = $('#o_phone_number').val();
	// 				$.ajax({
	// 					  type: "GET",
	// 					  dataType: "text",
	// 					  data: {first_name: check_name, last_name: last_name , phone_number: phone_number},
	// 					  url: './php/user_check.php',
	// 					  success: function(data) 
	// 					  	{
	// 					  	var received_data = $.parseJSON(data);

	// 					  	alert(received_data.user_name);

	// 					    if (received_data.user_name == check_name)
	// 					    {
	// 					    	alert(received_data.user_name);
	// 					  		  	var tr;
	// 							for (var i = 0; i < received_data[0].count; i++) 
	// 							{
	// 								tr = $('<tr/>');
	// 								tr.append("<td>" + received_data[i].bill_id + "</td>");
	// 								tr.append("<td>" + received_data[i].height + "</td>");
	// 								tr.append("<td>" + received_data[i].waist + "</td>");
	// 								$('#choose_style').append(tr);
	// 							}

	// 							$('#old_customer').hide();
	// 							$('#choose_style').show();
								
							
	// 					    }
	// 					    else
	// 					    {
	// 					    	alert("out");
	// 					    }
	// 					  	},
	// 					  	error:function  (argument) {
	// 					  		alert("Error :" + argument.error);
	// 					  	}
	// 				});
	// 		}

	// 		// insert the new customer details

	// insert the new customer details
	// function create()
	// 		{
	// 			var height = $('#height').val();
	// 			var waist = $('#waist').val();

	// 					$.ajax({
	// 						  type: "POST",
	// 						  data: {id: user_id , height: height , waist: waist},
	// 						  url: './php/new_order.php',
	// 						  success: function(data) 
	// 						  	{
	// 						    if (data == 'false')
	// 						    {
	// 						    	$('#home_page').show();
	// 						    	$('#login_page').hide();
	// 						    	alert('Your  not data saved please try again');

	// 						    }
	// 						    else
	// 						    {
	// 						    	$('#home_page').show();
	// 						    	$('#login_page').hide();
	// 						    	alert('Your data saved thankyou');
	// 						    }
	// 						  	},
	// 						  	error:function  (argument) {
	// 						  		alert("Error :" + argument.error);
	// 						  	}
	// 					});
	// 		}

	// 		// display bills for old customer

	// display bills for old customer
	function dispaly_details_bill()
			{
						$.ajax({
							  type: "GET",
							  data: {id: user_id },
							  url: './php/show.php',
							  success: function(data) 
							  	{

									if (data != 'false')
								    {

								    var received_data = $.parseJSON(data);
									alert(received_data[0].bill_id);
								    }

								    else
								    {
								   	alert('false');
								    }
							  	},
							  	error:function  (argument) {
							  		alert("Error :" + argument.error);
							  	}
						});
			}

			// change div to register page

	// change div to register page
	// function move_new()
	// 		{
	// 			$('#new_customer').show();
	// 			$('#choose_customer').hide();
	// 			$('#choose_style').hide();

	// 		// }

	//change to new div
	// function move_old()
	// 		{
	// 			$('#old_customer').show();
	// 			$('#choose_style').hide();
	// 			$('#choose_customer').hide();

	// 		}

	// move to style choose
	function move_style()
			{
				$('#choose_style').show();
				$('#old_customer').hide();
			}

	//creating a new user
	function create_user()
			{
				var	first_name = $('#n_first_name').val();
				var	last_name = $('#n_last_name').val();
				var	phone_number = $('#n_phone_number').val();
				var	address = $('#n_address').val();
				var	e_mail = $('#n_e_mail').val();

						$.ajax({
							  type: "GET",
							  dataType: "text",
							  data: {first_name: first_name, last_name: last_name , phone_number: phone_number, address: address , e_mail: e_mail},
							  url: './php/user_register.php',
							  success: function(data) 
							  	{
						    	if (data == 'true')
							    {
							    	$('#choose_style').show();
							    	$('#new_customer').hide();
							    }
							    else
							    {
							    	alert("please register again something went wrong");
							    }
							  	},
							  	error:function  (argument) {
							  		alert("Error :" + argument.error);
							  	}
						});	
						console.log("donr");
			}

	//for incrementation
	function add(selected)
		{
			console.log(selected);
			if(selected=='0')
			{
			console.log('in suits');
			var input = $('#suits');
			input.val(parseInt(input.val()) + 1);
			}
			else if(selected == '1')
			{
			var input = $('#shirt');
			input.val(parseInt(input.val()) + 1);
			}
			else if( selected == '2') 
			{
			var input = $('#tuxedo');
			input.val(parseInt(input.val()) + 1);
			}
			else if(selected == '3')
			{
			var input = $('#trouser');
			input.val(parseInt(input.val()) + 1);
			}
			else if(selected == '4')
			{
			var input = $('#bandhgala');
			input.val(parseInt(input.val()) + 1);
			}
			else if(selected == '5')
			{
			var input = $('#sherwani');
			input.val(parseInt(input.val()) + 1);
			}
			else if(selected == '6')
			{
			var input = $('#safari');
			input.val(parseInt(input.val()) + 1);
			}
			else if(selected == '7')
			{
			var input = $('#doctor_coat');
			input.val(parseInt(input.val()) + 1);
			}
			else if(selected == '8')
			{
			var input = $('#overcoat');
			input.val(parseInt(input.val()) + 1);
			}
		}

	//for incrementation

	function sub(selected)
		{
			console.log(selected);
			if(selected=='0')
			{
			console.log('in suits');
			var input = $('#suits');
    		input.val(parseInt(input.val()) - 1);
			}
			else if(selected == '1')
			{
			var input = $('#shirt');
    		input.val(parseInt(input.val()) - 1);
			}
			else if( selected == '2') 
			{
			var input = $('#tuxedo');
    		input.val(parseInt(input.val()) - 1);
			}
			else if(selected == '3')
			{
			var input = $('#trouser');
    		input.val(parseInt(input.val()) - 1);
			}
			else if(selected == '4')
			{
			var input = $('#bandhgala');
    		input.val(parseInt(input.val()) - 1);
			}
			else if(selected == '5')
			{
			var input = $('#sherwani');
    		input.val(parseInt(input.val()) - 1);
			}
			else if(selected == '6')
			{
			var input = $('#safari');
    		input.val(parseInt(input.val()) - 1);
			}
			else if(selected == '7')
			{
			var input = $('#doctor_coat');
    		input.val(parseInt(input.val()) - 1);
			}
			else if(selected == '8')
			{
			var input = $('#overcoat');
    		input.val(parseInt(input.val()) - 1);
			}
		}

	// move to respective styles
		function suits()
		{
			$('#suits').show();
			$('#choose_style').hide();
		}

		function tuxedo()
		{
			$('#tuxedo').show();
			$('#choose_style').hide();
		}

		function shirt()
		{
			$('#shirt').show();
			$('#choose_style').hide();
		}

		function trouser()
		{
			$('#trouser').show();
			$('#choose_style').hide();
		}

		function bandhgala()
		{
			$('#bandhgala').show();
			$('#choose_style').hide();
		}
		function sherwani()
		{
			$('#sherwani').show();
			$('#choose_style').hide();
		}
		function doctor_coat()
		{
			$('#doctor_coat').show();
			$('#choose_style').hide();
		}
		function safari()
		{
			$('#safari').show();
			$('#choose_style').hide();
		}
		function overcoat()
		{
			$('#overcoat').show();
			$('#choose_style').hide();
		}

	// for back
	function back(selected)
		{
			if(selected == '1')
			{
			$('#old_customer').hide();
			$('#customer').show();
			}
			else if( selected == '2') 
			{
			$('#new_customer').hide();
			$('#customer').show();
			}
			else if(selected == '3')
			{
			$('#choose_style').hide();
			$('#customer').show();;
			}
			else if(selected == '4')
			{
			$('#suits').hide();
			$('#choose_style').show();
			}
			else if(selected == '5')
			{
			$('#tuxedo').hide();
			$('#choose_style').show();
			}
			else if(selected == '6')
			{
			$('#shirt').hide();
			$('#choose_style').show();
			}
			else if(selected == '7')
			{
			$('#trouser').hide();
			$('#choose_style').show();
			}
			else if(selected == '8')
			{
			$('#bandhgala').hide();
			$('#choose_style').show();
			}
		}

	function forward(selected)
		{
			if(selected == '1')
			{
			hideall();
			$('#search').addClass( "pt-page-rotateSlideIn");
			$('#search').show();
			}
			else if( selected == '2') 
			{
			hideall();
			$('#addNewCustomer').addClass( "pt-page-rotateSlideIn");
			$('#addNewCustomer').show();
			}
			else if(selected == '3')
			{
			hideall();
			$('#customer').addClass( "pt-page-rotateSlideIn");
			$('#customer').show();
			}
		}

	function hideall()
	{
		$('#homePage').hide();
		$('#addNewCustomer').hide();
		$('#addedCustomer').hide();
	}

	function login_test()
			{

				check_name = $('#test_first_name').val();
				last_name = $('#test_last_name').val();
				phone_number = $('#test_phone_number').val();

						  $.ajax({
						  type: "GET",
						  data: {first_name: check_name, last_name: last_name , phone_number: phone_number},
						  url: './php/test.php',
						  success: function(data) 
						  	{
							  	var received_data = $.parseJSON(data);
							  	alert(received_data.user_name);

							  	if (received_data.user_name == check_name)
						    	{
						    		$('#user_name').append( " " + received_data.user_id + " " + received_data.user_name);
							    	if(received_data.has_bill == "true")
							    	{
							    		var tr;
										for (var i = 0; i < received_data[0].count; i++) 
										{
											tr = $('<tr/>');
											tr.append("<td>" + received_data[i].bill_id + "</td>");
											tr.append("<td>" + received_data[i].height + "</td>");
											tr.append("<td>" + received_data[i].waist + "</td>");
											$('#choose_style').append(tr);
										}

										$('#customer').hide();
										$('#choose_style').show();
							    	}
							    	else
							    	{
							    		$('#customer').hide();
										$('#choose_style').show();
							    	}
							
							    }
							    else
							    {
							    	alert("out");
							    }


						  	},
						  	error:function  (argument) 
						  	{
						  		alert("Error :" + argument.error);
						  	}
					});
			}
