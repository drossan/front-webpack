$(function() {
    var offset = 250;

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


    // Para header 2
    var offset2 = 150;
    $(window).scroll( () =>  $(this).scrollTop() > offset2 
        ? $('.header-fixed').addClass('header-fixed--top') 
        : $('.header-fixed').removeClass('header-fixed--top') 
    );
    $('#search').click( (e)=> {
        e.preventDefault()
        $('.header--search').toggleClass('header--search-inline');
    })
})