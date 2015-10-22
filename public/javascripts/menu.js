/**
 * Created by denezhnaya on 21.10.2015.
 */
function toggle (container,button) {
    var settings = {};

    return  settings = {
        show: function (){
            $(container).addClass('visible');
            $(button).addClass('pushed');
        },
        hide: function (){
            $(container).removeClass('visible');
            $(button).removeClass('pushed');
        }

    }
}


$( function (){
    var container = $('.menu-panel'),
        menuContainer = container.find('.menu-container'),
        menuButton = $('.menu-button'),
        firstClick;

    menuButton.on('click',function (){
        var isVisible = menuContainer.hasClass('visible');
        isVisible ? toggle(menuContainer,menuButton).hide() : toggle(menuContainer,menuButton).show();
    });

    $(document).on('click',function (e){
        if (!firstClick && !(menuButton.is(e.target) ||
            $(menuContainer).is(e.target)) &&
            (menuButton.has(e.target).length === 0) &&
            $(menuContainer).has(e.target).length === 0) {
            toggle(menuContainer,menuButton).hide();
        }
        firstClick = false;
    });


});
