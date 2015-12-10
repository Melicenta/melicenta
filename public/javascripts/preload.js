/**
 * Created by denezhnaya on 06.11.2015.
 */

var preloader = document.getElementsByClassName('preloader')[0];
preloader.style.display = 'block';

var script = document.createElement('script');
script.src = "/javascripts/jquery-ui-1.11.4/external/jquery/jquery.js";
document.body.appendChild(script);

var titleText = document.getElementsByClassName('title')[0].innerHTML;

function afterLoad() {
    //alert("Загрузка завершена: " + typeof(jQuery));
    var img = document.createElement('img');
    var scripts = ['/javascripts/jquery-ui-1.11.4/jquery-ui.js','/javascripts/menu.js'];
    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    });

    img.onload = function () {
        //alert("Успех " + this.src);
    };

    img.onerror = function () {
       // alert("Ошибка " + this.src);
    };

    img.src = '/images/RxSUX.png'

    if (titleText === 'Origin'){
        showLoader();
    }
}

script.onload = script.onerror = function() {
    if (!this.executed) { // выполнится только один раз
        this.executed = true;
        afterLoad();
    }
};

script.onreadystatechange = function() {
    var self = this;
    if (this.readyState == "complete" || this.readyState == "loaded") {
        setTimeout(function() {
            self.onload()
        }, 0); // сохранить "this" для onload
    }
};


function showLoader(){
    $('.img').each(function (){
        var self = $(this);
        var img = self.find('img');
        img.onload = function (){
            preloadCircle(p);
        };
        img.onerror = function (){
            $(this).hide();
            self.innerHTML('<p>Nothing to show</p>')
        };
    });
}

function preloadCircle(block){
    $(block).append('<div class="preload-circle"><div class="circle-outer"><div class="circle-inner">Wait for it</div></div></div>');
}


window.onload = function () {
    $('.preloader').css('display', 'none');

    /*controls scripts*/
  if (titleText === 'Exquisite experience'){
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



    expander();
}
    /*controls scripts*/

}