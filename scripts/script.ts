// ------------  creates animal class of interface ------------
interface intAnimal {
    name: string;
    age: number;
    gender: string;
    size: string;
    vaccine: boolean;
    image: string;
    teaserText: string;
    animalType: string;
    display: Function;
}

class Animal implements intAnimal {
    name: string;
    age: number;
    gender: string;
    size: string;
    vaccine: boolean;
    image: string;
    teaserText: string;
    animalType: string;
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean, image: string, teaserText: string, animalType: string) {
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
    genericInfo() {
        return `<img src="${this.image}" class="card-img-top d-none d-md-inline" alt="picture of ${this.name}">
        <div class="card-body fw-bold p-0">
            <h5 class="card-title fw-bold text-center bg-dark text-light py-1">${this.name}</h5>
            <div class="ms-3">
                <p class="card-text d-none d-lg-block">Gender: ${this.gender}</p>
                <p class="card-text d-none d-lg-block">Age: ${this.age}</p>
                <p class="card-text d-none d-lg-block">Size: ${this.size}</p>
            </div>
            <a href="#" class="btn btn-success rounded-pill w-100 fw-bold pb-0 mb-2 d-none d-lg-block my-2 vac-btn">${this.vaccStatus()}
            </a>`
    }
    display() {
        return `<div class="card shadow col-12 col-sm-12 col-md-5 col-lg-3">
                ${this.genericInfo()}
                <div class="d-flex align-items-center justify-content-center">
                <div class="w-25 d-block d-md-none">
                ${this.animalType === "frog" ? `<img src="img/svg/frog.svg" alt="icon of a frog" class="w-100">` : `<img src="img/svg/bird.svg" alt="icon of a parrot" class="w-100">`}
                </div>
                <p class="text-nowrap d-md-block d-lg-none text-center">${this.teaserText}</p>
            </div>
            </div>
        </div>`
    }
    vaccStatus() {
        if (this.vaccine) {
            return `Vaccinated <i class="bi bi-trophy-fill h-75"></i>`
        } else {
            return `Not vaccinated <i class="bi bi-calendar-x h-75"></i>`
        }
    }
    changeVacStatus() {
        if (this.vaccine) {
            this.vaccine = false;
        } else {
            this.vaccine = true;
        }
    }
}

// ------------ extends classes cat and dog from Animal class ------------
class Cat extends Animal {
    breed: string;
    fur_color: string;
    URL_breed: string;
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean, image: string, teaserText: string, animalType: string, breed: string, fur_color: string, URL_breed: string) {
        super(name, age, gender, size, vaccine, image, teaserText, animalType);
        this.breed = breed;
        this.fur_color = fur_color;
        this.URL_breed = URL_breed;
    }

    display() {
        return `<div class="card shadow col-12 col-sm-12 col-md-5 col-lg-3">
            ${this.genericInfo()}
            <div class="ms-3">
                <p class="card-text d-none d-lg-block">Breed: ${this.breed}</p>
                <p class="card-text d-none d-lg-block">Fur color: ${this.fur_color}</p>
                <p class="card-text d-none d-lg-block">Breed Info: <a href="${this.URL_breed}" target="_blank">www.<span class="text-lowercase">${this.breed}</span>.com</a></p>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <div class="w-25 d-block d-md-none">
                    <img src="img/svg/cat.svg" alt="icon of a cat" class="w-100">
                </div>
                <p class="text-nowrap text-center d-md-block d-lg-none">${this.teaserText}</p>
            </div>
        </div>
    </div>`
    }
}


class Dog extends Animal {
    breed: string;
    training: boolean;
    constructor(name: string, age: number, gender: string, size: string, vaccine: boolean, image: string, teaserText: string, animalType: string, breed: string, training: boolean) {
        super(name, age, gender, size, vaccine, image, teaserText, animalType);
        this.breed = breed;
        this.training = training;
    }
    display() {
        return `<div class="card shadow col-12 col-sm-12 col-md-5 col-lg-3">
            ${this.genericInfo()}
            <div class="ms-3">
                <p class="card-text d-none d-lg-block">Breed: ${this.breed}</p>
                <p class="card-text d-none d-lg-block">Training: ${this.trainStatus()}</p>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <div class="w-25 d-block d-md-none">
                    <img src="img/svg/dog.svg" alt="icon of a dog" class="w-100">
                </div>
                <p class="text-nowrap text-center d-md-block d-lg-none">${this.teaserText}</p>
            </div>
        </div>
    </div>`
    }
    trainStatus() {
        if (this.training) {
            return `Yes`
        } else {
            return `No`
        }
    }
}

// ------------ animal data ------------

const animalArray: Array<Animal> = []

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

let overviewContent = document.querySelector(".animals-place") as HTMLElement;

function printToHtml(currentArray: Array<Animal>) {
    for (const animal of currentArray) {
        overviewContent.innerHTML += animal.display();
    }

    let allVacBtns = document.querySelectorAll(".vac-btn") as NodeListOf<HTMLElement>;

    allVacBtns.forEach((btn: HTMLElement, i: number) => {
        function setBtnColor() {
            if (animalArray[i].vaccine) {
                btn.style.backgroundColor = "green";
                btn.style.borderColor = "green";
                btn.style.boxShadow = "none";
            } else {
                btn.style.backgroundColor = "red";
                btn.style.borderColor = "red";
                btn.style.boxShadow = "none";
            }
        }
        setBtnColor();

        btn.addEventListener("click", (e: MouseEvent) => {
            e.preventDefault();
            animalArray[i].changeVacStatus();
            btn.innerHTML = animalArray[i].vaccStatus();
            setBtnColor();
        })
    });

}
printToHtml(animalArray);


// ------------ creates ascending sort button and toggles to descending ------------

let sortBtn = document.querySelector(".sort-btn") as HTMLElement;
let sortIcon = document.getElementById("sort-icon") as HTMLElement;

sortBtn.addEventListener("click", () => {
    if (sortBtn.classList.contains("asc")) {
        sortBtn.classList.replace("asc", "desc");
        sortIcon.classList.replace("bi-sort-down-alt", "bi-sort-down");
        let sortedAnimals = animalArray.sort((a: Animal, b: Animal) => a.age - b.age);
        overviewContent.innerHTML = "";
        printToHtml(sortedAnimals);
    } else {
        sortBtn.classList.replace("desc", "asc");
        sortIcon.classList.replace("bi-sort-down", "bi-sort-down-alt");
        let sortedAnimals = animalArray.sort((a: Animal, b: Animal) => b.age - a.age);
        overviewContent.innerHTML = "";
        printToHtml(sortedAnimals);
    }
});

