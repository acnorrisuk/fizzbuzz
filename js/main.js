$(document).ready(function () {

    $("#fizzbuzz").submit(function () {
        $("#output").html("");
        var start = $("#start").val();
        var finish = $("#finish").val();
        for (i = start; i <= finish; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                $("#output").append("<span class='fizzbuzz'>FizzBuzz</span>");
            } else if (i % 3 === 0) {
                $("#output").append("<span class='fizz'>Fizz</span>");
            } else if (i % 5 === 0) {
                $("#output").append("<span class='buzz'>Buzz</span>");
            } else {
                $("#output").append("<span>" + i + "</span>");
            }
        }
        return false;
    });

});