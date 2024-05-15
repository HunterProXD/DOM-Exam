

// Variables for adding to list and counting list items
const btnCreate = document.getElementById('btnCreate')
let counterDisplay = document.getElementById('gamesCounter')
let container = document.getElementById('taskListContainer')
let gameName = document.getElementById('gameName')
let taskNr = 1
let counter = 0


// Variables for changing list item position and deletion
let upArrow = document.querySelectorAll('.upArrow')
let btnDelete = document.querySelectorAll('.deleteGame')


// Event listener, which adds a game to list, then increases global numbers
btnCreate.addEventListener('click', async () => {



    event.preventDefault()

    container.innerHTML += 
    '<div class="tasks" id="' + taskNr + '">' + 
        '<p class="taskNr">Game Nr.' + taskNr + '</p>' +
        '<p class="taskName">' + gameName.value + '</p>' +
        '<div class="modifierButtons">' +
            '<div class="arrows">' +
                '<button class="upArrow">Up Arrow</button>' +
                '<button class="downArrow">Down Arrow</button>' +
            '</div>' +
            '<button class="deleteGame">Delete</button>' +
        '</div>'
    '</div>'


    counter++
    taskNr++
    counterDisplay.innerHTML = counter
})


container.addEventListener('click', (e) => {
    const selected = e.target.parentNode.parentNode.parentNode
    let trueParent = selected.parentNode.children

    // Adds a delete button
    if (e.target.classList.contains('deleteGame')) {
        e.target.parentNode.parentNode.remove()
        counter--
        counterDisplay.innerHTML = counter
    }
    // Moves up a list
    if (e.target.classList.contains('upArrow')) {
        let temp = trueParent[selected.id]
        let start = selected.id
        let targetPos = selected.id - 1
        for (let i = start; i >= targetPos; i--) {
            trueParent[i] = trueParent[i - 1]
        }

        trueParent[targetPos] = temp

        console.log("logged", selected.id, trueParent)
    }
})

// upArrow.forEach((element) => {
//     element.addEventListener('click', (element) => {
//         alert(element.target.parentNode.parentNode.id)
//         console.log('pressed')
//     })
// })
// btnDelete.forEach((element) => {
//     element.addEventListener('click', (element) => {
//         destruction = element.target.parentNode.parentNode
//         destruction.remove()
//         counter--
//     })
// })
