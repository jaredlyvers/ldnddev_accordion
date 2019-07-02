jQuery(document).ready(function($){
    $('.ldnddev-accordion').on('click', '.ldnddev-accordion__header', function() {
        $(this)
            .toggleClass('-active')
            .next()
            .slideToggle()
            .parent()
            .toggleClass('-active')
    });
});