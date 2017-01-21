$(document).ready(function(){            
            
           //valor do botao aparecer no visor
           $(".botao").click(function(){
              $(".resultado").val($(".resultado").val() + $(this).val());              
           });
           
           
           //limpar o visor
           $("#c").click(function(){
               $(".resultado").val("");
           });
           
           
           //calcular valor que está no visor
           $(".botao-igual").click(function(){
              var calculo = eval($(".resultado").val());
              $(".resultado").val(calculo);              
           });         
          
           
           
           //mudança de cores ao passar mouse por cima dos botões
           $(".botao, .botao-apagar, .botao-porcentagem").hover(function(){
               $(this).css("background","rgba(197,225,165,0.4)")
           },function(){
                $(this).css("background","rgba(0,0,0,0.0)")             
            });
           
           $(".botao-igual").hover(function(){
               $(this).css("background","rgba(197,225,165,0.4)")
           },function(){
                $(this).css("background","rgba(197,225,165,0.4)")             
            });
           
           
           //apagando valores da tela 
           $(".botao-apagar").click(function(){
               var tamanho = $(".resultado").val().length;
               var valor = $(".resultado").val(); 
               
               valor = valor.replace(valor.charAt(tamanho-1), "");
               $(".resultado").val(valor);
           });
           
           
           //calculando porcentagem
           $(".botao-porcentagem").click(function(){
               valor = $(".resultado").val(); 
               $(".resultado").val(Math.sqrt(valor));
           });
           
        });
         
     
