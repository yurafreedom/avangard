$(document).ready(function () {
 if( $(".swiper-container").length ) {
	  var objectSwiper = new Swiper ('#objects_slider', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.objects-button-next',
			prevEl: '.objects-button-prev',
		},
		pagination: {
			el: ".js--objects-pag",
			clickable: true,
		},
	  });
        $(window).resize(function() {
            objectSwiper.update(true),
            console.log("objectSwiper update")
        })
 }
});

$(document).ready(function () {
 if( $(".swiper-container").length ) {
      var kindSwiper = new Swiper ('#kinds_slider', {
        slidesPerView: 1,
        spaceBetween: 31,
        navigation: {
            nextEl: '.kinds-button-next',
            prevEl: '.kinds-button-prev',
        },
        pagination: {
            el: ".js--kinds-pag",
            clickable: true,
        },
      });
        $(window).resize(function() {
            kindSwiper.update(true),
            console.log("kindSwiper update")
        })
 }
});

$(document).ready(function () {
 if( $(".swiper-container").length ) {
      var warrantySwiper = new Swiper ('#warranty_slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.warranty-button-next',
            prevEl: '.warranty-button-prev',
        },
        pagination: {
            el: ".js--warranty-pag",
            clickable: true,
        },
      });
        var imageSwiper = new Swiper('#image_slider');

        warrantySwiper.params.control = imageSwiper;
        imageSwiper.params.control = warrantySwiper;
        
        $(window).resize(function() {
            warrantySwiper.update(true),
            console.log("warrantySwiper update")
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