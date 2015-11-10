/**
 * Created by denezhnaya on 06.11.2015.
 */
var script = document.createElement('script');
script.src = "/javascripts/jquery-ui-1.11.4/external/jquery/jquery.js";
document.head.appendChild(script);

function afterLoad() {
    $('.preloader').css('display', 'block');
    alert("Загрузка завершена: " + typeof(jQuery));
    var b = $('body');
    var img = document.createElement('img');

    img.onload = function () {
        alert("Успех " + this.src);
        //b.css('background-image','url(this.src)');
        $('.preloader').css('display','none');
    };

    img.onerror = function () {
        alert("Ошибка " + this.src);
    }
    img.src = '/images/RxSUX.png'
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

