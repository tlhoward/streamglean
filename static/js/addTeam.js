/* ********************************************************************************************** */
/* ***************************************** RECAPTCHA ****************************************** */
/* ********************************************************************************************** */

	var onloadCallback = function() {
        grecaptcha.render('g-recaptcha', {
          'sitekey' : '6LdDhSkUAAAAACNeH507j02X8yH-p_QhJEEDJHHm'
        });
      };

$(document).ready(function() {


/* ********************************************************************************************** */
/* ******************************************* SUBMIT ******************************************* */
/* ********************************************************************************************** */

	$("#team-add-submit").click(function(e) {
		if(!grecaptcha.getResponse()) {
		    e.preventDefault();
		    alert("Please verify the reCAPTCHA!");
		}
	});


});