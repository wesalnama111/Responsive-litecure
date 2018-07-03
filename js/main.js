
$(document).ready(function(){
    $(document).mouseup(function(e) {
        var container = $(" .caption-icons-1");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });
    $(".hidebutton").click(function(){
        $(".hiding").toggle();
    });
    $(".hidebutton1").click(function(){
        $(".hiding1").toggle();
        $(".grey").css('height','0px');
        $('.your-courses').toggleClass('your-courses1');
    });
    $(".hidebutton3").click(function(){
        $(".hiding3").toggle();
    });
    $(".hidebutton4").click(function(){
        $(".hiding4").toggle();
    });

    $(".fa-search").on("click",function(){
        $(".icons-1").fadeOut();
    })
    var outerrow=1;
    $(".secondnav .outer-row > div:first-child").on("click", function(){
        $("."+$(this).data("show")).fadeToggle(function () {
            if(outerrow==0){
                $(this).css("display", "none");
                ++outerrow;
            }
             if (outerrow==1){
                $(this).css("display", "flex");
                outerrow=0;
            }

        });
        $(".secondnav .outer-row > div:first-child").css('text-decoration','none');
        $(".secondnav .outer-row > div:first-child").css('opacity','0.6');
        $(this).css('text-decoration','underline');
        $(this).css('opacity','1');
        $(".evidence a").removeClass("extra-style");
        $(".evidence a").removeClass("extra-color");
        $(".education a").removeClass("extra-style");
        $(".education a").removeClass("extra-color");
        $(".partnership a").removeClass("extra-style");
        $(".partnership a").removeClass("extra-color");
        switch($(this).data("show")){
            case "fade-1":
            $(".fade-2").fadeOut();
            $(".fade-3").fadeOut();
            $(".fade-two").fadeOut();
            $(".fade-three").fadeOut();
            break;
            case "fade-2":
            $(".fade-1").fadeOut();
            $(".fade-3").fadeOut();
            $(".fade-one").fadeOut();
            $(".fade-three").fadeOut();
            break;
            case "fade-3":
            $(".fade-2").fadeOut();
            $(".fade-1").fadeOut();
            $(".fade-one").fadeOut();
            $(".fade-two").fadeOut();
            break;
        }
    })
    var afirstchild=1;
    $(".evidence a:first-child").on("click", function(){
        $(".fade-one").fadeToggle(function () {
            if(afirstchild==0){
               ++afirstchild;
                $(this).css("display", "none");
            }
             if (afirstchild==1){
                $(this).css("display", "flex");
                afirstchild=0;
            }

        });
        $(this).toggleClass("extra-style");
        $(".evidence a").toggleClass("extra-color");
        $(this).toggleClass("extra-color");
    });
    var edu=1;
    $(".education a:first-child").on("click", function(){
        $(".fade-two").fadeToggle(function () {
            if(edu==0){
                $(this).css("display", "none");
                ++edu;
            }
             if (edu==1){
                $(this).css("display", "flex");
                edu=0;
            }

        });
        $(this).toggleClass("extra-style");
        $(".education a").toggleClass("extra-color");
        $(this).removeClass("extra-color");
    });
    var you=1;
    $(".partnership a:first-child").on("click", function(){
        $(".fade-three").fadeToggle(function () {
            if(you==0){
                $(this).css("display", "none");
                ++you;
            }
             if (you==1){
                $(this).css("display", "flex");
                you=0;
            }

        });
        $(this).toggleClass("extra-style");
        $(".partnership a").toggleClass("extra-color");
        $(this).removeClass("extra-color");
    });
    var innerareamenu=1;
    $(".linkingarea a").on("click", function (e) {
        e.preventDefault();
        console.log(innerareamenu);
        $(".inner-area-menu").toggle(function () {
            if(innerareamenu==0){
                $(this).css("display", "none");
                ++innerareamenu;
            }
             if (innerareamenu==1){
                $(this).css("display", "flex");
                innerareamenu=0;
            }

        });
    });

    $(" .icons-one ").on("click", function(){
        $(" .caption-icons-1").fadeIn();
        $(" .menu .text-center").css('opacity','1');
    });
    $(" .icons-one ").on("click", function(){
        $(" .caption-icons-1").fadeIn();
        $(".menu .text-center").css('opacity','1');
    });
    $(".show-menu").on("click", function () {
        $("#hidden").show();
        $("#showen").hide();
    });
    $(".left-list-top ul a").on("click", function () {
        $("#hidden").show();
        $("#showen").hide();
        $(".give-margin").hide();
        $("."+$(this).text()).fadeIn();
    });
    $(".hero-img .learn-more").on("click", function () {
        $("#hidden").show();
        $("#showen").hide();
        $(".give-margin").hide();
        $("."+$(this).text()).fadeIn();
    });
    $(".headerlogo1 p").on("click", function () {
        $("#hidden").hide();
        $("#showen").show();
    });
    $(".main-container-there > div").on("click", function () {
        $(".main-container-there > div").removeClass("activated");
        $(this).addClass("activated");
    })

});