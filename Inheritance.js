// Q.1 Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const parent={
    calc() {
        console.log(`${this.firstName} ${this.lastName} ${this.CollegeName}`)
    }
}

const child1=Object.create(parent);
child1.firstName="Sujit"
child1.lastName="Thakur"
child1.CollegeName="DU"


const child2=Object.create(parent);
child2.firstName="Anand"
child2.lastName="Thakur"
child2.CollegeName="Kerela" 

child1.calc();
child2.calc();


//Q.2 Write code to explain prototype chaining

const ram = {
    fName: "Sujit",
    lName: "kumar",
    roll: 26,
    showDetails: function () {
        console.log(`I am ${this.fName}${this.lName},my roll no is ${this.roll}`);
    }
}
const bharath = {
    fName: "bharath",
}
bharath._proto_ = ram;
console.log(bharath);
console.log(bharath.fName);
console.log(bharath.lName);
console.log(bharath.roll);





//Q.3 Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays


const    AddSum={
    name:"EA16",
    add: function(a)
    {
        let sum=0;
        for(let i=0;i<a.length;i++)
        {
            sum+=a[i];
        }

        console.log(sum)
    }

   }
   AddSum.sum([1,2,3,4,5]);


//Q.4 Write a JavaScript function to retrieve all the names of object's own and inherited properties.

const PersonPrototype = {
    initialise(name) {
        this.name = name;
    }
}
const steven = Object.create(PersonPrototype);
steven.initialise("Steven");
const kristin = Object.create(PersonPrototype);
kristin.initialise("Kristin");
console.log(steven);
console.log(kristin);