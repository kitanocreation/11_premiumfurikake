$(function() {

    // console.log('test');

    $(function() {
        $(window).on('scroll', function() {
            $('.fadeup').each(function() {
                let $this = $(this);
                let scrollTop = $(window).scrollTop();
                let elementOffsetTop = $this.offset().top + 100;
                let windowHeight = $(window).height();
                if(elementOffsetTop < scrollTop + windowHeight) {
                    $this.addClass('fadeup-on');
                }
            });
        });
    });
});
