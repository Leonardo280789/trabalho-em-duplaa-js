alert('Seja bem vindo!')

// Evento carregar e estrutura condicional
function carregar (){
    
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12){
  //Bom dia
  img.src ='bomdia1.png'
 
    }else if (hora >= 12  && hora < 18){
        //Boa tarde
        img.src ='boatarde2.png'
 
    }else{
 
        //boa noite
        img.src ='boanoite3.png'
    }
}

// Evento onmouseover e onmouseout
function entrou (){
    var a = window.document.getElementById('area');
    a.style.background='orange';
  
    }
    function saiu (){
    var a = window.document.getElementById('area');
    a.style.background='#ffe5be';
    }
    function entrou1 (){
        var a = window.document.getElementById('resultado');
        a.style.background='orange';
      
        }
        function saiu2 (){
        var a = window.document.getElementById('resultado');
        a.style.background='#ffe5be';

        }
        function entrou2 (){
            var a = window.document.getElementById('pontos');
            a.style.background='orange';
          
            }
            function saiu3 (){
            var a = window.document.getElementById('pontos');
            a.style.background='#ffe5be';
            
            }
        
    
        // média |variáveis e operadores matemáticos
        

        function media(){
            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota2").value);
       
            var media = (nota1 + nota2 + nota3)/3 ;
       
            if(media >= 7)
             if(media==10)
              alert("Parabém, você está com nota máxima" + media);
             else
              alert("Parabens, você está na media "+ media);
            else
             alert("Que pena! Você está abaixo da média, cuidado para não reprovar!" + media)
}
//arrays

const pontos = ["Educação integral", "Bilinguismo", "Profissionais Capacitados", "Material de alta qualidade","Infraestrutura Moderna" ];
let fLen = pontos.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + pontos[i] + "</li>";
}
text += "</ul>";

document.getElementById("pontosfortes").innerHTML = text;

//Estrutura de Repetição Taboada

for(let i = 0; i < 11; i++){
    console.log("4 x " + i + " = " + 4*i);
}


