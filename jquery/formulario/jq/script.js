$(document).ready(function () {
    // Uso el plugin de datepicker
    $("#datepicker").datepicker();

    // Control del campo vacío de los campos requeridos
    $("form input").on({
        focusout: function () {
            // Si el input es required
            if ($(this).prop("required") == true) {

                if ($(this).prop("type") == "email") {
                    if ($(this).val().length == 0) {
                        $(this).siblings("#error-email").html("Campo obligatorio *").css("color", "red")
                    } else {
                        $(this).siblings("#error-email").html("")
                    }
                } else {
                    if ($(this).val().length == 0) {
                        $(this).siblings("#error-pwd").html("Campo obligatorio *").css("color", "red")
                    } else {
                        $(this).siblings("#error-pwd").html("")
                    }
                }

            }
        }
    })

    // controlo los carácteres del textarea
    $("form textarea").on({
        keyup: function () {
            var a = $(this).val().length
            if (a <= 100) {
                // Calculo los carácteres restantes
                var restantes = 100 - a
                if (restantes === 100) {
                    $("#info").html("Dispone de " + restantes + " carácteres").css("color", "black")
                } else if (restantes === 0) {
                    $("#info").html("Dispone de " + restantes + " carácteres").css("color", "red")
                } else {
                    $("#info").html("Dispone de " + restantes + " carácteres").css("color", "green")
                }
            }
        }
    })
});