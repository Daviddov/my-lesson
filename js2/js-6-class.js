
       class Person {
        constructor(firstName){
            this._firstName = firstName;
            this._lastName = lastName;

            this.counter++
        }
        set fullName(fullName){
            cutName = fullName.slice(' ')
            this._firstName = cutName[0];
            this._lastName = cutName[1]
    }

        //נשאר בקלאס משתנה סטיטיק
        counter = 0;

        printName(){
            console.log(`firstName ${this.firstName}`);
        }
       } 
    //      הורשה
       class Child extends Person{
        constructor(firstName, age){
            super(firstName);
            this.age = age;
        }
        getName(){
            const name = super.getName()
            return `${name}, age: ${this.age}`;
        }
      
        //   נשארת בקלאס פונקציה סטיטיק
        static validName(){
            return true;
        }
       }

Child.validName()

       const user = new Child('Moshe', 7)
console.log(user);