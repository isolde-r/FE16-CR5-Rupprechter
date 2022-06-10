"use strict";
class Animal {
    constructor(name, age, gender, size, vaccine, image, teaserText, animalType) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.image = image;
        this.teaserText = teaserText;
        this.animalType = animalType;
        animalArray.push(this);
    }
    display() {
        return `<div class="card shadow col-12 col-sm-12 col-md-5 col-lg-3">
            <img src="${this.image}" class="card-img-top d-none d-md-inline" alt="picture of ${this.name}">
            <div class="card-body fw-bold p-0">
                <h5 class="card-title fw-bold text-center bg-dark text-light py-1">${this.name}</h5>
                <div class="ms-3">
                    <p class="card-text d-none d-md-block">Gender: ${this.gender}</p>
                    <p class="card-text d-none d-md-block">Age: ${this.age}</p>
                    <p class="card-text d-none d-md-block">Size: ${this.size}</p>
                </div>
                <a href="#" class="btn btn-success rounded-pill w-100 fw-bold pb-0 mb-2 d-none d-md-block my-2 vac-btn">${this.vaccStatus()}
                </a>
                <div class="d-flex align-items-center d-block d-md-none justify-content-center">
                <div class="w-25">
                ${this.animalType === "frog" ? `<img src="img/svg/frog.svg" alt="icon of a frog" class="w-100">` : `<img src="img/svg/bird.svg" alt="icon of a parrot" class="w-100">`}
                </div>
                <p class="text-nowrap text-center">${this.teaserText}</p>
            </div>
            </div>
        </div>`;
    }
    vaccStatus() {
        if (this.vaccine) {
            return `Vaccinated <i class="bi bi-trophy-fill h-75"></i>`;
        }
        else {
            return `Not vaccinated <i class="bi bi-calendar-x h-75"></i>`;
        }
    }
}
;
// ------------ extends classes cat and dog from Animal class ------------
class Cat extends Animal {
    constructor(name, age, gender, size, vaccine, image, teaserText, animalType, breed, fur_color, URL_breed) {
        super(name, age, gender, size, vaccine, image, teaserText, animalType);
        this.breed = breed;
        this.fur_color = fur_color;
        this.URL_breed = URL_breed;
    }
    display() {
        return `<div class="card shadow col-12 col-sm-12 col-md-5 col-lg-3">
        <img src="${this.image}" class="card-img-top d-none d-md-inline" alt="picture of ${this.name}">
        <div class="card-body fw-bold p-0">
            <h5 class="card-title fw-bold text-center bg-dark text-light py-1">${this.name}</h5>
            <div class="ms-3">
                <p class="card-text d-none d-md-block">Gender: ${this.gender}</p>
                <p class="card-text d-none d-md-block">Age: ${this.age}</p>
                <p class="card-text d-none d-md-block">Size: ${this.size}</p>
            </div>
            <a href="#" class="btn btn-success rounded-pill w-100 fw-bold pb-0 mb-2 d-none d-md-block my-2 vac-btn">${this.vaccStatus()}
            </a>
            <div class="ms-3">
                <p class="card-text d-none d-md-block">Breed: ${this.breed}</p>
                <p class="card-text d-none d-md-block">Fur color: ${this.fur_color}</p>
                <p class="card-text d-none d-md-block">Breed Info: <a href="${this.URL_breed}">www.<span class="text-lowercase">${this.breed}</span>.com</a></p>
            </div>
            <div class="d-flex align-items-center d-block d-md-none justify-content-center">
                <div class="w-25">
                    <img src="img/svg/cat.svg" alt="icon of a cat" class="w-100">
                </div>
                <p class="text-nowrap text-center">${this.teaserText}</p>
            </div>
        </div>
    </div>`;
    }
}
class Dog extends Animal {
    constructor(name, age, gender, size, vaccine, image, teaserText, animalType, breed, training) {
        super(name, age, gender, size, vaccine, image, teaserText, animalType);
        this.breed = breed;
        this.training = training;
    }
    display() {
        return `<div class="card shadow col-12 col-sm-12 col-md-5 col-lg-3">
        <img src="${this.image}" class="card-img-top d-none d-md-inline" alt="picture of ${this.name}">
        <div class="card-body fw-bold p-0">
            <h5 class="card-title fw-bold text-center bg-dark text-light py-1">${this.name}</h5>
            <div class="ms-3">
                <p class="card-text d-none d-md-block">Gender: ${this.gender}</p>
                <p class="card-text d-none d-md-block">Age: ${this.age}</p>
                <p class="card-text d-none d-md-block">Size: ${this.size}</p>
            </div>
            <a href="#" class="btn btn-success rounded-pill w-100 fw-bold pb-0 mb-2 d-none d-md-block my-2 vac-btn">${this.vaccStatus()}
            </a>
            <div class="ms-3">
                <p class="card-text d-none d-md-block">Breed: ${this.breed}</p>
                <p class="card-text d-none d-md-block">Training: ${this.trainStatus()}</p>
            </div>
            <div class="d-flex align-items-center d-block d-md-none justify-content-center">
                <div class="w-25">
                    <img src="img/svg/dog.svg" alt="icon of a dog" class="w-100">
                </div>
                <p class="text-nowrap text-center">${this.teaserText}</p>
            </div>
        </div>
    </div>`;
    }
    trainStatus() {
        if (this.training) {
            return `Yes`;
        }
        else {
            return `No`;
        }
    }
}
// ------------ animal data ------------
const animalArray = [];
new Animal("Quaxi", 23, "male", "supersmall", true, "img/frog.jpg", "I'm your personal weather forecast", "frog");
new Animal("Bla-bla-bla", 7, "male", "small", false, "img/parrot.jpg", "I can EXPLAIN why I'm not vaccinated", "parrot");
new Cat("Charlie", 1, "male", "handy", true, "img/cat_laundry.jpg", "I love to \"help\" with the laundry", "cat", "Burmese", "dark brown", "https://en.wikipedia.org/wiki/Burmese_cat");
new Cat("Luna", 2.5, "female", "medium", true, "img/cat_stars.jpg", "Always reach for the stars", "cat", "Burmilla", "light gold", "https://en.wikipedia.org/wiki/Burmilla");
new Dog("Gangsta", 1.5, "male", "superiour", false, "img/dog_gangsta.jpg", "Gangsta rap made me do it", "dog", "Boxer", true);
new Dog("Minerva", 3, "female", "large", true, "img/dog_int.jpg", "You say nerd, I say intellectual champion.", "dog", "Labrador Retriever", true);
new Dog("Lucky", 1, "male", "pocket-size", true, "img/dog_listener.jpg", "I'm a really great listener!", "dog", "Chihuahua", false);
new Dog("Bentley", 2, "male", "medium", false, "img/dog_model.jpg", "I dont do fashion, I AM fashion", "dog", "Terrier Poodle", false);
new Dog("Magic", 4, "male", "clumsy", true, "img/dog_tramp.jpg", "\"tramps like us, baby, we were born to run\"", "dog", "Golden Retriever", true);
// ------------ prints all animals to HTML ------------
for (const animal of animalArray) {
    let overviewContent = document.querySelector(".animals-place");
    overviewContent.innerHTML += animal.display();
}
;
// ------------ adds functionality to vaccination buttons ------------
