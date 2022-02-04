// singleton
// let instance = null;

// class Car {
//     constructor (doors, engine, color) {
//         if (!instance) {
//             this.doors = doors;
//             this.engine = engine;
//             this.color = color;
//             instance = this
//         } else {
//             return instance
//         }
//     }
// }

// class SUV extends Car {
//     constructor(doors, engine, color) {
//         super(doors, engine, color);
//         this.wheels = 4;
//     }
// }

class Car {
    constructor (doors, engine, color) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'civic' : return new Car(4, 'V6', 'Green')
            case 'honda' : return new Car(2, "v8", 'red')
        }
    }
}

class SUV {
    constructor (doors, engine, color) {
            this.doors = doors;
            this.engine = engine;
            this.color = color;
    }
}

class SuvFactory {
    createCar(type) {
        switch(type) {
            case 'cx5' : return new Car(4, 'V6', 'Green')
            case 'sante fe' : return new Car(2, "v8", 'red')
        }
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
    switch(type) {
        case 'car': return carFactory.createCar(model)
        case 'suv': return suvFactory.createCar(model)
    }
}

const cx5 = autoManufacturer('suv', 'cx5') 

console.log(cx5)


