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





function NoWait(name, size, time, phone){
    this.person = name;
    this.party = size;
    this.wait = time;
    this.phonenumber = phone;
    this.texting = false;


    this.increaseWait = function(){
        this.wait = this.wait + 10;
    }
}






var jones = new NoWait ('Jones', 4, 15, '555-5555')
var 