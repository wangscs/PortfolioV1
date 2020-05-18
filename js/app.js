// $("#scroll-down").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#aboutMe").offset().top
//     }, 2000);
// });

$(document).ready(function() {
    $("#scrollDown").click(function() {
        // Scroll to a certain element

        document.querySelector('#projectPage').scrollIntoView({
            behavior: 'smooth'
        });
    });
});