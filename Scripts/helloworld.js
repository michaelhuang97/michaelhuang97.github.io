console.log("hello world");
$(function() {
	$("#Button_1").on("click", Button_1_click_event)
	$("#Button_1").on("mouseover", Button_1_hover_event)
	taunt = 0
})

function Button_1_click_event(e) {
	if ($("body").hasClass("background-red")) {
		$("body").removeClass("background-red")
		$("body").addClass("background-white")
	} else {
		$("body").removeClass("background-white")
		$("body").addClass("background-red")
	}
}

function Button_1_hover_event(e) {
	var bodyWidth = $("body").width()
  	var bodyHeight = $("body").height()
	var randPosX = Math.floor((Math.random()*bodyWidth));
  	var randPosY = Math.floor((Math.random()*bodyHeight));
	/*var grab_top = $(this).offset().top
	/*$(this).css("top", grab_top+10) */
	$('#Button_1').css('left', randPosX);
  	$('#Button_1').css('top', randPosY);

  	switch(taunt) {
  		case 0: {
  			$("#Button_1").text("Haha")
  			taunt++
  		}
  		break;
  		case 1: {
  			$("#Button_1").text("You wish")
  			taunt++
  		}
  		break;
  		case 2: {
  			$("#Button_1").text("Nice try")
  			taunt++
  		}
  		break;
  		case 3: {
  			$("#Button_1").text("Git gud")
  			taunt++
  		}
  		break;
  		case 4: {
  			$("#Button_1").text("Aw you almost made it")
  			taunt++
  		}
  		break;
  		case 5: {
  			$("#Button_1").text("CLICK TO DEFUSE BOMB")
  			taunt++
  		}
  		default: {
  			taunt = 0
  		}
  	}
}