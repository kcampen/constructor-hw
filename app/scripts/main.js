console.log('the first constructor was a pretty simple excersice in getting aquainted')
console.log('with writing the objects and functions. We worked on a similar problem')
console.log('in class and I wanted to practice setting everything up. The objects each have ')
console.log('properties firstname, lastname, age, and hometown. With the functions that I worked')
console.log('with the properties age and hometown are able to mutate. The age increases')
console.log('each time the function growOld is applied, and the hometown is changed')
console.log('to Greenville when moveAway is applied.')


function FamilyMember(firstName, age){
    this.person = firstName;
    this.lastName = 'Simpson';
    this.age = age;
    this.hometown = 'Springfield';

    this.growOld = function(){
        this.age = this.age +1;
    };

    this.moveAway = function(){
        this.hometown = 'Greenville';
    }
}

var homer = new FamilyMember ('Homer', 40)
var marge = new FamilyMember ('Marge', 39)
var bart = new FamilyMember ('Bart', 10)
var lisa = new FamilyMember ('Lisa', 9)
var maggie = new FamilyMember ('Maggie', 2)

console.log('For this constructor I wanted to build the logic behind a No Wait App that is')
console.log('used by restaurants to manage a waiting list. The objects each have a name')
console.log('a size of the party, an estimated wait time, and a phonenumber to be reached.')
console.log('The constructor for the NoWait allows allows all of these properties to be')
console.log('entered and automatically sets texting as false. The function increaseWait')
console.log('adds 10 to the wait time, the optIn function changes the auto texting')
console.log('setting to true, and finally when the new variable is called an')
console.log('alert pops up to let the party know their table is ready.')



function NoWait(name, size, time, phone){
    this.person = name;
    this.party = size;
    this.wait = time;
    this.phonenumber = phone;
    this.texting = false;


    this.increaseWait = function(){
        this.wait = this.wait + 10;
    }


    this.optIn = function(){
        this.texting = true;
    }

    this.called = function(){
        alert('Your table is ready!')
    }
}


var jones = new NoWait ('Jones', 4, 15, '555-5555')
var rogers = new NoWait ('Rogers', 8, 25, '444-4444')
var smith = new NoWait ('Smith', 12, 45, '333-3333')



console.log('this is just another example where the objects are different flavors')
console.log('and caffine strength of tea. The functions within this constructor')
console.log ('can add honey to the objects, can change the veryHot property to')
console.log ('false, and can double the caffine strenght.')


function Tea (flavor, strength){
    this.type = flavor;
    this.caffine = strength;
    this.veryHot = true;
    this.honey = 0;
    this.cream = 0;
    this.yum = true;

    this.addSweet = function(){
        this.honey = this.honey + 1;
    }

    this.onIce = function(){
        this.veryHot = false;
    }

    this.doubleBrew = function(){
        this.caffine = this.caffine * 2;
    }
}




var green = new Tea ('green ginger', 5)
var chai = new Tea ('chai', 9)
var awake = new Tea ('english breakfast', 8)
var chamomile = new Tea ('chamomile', 1)








