var counter = 0;
function animateCounter () {
    
    $("#counter").addClass('animated fadeOutLeft');
    $('#counter').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $("#counter").html(counter);
        $("#counter").removeClass('animated fadeOutLeft');
        $("#counter").addClass('animated fadeInLeft');
        $('#counter').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#counter").removeClass('animated fadeInLeft');
        });
    });
    
}
$(document).ready(function () {
    $('#add').click(function() {
        counter++;
        animateCounter();
    });
    
    $('#remove').click(function() {
        if(counter > 0) {
            counter--;
            animateCounter();
        }
    });
    
    $('#reset').click(function() {
        if(counter > 0) {
            counter = 0;
            animateCounter();
        }
    });
});
    
