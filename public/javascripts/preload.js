/**
 * Created by denezhnaya on 06.11.2015.
 */
$(window).load(function (){
    var b = $('body');
    var img = $('.bc');
    $('.preloader').css('display','block');
    $.ajax({
        url:'/images/RxSUX.png',
        context: document.body
    }).done(function (){
        b.css('background-image','url(/images/RxSUX.png)');
        $('.preloader').css('display','none');
    });

});
