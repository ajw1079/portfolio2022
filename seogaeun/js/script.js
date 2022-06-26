$(document).ready(function(){
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    sectionsColor : ["#FDF6F0", "#FDF6F0", "#FDF6F0", "#FDF6F0" ,"#FDF6F0"]
	});


  const typed = new Typed(".type", {
    strings : ["I'm Gaeun", "I'm Developer", "I'm Publisher"],
    stringsElement : null, 
    typeSpeed : 100, 
    backSpeed : 100, 
    smartBackspace : true, 
    startDelay : 1000,
    backDelay : 1000, 
    loop : true,
    showCursor : true,
    cursorChar : "|"
  });

  let siteImg_width = $(".siteImg").width();
  $(".siteImg").css("height", siteImg_width*0.574);

  $(window).resize(function(){
    siteImg_width = $(".siteImg").width();
    $(".siteImg").css("height", siteImg_width*0.574);
  });


  $(".thankyou .btn").click(function(){
    $(".thankyou").css("display", "none");
  });

});

