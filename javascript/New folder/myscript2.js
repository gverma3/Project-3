

// Subject       : INT222 
// Author        : Gaurav Verma
// Written on    : 
// Last Modified : 8/6/2016

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	   var months  = new Array("Jan",   "Feb", "Mar",    "Apr",
	    						"May",       "Jun",     "Jul",     "Aug",
								"Sep", "Oct",  "Nov", "Dec");	
    	
	   var myDate         = new Date();                       // returns the date object
	   var curmon         = months[myDate.getMonth()];        // 0 through 11
	   var myDay          = myDate.getDate();                 // 1 through 31										   
	   var myYear         = myDate.getFullYear();            // 4 digit year										   
	   
	   var todaysDate= curmon + "/" + myDay + "/" + myYear;		

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function ChkList(check)
    {
        var checkList = check.parentNode.parentNode.parentNode;
        var checks = checkList.getElementsByTagName("input");
        for(var i=0;i<checks.length;i++)
        {
            if(checks[i] != check && check.checked)
            {
                checks[i].checked=false;
            }
        }
    }
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function validateForm() {

       var errMessages = "";	   // Initialize for each time the function is called
	
//	errMessages = validateAuthorization(errMessages);						// Call name validation function	  
//  errMessages = validatePCode(errMessages);												
//	errMessages = validateFirstname(errMessages);
//	errMessages = validateSurname(errMessages);	  
//	errMessages = validateDOB(errMessages);
//	errMessages = validateEmail(errMessages);  
//	errMessages = validatePhone(errMessages);
//	errMessages = validateAdd(errMessages);
//	errMessages = validateApt(errMessages);
//	errMessages = validateCity(errMessages);
//	errMessages = validateProvince(errMessages);	  
//	errMessages = validateIncome(errMessages);
//	errMessages = validatePayment(errMessages);	
//	errMessages = checkCredit(errMessages);
//	errMessages = checkEmail(errMessages); 
//	errMessages = checkHousing(errMessages);    
//	errMessages = validateyearAtLoc(errMessages);
//	errMessages = validateprovRelPCode(errMessages);      

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
	 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function validateFirstname(errMessages) {

       var nameMessageRules=", Please enter a minimum of 3 alphabetic characters<br />";

       var stringName = document.application.fName.value;
       stringName = stringName.trim();
	   
	   var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>Firstname</mark><br /> The firstname field can not be left empty or just blank characters<br />" + "</li>";
       }        
       else { 
           if (stringLength < 3) {
               errMessages += "<li><mark>Firstname</mark><br /> You did not enter enough charcaters for the firstname" + nameMessageRules + "</li>";
           } 
           else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 

               var problem = 0;
			   
			   if(stringName.charCodeAt(stringLength - 1) === 45){
				   problem++;				  
			   }
			   
			   var p = stringName.indexOf('-');						 
			   var P = stringName.lastIndexOf('-');						 
			   if(p !== P){
				  problem++;
			   }
				
			   for (var i=0;i<3;i++ ) {
                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) {  // A=65  .....  Z=90 - upper case range
                         problem++;
                         break;
                   } 
				}
              
               for (var i=3;i<stringLength;i++ ) {
                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) || (stringName.charCodeAt(i) === 45)) ) {  // A=65  .....  Z=90 - upper case range
                         problem++;
                         break;						 
                   }       
               } // End of the for loop

               if (problem) {
                   errMessages +="<li><mark>Surname</mark><br /> Only alphabetic characters are allowed in first 3 fields for the firstname(optional Hyphen(-) <mark>only one</mark> after 3rd field but not at the end)<br />" + "</li>";
               }
           }
       } 
       return errMessages;
     }  //  End of function

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function validateSurname(errMessages) {

       var nameMessageRules="<li> Please enter a minimum of 4 alphabetic characters</li>";

       var stringName = document.application.sName.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>Surname</mark><br /> The surname field can not be left empty or just blank characters<br />" + "</li>";
       }   
       else if (stringLength < 4) {
               errMessages += "<li><mark>Surname</mark><br /> You did not enter enough charcaters for the surname(a minimum of 4 alphabetic characters)<br />" + "</li>";
           } 
           else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop  
               var problem = 0;   

			   if((stringName.charCodeAt(stringLength - 1) === 45) || (stringName.charCodeAt(stringLength - 1) === 39)){
				   problem++;				  
			   }
			   
			   var q = stringName.indexOf("'");						 
			   var Q = stringName.lastIndexOf("'");	   
			   var p = stringName.indexOf('-');						 
			   var P = stringName.lastIndexOf('-');	
			   
			  if((p !== P) || (q != Q) || (q + 1 === p) || (p +1 == q)){
				  problem++;
			  }						
              
              for (var i=0;i<4;i++ ) {
                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) {  // A=65  .....  Z=90 - upper case range
                         problem++;
                         break;
                   }       
               } // End of the for loop
			   
			  for (var j=4;j<stringLength;j++ ) {
                   if (! ( (stringName.charCodeAt(j) > 64) && (stringName.charCodeAt(j) < 91) || 
				   (stringName.charCodeAt(j) === 45) || (stringName.charCodeAt(j) === 39)) ) {  // A=65  .....  Z=90 - upper case range
                         problem++;
                         break;
                   }        
               } // End of the for loop

               if  (problem) {
                   errMessages +="<li><mark>Surname</mark><br /> Only alphabetic characters are allowed in first four fields for the surname(optional hyphen(-) or/and apostrophe(') <mark>only once</mark>, but not at the end nor together.<br />" + "</li>";
               }
           }        
       
	  return errMessages;
     }  //  End of function
	 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function validateDOB(errMessages) {
		 
       var nameMessageRules=" Date format is MMMYYYY<br />";

       var stringName = document.application.dob.value;
       stringName = stringName.trim();       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>Date of Birth</mark><br /> The Date of birth field can not be left empty or just blank characters<br />" + "</li>";
       }   
       else if(stringLength < 7){
               errMessages += "<li><mark>Date of Birth</mark><br /> You did not enter required values for the Date of Birth." + nameMessageRules + "</li>";
           } 
           else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop			   			   
			  			   
			   var month = stringName.slice(0,3);
			   var months  = new Array("JAN",   "FEB", "MAR",    "APR",
	    						"MAY",       "JUN",     "JUL",     "AUG",
								"SEP", "OCT",  "NOV", "DEC");	
               var problem = 0;
			  			   
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
					  problem =8;
			   } 

			   var year = stringName.slice(3,7);
			   var myDate         = new Date(); 
			   var myYear         = myDate.getFullYear(); 			   
			   var _diff = myYear - year;				
			   if((_diff < 20)){				   
				   problem = 7;
			   }
			   
			   for (var j=0;j<4;j++ ) {
                   if (! ( (year.charCodeAt(j) > 47) && (year.charCodeAt(j) < 58)  ) ) {  // A=65  .....  Z=90 - upper case range
                         problem = 6;
                         break;
                   }      
               } // End of the for loop			   

               if  (problem == 8) {
                   errMessages +="<li><mark>Date of birth</mark><br /> The first 3 characters are not initials of month.<br />" + "</li>";
               }
			   else if(problem ==6){
				   errMessages+="<li><mark>Date of birth</mark><br /> The last four characters must be numbers.<br />" + "</li>";
			   }
			   else if(problem == 7){
				   errMessages +="<li><mark>Date of birth</mark><br /> Your age must be older than 20 years at the time of application.<br />" + "</li>";
			   }			  
           }     
	  return errMessages;
     }  //  End of function 	 
	 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function validateEmail(errMessages) {       

       var stringName = document.application.email.value;	  
       stringName = stringName.trim();
	   
	   var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>Email</mark><br /> - The email field can not be left empty or just blank characters<br />" + "</li>";
       }        
       else { 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop
			   var problem = 0;
			   
			  if((stringName.charCodeAt(stringLength - 1) === 46) || (stringName.charCodeAt(stringLength - 1) === 64)){
				  problem = 9;				   			  
			  }	
			  
			  var q = stringName.indexOf('@');						 
			  var Q = stringName.lastIndexOf('@');	   
			  var p = stringName.indexOf('.');						 
			  var P = stringName.lastIndexOf('.');
			  
			  if((p !== P) || (q != Q) || (q + 1 === p) || (p +1 == q)){
				  problem = 1;				  				 
			  }				
						 
			  var array = stringName.split('@');
			  var part1 = array[0];				
			  var myArray = array[1].split('.');
			  var part2 = myArray[0];				
			  var part3 = myArray[1];				
				
			 if(part3 == 'CA' || part3 == 'COM'){
				problem = 0;
			 }
			 else{					
				problem = 3;				
			 }			   
				
			for (var i=0;i<3; i++ ) {
                if (! ( (part1.charCodeAt(i) > 64) && (part1.charCodeAt(i) < 91) || (part1.charCodeAt(i) > 47) && (part1.charCodeAt(i) < 58) ) ) {  // A=65  .....  Z=90 - upper case range
                         problem++;
                         break;
                } 
			}
				
			for (var i=4;i<part1.length; i++ ) {
                if (! ( (part1.charCodeAt(i) > 64) && (part1.charCodeAt(i) < 91) || (part1.charCodeAt(i) > 47) && (part1.charCodeAt(i) < 58) ) ) {  // A=65  .....  Z=90 - upper case range
                         problem++;
                         break;
                } 
			}
				
			for (var i=0;i<3;i++ ) {
                if (! ( (part2.charCodeAt(i) > 64) && (part2.charCodeAt(i) < 91) || (part2.charCodeAt(i) > 47) && (part2.charCodeAt(i) < 58) ) ) {  // A=65  .....  Z=90 - upper case range
                         problem++;
                         break;
                } 
			}
				
			for (var i=4;i<part2.length;i++ ) {
                 if (! ( (part2.charCodeAt(i) > 64) && (part2.charCodeAt(i) < 91) || (part2.charCodeAt(i) > 47) && (part2.charCodeAt(i) < 58) ) ) {  // A=65  .....  Z=90 - upper case range
                         problem++;
                         break;
                 } 
			}             
               
            if  (problem == 3) {
                   errMessages +="<li><mark>Email</mark><br /> Domain should be .com or .ca<br />" + "</li>";
            }
			else if(problem == 1){
				errMessages += "<li><mark>Email</mark><br /> Charcters (@) or (.) cannot be beside each other.<br />" + "</li>";		
			}
			else if(problem != 3 || 1 || 9){
				errMessages += "<li><mark>Email</mark><br /> The email you enters is not valid.<br />" + "</li>";		
			}
			else if(problem == 9){
				errMessages += "<li><mark>Email</mark><br /> Charcters (@) or (.) cannot be at the end.<br />" + "</li>";
			}
           }     
	
       return errMessages;
     }  //  End of function
	 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function validatePhone(errMessages) {
		 
       var nameMessageRules=" Phone No. format is NNN-NNN-NNNN<br />";

       var stringName = document.application.phone.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>Phone No.</mark><br /> The field can not be left empty or just blank characters.<br />" + "</li>";
       }   
       else if(stringLength < 12){
               errMessages += "<li><mark>Phone No.</mark><br /> You did not enter required values for the Phone no.," + nameMessageRules + "</li>";
           } 
           else {		  
               var problem = 0;
			   
			   var pos = stringName.indexOf('-');
			   var pos1 = stringName.lastIndexOf('-');
			   if(( pos != 3) && ( pos1 != 7)){				  
				  problem = 1;
			   }
			 
			   var array = stringName.split('-');
			 
			   var part3 = array[2];			   
			   if(part3 >= '1001' && part3 <= '9999'){
					problem = 0;
			   }
			   else{					
					problem = 2;				
			   }
				
			   var part1 = array[0];
			   if(part1 == '416' || part1 == '647' ){
					problem = 0;
			   }
			   else{					
					problem = 4;				
			   }			 
			
			   var part2 = array[1];		
			   if(part2 >= '200' && part2 <= '600'){
					problem = 0;
			   }
			   else{					
					problem = 3;				
			   }		
			 
			   for (var j=0;j<stringName.length;j++ ) {
                   if  (!( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58) ||(stringName.charCodeAt(j) === 45) )  ){  // A=65  .....  Z=90 - upper case range
                         problem = 5;
                   }				  										   
				 }// End of the for loop  			   

               if  (problem = 1) {
                   errMessages +="<li><mark>Phone No.</mark><br /> Hyphens are must after first three digits and before last four digits." + nameMessageRules + "</li>";
               }
			   else if  (problem == 2) {
                   errMessages +="<li><mark>Phone No.</mark><br /> The last four digits must be in the range from 1001 to 9999.<br />" + "</li>";
               }
			   else if  (problem == 3) {
                   errMessages +="<li><mark>Phone No.</mark><br /> The three digits in the middle must be in the range from 200 to 600.<br />" + "</li>";
               }
			   else if  (problem == 4) {
                   errMessages +="<li><mark>Phone No.</mark><br /> The first three digits should be 647 or 416.<br />" + "</li>";
               }
			   else if  (problem == 5) {
                   errMessages +="<li><mark>Phone No.</mark><br /> The values you entered are not numbers" + nameMessageRules + "</li>";
               }
           }       
      
	  return errMessages;
     }  //  End of function 	 
	 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function validateAdd(errMessages) {       

       var stringName = document.application.address.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;		
       if (stringLength === 0) { 
           errMessages += "<li><mark>Home Address</mark><br /> - The field can not be left empty or just blank characters.<br />" + "</li>";
       }        
       else {			   			   
			 stringName = stringName.toUpperCase();				  
             var problem = 0;
			 
			 var posi = 0;
			 for(var j=0;j<stringLength;j++ ) {
                 if  ( (stringName.charCodeAt(j) > 64) && (stringName.charCodeAt(j) < 91) )  {  // A=65  .....  Z=90 - upper case range
                         posi++;
                 }				  										   
			 }
               		
             if(!(posi >= 5)){
			     problem++;
		     }   			   

             if(problem) {
                 errMessages +="<li><mark>Home Address</mark><br /> Must have at least five alphabets in this field.<br />" + "</li>";
             }
        }     
      
	  return errMessages;
     }  //  End of function
	 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
	 function validateApt(errMessages) {       

       var stringName = document.application.apt.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;
		
       if (stringLength === 0) { 
           problem = 0;
       }        
       else {		   			   
			stringName = stringName.toUpperCase();			  
            var problem = 0;		 

            if(!( (stringName.charCodeAt(0) > 64) && (stringName.charCodeAt(0) < 91) || (stringName.charCodeAt(0) > 47) && (stringName.charCodeAt(0) < 58))){  // A=65  .....  Z=90 - upper case range
                    problem++;
            }				  										   
			
            if(problem){
                   errMessages +="<li><mark>Apt</mark><br /> Atleast a alphabet or a number in this field.<br />" + "</li>";
            }
        } 
      
	  return errMessages;
     }  //  End of function 
	 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function validateCity(errMessages) {       

       var stringName = document.application.city.value;
       stringName = stringName.trim();	   
	   var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>City</mark><br /> The field can not be left empty or just blank characters<br />" + "</li>";
       }        
       else if (stringLength < 5) {
               errMessages += "<li><mark>City</mark><br /> You did not enter enough charcaters for the field.<br />" + "</li>";
           } 
           else{ 
               stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop  
               var problem = 0;
			   
			   if(stringName.charCodeAt(stringLength - 1) === 45){
				   problem = 1;				  
			   }
			   
			   var p = stringName.indexOf('-');						 
			   var P = stringName.lastIndexOf('-');						 
			   
			   if(p !== P){
				  problem = 2;
			   }
				
			   for (var i=0;i<5;i++ ) {
                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) {  // A=65  .....  Z=90 - upper case range
                         problem = 3;
                         break;
                   } 
				}
              
               for (var i=5;i<stringLength;i++ ) {
                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) || (stringName.charCodeAt(i) === 45)) ) {  // A=65  .....  Z=90 - upper case range
                         problem = 4;
                         break;						 
                   }       
               } // End of the for loop

               if  (problem = 4) {
                   errMessages +="<li><mark>City</mark><br /> Only alphabetic characters are allowed(optional Hyphen(-) <mark>only one</mark>)<br />" + "</li>";
               }
			   else if  (problem == 1) {
                   errMessages +="<li><mark>City</mark><br /> Hyphen can not be entered at the end.<br />" + "</li>";
               }
			   else if  (problem == 2) {
                   errMessages +="<li><mark>City</mark><br /> Hyphen can not be entered twice.<br />" + "</li>";
               }
			   else if  (problem == 3) {
                   errMessages +="<li><mark>City</mark><br /> The first five field must be alphabets<br />" + "</li>";
               }
           }        

       return errMessages;
     }  //  End of function
	 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function validateProvince(errMessages) {       

       var stringName = document.application.province.selectedIndex;
       if (stringName === -1) {                    // -1 indicates none selected
           errMessages += "<li><mark>Province</mark> You must select one of the options<br /></li>";
       }
       return errMessages;
     }  //  End of function
	 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
