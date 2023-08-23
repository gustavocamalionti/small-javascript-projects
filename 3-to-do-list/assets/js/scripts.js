const buttonAdicionar = document.getElementById("container__button-adicionar");
const itensAdicionados = document.getElementById("container__form-itens--adicionar");
const textoTarefa = document.getElementsByClassName("container__input-adicionar");

var contadorItens = 0
var strTarefa


buttonAdicionar.addEventListener('click', addItemButton);

textoTarefa[0].addEventListener('keypress', function(e) {
    
    if(e.key === 'Enter') {
        addItemButton();
        e.preventDefault();
    }
  });



function addItemButton() {
   
    strTarefa = textoTarefa[0].value.trim()
    if (strTarefa != "") {
        textoTarefa[0].value ="";
        itensAdicionados.innerHTML = "<li id = '" + contadorItens + "LI' + class='container__itens hide'><input type='checkbox' id='" + contadorItens + "' class='container__input-itens'><label for='" + contadorItens + "' class='container__label-itens'>" + strTarefa + "</label></li>" + itensAdicionados.innerHTML;
        var item = document.getElementById(contadorItens + "LI");
        item.classList.remove("hide");
        item.classList.add("show");
        
        buttonAdicionar.disabled = true;
        textoTarefa[0].disabled = true;
        setTimeout(function() {
            item.classList.remove("show");
            textoTarefa[0].disabled = false;
            buttonAdicionar.disabled = false;
            textoTarefa[0].focus()

        }, 500)
        contadorItens += 1
        } 
    
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}