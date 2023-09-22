module.exports = class Person
{
     age = 24
     name ="vijay"
     location="canada"
     get location()
     {
        return this.location
     }

     constructor (firstName,SecondName)
     {
     this.firstName=firstName
     this.SecondName=SecondName
     }
     
     FullName()
     {
     console.log(this.firstName+this.SecondName)
     }
     
}

// let person = new Person("jhon","bham")
// let person1 = new Person("vijay","Anand")
// 
// console.log(person1.FullName())
// console.log(person2.FullName())

// console.log(person.age)
// console.log(person.name)
// console.log(person.location)
