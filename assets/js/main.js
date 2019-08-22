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
        var imageSwiper = new Swiper('#image_slider', {
            slidesPerView: 1,
            spaceBetween: 20,
        });

        warrantySwiper.controller.control = imageSwiper;
        imageSwiper.controller.control = warrantySwiper;

        $(window).resize(function() {
            warrantySwiper.update(true),
            console.log("warrantySwiper update")
        })
 }
});

$(document).ready(function () {
 if( $(".swiper-container").length ) {
      var reviewSwiper = new Swiper ('#reviews_slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.reviews-button-next',
            prevEl: '.reviews-button-prev',
        },
        pagination: {
            el: ".js--reviews-pag",
            clickable: true,
        },
      });
        $(window).resize(function() {
            kindSwiper.update(true),
            console.log("reviewSwiper update")
        })
 }
});

$(".about-block__input").each(function(e) {
    "" != $(this).val() ? $(this).addClass("not-empty") : $(this).removeClass("not-empty")
}),

$(".about-block__input").on("change focusout keydown", function() {
    "" != $(this).val() ? $(this).addClass("not-empty") : $(this).removeClass("not-empty")
})


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