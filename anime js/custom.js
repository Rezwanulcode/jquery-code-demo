var playPause = anime({
    targets: 'div.anime',
    translateY: [{
            value: 200,
            duration: 500
        },
        {
            value: 0,
            duration: 800
        }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
        borderRadius: '15px',
        
    },
    // backgroundColor: "rgba(0, 0, 255, 0.63)",
    delay: function (el, i, l) {
        return i * 1000
    },
    autoplay: false,
    loop: true
});

document.querySelector('.play').onclick = playPause.play;
document.querySelector('.pause').onclick = playPause.pause;