function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(time) {         //made fxn async which means just wait to do task & added a parameter of time so in index.js i can set a time for how long i want npc to walk east
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        await sleep(time)                   // added await since its asycn and then sleep(pause)(time which will be said in index)
        return stop()                       //return stop after my await is done so my npc stops walking
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await sleep(time)                   // added await since its asycn and then sleep(pause)(time which will be said in index)
        return stop()                       //return stop after my await is done so my npc stops walking
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await sleep(time)                   // added await since its asycn and then sleep(pause)(time which will be said in index)
        return stop()                       //return stop after my await is done so my npc stops walking
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time)                   // added await since its asycn and then sleep(pause)(time which will be said in index)
        return stop()                       //return stop after my await is done so my npc stops walking
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }

    function sleep(time){                   //sleep is going to wait for time and then run
    return new Promise(resolve => {         //returninging a promise
        setTimeout(resolve, time)
    })  
}

}