if(/Android/.test(navigator.appVersion)) {
    window.addEventListener("resize", function() {
        if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
            document.activeElement.scrollIntoView();
        }
    });
} 


var block = $('<div>').css({'height':'50px','width':'50px'}),
    indicator = $('<div>').css({'height':'200px'}),
    scrollbarWidth = 0;

$('body').append(block.append(indicator));
var w1 = $('div', block).innerWidth();    
block.css('overflow-y', 'scroll');
var w2 = $('div', block).innerWidth();
$(block).remove();
scrollbarWidth = (w1 - w2);


var bodyScrollOptions = {
    reserveScrollBarGap: true
};

function openModal(hrefModal) {
    
    if ($(hrefModal).length > 0){
        $(hrefModal).fadeIn(300);
    
        bodyScrollLock.clearAllBodyScrollLocks();
        bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
    }
}

function closeModals() {
    if (scrollbarWidth > 0) {
        $('.popup-block:not(:hidden)').fadeOut(200, function() {
            bodyScrollLock.clearAllBodyScrollLocks();
        });
    } else {
        $('.popup-block:not(:hidden)').fadeOut(200);
        
        bodyScrollLock.clearAllBodyScrollLocks();
    }
}


$(document.body).on('click','[data-toggle="modal"]',function(e) {
    e.preventDefault();
    
    var hrefModal = $(this).attr('data-target');
    
    openModal(hrefModal);
});

$(document.body).on('click','.popup-block__overlay',function(e) {
    var closeButton = $(this).children('[data-toggle="dismiss"]');
    
    if (e.target != this) {
//      return false;
    } else {
        closeModals();
    }
});


$(document.body).on('click','[data-toggle="dismiss"]',function(e) {
    e.preventDefault();
    
    closeModals();
});


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
        slidesPerView: 3,
        spaceBetween: 31,
        navigation: {
            nextEl: '.kinds-button-next',
            prevEl: '.kinds-button-prev',
        },
        pagination: {
            el: ".js--kinds-pag",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        }
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
        slidesPerView: 4,
        navigation: {
            nextEl: '.reviews-button-next',
            prevEl: '.reviews-button-prev',
        },
        pagination: {
            el: ".js--reviews-pag",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
        }
      });
        $(window).resize(function() {
            reviewSwiper.update(true),
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

$.extend($.validator.messages, {
    required: "Ошибка. Поле обязательно для заполнения",
    email: "Ошибка. Пожалуйста, введите корректный адрес электронной почты",
});

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