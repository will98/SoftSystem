
var valores = [];
var lista = [];
var tipovariacion = -1;

var comunidades = [`<tr width="100%" data-id="">
<td>Procesamiento de imágenes basado en el análisis de ondículas</td>
<td>2011</td>
<td>Ciencias Basicas</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Procesamiento de imágenes basado en el análisis de ondículas</td>
<td>2011</td>
<td>Ciencias Basicas</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Procesamiento de imágenes basado en el análisis de ondículas</td>
<td>2011</td>
<td>Ciencias Basicas</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Procesamiento de imágenes basado en el análisis de ondículas</td>
<td>2011</td>
<td>Ciencias Basicas</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Procesamiento de imágenes basado en el análisis de ondículas</td>
<td>2011</td>
<td>Ciencias Basicas</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Procesamiento de imágenes basado en el análisis de ondículas</td>
<td>2011</td>
<td>Ciencias Basicas</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>`,`<tr width="100%" data-id="">
<td>Presencia de Salmonella enterica en linfonódulos mesentéricos de cuyes (Cavia porcellus) provenientes de un matadero de la ciudad de Jauja-Junín ﻿</td>
<td>2019</td>
<td>Ciencias de la salud</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Presencia de Salmonella enterica en linfonódulos mesentéricos de cuyes (Cavia porcellus) provenientes de un matadero de la ciudad de Jauja-Junín ﻿</td>
<td>2019</td>
<td>Ciencias de la salud</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Presencia de Salmonella enterica en linfonódulos mesentéricos de cuyes (Cavia porcellus) provenientes de un matadero de la ciudad de Jauja-Junín ﻿</td>
<td>2019</td>
<td>Ciencias de la salud</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Presencia de Salmonella enterica en linfonódulos mesentéricos de cuyes (Cavia porcellus) provenientes de un matadero de la ciudad de Jauja-Junín ﻿</td>
<td>2019</td>
<td>Ciencias de la salud</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Presencia de Salmonella enterica en linfonódulos mesentéricos de cuyes (Cavia porcellus) provenientes de un matadero de la ciudad de Jauja-Junín ﻿</td>
<td>2019</td>
<td>Ciencias de la salud</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Presencia de Salmonella enterica en linfonódulos mesentéricos de cuyes (Cavia porcellus) provenientes de un matadero de la ciudad de Jauja-Junín ﻿</td>
<td>2019</td>
<td>Ciencias de la salud</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>`,`<tr width="100%" data-id="">
<td>Paradigma de la utilidad de la información y evaluación del sistema de información contable</td>
<td>2018</td>
<td>Ciencias Económicas y de la Gestión</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Paradigma de la utilidad de la información y evaluación del sistema de información contable</td>
<td>2018</td>
<td>Ciencias Económicas y de la Gestión</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Paradigma de la utilidad de la información y evaluación del sistema de información contable</td>
<td>2018</td>
<td>Ciencias Económicas y de la Gestión</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Paradigma de la utilidad de la información y evaluación del sistema de información contable</td>
<td>2018</td>
<td>Ciencias Económicas y de la Gestión</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Paradigma de la utilidad de la información y evaluación del sistema de información contable</td>
<td>2018</td>
<td>Ciencias Económicas y de la Gestión</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Paradigma de la utilidad de la información y evaluación del sistema de información contable</td>
<td>2018</td>
<td>Ciencias Económicas y de la Gestión</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>`,`<tr width="100%" data-id="">
<td>Proyecto educativo institucional y la calidad educativa de las instituciones educativas de educación secundaria del distrito de Ancón, RED 2, de la UGEL 04</td>
<td>2019</td>
<td>Humanidades y Ciencias Jurídicas y Sociales</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Proyecto educativo institucional y la calidad educativa de las instituciones educativas de educación secundaria del distrito de Ancón, RED 2, de la UGEL 04</td>
<td>2019</td>
<td>Humanidades y Ciencias Jurídicas y Sociales</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr><tr width="100%" data-id="">
<td>Proyecto educativo institucional y la calidad educativa de las instituciones educativas de educación secundaria del distrito de Ancón, RED 2, de la UGEL 04</td>
<td>2019</td>
<td>Humanidades y Ciencias Jurídicas y Sociales</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr><tr width="100%" data-id="">
<td>Proyecto educativo institucional y la calidad educativa de las instituciones educativas de educación secundaria del distrito de Ancón, RED 2, de la UGEL 04</td>
<td>2019</td>
<td>Humanidades y Ciencias Jurídicas y Sociales</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr><tr width="100%" data-id="">
<td>Proyecto educativo institucional y la calidad educativa de las instituciones educativas de educación secundaria del distrito de Ancón, RED 2, de la UGEL 04</td>
<td>2019</td>
<td>Humanidades y Ciencias Jurídicas y Sociales</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Proyecto educativo institucional y la calidad educativa de las instituciones educativas de educación secundaria del distrito de Ancón, RED 2, de la UGEL 04</td>
<td>2019</td>
<td>Humanidades y Ciencias Jurídicas y Sociales</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
`,`<tr width="100%" data-id="">
<td>Mejorar el grado de satisfacción de los clientes de la empresa Gie Perú S.A.C. aplicando un Sistema de Gestión Integrado ﻿</td>
<td>2019</td>
<td>Ingenierias</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Mejorar el grado de satisfacción de los clientes de la empresa Gie Perú S.A.C. aplicando un Sistema de Gestión Integrado ﻿</td>
<td>2019</td>
<td>Ingenierias</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Mejorar el grado de satisfacción de los clientes de la empresa Gie Perú S.A.C. aplicando un Sistema de Gestión Integrado ﻿</td>
<td>2019</td>
<td>Ingenierias</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Mejorar el grado de satisfacción de los clientes de la empresa Gie Perú S.A.C. aplicando un Sistema de Gestión Integrado ﻿</td>
<td>2019</td>
<td>Ingenierias</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Mejorar el grado de satisfacción de los clientes de la empresa Gie Perú S.A.C. aplicando un Sistema de Gestión Integrado ﻿</td>
<td>2019</td>
<td>Ingenierias</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Mejorar el grado de satisfacción de los clientes de la empresa Gie Perú S.A.C. aplicando un Sistema de Gestión Integrado ﻿</td>
<td>2019</td>
<td>Ingenierias</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Mejorar el grado de satisfacción de los clientes de la empresa Gie Perú S.A.C. aplicando un Sistema de Gestión Integrado ﻿</td>
<td>2019</td>
<td>Ingenierias</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>
<tr width="100%" data-id="">
<td>Mejorar el grado de satisfacción de los clientes de la empresa Gie Perú S.A.C. aplicando un Sistema de Gestión Integrado ﻿</td>
<td>2019</td>
<td>Ingenierias</td>
<td>
<div class="btn-group" role="group" aria-label="...">
    <button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
</tr>`]







