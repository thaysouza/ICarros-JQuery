$(document).ready(
    function(){
        $('button').click(function(){
            // $.ajax({
            //     url: 'https://webhook.site/a1857554-92e4-4317-a949-9712b910ba4b',
            //     type: 'POST',
            //     data: {
            //         name: ''
            //     },
            //     contentType: 'application/json',
            //     success: function(){
            //        console.log('Sucesso!')
            //     }
            // })

            //add class
            // $('p').addClass('red')

            //remove class
            // $('p').removeClass('red')
        })

        $('#formulario').submit(function (e) {
            e.preventDefault();
            let data = {
                name: $('#name').val(),
                phone: $('#phone').val(),
                email: $('#email').val(),
            }
            // let badyContent = JSON.stringify(data)
            // $.ajax({
            //     url: 'https://webhook.site/a1857554-92e4-4317-a949-9712b910ba4b',
            //     type: 'POST',
            //     data: badyContent,
            //     contentType: 'application/json',
            //     success: function () {
            //         alert('Enviado')
            //     }
            // })

            console.log(data.name)
            console.log(data.phone)
            console.log(data.email)

        })
    }
)