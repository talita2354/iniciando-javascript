//acessa a tag do botao1 
const x = document.querySelector('#botao1');
//acessa a tag do botao2
const z = document.querySelector('#botao2');
//acessa todo o elemento da classe teste1
const y = document.querySelector('ul');
//acessa a tag do botao3
const w = document.querySelector('#botao3');

//se o botao1 for pressionado, chama a função novoItem
x.onclick = novoItem;

//se o botaos for pressionado, chama a função novoItem
z.onclick = addNoFilho;

w.onclick = addCinco;

function novoItem() {

    let newLi = document.createElement('li')
    newLi.innerHTML = 'novo item';
    y.children[0].append(newLi);
    // y.children[0].innerHTML+="<li>item</li>";

}

function addNoFilho() {
    y.children[0].children[0].innerHTML += ' /novo item';
}

function addCinco() {

    let i = 0;
    for (i = 0; i < 5; i++) {
        let newLi = document.createElement('li')
        newLi.innerHTML = 'novo item';
        y.appendChild(newLi);

    }

}