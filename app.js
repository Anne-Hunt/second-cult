let clickUpgrades = [
    {
        id: 'shears',
        name: 'shears',
        power: 2,
        count: 0,
        cost: 10

    },
    {
        id: 'trimmer',
        name: 'electric trimmer',
        power: 3,
        count: 0,
        cost: 20
    }
]

let autoUpgrades = [
    {
        id: 'groomer',
        name: 'mobile groomer',
        power: 5,
        count: 0,
        cost: 100
    },
    {
        id: 'barn',
        name: 'grooming barn',
        power: 100,
        count: 0,
        cost: 50000
    }
]

let totalSheep = 0
let clock = 3000
let sheepPerClick = 1
let sheep = 0

let upgrades = [...autoUpgrades, ...clickUpgrades]

drawHTML()

function addSheep() {
    sheep += sheepPerClick
    drawHTML()
}

function addUpgrade(upgradeName) {
    let improvement = upgrades.find(upgrade => upgrade.name == upgradeName)
    if (sheep > improvement.cost) {
        improvement.count++
        sheepPerClick += improvement.power
        sheep -= improvement.cost
        improvement.cost = improvement.cost * 2

        console.log(upgrades, clickUpgrades, autoUpgrades)
    } else {
        window.alert("You don't have enough sheep!")
    }

    if (sheepPerClick > 10000) {
        sheepPerClick = 10000
    }
    drawHTML()
}


function addGroomer(mobileGroomer) {
    addUpgrade(mobileGroomer)
}

setInterval(addGroomer, 3000)

function drawHTML() {
    let shearsElem = document.getElementById('shears')
    let shearsDesc = document.getElementById('shearsDesc')
    let shearsBtn = document.getElementById('shearsBtn')

    let electricTrimmerElem = document.getElementById('electric-trimmer')
    let electricTrimmerDesc = document.getElementById('electricTrimmerDesc')
    let electricTrimmerBtn = document.getElementById('electricTrimmerBtn')

    let mobileGroomerElem = document.getElementById('mobile-groomer')
    let mobileGroomerDesc = document.getElementById('mobileGroomerDesc')
    let mobileGroomerBtn = document.getElementById('mobileGroomerBtn')

    let groomingBarnElem = document.getElementById('grooming-barn')
    let groomingBarnDesc = document.getElementById('groomingBarnDesc')
    let groomingBarnBtn = document.getElementById('groomingBarnBtn')

    let totalSheepElem = document.getElementById('total-sheep')
    let clockElem = document.getElementById('clock')
    let sheepElem = document.getElementById('sheep')
    let sheepPerClickElem = document.getElementById('sheepPerClick')
}

function reset() {
    upgrades.forEach(upgrade => upgrade.count = 0)
    sheepPerClick = 1
    totalSheep = 0
    autoUpgrades[0].cost = 100
    autoUpgrades[1].cost = 50000
    clickUpgrades[0].cost = 10
    clickUpgrades[1].cost = 20
    sheep = 0

    drawHTML()
}