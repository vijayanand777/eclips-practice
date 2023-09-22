   const Person = require('./Constructor') 
let str="tuesday"

let str1=str+"funday and next day"

let value=str1.indexOf("day")
let count=0
while(value!==-1)
{
    count++
    value=str1.indexOf("day",value+1)
}
console.log(count)
let per=new Person("vijay","anand")
console.log(per.FullName())
