/**
 * Created by denezhnaya on 28.07.2015.
 */

function selector(button,option,state) {
    var item = $(button),
    /*selector button*/
        container = $(button).parent('ul').parent('.select'),
    /*selector container with css class "select"*/
        multiSelect,mutualSwitch,saveState,setDefault,getData;
    /*selector types*/


    var selected = item.hasClass('checked');
    var used = container.find('li').hasClass('checked');


    multiSelect = function (){
        selected ? unchecked():check();
    };

    mutualSwitch = function (){
        if (used){unselected();}
        check();
    };

    setDefault = function (){
      var first = container.find('li:first');
        first.addClass('checked');
    };

    getData = function (){
        //not realized yet
    }

    var check = function () {
        item.addClass('checked');
    };/*set checked*/

    var unchecked = function () {
        item.removeClass('checked');
    };/* set to default*/

    var unselected =  function () {
        container.find('li').removeClass('checked');
    };


    return {

        init: function () {
            if (option === true){
                multiSelect();
                return this;
            } else if (option === false){
                mutualSwitch();
                return this;
            }

            state ? setDefault() : getData();
        }
    }
}

$(function () {
        var button1 = $('.multi .switch-option');
        var button2 = $('.mutual .switch-option');
        var button3 = $('.single .switch-option');

        /*initialisation*/
        selector(button3,true,true).init();


        /*button triggers*/
        button1.on('click', function () {
            selector($(this),true).init();
        }); /*with multi select option*/

        button2.on('click', function () {
            selector($(this),false).init();
        }); /*with mutual switch option*/

        button3.on('click', function () {
            selector($(this),true,true).init();
        });/*multi-select option provides self switch off function, in this case the single buttons are used*/

    }
);