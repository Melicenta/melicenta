/**
 * Created by denezhnaya on 28.07.2015.
 */

function selector(button,option,data) {
    var item = $(button),
    /* selector button*/
        container = $(button).parent('ul').parent('.select'),
    /* selector container with css class "select"*/
        multiSelect,mutualSwitch;
    /* selector types*/
    var selected, used;


    selected = item.hasClass('checked');
    used = container.find('li').hasClass('checked');


    multiSelect = function (){
        selected ? unchecked():check();
    };

    mutualSwitch = function (){
        if (used){unselected();}
        check();
    };


    var check = function (){
        item.addClass('checked');
    };/* set checked*/

    var unchecked = function (){
        item.removeClass('checked');
    };/* set to default*/

    var unselected =  function (){
        container.find('li').removeClass('checked');
    };


    var setSelections = function (data){
        data.each(function (){
            $(this).addClass('checked');
        });
    };

    return {

        init: function (){
            if (option === true){
                multiSelect();
                return this;
            } else if (option === false || option === undefined){
                mutualSwitch();
                return this;
            }

        },
        set: function (){
            setSelections(data);
        }
    }
}

$(function () {
        var button1 = $('.multi .switch-option');
        var button2 = $('.mutual .switch-option');
        var button3 = $('.single .switch-option');

        /* initialisation with default settings*/
        selector(button1,true,$('[data-code = one]')).set();
        selector(button3,true,$('[data-code = six]')).set();
        selector(button3,true,$('[data-code = eight]')).set();


        /* button triggers*/
        button1.on('click', function () {
            selector($(this),true).init();
        }); /* with multi select option*/

        button2.on('click', function () {
            selector($(this),false).init();
        }); /* with mutual switch option*/

        button3.on('click', function () {
            selector($(this),true).init();
        });/* multi-select option provides self switch off function, in this case the single buttons are used*/

    }
);