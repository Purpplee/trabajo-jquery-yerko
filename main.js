

$(document).ready(function(){


    $('#agregar').click(function(){
        $.get('https://my-json-server.typicode.com/alaravena/ldp3101/usuarios',
        function(data){
            $.each(data, function(i, item){
                $('#table').append("<tr><td>" + item.id + "</td><td>" + item.nombre + "</td><td>"
                + item.email + "</td><td>" + item.edad + "</td><td><img src=" + item.avatar + "></td><td><button id='borrar' class='borrar' type='button'>eliminar</button>" + "</td></tr>");
            });

            $('.borrar').click(function(){
                var index = $('.borrar').index(this);
                var eliminar = $('tr');
        
                eliminar[index].remove();
                console.log(index);
            });
        });
    });


});




