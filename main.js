$(function() {
    $(".toggler").on("click", function(){
        if($(".items").hasClass("active")){
            $(".toggler").toggleClass()
            $(".items").removeClass("active");
        }
        else{
            $(".items").addClass("active");
        }
    })
})