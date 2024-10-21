//para adicionar o modo escuro se estiver claro fica escuro e vice-versa
const $html = document.querySelector('html') //pegar toda a página
const $checkbox = document.querySelector('#switch')//pegar o checkbox

$checkbox.addEventListener("change", function(){ //evento de marcar o checkbox
    $html.classList.toggle('dark-mode')
})



/*animação do texto e do bg
const button = document.getElementById('toggleAnimation');
const body = document.body;
const texts = document.querySelectorAll('.animated-text');

let animationsActive = false;

button.addEventListener('click', () => {
    animationsActive = !animationsActive; // Alterna o estado das animações

    if (animationsActive) {
        button.textContent = "Desativar Animação"; // Altera o texto do botão
        texts.forEach(text => text.classList.add('active')); // Ativa a animação do texto
        body.classList.add('background-active'); // Ativa a animação do background
    } else {
        button.textContent = "Ativar Animação"; // Altera o texto do botão
        texts.forEach(text => text.classList.remove('active')); // Desativa a animação do texto
        body.classList.remove('background-active'); // Desativa a animação do background
    }
});
*/

function formacoes(){
    const formacoes = document.getElementsByClassName('formacoes')[0];
    if(formacoes.style.display == 'none'){
        formacoes.style.display = 'block';
    } else{
        formacoes.style.display = "none";
    }

}

function conhecimentos(){
    const conhecimentos = document.getElementsByClassName('conhecimentos')[0];
    if(conhecimentos.style.display == 'none'){
        conhecimentos.style.display = 'block';
    }else{
        conhecimentos.style.display = 'none';
    }
}

function certificados(){
    const certificados = document.getElementsByClassName('certificados')[0];
    if(certificados.style.display == 'none'){
        certificados.style.display = "block";
    }else{
        certificados.style.display = 'none';
    }
}

function experiencia(){
    const experiencia = document.getElementsByClassName('experiencia')[0];
    if(experiencia.style.display == 'none'){
        experiencia.style.display = 'block';
    }else{
        experiencia.style.display = 'none';
    }
}
