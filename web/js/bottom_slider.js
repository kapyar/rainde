$(function () {

        $("#f_style").click(function (e) {
            var cur_img = $(".image-shown");
            var next_img = $("#img_f_style");

            cur_img.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
            next_img.addClass("image-shown").removeClass("image-hidden").css("x-index", 20);

            $("carousel-inner").not([cur_img, next_img]).css("x-index", 1);
            e.preventDefault();
        });


        $("#el_fstyle").click(function (e) {
            var cur_img = $(".image-shown");
            var next_img = $("#img_el_fstyle");

            cur_img.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
            next_img.addClass("image-shown").removeClass("image-hidden").css("x-index", 20);

            $("carousel-inner").not([cur_img, next_img]).css("x-index", 1);
            e.preventDefault();
        });

        $("#web_design").click(function (e) {
            var cur_img = $(".image-shown");
            var next_img = $("#img_web_design");

            cur_img.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
            next_img.addClass("image-shown").removeClass("image-hidden").css("x-index", 20);

            $("carousel-inner").not([cur_img, next_img]).css("x-index", 1);
            e.preventDefault();
        });

        $("#dev_design").click(function (e) {
            var cur_img = $(".image-shown");
            var next_img = $("#img_dev_design");

            cur_img.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
            next_img.addClass("image-shown").removeClass("image-hidden").css("x-index", 20);

            $("carousel-inner").not([cur_img, next_img]).css("x-index", 1);
            e.preventDefault();
        });

        $("#visualization").click(function (e) {
            var cur_img = $(".image-shown");
            var next_img = $("#img_visualization");

            cur_img.removeClass("image-shown").addClass("image-hidden").css("z-index", -10);
            next_img.addClass("image-shown").removeClass("image-hidden").css("x-index", 20);

            $("carousel-inner").not([cur_img, next_img]).css("x-index", 1);
            e.preventDefault();
        });

    }
);