$(document).ready(function(){

    listar();
    tesisPorPlanta();
    $(".btn-agregar").click(function(){ console.log("scsc");
    
        $("#modalagregar").show();
    });

    $("#tesis select[name=comunidad]").bind("change",function(){
        listar();
    });

    $("#tesis select[name=tipo]").bind("change",function(){
        listar();
    });

    // new Request("tesis/listarpreciosfinales/",null,function(res){
    //     lista = res.lista;
    //     if(lista != null){

    //         $.each(lista,function(k,v){
    //             var item = `<option value="${v.prd_id}">${v.prd_detalle}</option>`;
    //             $('#modalagregar select[name=basefinal]').append(item);
    //             $('#modaleditar select[name=basefinal]').append(item);
    //         });
           
    //         $('#modalagregar [name=preciobase]').val(valores[0].precio);
    //         $('#modaleditar [name=preciobase]').val(valores[0].precio);

          
    //     }
    //     var preciofinal = valores[0].precio + parseFloat($('[name=incremento]').val());
    //     // preciofinal.tofixed(2);
    //     $('#modalagregar [name=preciofinal]').val(parseFloat(preciofinal).toFixed(2));

    // });




    $("#modalagregar select[name=basefinal]").bind("change",function(){
        for (const key in valores) {
           if($(this).val() == valores[key].id)
           {
               
                var preciofinal = 0;
                var incremento =  parseFloat($('#modalagregar  [name=incremento]').val());
                if(tipovariacion == 0){
                    preciofinal = valores[key].precio + (valores[key].precio*(incremento/100));
                    preciofinal = parseFloat(preciofinal).toFixed(4);
                }
                else{
                    preciofinal = valores[key].precio + incremento;
                    preciofinal = parseFloat(preciofinal).toFixed(2)
                }
        

                $('#modalagregar [name=preciobase]').val(valores[key].precio);
                $('#modalagregar [name=preciofinal]').val(preciofinal);
                break;
           }
        }
    });

    $(".modal select[name=planta]").bind("change",function(){
    
        tesisPorPlanta($(this).val());
    });

    // $("#modaleditar [name=incremento]").on("change",function(){
    
    // });

    // $("#modalagregar [name=incremento]").on("keyup",function(){
      
    // });

    // $("#modaleditar [name=incremento]").on("keyup",function(){
        
       
    // });

    $('#modalagregar .variacion').click(function(){
        $('#modalagregar .simbolo b').html($(this).val());
        if($(this).val() == '%'){
            tipovariacion = 0;
        }
        else if($(this).val() == 'S/'){
            tipovariacion = 1;
        }

        console.log(tipovariacion);
        
    });

    $('#modaleditar .variacion').click(function(){
        $('#modaleditar .simbolo b').html($(this).val());
        if($(this).val() == '%'){
            tipovariacion = 0;
        }
        else if($(this).val() == 'S/'){
            tipovariacion = 1;
        }

        console.log(tipovariacion);
        
    });
    
    // var options = {
    //     dataType: 'json',
    //     type: 'post',
    //     clearForm:true,
    //     beforeSubmit:function(){
    //         $("#cargando").fadeIn(200);
    //     },
    //     beforeSerialize: function ($form, options) {
    //     },
    //     success: function(res){
    //         if(res.res == 'ok'){
    //             $("#cargando").fadeOut(200);
    //             $('#modalagregar').modal('hide');
    //         }
    //         listar();
    //     }
    // }

    // $("#modalagregar form").ajaxForm(options);
    $("#modalagregar .agregar").click(function(){
        $("#modalagregar").modal("hide");
    });

    var options = {
            dataType: 'json',
            type: 'post',
            clearForm:true,
        beforeSubmit:function(){
            
            $("#cargando").fadeIn(200);
        },
        beforeSerialize: function ($form, options) {
        },
        success: function(res){
            if(res.res == 'ok'){
                $("#cargando").fadeOut(200);
                $('#modaleditar').modal('hide');
            }
            listar();
        }
    }   
    $("#modaleditar form").ajaxForm(options);
    
});

