$(document).ready(function(){

    /** Build Object Constructor for Popups */

    var Popup = function(name, target){

        this.name = name;
        this.target = $(target);

        this.buildForm = function(){
            $('body').append("<div class='popup-outer " + this.name + "-outer'></div>");
            $('.' + this.name + '-outer').append(this.target);
            this.target.addClass('popup-inner').prepend('<button class="popup-close">X</button>');
        };

        this.buildForm();
    };

    /**
     * Look for all instances of elements with the class .popup
     * Grab their href value and remove the #
     * The href value minus the hash becomes the name of this popup
     */

    $('.popup').each(function () {

        var name = $(this).attr('href').replace('#', '');
        var target = $(this).attr('href');
        var popup = new Popup(name, target);

    });

    /**
     * When an element with the class .popup is clicked
     * add the relevant classes to their target div
     */

    $('body').on('click', '.popup', function(e){
        var name = $(this).attr('href').replace('#', '');
        var outerPopup = $('.' + name + '-outer');
        outerPopup.addClass('active animated fadeIn');
        setTimeout(function(){
            $('.popup-outer').removeClass('animated fadeIn')
        }, 300);
        e.preventDefault();
    });

    /**
     * When the popup background or the close button is clicked
     * remove the relevant classes to their target div
     */

    $('body').on('click', '.popup-outer, .popup-close', function(e){
        if (e.target !== this) return;
        $('.popup-outer').addClass('animated fadeOut');
        setTimeout(function(){
            $('.popup-outer').removeClass('active animated fadeOut')
        }, 300);
    });

});