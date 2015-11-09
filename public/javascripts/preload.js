/**
 * Created by denezhnaya on 06.11.2015.
 */
$(function (){
    var b = $('body');
    var img = $('.bc');
    $('.preloader').css('display','block');
    $.ajax({
        method: 'GET',
        url:'/',
        context: document.body
    }).done(function (){
        b.css('background-image','url(/images/RxSUX.png)');
        $('.preloader').css('display','none');
    });

});
