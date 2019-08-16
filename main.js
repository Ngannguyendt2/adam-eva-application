function Apple(weight) {
    this.weight = weight;
    this.getweight = function () {
        return this.weight;
    };
    this.decrease = function () {
        return this.weight--;
    };
    this.isEmpty = function () {
     if(this.weight<=0)
     {
         alert("Het tao roi");
     }
    }
}

function Person(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.personSpeak = function (speak) {
        console.log(speak);
        return speak;

    };
    this.personEat = function (food) {
        if(this.checkApple(food)){
            this.weight++;
             food.decrease();
             food.isEmpty();
            console.log(this.weight);
            console.log(food.weight);
        }

    };
    this.checkApple = function (food) {
        return food.weight > 0;
    }
    this.getName = function () {
        return this.name;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.setGender = function (gender) {
        this.gender = gender;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
    };
}

let adam = new Person("Adam","Male",65);
let eva = new Person("Eva","Female",120);
let apple = new Apple(10);

eva.personEat(apple);

