$(document).ready(function() {
    $('.mt-popover').popover();

    var startdate = moment().format('DD/MM/YYYY');
    var enddate = moment().add(1, 'day').format('DD/MM/YYYY');

    $('#booking-date-vn').dateRangePicker({
        startDate: new Date(),
        selectForward: true,
        minDays: 2,
        language: "vi",
        container: 'body',
        autoClose: true,
        startOfWeek: 'monday',
        format: 'DD/MM/YYYY',
        setValue: function(s) {
            if (!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val()) {
                $(this).val(s);
            }
        }
    });
});
//end document.ready

if ($('#price-range').length) {
    $("#price-range").ionRangeSlider({
        type: "double",
        min: 0,
        max: 3000000,
        step: 500000,
        grid: true,
        grid_snap: true,
        postfix: " vnđ",
        force_edges: true,
        prettify_enabled: true
    });
}

//Function to animate slider captions 
function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function() {
        var $this = $(this),
            $animationType = $this.data('animation');
        $this.addClass($animationType).one(animEndEv, function() {
            $this.removeClass($animationType);
        });
    });
}

//Variables on page load 
var $myCarousel = $('#carousel-example-generic'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

//Initialize carousel 
$myCarousel.carousel();

//Animate captions in first slide on page load 
doAnimations($firstAnimatingElems);

//Pause carousel  
$myCarousel.carousel('pause');


//Other slides to be animated on carousel slide event 
$myCarousel.on('slide.bs.carousel', function(e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
});
$('#carousel-example-generic').carousel({
    interval: 3000,
    pause: "false"
});

AOS.init({
    duration: 1200,
})

if ($('#province-info .content').length) {
    $('#province-info .content').readmore({
        speed: 1500,
        lessLink: '<a href="#"><i class="fa fa-chevron-up fa-2x" aria-hidden="true"></i></a>',
        moreLink: '<a href="#"><i class="fa fa-chevron-down fa-2x" aria-hidden="true"></i></a>'
    });
}

if ($('.collapse-content').length) {
    $('.collapse-content').readmore({
        speed: 1500,
        lessLink: '<a href="#">Thu gọn</a>',
        moreLink: '<a href="#">Mở rộng</a>'
    });
}

$("#search-hotel-vn").click(function() {
    location.href = "list-hotel.html";
});

$(".mosaic-cell-caption").click(function() {
    location.href = "list-hotel.html";
})