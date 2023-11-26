// Lendo o HTML
$(document).ready(function () {
    // Colocando as máscaras
    $("#cardNumber_input").mask("0000 0000 0000 0000");
    $("#expireDate_input").mask("00/0000");
    $("#cvc_number_input").mask("000");
    $("#cpf_input").mask("000.000.000-00");
    $("#tel_input").mask("(00) 0 0000-0000");
    $("#parcel_input").mask("00")


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

    // função para descer ou subir o form do cartão de crédito/parcelas
    $("#select-payment").on("change", function (e) {
        value = $(this).val();
        if (value == '1' || value == '2' || value == '3') {
            $("#parcel_form").slideDown();
        } else {
            $("#parcel_form").slideUp();
        }

        if (value == '3') {
            $("#card_form").slideDown();
        } else {
            $("#card_form").slideUp();
        }
    });

    // funcão para desabiliar o botão caso refaça o form
    $("#btn-new-cobranca").on("click", function (e) {
        apagarInputs();
        limparModal();

        $("#gerar_cobranca").slideDown();
        $("#parcel_form").slideUp();
        $("#gerar_cobranca").addClass("disabled");
        $("#btn-new-cobranca").text("Refazer");

    });

    // função para "limpar" meu modal após clicar em "Cancelar" ou no "X"
    $(".btn-reset-modal").on("click", function (e) {
        limparModal();
    });

    // funcão para resetar todos os campos após clicar em "Enivar cobrança"
    $("#liveAlertBtn").on("click", function (e) {
        $("#liveAlertPlaceholder").slideDown();
        $("#liveAlertBtn").addClass("disabled");
        $("#btn-new-cobranca").text("Nova cobrança")
        $("#btn-cancel-modal").text("Fechar")
    });

    // função para "limpar" meu modal 
    function limparModal() {
        $("#liveAlertPlaceholder").slideUp();
        $("#liveAlertBtn").slideDown();
        $("#liveAlertBtn").removeClass("disabled");
        $("#pix_div").slideUp();
        $("#boleto_div").slideUp();
        $("#card_div").slideUp();
    };

    // Função para apagar os campos após o usuário enviar a cobrança
    function apagarInputs() {
        $("#nome_input").val("");
        $("#email_input").val("");
        $("#cpf_input").val("");
        $("#tel_input").val("");
        $("#valor_input").val("");
        $("#select_payment").val("");
        $("#description_input").val("");
        $("#parcel_input").val("");
        $("#select-payment").val("");

        $("#nome_credit_input").val("");
        $("#cardNumber_input").val("");
        $("#expireDate_input").val("");
        $("#cvc_number_input").val("");
        $(".filter_input").removeClass("is-valid");
    };


    // Função para preencher os campos do modal e verificar se os inputs estão preenchidos
    $("#gerar_cobranca").on("click", function (e) {

        // Recebendo os valores inseridos nos inputs
        nome_input = $("#nome_input").val();
        email_input = $("#email_input").val();
        cpf_input = $("#cpf_input").val();
        tel_input = $("#tel_input").val();
        valor_input = $("#valor_input").val();
        description_input = $("#description_input").val();
        payment_form = $("#select-payment").val();
        parcel_input = $("#parcel_input").val();

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

        if (description_input == "") {
            $("#description_input").addClass("is-invalid");
        } else {
            $("#description_input").addClass("is-valid");
        }

        if (parcel_input = "") {
            $("#parcel_input").addClass("is-invalid");
        } else {
            $("#parcel_input").addClass("is-valid");
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
                    $("#desc_note").text(description_input);
                    $("#card_div").slideDown();
                    $(".modal-title").text("Cobrança via Cartão de Crédito")
                    break;
            }

        }

        $("#gerar_cobranca").slideUp();

    });


});

// Scrip do bootstrap para fazer o "alert"

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        // '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
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
