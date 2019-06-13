$(document).ready(function(){
    $("#grafico1").click(function(){
      $("#pagina").load("grafico.html");
    });
  });
  $(document).ready(function(){
    $("#grafico2").click(function(){
      $("#pagina").load("../ima/grafico.html");
    });
  });

  $(document).ready(function(){
    $("#json").click(function(){
      $("#pagina").load("dados.php");
    });
  });  