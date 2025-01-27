/*
    Name: Arnold Babu
    filename: index.js
    Course: INFT 2202
    Date: January 24, 2025
    Description: This is my index file.
*/import animalService from "./animal.service.mock.js";

function animal() {
    const form = document.createElement('form'); // Create a new form element
    let description = 'Add Animal'; // Description for the form

    function createContent() {
        const container = document.createElement('div');
        container.classList.add('mb-2'); // Add a margin class to the container

        // Create the "Animal Name" input field
        const mb3Name = document.createElement('div');
        mb3Name.classList.add('mb-3');
        mb3Name.innerHTML = '<label for="name" class="form-label">Animal Name</label>' +
            '<input type="text" class="form-control" id="name" name="name">' +
            '<p class="text-danger d-none"></p>'; // Error message placeholder
        container.append(mb3Name);

        // Create the "Animal Breed" input field
        const mb3Breed = document.createElement('div');
        mb3Breed.classList.add('mb-3');
        mb3Breed.innerHTML = '<label for="breed" class="form-label">Animal Breed</label>' +
            '<input type="text" class="form-control" id="breed" name="breed">' +
            '<p class="text-danger d-none"></p>'; // Error message placeholder
        container.append(mb3Breed);

        // Create the "Number of Legs" input field
        const mb3Leg = document.createElement('div');
        mb3Leg.classList.add('mb-3');
        mb3Leg.innerHTML = '<label for="legs" class="form-label">Number of Legs</label>' +
            '<input type="text" class="form-control" id="legs" name="legs">' +
            '<p class="text-danger d-none"></p>'; // Error message placeholder
        container.append(mb3Leg);

        // Create the "Number of Eyes" input field
        const mb3Eye = document.createElement('div');
        mb3Eye.classList.add('mb-3');
        mb3Eye.innerHTML = '<label for="eyes" class="form-label">Number of Eyes</label>' +
            '<input type="text" class="form-control" id="eyes" name="eyes">' +
            '<p class="text-danger d-none"></p>'; // Error message placeholder
        container.append(mb3Eye);

        // Create the "Sound" input field
        const mb3Sound = document.createElement('div');
        mb3Sound.classList.add('mb-3');
        mb3Sound.innerHTML = '<label for="sound" class="form-label">Sound this animal makes</label>' +
            '<input type="text" class="form-control" id="sound" name="sound">' +
            '<p class="text-danger d-none"></p>'; // Error message placeholder
        container.append(mb3Sound);

        // Create the "Save" button
        const submitBtn = document.createElement('div');
        submitBtn.innerHTML = '<button type="submit" class="btn btn-primary">' +
            'Save Animal <i class="fa-solid fa-check"></i>' +
            '</button>'; // Button to save the animal
        container.append(submitBtn);

        form.append(container); // Add the container to the form
        return form; // Return the completed form
    }

    function validate() {
        let valid = true; // Start with the form being valid

        // Validate the "Animal Name" field
        const name = form.name.value;
        const eleNameError = form.name.nextElementSibling;
        if (name === "") {
            eleNameError.classList.remove('d-none');
            eleNameError.textContent = "You must name this animal!";
            valid = false;
        } else {
            eleNameError.classList.add('d-none');
        }

        // Validate the "Animal Breed" field
        const breed = form.breed.value;
        const eleBreedError = form.breed.nextElementSibling;
        if (breed === "") {
            eleBreedError.classList.remove('d-none');
            eleBreedError.textContent = "What type of animal is this?";
            valid = false;
        } else {
            eleBreedError.classList.add('d-none');
        }

        // Validate the "Number of Legs" field
        const legs = form.legs.value;
        const eleLegsError = form.legs.nextElementSibling;
        if (legs === "") {
            eleLegsError.classList.remove('d-none');
            eleLegsError.textContent = "How many legs does this animal have?";
            valid = false;
        } else if (isNaN(legs)) {
            eleLegsError.classList.remove('d-none');
            eleLegsError.textContent = "This must be a number.";
            valid = false;
        } else {
            eleLegsError.classList.add('d-none');
        }

        // Other validations can be added as needed
        const eyes = form.eyes.value; // Number of eyes validation placeholder
        const sound = form.sound.value; // Animal sound validation placeholder

        return valid; // Return whether the form is valid
    }

    // Handle form submission
    function submit() {
        const valid = validate(); // Validate the form

        if (valid) { // If the form is valid
            console.log('Form is valid');

            // Collect form data and convert it to an object
            const formData = new FormData(form);
            const animalObject = {};
            formData.forEach((value, key) => {
                if (key === 'eyes' || key === 'legs') {
                    animalObject[key] = Number(value); // Convert numeric fields to numbers
                } else {
                    animalObject[key] = value;
                }
            });

            const eleNameError = form.name.nextElementSibling;
            try {
                animalService.saveAnimal(animalObject); // Save the animal using the service
                eleNameError.classList.add('d-none'); // Clear error message
                form.reset(); // Reset the form
                window.location = './list.html'; // Redirect to the animal list page
            } catch (error) {
                console.log(error);
                eleNameError.classList.remove('d-none');
                eleNameError.textContent = "This animal already exists!"; // Show error if the animal exists
            }
        } else {
            console.log('Form is not valid');
        }
    }

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        submit(); // Call the submit handler
    });

    return {
        description, // Return the form description
        element: createContent() // Return the created form
    };
}

export default animal;
