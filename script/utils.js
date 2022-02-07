//criar funções

let totalSacola = 0;

function CriarLista() {          //função para criar lista dinâmica inicial
    let frutas = [
        {
            nome: "banana",
            preco: 2,
        },

        {
            nome: "melancia",
            preco: 10,
        },

        {
            nome: "uva",
            preco: 3,
        },

        {
            nome: "laranja",
            preco: 1.50,
        },

        {
            nome: "pera",
            preco: 3.50,
        },
    ];

    const lista = document.querySelector("#produtos");

    (()=>{                                                 //adição dos elementos como "li's" dentro da "ul"

        for(let fru of frutas)
        {
            const filhoLi = document.createElement("li");

            for(let listaF in fru)
            {  
                if( listaF == "preco")
                {
                    lista.appendChild(filhoLi).setAttribute("data-preço", fru[listaF]);
                    lista.appendChild(filhoLi).setAttribute("class", "disponível");
                }
                else
                {
                    lista.appendChild(filhoLi).textContent = `${fru[listaF]}`;
                }
            }
        }

    })(frutas)

}

    function AdicionaSacola(id)
    {
        const lista = document.querySelectorAll(`#${id} > li`);            //documentação de todas as li's da ul principal
        const newLista = document.querySelector("#cestaDoCliente");        //documentação da ul da sacola
        

        for(let produto of lista)                                          //para cada li será realizado este método
        {
            
            produto.addEventListener("click", function(){ 
            if(produto.getAttribute("class") == "disponível")              //verificação da classe disponível para saber se o produto já está na sacola
            { 
            const fruta = document.createElement("li");
            newLista.appendChild(fruta).textContent = produto.textContent; //adição do produto na sacola, é criado um clone
            newLista.appendChild(fruta).setAttribute("data-preço", produto.getAttribute("data-preço"));
            totalSacola += Number(produto.getAttribute("data-preço"));     //cálculo do custo da sacola
            produto.setAttribute("class", "indisponível");                 //o produto torna-se indisponível
            Calcular();                                                    //chamada da função de cálculo a cada vez que clica-se em um produto
            }
            else
            {
                alert(`Este item ${produto.textContent} já está em sua sacola!`); //alerta de erro
            }
                        
            });
            
        }
    }
    
    function Calcular()
    {
        let total = document.querySelector("#mostraTotalCompra");  //documentação do input
        total.value = totalSacola.toLocaleString("pt-BR", {style: "currency", currency:"BRL"});  //valor transformado em moeda
        
    }




export {CriarLista, AdicionaSacola, Calcular};  //exportação para script.js