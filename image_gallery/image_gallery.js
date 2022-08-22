$(document).ready(function() {
    $("ul a").each(function() {
        var imageUrl = $(this).attr("href");
        var imageTitle = $(this).attr("title");
    }); // end of ul a's each

    $("ul a").click(function(evt) {
        evt.preventDefault();

        var imageUrl = $(this).attr("href");
        var imageTitle = $(this).attr("title");

        $("#caption").text(imageTitle);
        $("img").attr("src", imageUrl);
        
    });   // end of ul a's click
}); // end of ready