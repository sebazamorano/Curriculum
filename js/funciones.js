/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).on('ready', inicio);

var t = function(dom) {
    
    dom.parent().find('a').click(function() {
       $(this).next().toggle(400);
    });
};

function inicio(){
    var perfil = $('#perfil article'),
            resumen = $('#resumen article'),
            //experiencia = $('#experiencia div'),
            educacion = $('#educacion div');
    perfil.hide();
    resumen.hide();
    //experiencia.hide();
    educacion.hide();
    
    $("#perfil #mas").on('click',function(){
        perfil.toggle(400);
    });
    t(resumen);
    //t(experiencia);
    t(educacion);
}