function validateAuthorization(errMessages) {
		
	   var problem = 0;
       var nameMessageRules=" Authorization Code format is NNN-NNNN.<br />";

       var stringName = document.application.preCode.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;
	   
	   if(stringLength == 0 ){		   
		   problem = 0;
	   } 

       else if(stringLength > 8 || stringLength > 0 &&  stringLength <= 7 ){
               errMessages += "<li><mark>Pre code</mark><br /> - You did not enter required values, " + nameMessageRules + "</li>";
       }
	   else{		   
			 var t = stringName.charCodeAt(3);
			   
			 if(!(t == 45)){				   
				   problem++;
			 }
			   
			 var total_ = 0;
			 var total1_ = 0;			   
			 var pos = stringName.indexOf('-');			   
			 var pos1 = stringName.lastIndexOf('-');
			 
			 if(( pos != 3)){				  
				  problem++;
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
				problem = 6;
			 }	
			 
			 for (var j=0;j<3;j++ ) {
                   if  (!( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58) )  ){  // A=65  .....  Z=90 - upper case range 					
						 problem++;
						 break;
				   }				  										   
			 }				   
               	
             for (var j=4;j<8;j++ ) {
                   if  (!( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58) )  ){  // A=65  .....  Z=90 - upper case range					 
						 problem++;
						 break;
				   }				  										   
			 } 			   
				
			 if (problem == 6){
				 errMessages +="<li><mark>Pre code</mark><br /> - The sum of the digits to the right of the hyphen are not equal to twice the value of the digits on the left of the hyphen.<br />" + "</li>";
			 }	
             else if(problem != 0 && 6 ) {
                 errMessages +="<li><mark>Pre code</mark><br /> - Only numeric characters are allowed for the code(mandatory hyphen(-) on fourth position).<br />" + "</li>";
             }			 
           }
		   
	  return errMessages;
     }  //  End of function 
	 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function validateyearAtLoc(errMessages) {       

       var stringName = document.application.currYears.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>Years at curr. loc.</mark><br /> - The field can not be left empty or just blank characters.<br />" + "</li>";
       }      
       else { 
             var problem = 0;		  			   
			   	   
			 if(stringName >= '1' && stringName  <= '40'){
					problem = 0;
			 }
			 else{					
					problem = 1;				
			 }             
				
			 for (var j=0;j<stringLength;j++ ) {
                 if (! ( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58)  ) ) {  // A=65  .....  Z=90 - upper case range
                         problem = 2;                         
                 }      
             } // End of the for loop		   

             if  (problem == 1) {
                   errMessages +="<li><mark>Years at curr. loc.</mark><br /> Value must be in the range of 1 to 40.<br />" + "</li>";
             }
			 if  (problem == 2) {
                   errMessages +="<li><mark>Years at curr. loc.</mark><br /> Only numeric values.<br />" + "</li>";
             }
           }        
      
	  return errMessages;
     }  //  End of function 
	 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function validateIncome(errMessages) {	       

       var stringName = document.application.income.value;
	   var stringName1 = document.application.payment.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>Monthly Income</mark><br /> The field can not be left empty or just blank characters<br />" + "</li>";
       }      
       else { 
               var problem = 0;	 
			   	   
			   if(!(stringName >= stringName1*4)){
				   problem = 1;
			   }	   	                  
				
			   for (var j=0;j<stringLength;j++ ) {
                   if (! ( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58)  ) ) {  // A=65  .....  Z=90 - upper case range
                         problem = 2;
                         break;
                   }      
               } 
			   
               if  (problem = 1) {
                   errMessages +="<li><mark>Monthly Income</mark><br /> Monthly income should be four times or higher than the monthly payment.<br />" + "</li>";
               }
			   else if  (problem = 1) {
                   errMessages +="<li><mark>Monthly Income</mark><br /> Only numeric values.<br />" + "</li>";
               }
           }        
      
	  return errMessages;
     }  //  End of function 
	 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function validatePayment(errMessages) {       
       
	   var stringName = document.application.payment.value;
       stringName = stringName.trim();       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>Monthly Payment</mark><br /> The field can not be left empty or just blank characters<br />" + "</li>";
       }       
       else { 
               var problem = 0;	 
			   	 
			   if(!(stringName > 200)){
				   problem = 1;
			   }			   	                  
				
			   for (var j=0;j<stringLength;j++ ) {
                   if (! ( (stringName.charCodeAt(j) > 47) && (stringName.charCodeAt(j) < 58)  ) ) {  // A=65  .....  Z=90 - upper case range
                         problem = 2;
                         break;
                   }      
               } 

               if  (problem == 1) {
                   errMessages +="<li><mark>Monthly Payment</mark><br /> Must be greater then 200.<br />" + "</li>";
               }
			   else if  (problem == 2) {
                   errMessages +="<li><mark>Monthly Payment</mark><br /> Only numeric values.<br />" + "</li>";
               }
           }        
      
	  return errMessages;
     }  //  End of function 
	 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function validatePCode(errMessages) { 
 
	   var nameMessageRules=" Postal Code format is ANA NAN<br />";

       var stringName = document.application.postal.value;
       stringName = stringName.trim();
       
       var stringLength = stringName.length;

       if (stringLength === 0) { 
           errMessages += "<li><mark>Postal Code</mark><br /> The postal field can not be left empty or just blank characters<br />" + "</li>";
       }   
       else if (stringLength < 7) {
               errMessages += "<li><mark>Postal Code</mark><br /> You did not enter enough charcaters for the postal code(the format is <mark>ANA NAN</mark>)<br />" + "</li>";
           } 
           else {
               var problem = 0;
			   var y = stringName.charCodeAt(3);
			   
			   if(!(y == 32) ){					
				  problem = 1;
		      }			  
				
			  var q = stringName.indexOf(" ");						 
			  var Q = stringName.lastIndexOf(" ");	  
			  if((q !== Q)){
				  problem = 1;					
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
					  problem = 9;
			  }			  
		   
			  var part1 = stringName.substr(0,3);			   
			  var part2 = stringName.substr(4,3);			   
			   
			  if(!(((part1.charCodeAt(1) > 47) && (part1.charCodeAt(1) < 58)) && (((part1.charCodeAt(0) > 64) && 
			     (part1.charCodeAt(0) < 91)) && ((part1.charCodeAt(2) > 64) && (part1.charCodeAt(2) < 91))))){
					problem = 2;
			   }			   
				   
			  else if ( !(((part2.charCodeAt(1) > 64) && (part2.charCodeAt(1) < 91)) && ((part2.charCodeAt(0) > 47) && 
			          (part2.charCodeAt(0) < 58)) && ((part2.charCodeAt(2) > 47) && (part2.charCodeAt(2) < 58)))){
				   problem = 2;
			   }		   
              
               for (var i=0;i<3;i++ ) {
                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) || 
				      (stringName.charCodeAt(i) > 47) && (stringName.charCodeAt(i) < 58)) ) {  // A=65  .....  Z=90 - upper case range
                         problem = 2;
                         break;
                   }       
               } // End of the for loop	
			   
			   for (var i=4;i<7;i++ ) {
                   if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) || 
				      (stringName.charCodeAt(i) > 47) && (stringName.charCodeAt(i) < 58)) ) {  // A=65  .....  Z=90 - upper case range
                         problem = 2;
                         break;
                   }        
               } // End of the for loop	
			  
              if(problem == 9){
				   errMessages +="<li><mark>Postal Code</mark><br /> The alphabetic character on the first field is not allowed.<br />" + "</li>";  
			  }
			  else if  (problem == 2) {
                   errMessages +="<li><mark>Postal Code</mark><br /> Only Capital alphabetic and numeric characters are allowed in postal code(mandatory <mark>space</mark> after first three fields)." + nameMessageRules +"</li>";
              }
			  else if  (problem == 1) {
                   errMessages +="<li><mark>Postal Code</mark><br /> Space can be used only once." + nameMessageRules +"</li>";
              }			  
           }        
       
	    return errMessages;
     }  //  End of function
	 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function checkCredit(errMessages) {
                         
			var problem = 0    
               
			var x = document.application.creditCheck[0].checked ; 
			var y = document.application.creditCheck[1].checked ;        
		
          if(x == y){
			  problem = 1;
		  }
		  else if (x === false && y === false){
			  problem = 2;
		  }
		  
		  if(x === true){
			  document.application.creditCheck[1].checked = false;
		  }
		  
		  if  (problem == 1) {
                   errMessages +="<li><mark>Credit Check</mark><br /> Only one option can be selected.<br />" + "</li>";
          }
		  if  (problem == 2) {
                   errMessages +="<li><mark>Credit Check</mark><br /> One option must be selected.<br />" + "</li>";
          }
		  
		return errMessages;
	  }
	  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  
 function checkEmail(errMessages) {
                         
			var problem = 0;			    
               
			var x = document.application.emailConsent[0].checked ; 
			var y = document.application.emailConsent[1].checked ; 		
         
		  if (x === false && y === false){
			  problem++;
		  }
		  
		  if  (problem) {
                   errMessages +="<li><mark>Email Consent</mark><br /> One option must be selected.<br />" + "</li>";
          }
		  
		return errMessages;
	  }
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	 
 function checkHousing(errMessages) {
                         
			var problem = 0;	    
               
			var x = document.application.hStatus[0].checked ; 
			var y = document.application.hStatus[1].checked ;            
		
           if(x == y){
			   problem = 1;
		   }
		   else if (x === false && y === false){
			  problem = 2;
		   }  
		  
		   if(x === true){
			  document.application.hStatus[1].checked = false;
		   }
		
		  if  (problem == 1) {
                   errMessages +="<li><mark>Housing status</mark><br /> Only one option can be selected.<br />" + "</li>";
          }
		  else if  (problem == 1) {
                   errMessages +="<li><mark>Housing status</mark><br /> One option must be selected.<br />" + "</li>";
          }
		  
		return errMessages;
	  }
	  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	  
	  
 function validateprovRelPCode(errMessages) {
	 
		 var problem = 0;
		 errMessages1 = validatePCode(errMessages);
		 errMessages2 = validateProvince(errMessages);
		 
		 if(errMessages1 === errMessages2){
			 var stringName1 = document.application.postal.value;			 
			 var stringName2 = document.application.province.value;            
                             
				if(stringName1.charCodeAt(0) == 65){					
					if(!(stringName2 == "Newfoundland & Labrador")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 66){
					if(!(stringName2 == "Nova Scotia")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 67){
					if(!(stringName2 == "Prince Edward Island")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 69){
					if(!(stringName2 == "New Brunswick")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 71 || 72 || 74){
					if(!(stringName2 == "Quebec")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 75 || 76 || 77 || 78 || 80){
					if(!(stringName2 == "Ontario")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 82){
					if(!(stringName2 == "Manitoba")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 83){
					if(!(stringName2 == "Saskatchewan")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 84){
					if(!(stringName2 == "Alberta")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 86){
					if(!(stringName2 == "British Columbia")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 88){
					if(!(stringName2 == "Northwest Territories" || "Nunavut")){
						problem++;
					}
				}
				else if(stringName1.charCodeAt(0) == 89){
					if(!(stringName2 == "Yukon")){
						problem++;
					}
				}		 

               if  (problem) {
                   errMessages +="<p><mark>Postal code and Province</mark><br /> Entered postal code doesn't match with province.<br />" + "</p>";
               }
           }       
       
	  return errMessages;
     }  //  End of function

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function showErrors(messages) {        
        document.getElementById('error').innerHTML = messages;
     }  //  End of function

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 function  clearShowErrors() {
        document.getElementById('error').innerHTML = " ";
     }  //  End of function