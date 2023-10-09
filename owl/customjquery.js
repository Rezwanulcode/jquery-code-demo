


$(document).ready(function () {
    // var owl = $('.owl-carousel');
    
    // $('.owl-carousel').owlCarousel({
    //     margin: 20,
        
    //     autoplay: true,
    //     autoplayTimeout: 1000,
    //     autoplayHoverPause: true,
    //     responsiveClass: true,
    //     loop: true,
    //     nav: true,
    //     responsiveRefreshRate: true,

    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 2
    //         },
    //         1200: {
    //             items: 3
    //         },
    //         1920: {
    //             items: 3
    //         }
    //     }
    // });

    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
});



var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

if (document.attachEvent) //if IE (and Opera depending on user setting)
    document.attachEvent("on" + mousewheelevt, function (e) {
        // alert('Mouse wheel movement detected!')
    })
else if (document.addEventListener) //WC3 browsers
    document.addEventListener(mousewheelevt, function (e) {
        // alert('Mouse wheel movement detected!')
    }, false)


// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     margin: 20,
//     autoplay: true,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: true,
//     responsiveClass: true,
//     loop: true,
//     nav: true,
//     responsiveRefreshRate: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         768: {
//             items: 2
//         },
//         1000: {
//             items: 2
//         },
//         1200: {
//             items: 3
//         },
//         1920: {
//             items: 3
//         }
//     }
// });
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY > 0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });





$('.popup-link').magnificPopup({
    type: 'image'
    // other options
});
