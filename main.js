

$(document).ready(function(){


    $('#agregar').click(function(){
        $.get('https://my-json-server.typicode.com/alaravena/ldp3101/usuarios',
        function(data){
            $.each(data, function(i, item){
                $('#table').append("<tr><td>" + item.id + "</td><td>" + item.nombre + "</td><td>"
                + item.email + "</td><td>" + item.edad + "</td><td><img src=" + item.avatar + "></td><td><button id='borrar' class='borrar' type='button'>eliminar</button>" + "<button type='button' class='modalButton btn btn-primary' data-toggle='modal' data-target='#exampleModal'>info</button>" + "</td></tr>");

                $('.borrar').click(function(){
                    var index = $('.borrar').index(this);
                    var eliminar = $('tr');
            
                    eliminar[index].remove();
                    console.log(index);
                });


                
    
                var modal = $('.modal-body')
       
    
                $('.modalButton').click(function(){
                    $('tr').show(modal.text(item.id + ' ' + item.nombre + ' ' + item.email + ' ' + item.edad));
                })

                
            });


            /*$('#modalButton').click(function(){ 
                var info = $.get('https://my-json-server.typicode.com/alaravena/ldp3101/usuarios',
                function(data){
                    $.each(data, function(i, item){
                        $('.modal-text').append(item.id + '<br>' 
                        + item.nombre + '<br>' 
                        + item.email + '<br>' 
                        + item.edad + '<br>').index(this)


                        console.log(item)
                    });
                });

        });*/
    });


});
});



