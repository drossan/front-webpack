$(function() {
    var offset = 250, scrollDuration = 300;

    // Para header index.html
    $(window).scroll( () =>  $(this).scrollTop() > offset 
        ? $('.nav-fixed-desktop').addClass('nav-fixed-desktop--reduce') 
        : $('.nav-fixed-desktop').removeClass('nav-fixed-desktop--reduce') 
    );

    $('#down').click(function (e) {
        e.preventDefault()
        let point = $("#"+ $(this).data('down'));
        $('html,body').animate({scrollTop: $(point).offset().top - 80},'slow');
    })


    // Para header && footer 2 + buttom return top
    $(window).on("scroll", () => {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        console.log((scrollHeight - scrollPosition) / scrollHeight * 100)
        if ((scrollHeight - scrollPosition) / scrollHeight * 100 < 5 && $('.footer-fixed').hasClass('footer-fixed--bottom')) {
            $('.footer-fixed').removeClass('footer-fixed--bottom') 
        }else{
            if((scrollHeight - scrollPosition) / scrollHeight * 100 > 10 && !$('footer').hasClass('footer-fixed--bottom')){
                $('.footer-fixed').addClass('footer-fixed--bottom') 
            }
        }

        if ($(this).scrollTop() > offset) {
            $('.top').fadeIn(500);
            $('.header-fixed').addClass('header-fixed--top') 
        } else {
            $('.top').fadeOut(500);
            $('.header-fixed').removeClass('header-fixed--top') 
            $('.footer-fixed').removeClass('footer-fixed--bottom') 
        }

    })

    $('.top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, scrollDuration);
    });
    
    
    $('#search').click( (e)=> {
        e.preventDefault()
        $('.header--search').toggleClass('header--search-inline');
    })
})