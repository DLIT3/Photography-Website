// Animate Smooth Scroll
$('#view-work').on('click',function() {
    const images = $('#images').postion().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});