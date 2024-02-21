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
        event.preventDefault();    /*при нажатии на ссылки меню мы еремещаемся в тот отдет где нахдиться эта часть*/

        var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

        console.log(blockOffset);

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

    })







});