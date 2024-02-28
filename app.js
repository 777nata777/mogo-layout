$(function() {

    var header = $("header"),
        introH = $("#intro").innerHeight(), //introH стал равен блоку с id-intro
        scrollOffset = $(window).scrollTop(); /*текущий скрул страницы при загрузки*/


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {   //включас свойства для fixed для скрула,проходя блок intro
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();    /*при нажатии на ссылки меню ,мы перемещаемся в тот отдет где нахдиться эта часть*/

        var $this = $(this), /*закешировали переменную*/
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

    })

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) { /**выбираем селекрот nav_toggle следим по клику по этому элементу */
        event.preventDefault(); /**убрали стандартное поведение кнопки */

        $(this).toggleClass("active"); /*дали класс active нашему бургеру*/
        $("#nav").toggleClass("active");/**при клике добавляем либо убираем класс active для меню */
        
    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event) { /* следим за элементом data-collapse , как только мы на него нажали, мы что то с ним делаем*/
        event.preventDefault(); /**убрали стандартное поведение кнопки */

        var $this = $(this), /*закешировали переменную*/
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /*Slider*/
    $("[data-slider]").slick({
        infinity: true, /*бесконечный*/
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});