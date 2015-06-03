$(document).ready(function(){
	$(".album").click(function() {
  	$(".menu").animate({
  		top: "0px",
     	left: "0px"
   	}, 400);
		$("body").animate({
     	marginLeft: "195px"
  	}, 400);
    $("#album-container").hide(400);
 	});

 	$('.icon-close').click(function() {
   	$('.menu').animate({
    	left: "-195px"
   	}, 400);
		$('body').animate({
    	marginLeft: "0px",
      marginRight: "0px"
  	}, 400);
    $("header").html("My Photo Album").css("color", "white").css("background-color","#333333");
    $("#album-container").show(200);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
	});
  $(".album1").click(function(){
    $("header").html("Kids and I").css("color", "black").css("background-color","white");
    $(".photo1a").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $(".photo2a").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(200);
    $(".photo3a").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $("#album1").show(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album2").click(function(){
    $("header").html("Neat Stuff").css("color", "black").css("background-color","white");
    $(".photo1b").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(200);
    $(".photo2b").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $(".photo3b").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $("#album1").hide(200);
    $("#album2").show(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album3").click(function(){
    $("header").html("Beautiful Wife").css("color", "black").css("background-color","white");
    $(".photo1c").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $(".photo2c").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(200);
    $(".photo3c").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(200);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").show(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album4").click(function(){
    $("header").html("The Wife and I").css("color", "black").css("background-color","white");
    $(".photo1d").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(200);
    $(".photo2d").hide().removeClass("col-sm-offset-4").removeClass("col-sm-4").addClass("col-sm-4").show(200);
    $(".photo3d").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show(200);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").show(200);
    $("#album5").hide(200);
    $("#album6").hide(200);
  })
  $(".album5").click(function(){
    $("header").html("Just the Kids").css("color", "black").css("background-color","white");
    $(".photo1e").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $(".photo2e").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $(".photo3e").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").show(200);
    $("#album6").hide(200);
  })
  $(".album6").click(function(){
    $("header").html("Holidays").css("color", "black").css("background-color","white");
    $(".photo1f").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $(".photo2f").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $(".photo3f").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show(200);
    $("#album1").hide(200);
    $("#album2").hide(200);
    $("#album3").hide(200);
    $("#album4").hide(200);
    $("#album5").hide(200);
    $("#album6").show(200);
  })
  $(".photo1a").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo2a").hide();
    $(".photo3a").hide();
    $(".photo1a").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo2a").click(function(){
      $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1a").hide();
    $(".photo3a").hide();
    $(".photo2a").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(200);
  })
  $(".photo3a").click(function(){
      $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1a").hide();
    $(".photo2a").hide();
    $(".photo3a").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo1b").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo2b").hide();
    $(".photo3b").hide();
    $(".photo1b").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(200);
  })
  $(".photo2b").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1b").hide();
    $(".photo3b").hide();
    $(".photo2b").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo3b").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1b").hide();
    $(".photo2b").hide();
    $(".photo3b").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo1c").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo2c").hide();
    $(".photo3c").hide();
    $(".photo1c").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo2c").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1c").hide();
    $(".photo3c").hide();
    $(".photo2c").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(200);
  })
  $(".photo3c").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1c").hide();
    $(".photo2c").hide();
    $(".photo3c").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(200);
  })
  $(".photo1d").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo2d").hide();
    $(".photo3d").hide();
    $(".photo1d").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(200);
  })
  $(".photo2d").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1d").hide();
    $(".photo3d").hide();
    $(".photo2d").hide().removeClass("col-sm-4").addClass("col-sm-4").addClass("col-sm-offset-4").show(200);
  })
  $(".photo3d").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1d").hide();
    $(".photo2d").hide();
    $(".photo3d").hide().removeClass("col-sm-4").addClass("col-sm-6").addClass("col-sm-offset-3").show(200);
  })
  $(".photo1e").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo2e").hide();
    $(".photo3e").hide();
    $(".photo1e").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo2e").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1e").hide();
    $(".photo3e").hide();
    $(".photo2e").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo3e").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1e").hide();
    $(".photo2e").hide();
    $(".photo3e").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo1f").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo2f").hide();
    $(".photo3f").hide();
    $(".photo1f").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo2f").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1f").hide();
    $(".photo3f").hide();
    $(".photo2f").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
  $(".photo3f").click(function(){
    $('.menu').animate({
      left: "-195px"
    }, 200);
    $('body').animate({
      marginLeft: "0px",
      marginRight: "0px"
    }, 200);
    $(".btn").show();
    $(".photo1f").hide();
    $(".photo2f").hide();
    $(".photo3f").hide().removeClass("col-sm-4").addClass("col-sm-8").addClass("col-sm-offset-2").show(200);
  })
 $(".btn1").click(function(){
    $(".menu").animate({
      top: "0px",
      left: "0px"
    }, 200);
    $("body").animate({
      marginLeft: "195px"
    }, 200);
    $(".photo1a").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".photo2a").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show();
    $(".photo3a").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".btn").hide();
  });
  $(".btn2").click(function(){
      $(".menu").animate({
      top: "0px",
      left: "0px"
    }, 200);
    $("body").animate({
      marginLeft: "195px"
    }, 200);
    $(".photo1b").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show();
    $(".photo2b").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".photo3b").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".btn").hide();
  });
  $(".btn3").click(function(){
      $(".menu").animate({
      top: "0px",
      left: "0px"
    }, 200);
    $("body").animate({
      marginLeft: "195px"
    }, 200);
    $(".photo1c").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".photo2c").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show();
    $(".photo3c").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show();
    $(".btn").hide();
  });
  $(".btn4").click(function(){
      $(".menu").animate({
      top: "0px",
      left: "0px"
    }, 200);
    $("body").animate({
      marginLeft: "195px"
    }, 200);
    $(".photo1d").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show();
    $(".photo2d").hide().removeClass("col-sm-offset-4").removeClass("col-sm-4").addClass("col-sm-4").show();
    $(".photo3d").hide().removeClass("col-sm-offset-3").removeClass("col-sm-6").addClass("col-sm-4").show();
    $(".btn").hide();
  });
  $(".btn5").click(function(){
      $(".menu").animate({
      top: "0px",
      left: "0px"
    }, 200);
    $("body").animate({
      marginLeft: "195px"
    }, 200);
    $(".photo1e").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".photo2e").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".photo3e").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".btn").hide();
  });
  $(".btn6").click(function(){
      $(".menu").animate({
      top: "0px",
      left: "0px"
    }, 200);
    $("body").animate({
      marginLeft: "195px"
    }, 200);
    $(".photo1f").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".photo2f").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".photo3f").hide().removeClass("col-sm-offset-2").removeClass("col-sm-8").addClass("col-sm-4").show();
    $(".btn").hide();
  });
});


    