$(document).ready(function(){

	$( ".menu-button" ).click(function() {
        $( "html" ).toggleClass( "nav-open" );
    });

    $( ".menu-link" ).click(function() {
        $('.menu-button').trigger('click');
    });



	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 5) {
	        $("#primary-nav").removeClass("navbar-page-top");
	    } else {
	        $("#primary-nav").addClass("navbar-page-top");
	    }
	});


	$(".hover-slider .carousel-indicators div").hover(function(){
	  var goto = Number( $(this).attr('data-slide-to') );
	  $("#ToolsSLider").carousel(goto);  
	});





	// $('.tool-icon').click(function(){

	//     $('.tool-icon').removeClass('active');
	//     $(this).addClass('active');

	// });


	// $('#ToolsSLider').on('slide.bs.carousel', function () {
	// 	$('.tool-icon').removeClass('active');
	// })

// $('#ToolsSLider').on('slide.bs.carousel', function (ev) {
//   var id = ev.relatedTarget.id;
//   switch (id) {
//   	case "item-chat":
//       $('.tool-icon-chat').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-chat.svg)');
//       break;
//     case "item-call":
//       $('.tool-icon-call').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-call.svg)');
//       break;
//     case "item-idea":
//       $('.tool-icon-idea').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-idea.svg)');
//       break;
//     case "item-event":
//       $('.tool-icon-event').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-event.svg)');
//       break;
//     case "item-contact":
//       $('.tool-icon-contact').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-contact.svg)');
//       break;
//     case "item-test":
//       $('.tool-icon-test').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-test.svg)');
//       break;
//     case "item-email":
//       $('.tool-icon-email').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-email.svg)');
//       break;
//     case "item-launch":
//       $('.tool-icon-launch').addClass('active');
//       $('#tools').css('background-image','url(../images/bg-tools-accent-launch.svg)');
//       break;

//   }
// })






});
