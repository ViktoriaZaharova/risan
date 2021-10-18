$('.home-slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

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
        $('.btn-burger').removeClass('click');
        $('.mobile-menu').fadeOut();
        return false;
    });
});
//плавный скролл end

// mobile menu
$('.btn-burger').on('click', function () {
   $(this).toggleClass('click');
   $('.mobile-menu').fadeToggle();
});

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});