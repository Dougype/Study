// --> Condicão
 
let habbo = "login"
{
    if(habbo = "login")
    {
        console.log("O "+habbo+" foi efetuado com sucesso!")
    }
    else if(habbo = "senha") 
    {
        console.log("a do "+habbo+" foi informada corretmente!")
    }
    else
    {
        console.log(`Você não cadastrou para jogar`)
    }
}

// --> Condição de controle. Ler = ["Var", "Cardapio", "Senhas"]

// Exemplo 1
let habbo = "c13726546"
switch(habbo.length)
{
    case 0:
        console.log("o número "+habbo+" está correto")
        break;
    
    case 8: 
        console.log(" login correto")
        break;

    default:
        console.log("informação incorreta")
    

}

//Exemplo 2
let habbo = "senha"

switch(habbo)
{
    case "senha":
        console.log(" A "+habbo+" esá correta")
        break;

    case "login":
    console.log("O "+habbo+" está correto")
    break;

    default:
        console.log(`A palavra ${habbo} está incorreta!`)       
}



// Laço contado
let habbo = 10

for(usuarios=1; usuarios <= 10; usuarios++)
{
    //console.log(usuarios)
    if(usuarios == 2)
    {
        console.log("o valor é exato")
    }
    else if(usuarios %2 == 0)
    {
        console.log("o numero "+usuarios+" é par")
    }
    else
    {
        console.log("o numero "+usuarios+" é impar")
    }
}

// Laço de controle


