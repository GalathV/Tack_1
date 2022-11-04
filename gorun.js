//         1 задача

const moment = require("moment/moment")
const format = 'YYYY-MMMM-DD HH:mm'
const a =moment().add(-1, 'hour').format(format)
const belarus = moment.utc().add(3, 'hour').format(format)
const newyork = moment.utc().add(-4, 'hour').format(format)
const newzeland  = moment.utc().add(13, 'hour').format(format) 


console.log(`Время в Беларуси: ${belarus}`)
console.log(`Время в Нью-Йорке: ${newyork}`)
console.log(`Время в Новой Зеландии: ${newzeland}`) 


//         2 задача 

let z = {
	"friends": [{
			"id": 0,
			"name": "Stella Mcknight",
			"top": 3
		},
		{
			"id": 1,
			"name": "Amparo Griffin"
		},
		{
			"id": 2,
			"name": "Riddle Molina"
		},
		{
			"id": 3,
			"name": "Sten Griphin"
		}
],
	"parents": [{
			"id": 0,
			"name": "Kasey Rivers"
		},
		{
			"id": 1,
			"name": "Fran Ryan"
		}
	],
	"workHistory": [{
			"id": 0,
			"name": "Godel Technologies"
		},
		{
			"id": 1,
			"name": "My first task"
		},
		{
			"id": 2,
			"name": "Want to be an A-QA"
		}
	]
}
let b = z.friends
let keyName0 = Object.keys(b[0])
let value0 = Object.values(b[0])
let keyName1 = Object.keys(b[1])
let value1 = Object.values(b[1])
let keyName2 = Object.keys(b[2])
let value2 = Object.values(b[2])
let keyName3 = Object.keys(b[3])
let value3 = Object.values(b[3])
console.log(keyName0)
console.log(value0)
console.log(keyName1)
console.log(value1)
console.log(keyName2)
console.log(value2)
console.log(keyName3)
console.log(value3)

//          3 задача
let arr =[]
while(true){
    if(arr.length === 10) break
    let number = Math.ceil(Math.random()*10)
    arr.indexOf(number) ==-1 && arr.push(number)
}

console.log(arr)  
