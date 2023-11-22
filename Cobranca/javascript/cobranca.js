// Lendo o HTML
$(document).ready(function () {
    // Colocando as máscaras
    $("#cardNumber").mask("0000 0000 0000 0000");
    $("#expireDate").mask("00/0000");
    $("#cvc_number").mask("000");
    $("#cpf_input").mask("000.000.000-00");
    $("#tel_input").mask("(00) 0 0000-0000")


    $(".filter_input").on("change", function (e) {
        error = 0;
        $(".filter_input").each(function () {
            if ($(this).val() == "") {
                error++;
            }
        });


        payf = $("#select-payment").val();
        if (payf == "") {
            error++;

        }


        if (error == 0) {
            $("#gerar_cobranca").removeClass("disabled");
        } else {
            $("#gerar_cobranca").addClass("disabled");
        }
    });


    $("#select-payment").on("change", function (e) {
        value = $(this).val();
        if (value == '3') {
            $("#card_form").slideDown();
        } else {
            $("#card_form").slideUp();
        }
    });

    // funcão para desabiliar o botão caso refaça o form
    $("#reset_form").on("click", function(e){

        $("#gerar_cobranca").addClass("disabled");
    })

    $("#gerar_cobranca").on("click", function (e) {

        // Recebendo os valores inseridos nos inputs
        nome_input = $("#nome_input").val();
        email_input = $("#email_input").val();
        cpf_input = $("#cpf_input").val();
        tel_input = $("#tel_input").val();
        valor_input = $("#valor_input").val();
        input_description = $("#input-description").val();
        payment_form = $("#select-payment").val();

        error = false;
        message = "";

        // Tratando se todos os inputs estão preenchidos
        if (nome_input == "") {
            $("#nome_input").addClass("is-invalid");
        } else {
            $("#nome_input").addClass("is-valid");
        }

        if (cpf_input == "") {
            $("#cpf_input").addClass("is-invalid");
        } else {
            $("#cpf_input").addClass("is-valid");
        }

        if (tel_input == "") {
            $("#tel_input").addClass("is-invalid");
        } else {
            $("#tel_input").addClass("is-valid");
        }

        if (email_input == "") {
            $("#email_input").addClass("is-invalid");
        } else {
            $("#email_input").addClass("is-valid");
        }

        if (valor_input == "") {
            $("#valor_input").addClass("is-invalid");
        } else {
            $("#valor_input").addClass("is-valid");
        }

        if (input_description == "") {
            $("#input_description").addClass("is-invalid");
        } else {
            $("#input_description").addClass("is-valid");
        }

        if (payment_form == "") {
            $("#select-payment").addClass("is-invalid");
        } else {
            $("#select-payment").addClass("is-valid");
            select_payment = $("#select-payment").val();

            switch (select_payment) {
                case "1":
                    $("#pix_div").slideDown();
                    $(".modal-title").text("Cobrança via Pix")
                    break;
                case "2":
                    $("#boleto_div").slideDown();
                    $(".modal-title").text("Cobrança via Boleto")
                    break;
                case "3":
                    $("#name_note").text(nome_input);
                    $("#email_note").text(email_input);
                    $("#cpf_note").text(cpf_input);
                    $("#desc_note").text(input_description);
                    $("#card_div").slideDown();
                    $(".modal-title").text("Cobrança via Cartão de Crédito")
                    break;
            }

        }

        $("#gerar_cobranca").slideUp();

    });


});

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Cobrança enviada com sucesso!', 'success')
  })
}   
