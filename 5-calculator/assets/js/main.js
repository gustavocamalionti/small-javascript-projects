// OBS:: bind() FAZ COM QUE O THIS ASSUMA O VALOR ANTERIOR, QUANDO CHAMADO NO NOVO ESCOPO.
// OU SEJA, em cliquebotoes(){}.bind(this) força o this manter na calculadora ao invés de alterar para o document
// ARROWS FUNCTIONS NÃO PERMITE ALTERAÇÃO DO THIS, OU SEJA, NÃO É NECESSÁRIO USAR BIND NESSE CASO.
function criaCalculadora() {

    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = '';
        },


        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', function (e) {
                // this -> document
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();