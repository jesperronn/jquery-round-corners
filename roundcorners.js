// Add rounded corners to all div elements with class="round"
// Adds corners the "technorati way", described on
// http://justaddwater.dk/2007/02/15/rounded-corners-the-technorati-way/
// requires you to set class="round" on div or similar elements
// also works on images, which it wraps in a div element to add the
// necessary content
var round_corners = function(){
 var str = '<b class="cn tl"></b><b class="cn tr"></b><b class="cn bl"></b><b class="cn br"></b>';
 // Three lines below handle images
 // $('img.round').wrap('<div class="round"></div>');//returns img element
 // var floating = $('img.round').css("float");
 // $('img.round').removeClass('round').css("float", "none").parent().css("float", floating);
 $('.round').addClass("boxc").append(str);
};

$(document).ready( function(){round_corners();});
