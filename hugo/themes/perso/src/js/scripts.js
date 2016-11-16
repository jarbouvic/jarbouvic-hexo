$(document).ready(function() {
    var elementPosition = $('#site-title').offset();

    $(window).scroll(function(){
            if($(window).scrollTop() > elementPosition.top){
                $('#wrapper').addClass('scrolled');
            } else {
                $('#wrapper').removeClass('scrolled');
            }    
    });
});