var pytheo = "Pytheo",
    author = "Quic Flicks (@quicflicks)";
console.log(pytheo, "By", author),
    $(".open").click(function () {
        $(".open").toggleClass("close"), $(".elements").toggleClass("close");
    }),
    $(".emailInput").focus(function () {
        $("#note").css("display", "block");
    }),
    $(".emailInput").focusout(function () {
        $("#note").css("display", "none");
    });
