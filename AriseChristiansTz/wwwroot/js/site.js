// Write your JavaScript code.
$(document).ready(function () {
    // Mega dropdown menu.
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
            $(this).toggleClass('open');
        },
        function () {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
            $(this).toggleClass('open');
        }
    );
});