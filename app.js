
      function Calcular(){
        var valorinicial = document.getElementById('valorinicial').value;
        var meses = document.getElementById('meses').value;
        var porcentagem = (document.getElementById('porcentagem').value);
        var i = 0;

        if(valorinicial == "") {
          var valorinicial = "Erro! Falta o valor em R$!"
          document.getElementById('resultado').innerHTML = valorinicial;

        }else if (meses == "") {
          var valorinicial = "Erro! Falta a quantidade de meses!"
          document.getElementById('resultado').innerHTML = valorinicial;

        }else if (porcentagem == "") {
          var valorinicial = "Erro! Falta a porcentagem de juros!"
          document.getElementById('resultado').innerHTML = valorinicial;

        }else{
        do {
          var valorinicial = parseFloat(valorinicial) * (parseFloat(porcentagem)/100) + parseFloat(valorinicial);
          i++;
        } while (i < parseInt(meses));

        document.getElementById('resultado').innerHTML = "R$ " + valorinicial.toFixed(2);
        }
      }
