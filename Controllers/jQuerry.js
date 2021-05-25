console.log("ok")


$(function() {
    $("#monForm").validate({
        rules: {
            emailInput: {
                email: true,
                required: true
            },
            fName: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            lName: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            textArea: {
                required: true,
                minlength: 10,
                maxlength: 200
            },
        },

        messages: {
            emailInput: {
                email: "Veuillez entrer un email valide",
                required: "Veuillez entrer un email valide"

            },
            fName: {
                required: "Veuillez entrer votre prénom",
                minlength: "Votre prénom doit faire plus de 2 caractéres",
                maxlength: "Vous devez entrer moins de 20 caractéres"
            },
            lName: {
                required: "Veuillez entrer votre nom",
                minlength: "Votre nom doit faire plus de 2 caractéres",
                maxlength: "Vous devez entrer moins de 20 caractéres"
            },
            textArea: {
                required: "Veuillez entrer la raison de votre prise de contact",
                minlength: "Vous devez entrer plus de 10 caractéres",
                maxlength: "Vous devez entrer moins de 200 caractéres"
            }
        }

    })
})