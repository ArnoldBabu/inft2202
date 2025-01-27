/*
 * Constructor for the AnimalService class
 */
function AnimalService() {
    function initAnimals() {
        let animals = []; // Create an empty list of animals
        let index = 0; // Start with an index of 0

        // Add 300 animals to the list
        while (animals.length < 300) {
            animals.push({
                "name": `name ${index++}`, // Each animal gets a unique name
                "breed": "Grizzly Bear",  // Default breed
                "legs": 4,                // Number of legs
                "eyes": 2,                // Number of eyes
                "sound": "Moo"           // Default sound
            });
        }
        return animals; // Return the list of animals
    }

    // Check if there is no "animals" entry in local storage
    if (!localStorage.getItem('animals')) {
        // Create a new "animals" entry in local storage with an empty array
        localStorage.setItem('animals', JSON.stringify([]));
    }
}

/*
 * Get the list of animals from local storage
 */
AnimalService.prototype.getAnimals = function() {
    // Always return the animals array (it is set during initialization)
    return JSON.parse(localStorage.getItem('animals'));
};

/*
 * Get a specific page of animals based on pagination
 */
AnimalService.prototype.getAnimalPage = function(pagination) {
    return {
        pagination, // Pagination details (e.g., page number, page size)
        records: JSON.parse(
            localStorage
                .getItem('animals') // Get animals from local storage
                .slice(
                    pagination.pageNumber * pagination.pageSize, // Starting index
                    pagination.pageSize                        // Number of records to fetch
                )
        )
    };
};

/*
 * Save a new animal to the list
 */
AnimalService.prototype.saveAnimal = function(animal) {
    // Get the current list of animals
    const animals = this.getAnimals();

    // Check if an animal with the same name already exists
    if (animals.find(a => a.name === animal.name)) {
        // Throw an error if it does
        throw new Error('An animal with that name already exists!');
    }

    // Add the new animal to the list
    animals.push(animal);

    // Save the updated list back to local storage
    localStorage.setItem('animals', JSON.stringify(animals));

    // Indicate that the animal was saved successfully
    return true;
};

/*
 * Find an animal by name (currently not implemented)
 */
AnimalService.prototype.findAnimal = function(animalName) {
    return null; // Not yet implemented
};

/*
 * Update an existing animal (currently not implemented)
 */
AnimalService.prototype.updateAnimal = function(animal) {
    return false; // Not yet implemented
};

/*
 * Delete an animal from the list
 */
AnimalService.prototype.deleteAnimal = function(animal) {
    // Get the current list of animals
    const animals = this.getAnimals();

    // Find the index of the animal to delete
    const idx = animals.findIndex(a => a.name === animal.name);

    // If the animal doesn't exist, throw an error
    if (idx === -1) {
        throw new Error('That animal does not exist!');
    }

    // Remove the animal from the list
    animals.splice(idx, 1);

    // Save the updated list back to local storage
    localStorage.setItem('animals', JSON.stringify(animals));

    // Indicate that the animal was deleted successfully
    return true;
};

// Create an instance of the AnimalService class
const animalService = new AnimalService();
