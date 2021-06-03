
let player1 = {
    name: 'Kitana',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['sword','fan'],
    attack: function () {
        console.log(this.name + ' ' + 'Fight')
    },
}


let player2 = {
    name: 'Sonya',
    hp: 40,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['nunchucks','mace'],
    attack: function () {
        console.log(this.name + ' ' + 'Fight')
    },
}

function createPlayer(player, name) {
    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div')
    $life.classList.add('life');
    $life.style.width = name.hp + "%";

    const $name = document.createElement('div')
    $name.classList.add('name');
    $name.innerText = name.name;

    const $character = document.createElement('div')
    $character.classList.add('character');

    const $img = document.createElement('img')
    $img.src = name.img

    const $arenas = document.querySelector('.arenas')

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
    $arenas.appendChild($player)
}

createPlayer("player1", player1);
createPlayer("player2", player2);

