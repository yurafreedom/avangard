$(document).ready(function () {
 if( $(".swiper-container").length ) {
	  var objectSwiper = new Swiper ('#objects_slider', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ".js--doctor-pag",
			clickable: true,
		},
	  });
        $(window).resize(function() {
            mySwiper.update(true),
            console.log("mySwiper update")
        })
 }
});

$(document).ready(function () {
 if( $(".swiper-container").length ) {
      var kindSwiper = new Swiper ('#kinds_slider', {
        slidesPerView: 1,
        spaceBetween: 31,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".js--doctor-pag",
            clickable: true,
        },
      });
        $(window).resize(function() {
            mySwiper.update(true),
            console.log("mySwiper update")
        })
 }
});

// var objectSwiper = new Swiper ('#objects_slider', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: ".js--doctor-pag",
//         clickable: true,
//     },
// });

// var kindSwiper = new Swiper ('#kinds_slider', {
//     slidesPerView: 1,
//     spaceBetween: 31,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: ".js--doctor-pag",
//         clickable: true,
//     },
// });

$("form").each(function() {
    $(this).validate({
        errorPlacement: function(e, i) {
              e.addClass("error-message"),
              e.appendTo(i.parent("div"))
        },
        highlight: function(e) {
            $(e).addClass("has-error").parent().addClass("has-error");
        },
        unhighlight: function(e) {
            $(e).removeClass("has-error").parent().removeClass("has-error");
        },
        ignore: [],
        rules: {
            name: "required",
            tel: {
                required: !0
            },
            email: {
                required: !0,
                email: true
            }
        },
    });
});