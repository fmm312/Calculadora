$(document).ready(function() {
    $(".botao").click(function() {
       $(".resultado").val($(".resultado").val() + $(this).val());              
    });
    
    $("#c").click(function() {
        $(".resultado").val("");
    });
    
    $(".botao-igual").click(function() {
       var calculo = eval($(".resultado").val());
       $(".resultado").val(calculo);              
    });         
   
    $(".botao, .botao-apagar, .botao-porcentagem").hover(function() {
        $(this).css("background","rgba(197,225,165,0.4)")
    },function() {
        $(this).css("background","rgba(0,0,0,0.0)")             
    });
    
    $(".botao-igual").hover(function() {
        $(this).css("background","rgba(197,225,165,0.4)")
    },function() {
        $(this).css("background","rgba(197,225,165,0.4)")             
    });
    
    $(".botao-apagar").click(function() {
        var tamanho = $(".resultado").val().length;
        var valor = $(".resultado").val(); 
        
        valor = valor.replace(valor.charAt(tamanho-1), "");
        $(".resultado").val(valor);
    });
    
    $(".botao-porcentagem").click(function() {
        valor = $(".resultado").val(); 
        $(".resultado").val(Math.sqrt(valor));
    });    
 });
