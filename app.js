let upgrades = [
    {
        id: 'sheep shears',
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
    },
    {
        id: 'groomer',
        name: 'mobile groomer',
        power: 5,
        count: 0,
        cost: 10
    },
    {
        id: 'barn',
        name: 'grooming barn',
        power: 100,
        count: 0,
        cost: 50000
    }
]

let totalSheep = 1
let clock = 3000
let sheepPerClick = 1
let sheep = 0

drawHTML()

function addSheep() {
    sheep += sheepPerClick
    totalSheep += sheepPerClick
    drawHTML()
}

function addUpgrade(upgradeName) {
    let improvement = upgrades.find(upgrade => upgrade.name == upgradeName)
    if (sheep >= improvement.cost) {
        sheep -= improvement.cost
        improvement.count++
        sheepPerClick += improvement.power
        improvement.cost = Math.floor(improvement.cost * 1.5)

        console.log(upgrades)
    } else {
        console.log("You don't have enough sheep!")
    }

    if (sheepPerClick > 10000) {
        sheepPerClick = 10000
    }
    drawHTML()
}


function addGroomer() {
    addUpgrade('mobile groomer')
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

    totalSheepElem.innerHTML = `<span class="mdi mdi-sheep">${totalSheep} Total</span>`
    clockElem.innerHTML = `<span class="mdi mdi-clock-plus-outline p-1">${clock}</span>`
    sheepElem.innerHTML = `<span class="mdi mdi-sheep">${sheep}</span>`
    sheepPerClickElem.innerHTML = `<span class="mdi mdi-sheep">${sheepPerClick}</span>`

    shearsElem.innerHTML = `<span
    class="mdi mdi-content-cut rounded border border-light shadow text-light p-1 px-2 stat-w text-center"></span><span class="p-1">Shears</span><span class="mdi mdi-sheep"></span><span class="rounded border border-light shadow text-light p-1 px-2 stat-w text-center"> ${upgrades[0].count}</span>`

    shearsBtn.innerHTML = `<span class="mdi mdi-content-cut"></span><span> ${upgrades[0].cost}</span>`

    shearsDesc.innerHTML = `Shears<span class="mdi mdi-arm-flex p-1"></span> ${upgrades[0].power}`

    electricTrimmerElem.innerHTML = `<span
    class="mdi mdi-lightning-bolt mdi mdi-mustache rounded border border-light shadow text-light p-1 px-2 stat-w text-center"></span><span class="p-1">Electric Trimmer</span><span class="mdi mdi-sheep"></span><span class="rounded border border-light shadow text-light p-1 px-2 stat-w text-center"> ${upgrades[1].count}</span>`

    electricTrimmerBtn.innerHTML = `<span class="mdi mdi-lightning-bolt"></span><span class="mdi mdi-mustache"></span><span> ${upgrades[1].cost}</span>`

    electricTrimmerDesc.innerHTML = `Electric Trimmer<span class="mdi mdi-arm-flex p-1"></span> ${upgrades[1].power}`

    mobileGroomerElem.innerHTML = `<span class="mdi mdi-truck" rounded border border-light shadow text-light p-1 px-2 stat-w text-center"></span><span class="p-1">Mobile Groomer</span><span class="mdi mdi-sheep"></span><span class="rounded border border-light shadow text-light p-1 px-2 stat-w text-center"> ${upgrades[2].count}</span>`

    mobileGroomerBtn.innerHTML = `<span class="mdi mdi-truck"></span><span> ${upgrades[2].cost}</span>`

    mobileGroomerDesc.innerHTML = `Mobile Groomer<span class="mdi mdi-arm-flex p-1"></span> ${upgrades[2].power}`

    groomingBarnElem.innerHTML = `<span class="mdi mdi-barn" rounded border border-light shadow text-light p-1 px-2 stat-w text-center"></span><span class="p-1">Grooming Barn</span><span class="mdi mdi-sheep"></span><span class="rounded border border-light shadow text-light p-1 px-2 stat-w text-center"> ${upgrades[3].count}</span>`

    groomingBarnBtn.innerHTML = `<span class="mdi mdi-barn"></span><span> ${upgrades[3].cost}</span>`

    groomingBarnDesc.innerHTML = `Grooming Barn<span class="mdi mdi-arm-flex p-1"></span> ${upgrades[3].power}`
}

function reset() {
    upgrades.forEach(upgrade => upgrade.count = 0)
    sheepPerClick = 1
    totalSheep = 0
    upgrades[0].cost = 10
    upgrades[1].cost = 20
    upgrades[2].cost = 10
    upgrades[3].cost = 50000
    sheep = 0

    drawHTML()
}