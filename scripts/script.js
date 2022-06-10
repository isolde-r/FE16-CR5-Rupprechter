"use strict";
class Animal {
    constructor(name, age, gender, size, vaccine, image, teaserText) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.image = image;
        this.teaserText = teaserText;
        animalArray.push(this);
    }
    display() {
        return `<div class="card shadow col-12 col-sm-12 col-md-5 col-lg-3">
            <img src="${this.image}" class="card-img-top" alt="picture of ${this.name}">
            <div class="card-body fw-bold">
                <h5 class="card-title fw-bold text-center bg-dark text-light">${this.name}</h5>
                <p class="card-text">Gender: ${this.gender}</p>
                <p class="card-text">Age: ${this.age}</p>
                <p class="card-text">Size: ${this.size}</p>
                <a href="#" class="btn btn-success rounded-pill w-100 fw-bold pb-0 mb-2">Vaccine ${this.vaccStatus()}
                </a>
            </div>
        </div>`;
    }
    vaccStatus() {
        if (this.vaccine) {
            return `<i class="bi bi-trophy-fill h-75"></i>`;
        }
        else {
            return `<i class="bi bi-calendar-x h-75"></i>`;
        }
    }
}
;
class Cat extends Animal {
    constructor(name, age, gender, size, vaccine, image, teaserText, breed, fur_color, URL_breed) {
        super(name, age, gender, size, vaccine, image, teaserText);
        this.breed = breed;
        this.fur_color = fur_color;
        this.URL_breed = URL_breed;
    }
    display() {
        return `<div class="card shadow col-12 col-sm-12 col-md-5 col-lg-3">
        <img src="${this.image}" class="card-img-top" alt="picture of ${this.name}">
        <div class="card-body fw-bold">
            <h5 class="card-title fw-bold text-center bg-dark text-light">${this.name}</h5>
            <p class="card-text">Gender: ${this.gender}</p>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Size: ${this.size}</p>
            <a href="#" class="btn btn-success rounded-pill w-100 fw-bold pb-0 mb-2">Vaccine ${this.vaccStatus()}
            </a>
            <p class="card-text">Breed: ${this.breed}</p>
            <p class="card-text">Fur color: ${this.fur_color}</p>
            <p class="card-text">Breed Info: <a href="${this.URL_breed}">www.<span class="text-lowercase">${this.breed}</span>.com</a></p>
        </div>
    </div>`;
    }
}
class Dog extends Animal {
    constructor(name, age, gender, size, vaccine, image, teaserText, breed, training) {
        super(name, age, gender, size, vaccine, image, teaserText);
        this.breed = breed;
        this.training = training;
    }
    display() {
        return `<div class="card shadow col-12 col-sm-12 col-md-5 col-lg-3">
        <img src="${this.image}" class="card-img-top" alt="picture of ${this.name}">
        <div class="card-body fw-bold">
            <h5 class="card-title fw-bold text-center bg-dark text-light">${this.name}</h5>
            <p class="card-text">Gender: ${this.gender}</p>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Size: ${this.size}</p>
            <a href="#" class="btn btn-success rounded-pill w-100 fw-bold pb-0 mb-2">Vaccine ${this.vaccStatus()}
            </a>
            <p class="card-text">Breed: ${this.breed}</p>
            <p class="card-text">Training: ${this.trainStatus()}</p>
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
new Animal("Quaxi", 23, "male", "supersmall", true, "img/frog.jpg", "I'm your personal weather forecast");
new Animal("Parrot", 7, "male", "small", false, "img/parrot.jpg", "I can EXPLAIN why I'm not vaccinated");
new Cat("Charlie", 1, "male", "handy", true, "img/cat_laundry.jpg", "I love to \"help\" with the laundry.", "Burmese", "dark brown", "https://en.wikipedia.org/wiki/Burmese_cat");
new Cat("Luna", 2.5, "female", "medium", true, "img/cat_stars.jpg", "Always reach for the stars.", "Burmilla", "light gold", "https://en.wikipedia.org/wiki/Burmilla");
new Dog("Gangsta", 1.5, "male", "superiour", false, "img/dog_gangsta.jpg", "Gangsta rap made me do it", "Boxer", true);
new Dog("Minerva", 3, "female", "large", true, "img/dog_int.jpg", "You say nerd, I say intellectual champion.", "Labrador Retriever", true);
new Dog("Lucky", 1, "male", "pocket-size", true, "img/dog_listener.jpg", "I'm a really great listener!", "Chihuahua", false);
new Dog("Bentley", 2, "male", "medium", false, "img/dog_model.jpg", "I dont do fashion, I AM fashion", "Terrier Poodle", false);
new Dog("Magic", 4, "male", "clumsy", true, "img/dog_tramp.jpg", "\"tramps like us, baby, we were born to run\"", "Golden Retriever", true);
for (const animal of animalArray) {
    let overviewContent = document.querySelector(".animals-place");
    overviewContent.innerHTML += animal.display();
}
;
