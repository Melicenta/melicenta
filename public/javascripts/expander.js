/**
 * Created by denezhnaya on 28.07.2015.
 */

$(
    function expander() {

        var storage = localStorage;
        var container = $('.folder');
        var header = $('.folder-header');
        var expanded, key = 'expanded';

        var value = storage[key];
        if (value === 'on') {
            container.addClass('expanded');
        } else {
            container.removeClass('expanded');
        }



        container.each(function () {

            header.on('click', function () {
                expanded = container.hasClass('expanded');
                if (!expanded) {
                    storage[key] = 'on';
                    container.addClass('expanded').addClass('animated');
                } else {
                    storage[key] = 'off';
                    container.removeClass('expanded').addClass('animated');
                }
            });
        });

        // container.removeClass('animated');

        $('.button-clear').on('click', function () {
            storage.clear();
        });
    });



