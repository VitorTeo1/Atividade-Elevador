class Elevator {
    constructor(capacity, lenght, initialLevel = 0){
        this.people = {
            capacity: capacity,
            inside: 0
        };

        this.elevPosition = {
            lenght: lenght,
            level: initialLevel
        }
        
    }

    printData(){
       return this;
    }


    Enter(quantity = 1){
        if(isNaN(quantity) || quantity < 0){
            console.log("[Enter] --> worong type of data");
            return false;
        }

        if(this.people.inside + quantity <= this.people.capacity){
            this.people.inside += quantity;
        } else {
            console.log(`The elevator is full! ${(this.people.inside + quantity) - this.people.capacity} people/person left behind`);
            this.people.inside = this.people.capacity;
        }
        return this.printData();
    }

    Out(quantity = 1){
        if(isNaN(quantity) || quantity < 0){
            console.log("[Enter] --> worong type of data");
            return false;
        }

        if(this.people.inside - quantity > 0){
            this.people.inside -= quantity;
        } else {
            console.log(`There were just ${this.people.inside} people / person in the elevator. Everyone got out!`);
            this.people.inside = 0;
        }
        return this.printData();
    }

    GoUp(quantity = 1){
        if(isNaN(quantity) || quantity < 0){
            console.log("[GoUp] --> worong type of data");
            return false;
        }

       if(quantity + this.elevPosition.level <= this.elevPosition.lenght){
           this.elevPosition.level += quantity;
       } else {
            console.log(`There are just ${this.elevPosition.lenght} levels in the building. Its gone to the top level`);
            this.elevPosition.level = this.elevPosition.lenght;
       }
       return this.printData();
    }

    GoDown(quantity = 1){
        if(isNaN(quantity) || quantity < 0){
            console.log("[GoDown] --> worong type of data");
            return false;
        }

        if(this.elevPosition.level - quantity >= 0){
            this.elevPosition.level -= quantity; 
        } else {
            console.log(`It can't go ${quantity} levels down. The elevator almost crashed into the floor. But I saved it. Because of that, you are not gonna get a carrot cake!!`);
            this.elevPosition.level = 0;
        }

        return this.printData();
    }

    
}

export default Elevator;