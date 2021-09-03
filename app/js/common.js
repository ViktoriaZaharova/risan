$('[name="phone"]').mask('+7(999) 999-99-99');

new WOW().init();

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end

// mobile menu
$('.btn-burger').on('click', function () {
   $(this).toggleClass('click');
   $('.mobile-menu').fadeToggle();
});
