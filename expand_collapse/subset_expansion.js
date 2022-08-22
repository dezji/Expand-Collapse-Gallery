$(document).ready(function() {
    $("a").click(function() {
        $(this).prev().toggleClass("hide")
        
        if ($(this).prev().attr("class")){
            $(this).text("Show more")
        }
        else {
            $(this).text("Show less")
        }
    }); // end of a's click
}); // end of ready