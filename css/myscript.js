/*<script>
	   var myDate         = new Date();               // returns the date object
	   var myMonth        = myDate.getMonth();        // 0 through 11
	   var myDay          = myDate.getDate();         // 1 through 31										   
	   var myYear         = myDate.getFullYear();     // 4 digit year										   
	   var months  = new Array("Jan",   "Feb", "Mar",    "Apr",
	    						"May",       "Jun",     "Jul",     "Aug",
								"Sep", "Oct",  "Nov", "Dec");	
    	document.write(months[myMonth]," ");
		document.write(myDay,", ");
		document.write(myYear);
</script>*/






// Subject       : INT222 
// Author        : Gaurav Verma
// Written on    : 
// Last Modified : 8/6/2016


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
     function validateForm() {

       var errMessages = "";             // Initialize for each time the function is called
	//errMessages = validateAuthorization(errMessages);
		//errMessages = validatePCode(errMessages);												// Call name validation function	  
	 /*  errMessages = validateFirstname(errMessages);
	   errMessages = validateSurname(errMessages);	  
	   errMessages = validateDOB(errMessages);
	  errMessages = validateEmail(errMessages);  
	  errMessages = validatePhone(errMessages);
	 errMessages = validateAdd(errMessages);*/
	 // errMessages = validateApt(errMessages);
	/*  errMessages = validateCity(errMessages);
	  errMessages = validateProvince(errMessages);
	  
	  
	  errMessages = validateIncome(errMessages);
	 errMessages = validatePayment(errMessages);
	
	errMessages = checkCredit(errMessages);
	 errMessages = checkEmail(errMessages); 
	errMessages = checkHousing(errMessages);    */
	errMessages = validateyearAtLoc(errMessages);
	   
       // call other field validation functions if required

       if (errMessages !== "") {          // if true - there is at least one error
                                         // Prepare to show the errors detected
          showErrors(errMessages);       // Prepare to show the errors detected
          return false;                  // return false to the browser
                                         // in order for the form not be submitted
                                         // this will allow for corrections
       }                               
       else {
          clearShowErrors();                          
          return true;                   // No errors - return to browser and submit form
       }
 
     }  //  End of main function
	 
	 /////////////////////////////////////////////////////////////////////////////////////////

     function validateFirstname(errMessages) {

       var nameMessageRules=", Please enter a minimum of 3 alphabetic characters";

       var stringName = document.application.fName.value;
       stringName = stringName.trim();
	   
	    var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Firstname</mark><br /> - The firstname field can not be left empty or just blank characters<br />" + "</p>";
       }        
       else { 
           if (stringLength < 3) {
               errMessages += "<p><mark>Firstname</mark><br /> - You did not enter enough charcaters for the firstname" + nameMessageRules + "</p>";
           } 
           else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 

               var countNonAlpha = 0;
			   
			   if(stringName.charCodeAt(stringLength - 1) === 45){
				   countNonAlpha++;				  
			   }			   
			             var p = stringName.indexOf('-');						 
						 var P = stringName.lastIndexOf('-');						 
						 if(p !== P){
						 countNonAlpha++;
						 }
				
				for (var i=0;i<3;i++ ) {

                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
				}

              
               for (var i=3;i<stringLength;i++ ) {

                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) || (stringName.charCodeAt(i) === 45)) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;						 
                   } 

       
               } // End of the for loop

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Surname</mark><br /> - Only alphabetic characters are allowed in first 3 fields for the firstname(optional Hyphen(-) <mark>only one</mark> after 3rd field but not at the end)<br />" + "</p>";
               }

           }
       } 

       return errMessages;

     }  //  End of function

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     function validateSurname(errMessages) {

       var nameMessageRules="<p> - Please enter a minimum of 4 alphabetic characters</p>";

       var stringName = document.application.sName.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Surname</mark><br /> - The surname field can not be left empty or just blank characters<br />" + "</p>";
       }   
       else { 
           if (stringLength < 4) {
               errMessages += "<p><mark>Surname</mark><br /> - You did not enter enough charcaters for the surname(a minimum of 4 alphabetic characters)<br />" + "</p>";
           } 
           else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 

               var countNonAlpha = 0;   

			   if((stringName.charCodeAt(stringLength - 1) === 45) || (stringName.charCodeAt(stringLength - 1) === 39)){
				   countNonAlpha++;				  
			   }		
						 var q = stringName.indexOf("'");						 
						 var Q = stringName.lastIndexOf("'");	   
			             var p = stringName.indexOf('-');						 
						 var P = stringName.lastIndexOf('-');						 
						 if((p !== P) || (q != Q) || (q + 1 === p) || (p +1 == q)){
						 countNonAlpha++;
						 }
						
              
               for (var i=0;i<4;i++ ) {

                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
       
               } // End of the for loop
			   
			   for (var j=4;j<stringLength;j++ ) {

                   if (! ( (stringName.charCodeAt(j) > 64) && (stringName.charCodeAt(j) < 91) || (stringName.charCodeAt(j) === 45) || (stringName.charCodeAt(j) === 39)) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
       
               } // End of the for loop

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Name</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }

           }
        
       }
	  return errMessages;
     }  //  End of function
	 
	 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     function validateDOB(errMessages) {
		 
       var nameMessageRules=" - Date format is MMMYYYY";

       var stringName = document.application.dob.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Date of Birth</mark><br /> - The Date of birth field can not be left empty or just blank characters<br />" + "</p>";
       }   
       else if(stringLength < 7){
               errMessages += "<p><mark>Date of Birth</mark><br /> - You did not enter required values for the Date of Birth" + nameMessageRules + "</p>";
           } 
           else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 
			   			   
			  			   
			   var month = stringName.slice(0,3);
			   var months  = new Array("JAN",   "FEB", "MAR",    "APR",
	    						"MAY",       "JUN",     "JUL",     "AUG",
								"SEP", "OCT",  "NOV", "DEC");	
               var countNonAlpha = 0;
			  			   
			   var ans_ = contains(months,month);			   
			   function contains(a, obj) {
       			  for (var i=0;i<12;i++ ) {
                   if ( a[i] === obj )  {  // A=65  .....  Z=90 - upper case range
                         return true; 
				   }       
               } 		   
						 return false;
			   }
                  if(ans_ != true){
					  countNonAlpha++;
				  } 

				var year = stringName.slice(3,7);
			    var myDate         = new Date(); 
			    var myYear         = myDate.getFullYear(); 			   
			    var _diff = myYear - year;				
			   if((_diff < 20)){				   
				   countNonAlpha++;
			   }
			   
			   for (var j=0;j<4;j++ ) {

                   if (! ( (year.charCodeAt(j) > 47) && (year.charCodeAt(j) < 58)  ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   }      
               } // End of the for loop			   
                   
			   
			   

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Date of birth</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }

           }
        
      
	  return errMessages;
     }  //  End of function 
	 
	 
	 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     function validateEmail(errMessages) {

       var nameMessageRules=", Please enter a minimum of 3 alphabetic characters";

       var stringName = document.application.email.value;	  
       stringName = stringName.trim();
	   
	    var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Email</mark><br /> - The email field can not be left empty or just blank characters<br />" + "</p>";
       }        
       else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop
			   var countNonAlpha = 0;
			   
			    if((stringName.charCodeAt(stringLength - 1) === 46) || (stringName.charCodeAt(stringLength - 1) === 64)){
				   errMessages += "<p><mark>Email</mark><br /> - Charcters (@) or (.) cannot be at the end<br />" + "</p>";			  
			   }		
						 var q = stringName.indexOf('@');						 
						 var Q = stringName.lastIndexOf('@');	   
			             var p = stringName.indexOf('.');						 
						 var P = stringName.lastIndexOf('.');						 
						 if((p !== P) || (q != Q) || (q + 1 === p) || (p +1 == q)){
						 errMessages += "<p><mark>Email</mark><br /> - Charcters (@) or (.) cannot be beside each other<br />" + "</p>";
						 
						 }
						 
				
						 
				var array = stringName.split('@');
				var part1 = array[0];				
				var myArray = array[1].split('.');
				var part2 = myArray[0];				
				var part3 = myArray[1];
				
				//
				if(part3 == 'CA' || part3 == 'COM'){
					countNonAlpha = 0;
				}
				else{					
					countNonAlpha++;				
				}
                			   
			   
				
				for (var i=0;i<3; i++ ) {

                   if (! ( (part1.charCodeAt(i) > 64) && (part1.charCodeAt(i) < 91) || (part1.charCodeAt(i) > 47) && (part1.charCodeAt(i) < 58) ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
				}
				
				for (var i=4;i<part1.length; i++ ) {

                   if (! ( (part1.charCodeAt(i) > 64) && (part1.charCodeAt(i) < 91) || (part1.charCodeAt(i) > 47) && (part1.charCodeAt(i) < 58) ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
				}
				
				for (var i=0;i<3;i++ ) {

                   if (! ( (part2.charCodeAt(i) > 64) && (part2.charCodeAt(i) < 91) || (part2.charCodeAt(i) > 47) && (part2.charCodeAt(i) < 58) ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
				}
				
				for (var i=4;i<part2.length;i++ ) {

                   if (! ( (part2.charCodeAt(i) > 64) && (part2.charCodeAt(i) < 91) || (part2.charCodeAt(i) > 47) && (part2.charCodeAt(i) < 58) ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
				}             
               
               if  (countNonAlpha) {
                   errMessages +="<p><mark>Email</mark><br /> - Domain should be com or ca<br />" + "</p>";
               }

           }
        
	
       return errMessages;

     }  //  End of function
	 
	 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	  function validatePhone(errMessages) {
		 
       var nameMessageRules=" - Date format is MMMYYYY";

       var stringName = document.application.phone.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Date of Birth</mark><br /> - The Date of birth field can not be left empty or just blank characters<br />" + "</p>";
       }   
       else if(stringLength < 12){
               errMessages += "<p><mark>Date of Birth</mark><br /> - You did not enter required values for the Date of Birth" + nameMessageRules + "</p>";
           } 
           else {         
			   			   
			  			   
			  
               var countNonAlpha = 0;
			   
			   var pos = stringName.indexOf('-');
			   var pos1 = stringName.lastIndexOf('-');
			  if(( pos != 3) && ( pos1 != 7)){				  
				  countNonAlpha++;
			  }
			 
			 var array = stringName.split('-');
			 
			 var part3 = array[2];
				if(part3 >= '1001' && part3 <= '9999'){
					countNonAlpha = 0;
				}
				else{					
					countNonAlpha++;				
				}
				
			 var part1 = array[0];
			  if(part1 == '416' || part1 == '647' ){
					countNonAlpha = 0;
				}
				else{					
					countNonAlpha++;				
				}			 
			
				var part2 = array[1];		
				if(part2 >= '200' && part2 <= '600'){
					countNonAlpha = 0;
				}
				else{					
					countNonAlpha++;				
				}
				
				
			 
			 for (var j=0;j<stringName.length;j++ ) {

                   if  (!( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58) ||(stringName.charCodeAt(j) === 45) )  ){  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                                           }
				  										   
				 }				   
               // End of the for loop		
                   
		   			   

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Date of birth</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }

           }
        
      
	  return errMessages;
     }  //  End of function 
	 
	 
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	 function validateAdd(errMessages) {
		 
       var nameMessageRules=" - Date format is MMMYYYY";

       var stringName = document.application.address.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;
		
       if (stringLength === 0) { 
           errMessages += "<p><mark>Date of Birth</mark><br /> - The Date of birth field can not be left empty or just blank characters<br />" + "</p>";
       }        
           else {         
			   			   
			  	stringName = stringName.toUpperCase();		   
			  
               var countNonAlpha = 0;
			 
			 var posi = 0;
			 for (var j=0;j<stringLength;j++ ) {

                   if  ( (stringName.charCodeAt(j) > 64) && (stringName.charCodeAt(j) < 91) )  {  // A=65  .....  Z=90 - upper case range
                         posi++;
                                           }				  										   
				 }				   
               // End of the for loop		
                  if(!(posi >= 5)){
					  countNonAlpha++;
				  } 
		   			   

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Date of birth</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }

           }
        
      
	  return errMessages;
     }  //  End of function 
	 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	 function validateApt(errMessages) {
		 
       var nameMessageRules=" - Date format is MMMYYYY";

       var stringName = document.application.apt.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;
		
       if (stringLength === 0) { 
           countNonAlpha = 0;
       }        
           else {         
			   			   
			  	stringName = stringName.toUpperCase();		   
			  
               var countNonAlpha = 0;
			 
			 
			 

                   if  (!( (stringName.charCodeAt(0) > 64) && (stringName.charCodeAt(0) < 91) || (stringName.charCodeAt(0) > 47) && (stringName.charCodeAt(0) < 58))  ){  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                                           }				  										   
				 			   
               // End of the for loop		
                   
		   			   

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Date of birth</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }

           }
        
      
	  return errMessages;
     }  //  End of function 
	 
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	 function validateCity(errMessages) {

       var nameMessageRules=", Please enter a minimum of 3 alphabetic characters";

       var stringName = document.application.city.value;
       stringName = stringName.trim();
	   
	    var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Firstname</mark><br /> - The firstname field can not be left empty or just blank characters<br />" + "</p>";
       }        
       else { 
           if (stringLength < 5) {
               errMessages += "<p><mark>Firstname</mark><br /> - You did not enter enough charcaters for the firstname" + nameMessageRules + "</p>";
           } 
           else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 

               var countNonAlpha = 0;
			   
			   if(stringName.charCodeAt(stringLength - 1) === 45){
				   countNonAlpha++;				  
			   }			   
			             var p = stringName.indexOf('-');						 
						 var P = stringName.lastIndexOf('-');						 
						 if(p !== P){
						 countNonAlpha++;
						 }
				
				for (var i=0;i<5;i++ ) {

                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
				}

              
               for (var i=5;i<stringLength;i++ ) {

                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) || (stringName.charCodeAt(i) === 45)) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;						 
                   } 

       
               } // End of the for loop

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Surname</mark><br /> - Only alphabetic characters are allowed in first 3 fields for the firstname(optional Hyphen(-) <mark>only one</mark> after 3rd field but not at the end)<br />" + "</p>";
               }

           }
       } 

       return errMessages;

     }  //  End of function
	 
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	 function validateProvince(errMessages) {

       var nameMessageRules=", Please enter a minimum of 3 alphabetic characters";

       var stringName = document.application.province.selectedIndex;
       if (stringName === -1) {                    // -1 indicates none selected
           errMessages += "<li><mark>What to do today?</mark> - You must select one of the 'What to do today?' options</li>";
       }   

       return errMessages;

     }  //  End of function
	 
	 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	function validateAuthorization(errMessages) {
		
		 var countNonAlpha = 0;
       var nameMessageRules=" - Date format is MMMYYYY";

       var stringName = document.application.preCode.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;
	   
	   if(stringLength == 0){
		   
		   countNonAlpha = 0;
	   } 

        else if(stringLength > 8){
               errMessages += "<p><mark>Date of Birth</mark><br /> - You did not enter required values for the Date of Birth" + nameMessageRules + "</p>";
           } 
           else {         
			   			   
			  			   
			  
               
			   
			    var t = stringName.charCodeAt(3);
			   
			   if(!(t == 45)){
				   
				   countNonAlpha++;
			   }
			  var total_ = 0;
			   var total1_ = 0;
			   
			  
			   
			   var pos = stringName.indexOf('-');
			   
			   var pos1 = stringName.lastIndexOf('-');
			  if(( pos != 3)){				  
				  countNonAlpha++;
			  }
			 
				   
		var part1 = stringName.substr(0,3);			 
			 for (var j=0;j<3;j++ ){
			  total_ += +part1[j];
			 }				
			
				var part2 = stringName.substr(4,4);	
				for (var j=0;j<4;j++ ){
			  total1_ += +part2[j];
			 }				
			
			if(!((total_*2) === total1_)){
				countNonAlpha++;
			}	
			 
			 for (var j=0;j<3;j++ ) {

                   if  (!( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58) )  ){  // A=65  .....  Z=90 - upper case range
                         
						
						 countNonAlpha++;
						 break;
                                           }
				  										   
				 }				   
               // End of the for loop		
                   for (var j=4;j<8;j++ ) {

                   if  (!( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58) )  ){  // A=65  .....  Z=90 - upper case range
                         
						 
						 countNonAlpha++;
						 break;
                                           }
				  										   
				 }
				
				 
		   			   

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Date of birth</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }
			   
			   
			   

           }
        
      
	  return errMessages;
     }  //  End of function 
	 
	 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	function validateyearAtLoc(errMessages) {
		
       var nameMessageRules=" - Date format is MMMYYYY";

       var stringName = document.application.currYears.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Date of Birth</mark><br /> - The Date of birth field can not be left empty or just blank characters<br />" + "</p>";
       }   
       
           else { 
                // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 
			   			   
			  			   
			   	
               var countNonAlpha = 0;		  			   
			   	   
			   if(stringName >= '1' && stringName  <= '40'){
					countNonAlpha = 0;
				}
				else{					
					countNonAlpha++;				
				}	
                  
				
			   for (var j=0;j<stringLength;j++ ) {

                   if (! ( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58)  ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         //break;
                   }      
               } // End of the for loop			   
                   
			   
			   

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Date of birth</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }

           }
        
      
	  return errMessages;
     }  //  End of function 
	 
	 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	function validateIncome(errMessages) {
		 
       var nameMessageRules=" - Date format is MMMYYYY";

       var stringName = document.application.income.value;
	   var stringName1 = document.application.payment.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Date of Birth</mark><br /> - The Date of birth field can not be left empty or just blank characters<br />" + "</p>";
       }   
       
           else { 
                // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 
			   			   
			  			   
			   	
               var countNonAlpha = 0;	 
			   	   
			   if(!(stringName >= stringName1*4)){
				   countNonAlpha++;
			   }
			   	                  
				
			   for (var j=0;j<stringLength;j++ ) {

                   if (! ( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58)  ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         //break;
                   }      
               } // End of the for loop			   
                   
			   
			   

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Date of birth</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }

           }
        
      
	  return errMessages;
     }  //  End of function 
	 
	 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	function validatePayment(errMessages) {
		 
       var nameMessageRules=" - Date format is MMMYYYY";

       
	   var stringName = document.application.payment.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Date of Birth</mark><br /> - The Date of birth field can not be left empty or just blank characters<br />" + "</p>";
       }   
       
           else { 
                // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 
			   			   
			  			   
			   	
               var countNonAlpha = 0;	 
			   	 
			   if(!(stringName > 200)){
				   countNonAlpha++;
			   }
			   	                  
				
			   for (var j=0;j<stringLength;j++ ) {

                   if (! ( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58)  ) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         //break;
                   }      
               } // End of the for loop			   
                   
			   
			   

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Date of birth</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }

           }
        
      
	  return errMessages;
     }  //  End of function 
	 
	 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	 	 function validatePCode(errMessages) {

       var nameMessageRules="<p> - Please enter a minimum of 4 alphabetic characters</p>";

       var stringName = document.application.postal.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<p><mark>Surname</mark><br /> - The surname field can not be left empty or just blank characters<br />" + "</p>";
       }   
       else 
           if (stringLength < 7) {
               errMessages += "<p><mark>Surname</mark><br /> - You did not enter enough charcaters for the surname(a minimum of 4 alphabetic characters)<br />" + "</p>";
           } 
           else { 
               //stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 

               var countNonAlpha = 0;
			   var y = stringName.charCodeAt(3);
			   
				  if(!(y == 32) ){					
				   countNonAlpha++;
		   }
		   
				var q = stringName.indexOf(" ");						 
				var Q = stringName.lastIndexOf(" ");	  
				if((q !== Q)){
				  countNonAlpha++;					
				}
				
			
		   
			  var alpha  = new Array("D",   "F", "I",    "O",
	    						"Q",       "U",     "W",     "Z");	
               
			  			   
			   var ans_ = contains(alpha,stringName.charAt(0));	
			   
			   function contains(a, obj) {
				   
       			  for (var i=0;i<8;i++ ) {
                   if ( a[i] === obj )  {  // A=65  .....  Z=90 - upper case range
                         return true; 
				   }       
               } 		   
						 return false;
			   }
                  if(ans_ == true){
					  countNonAlpha++;
				  }			   
			  
		   
			   var part1 = stringName.substr(0,3)			   
			   var part2 = stringName.substr(4,3)
			   alert(part2);
			   
			   if(!(((part1.charCodeAt(1) > 47) && (part1.charCodeAt(1) < 58)) && (((part1.charCodeAt(0) > 64) && (part1.charCodeAt(0) < 91)) && ((part1.charCodeAt(2) > 64) && (part1.charCodeAt(2) < 91))))){
				   
				   countNonAlpha++;
			   }
			   
				   
			else if ( !(((part2.charCodeAt(1) > 64) && (part2.charCodeAt(1) < 91)) && ((part2.charCodeAt(0) > 47) && (part2.charCodeAt(0) < 58)) && ((part2.charCodeAt(2) > 47) && (part2.charCodeAt(2) < 58)))){
				   alert("fghj");
				   countNonAlpha++;
			   }	
			   
			   
              
               for (var i=0;i<3;i++ ) {

                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) || (stringName.charCodeAt(i) > 47) && (stringName.charCodeAt(i) < 58)) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
       
               } // End of the for loop	
			   for (var i=4;i<7;i++ ) {

                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) || (stringName.charCodeAt(i) > 47) && (stringName.charCodeAt(i) < 58)) ) {  // A=65  .....  Z=90 - upper case range
                         countNonAlpha++;
                         break;
                   } 
       
               } // End of the for loop	
			  
			 

               if  (countNonAlpha) {
                   errMessages +="<p><mark>Name</mark><br /> - Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</p>";
               }

           }
        
       
	    return errMessages;
     }  //  End of function
	 
	 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	  function checkCredit(errMessages) {
                         
			   var countNonAlpha = 0;   
			    
               
			var x = document.application.creditCheck[0].checked ; 
			var y = document.application.creditCheck[1].checked ; 
           
		
          if(x == y){
			  countNonAlpha++;
		  }
		  else if (x === false && y === false){
			  countNonAlpha++;
		  }
		   if(x === true){
			  document.application.creditCheck[1].checked = false;
		  }
		   else if(y === true){
			  document.application.creditCheck[0].checked = false;
		  }

              
			if  (countNonAlpha) {
                   errMessages +="<p><mark>Surname</mark><br /> - Only alphabetic characters are allowed in first 3 fields for the firstname(optional Hyphen(-) <mark>only one</mark> after 3rd field but not at the end)<br />" + "</p>";
               }
		return errMessages;
	  }
	  
	  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  
	  function checkEmail(errMessages) {
                         
			   var countNonAlpha = 0;   
			    
               
			var x = document.application.emailConsent[0].checked ; 
			var y = document.application.emailConsent[1].checked ; 
           
		
         
		  if (x === false && y === false){
			  countNonAlpha++;
		  }
		   
              
			if  (countNonAlpha) {
                   errMessages +="<p><mark>Surname</mark><br /> - Only alphabetic characters are allowed in first 3 fields for the firstname(optional Hyphen(-) <mark>only one</mark> after 3rd field but not at the end)<br />" + "</p>";
               }
		return errMessages;
	  }
    
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	  function checkHousing(errMessages) {
                         
			   var countNonAlpha = 0;   
			    
               
			var x = document.application.hStatus[0].checked ; 
			var y = document.application.hStatus[1].checked ; 
           
		
          if(x == y){
			  countNonAlpha++;
		  }
		  else if (x === false && y === false){
			  countNonAlpha++;
		  }
		   if(x === true){
			  document.application.hStatus[1].checked = false;
		  }
		   else if(y === true){
			  document.application.hStatus[0].checked = false;
		  }

              
			if  (countNonAlpha) {
                   errMessages +="<p><mark>Surname</mark><br /> - Only alphabetic characters are allowed in first 3 fields for the firstname(optional Hyphen(-) <mark>only one</mark> after 3rd field but not at the end)<br />" + "</p>";
               }
		return errMessages;
	  }



     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     function showErrors(messages) {        
       
        document.getElementById('error').innerHTML = messages;

     }  //  End of function


     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
     function  clearShowErrors() {

        document.getElementById('error').innerHTML = " ";
                 
     }  //  End of function