function tesisPorPlanta(valor){
    // var 
    // console.log(planta);
    if(valor == undefined)
        valor =  $(".modal select[name=planta]").val();
    
    new Request("tesis/tesisporplanta/",{planta:valor},function(res){
        
        $('select[name=basefinal]').html('');
        lista = res.lista;
        if(lista != null){
            $.each(lista,function(k,v){
                var item = `<option value="${v.prd_id}">${v.prd_detalle}</option>`;
                $('select[name=basefinal]').append(item);
            });
        }
 
	});
}


function listar(){
	
	$("#tesis .lista").empty();

	var tipo = $("#tesis select[name=comunidad]").val();
	var año = $("#tesis select[name=año]").val();
    console.log(año+" "+tipo);
    $("#tesis .lista").html(comunidades[tipo-1]);
    // new Request("tesis/listartesiss/",{tipo:tipo,año:año},function(res){
        
    //     lista = res.lista;
    //     if(lista != null){
    //         llenar();
    //     }
 
	// });
}


function llenar(){
	$.each(lista,function(k,v){ 
	
		var it = new Itemtesis(v);
		$("#tesis .lista").append(it);
	})
}

var Itemtesis = function(data){

	
    var html = $('<tr width="100%" data-id="'+data.prd_id+'">'+
                    '<td>'+data.prd_id+'</td>'+
                    '<td>'+data.prd_detalle+'</td>'+
                    // '<td>'+data.prd_preciofinal+'</td>'+
                    '<td>'+
                    '<div class="btn-group" role="group" aria-label="...">'+
                        '<button type="button" class="btn btn-outline-primary btn-editar"><i class="fas fa-edit"></i></button>'+'&nbsp'+
                        '<button type="button" class="btn btn-outline-danger btn-eliminar"><i class="fas fa-trash-alt"></i></button>'+
                        '</div>'+
                    '</td>'+
                '</tr>');

    html.find('.btn-editar').click(function(){
        
        $('#modaleditar select[name=basefinal]').val(data.prd_base);
        $('#modaleditar [name=id]').val(data.prd_id);

        if(data.prd_tipoincremento == '%'){
            clase = '.porc';
            $('#modaleditar .variacion'+clase).prop("checked", true);
        }
        else if(data.prd_tipoincremento == 'S/'){
            clase = '.mon';
            $('#modaleditar .variacion'+clase).prop("checked", true);
        }
        $('#modaleditar [name=planta]').val(data.pla_id);
        $('#modaleditar [name=incremento]').val(data.prd_incremento);
        $('#modaleditar [name=nombre]').val(data.prd_detalle)
        $('#modaleditar').modal('show');
    })

	return html;  // Retormnamos los valores para la tabla
}

car = 0;
var Request = function(ac,params,callback,method){

    car++;

	var m = "get";

	if(method!=undefined) m = method;

    $.ajax({
        url:ac,
        dataType:"json",
        data:params,
        type:m,
        success:function(res){
            callback(res);
            car--;

        }
    });
}