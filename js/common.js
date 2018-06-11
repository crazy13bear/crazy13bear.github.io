$(document).ready(function() {

	$.stellar({
		responsive: true,
		horisontalOffset: 60
	});
	// popu-magnific
	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup();
	// owl-carousel
	$(".owl-carousel").owlCarousel({
		loop: true,
		responsive: {
			0 : {
				items: 1,
				nav: true
			}
		},
		navText: ""//очищаем содержимое кнопок
	});


	function wResize(){
		// $("header").css('height',$(window).height());
	};
	$(window).resize(function(){
		wResize();
	});

	$(".footer_phone .wrapper .tab_item").first().show();
	$(".footer_phone .wrapper .tab").click(function() {
		$(".footer_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".footer_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".s_contacts .tab").click(function() {
		$(".s_contacts .contacts_wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// not(":first").hide()
	$(".top_phone .wrapper .tab_item").first().show();
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
				ths.trigger('resset');
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() {

	Example: $(".top_header h1").animated("fadeInDown", "fadeInDown");
	Example: $(".top_header h2").animated("fadeInUp", "fadeInUp");
	Example: $(".tabs_header .wrapper").animated("flipInY", "flipInY");

});