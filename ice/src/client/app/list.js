console.log('we are on the list page');

/*to do table stuff */
const eleEmpty = document.getElementById('empty-message');
const eleTable = document.getElementById('animal-list');

const records = animalService.getAnimals();

if (!records.length) {
    eleEmpty.classList.remove('d-none');
    eleTable.classList.add('d-none');
} else {
    eleEmpty.classList.add('d-none');
    eleTable.classList.remove('d-none');
    drawAnimalTable(records);
}

function drawAnimalTable(animals) 
{
    for (let animal of animals) {
        const row = eleTable.insertRow();
        // This section creates rows for each animal field

        row.insertCell().textContent = animal.name;
        row.insertCell().textContent = animal.breed;
        row.insertCell().textContent = animal.legs;
        row.insertCell().textContent = animal.eyes;
        row.insertCell().textContent = animal.sound;
        // to create a cell to hold the buttons
        const eleBtnCell = row.insertCell();
        eleBtnCell.classList.add();
        // This section creates a delete button
        const eleBtnDelete = document.createElement('button');
        eleBtnDelete.classList.add('btn', 'btn-danger', 'mx-1');
        eleBtnDelete.innerHTML = `<i class="fa fa-trash"></i>`;
        eleBtnDelete.addEventListener('click', onDeleteButtonClick(animal));
        //This section add the delete button to the button cell
        eleBtnCell.append(eleBtnDelete);
        // This section creates an edit button
        const eleBtnEdit = document.createElement('a');
        eleBtnEdit.classList.add('btn', 'btn-primary', 'mx-1');
        eleBtnEdit.innerHTML = `<i class="fa fa-user"></i>`;
        eleBtnEdit.href = `./add.html?name=${animal.name}`
        // This section adds the edit button to the button cell
        eleBtnCell.append(eleBtnEdit);
    }
}

function onDeleteButtonClick(animal) {
    return event => {
        animalService.deleteAnimal(animal);
        window.location.reload();
    }
}