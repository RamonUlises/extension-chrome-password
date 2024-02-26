import { obtenerPassword } from "./contentScript.js";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate').addEventListener('click', () => {  
        const password = obtenerPassword();
        const $div = document.getElementById('password');
        const $input = document.getElementById('pass');
        $div.innerHTML = "";
        $div.innerHTML = `
        <h4>${password}</h4>
        <img src="./archivo.png" alt="copiar" id="copiar" />
        `
        $input.value = "";
        $input.value = password;
    })
    document.getElementById('password').addEventListener('click', (e) => {
        if(e.target.id === 'copiar') {
            const $input = document.getElementById('pass');
            navigator.clipboard.writeText($input.value)
            .then(() => {
                alert('Password copied to clipboard');
            })
            .catch((err) => {
                console.error('Error copying password', err);
            })
        }
    })
})