function meuEscopo() {
    const form = document.querySelector('.form');
    const personals = [];
    const divContent = document.querySelector('#content-right');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#name');
        const heightM = form.querySelector('#heightM');
        const email = form.querySelector('#email');
        const password = form.querySelector('#password');

        personals.push(createPersonal(name, heightM,email,password));
        divContent.innerHTML += `
        <div style="border: 2px solid blue">
        <p>Nome: <span class="divName">${personals[personals.length - 1].name.value}</span></p>
        <p>Altura(M): <span class="divHeightM">${personals[personals.length - 1].heightM.value}</span></p>
        <p>Email: <span class="email">${personals[personals.length - 1].email.value}</span></p>
        <p>Password: <span class="password">${personals[personals.length - 1].password.value}</span></p>
        </div>
        `
    });
}

meuEscopo();

function createPersonal(name, heightM,email,password) {
    return {
        name,
        heightM,
        email,
        password
    };
}