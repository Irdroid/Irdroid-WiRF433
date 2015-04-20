/*

ArduDome 0.9
Domotic with Arduino + RaspberryPI + PHP + JSON + jQuery
Opensource platform and browser-independent web based Arduino bidirectional remote control & sensors
by Luca Soltoggio
15/03/2013
http://arduinoelettronica.wordpress.com/

THIS IS JUST THE jQuery PART

This script will call every 5 seconds the PHP script, udpating HTML with right values got from Arduino.
If a slider would be clicked or touched, changing his value, the script will suddenly call PHP script giving
PIN to change, and VALUE to set.

*/



// get and parse json data from PHP file and update HTML page


// call PHP file sending "pin" & "cmd" got from HTML page, and update
function set_arduino_data(pname,pvalue) {
    $.get('http://192.168.2.1/cgi-bin/wget.sh?namex=' + pname + '&namey=' + pvalue , function(data) {
        
    });
}

// if a slider changed, this funciont will call the function above using as "pname" the name of
// modified slider and as "pvalue" the actual value of the slider (0 or 1)
function detect_changes() {
    $("[data-role='slider']").change(function() {
        set_arduino_data($(this).attr("name"),$(this).val());
    });
}

// function for parsing json data and updating HTML page
// this will update slider status and label value

// function for checking if the page is visible or not
// (if not visible it will stop updating data)


// start all above every 5 seconds
$(document).ready(function(){
   
    detect_changes();
    setInterval('detect_changes()', 5000);
   
});
