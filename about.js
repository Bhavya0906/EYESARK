$(document).ready(function(){

    // link action
    $(".action").click(function(e){
        e.preventDefault();

        $(".slide").removeClass("active");
        var slide = $(this).closest(".slide");
        slide.addClass("active");
    });

});

// checkWidth
checkWidth = function(){
    var windowsize = $(window).width();
    if (windowsize > 480) {
        var slideWidth = $('.active').width();
        $('.slide-content').css({
            "width" : slideWidth+"px"
        });
    }
    
}

$(window).resize(function() {
    // onresize
    checkWidth();

    // finish resize
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout( checkWidth , 500);
});

const video = document.getElementById('myVideo');
        const muteButton = document.getElementById('muteButton');

        muteButton.addEventListener('click', function() {
            if (video.muted) {
                video.muted = false;
                muteButton.textContent = '🔊';
            } else {
                video.muted = true;
                muteButton.textContent = '🔇';
            }
        });