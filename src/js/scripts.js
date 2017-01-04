hljs.initHighlightingOnLoad();


$(document).ready(function() {
    var elementPosition = $('#site-nav').offset();

    function scrolledOrNot() {
        if($(window).scrollTop() > elementPosition.top){
            $('#wrapper').addClass('scrolled');
        } else {
            $('#wrapper').removeClass('scrolled');
        }   
    }

    window.onscroll = scrolledOrNot;

    var doit;
    window.onresize = function() {
        clearTimeout(doit);
        doit = setTimeout(function() {
            elementPosition = $('#site-nav').offset();
            scrolledOrNot();
        }, 200);
    };
});