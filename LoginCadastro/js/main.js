$(function () {
	'use strict';


	$('.form-control').on('input', function () {
		var $field = $(this).closest('.form-group');
		if (this.value) {
			$field.addClass('field--not-empty');
		} else {
			$field.removeClass('field--not-empty');
		}
	});

});

$(document).ready(function () {



	$('#submitForm').on('click', function (e) {
		e.preventDefault();
		$("#error_div").hide();
		$("#error_message").removeClass("text-danger");
		$("#error_message").removeClass("text-success");
		user = $("#user").val();
		password = $("#password").val();

		users = {
			"admin": "admin12345",
			"jose_silva": "teste123",
			"jairo": "jairo123",
		}

		if (user in users) {
			var json_password = users[user];
			if (password == json_password) {
				$("#error_div").show();
				$("#error_message").text("Login feito com sucesso!");
				$("#error_message").addClass("text-success");
				window.location.href = "../cobranca/cobranca.html";
			} else {
				$("#error_div").show();
				$("#error_message").text("Senha Incorreta!");
				$("#error_message").addClass("text-danger");
			}
		} else {
			$("#error_div").show();
			$("#error_message").text("Usuário não existe!");
			$("#error_message").addClass("text-danger");
		}

	});


});