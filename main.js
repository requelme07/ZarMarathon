const $arenas = document.querySelector('.arenas')
const $randomBtn = document.querySelector('button')

let player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['sword','fan'],
    attack: function () {
        console.log(this.name + ' ' + 'Fight')
    },
}

let player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['nunchucks','mace'],
    attack: function () {
        console.log(this.name + ' ' + 'Fight')
    },
}

function createEl(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {

        $tag.classList.add(className)
    }

    return $tag
}

function createPlayer(playerObj) {

    const $player = createEl('div','player' + playerObj.player)
    const $progressbar = createEl('div', 'progressbar' )
    const $life = createEl('div','life' )
    const $name = createEl('div','name' )
    const $character = createEl('div','character' )
    const $img = createEl('img')

    $life.style.width = playerObj.hp + "%";
    $name.innerText = playerObj.name;
    $img.src = playerObj.img


    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)

    return $player;
}

function randomHp() {

    let result = Math.ceil(Math.random() * 20)
    return result
}

function changeHp(player) {

    const $playerLife = document.querySelector('.player'+ player.player +' .life')
    player.hp -= randomHp()
    $playerLife.style.width = player.hp + '%';

    if (player.hp <=0 ) {
        player.hp = 0

        $arenas.appendChild(playerLose(player.name))
        $randomBtn.disabled = false;
    }

}

function playerLose (name) {
    const $loseTitle = createEl('div', 'loseTitle')
    $loseTitle.innerText = name + ' lose'

    return $loseTitle
}

$randomBtn.addEventListener('click', function () {
    changeHp(player1)
    changeHp(player2)
})
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

