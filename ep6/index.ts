console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for (let i = 8; i <= 10; i+ 2) {
    console.log(i)
}

let sum : number

for (let i = 1; i <= 365; i++) {
    sum = sum + i
}

console.log('Total: ',  sum)

let sum: number = 0
let i: number = 1

while (i <= 31) {
    sum = sum + i
}
console.log('total ', sum)
let sum: number = 0
let i: number = 1

while (i <= 31) {
    sum = sum + i
    i++
}
console.log('total ', sum)

let count: number =0 

while(true) {
    console.log("ฉันอายุ20")
    count++
    if (count === 20 ) {
        break
    }
}



for (let i = 1; 1 <= 13; 1++) {
    console.log('ฉันอายุ ' + i + ' ปี')
}

let i: number = i
while(i <= 13) {
    console.log('ฉันอายุ ' + i +' ปี')
    i++
}

let i:number = 1
do {
    console.log('ฉันอายุ' + i + ' ปี')
    i++
} while (i <= 20)

const cars: string[] = ['Toyota', 'Honda','Suzuki','Yamaha','Mazda']

console.log(cars[3])

const cars: string[] = ['Toyota', 'Honda','Suzuki','Yamaha','Mazda']

cars[2] = 'Isuzu'

console.log(cars[2])

const pi = 3.14

pi = 5

const cars: string[] = ['Toyota', 'Honda','Suzuki','Yamaha','Mazda']

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[4])


const cars: string[] = ['Toyota', 'Honda','Suzuki','Yamaha','Mazda']

for (let i = 0; i < 5; i++) {
    console.log(cars[i])
}


const cars: string[] = ['Toyota', 'Honda','Suzuki','Yamaha','Mazda']

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

const cars: string[] = ['Toyota', 'Honda','Suzuki','Yamaha','Mazda']


for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}


const cars: string[] = ['Toyota', 'Honda','Suzuki','Yamaha','Mazda']


for (let i = 0; i < cars.length; i++) {
    if (cars[i] === 'Yamaha')
    console.log('รถซื้อแกงจะแรงได้ไง')
}


console.log (cars.includes('BYD'))


const Eat: string[] = ['art', 'ban','P','Tae','plam']


for (let i = 0; i < Eat.length; i++) {
    if (Eat[i] === 'plam')
   console.log('ไปกินหมูกะทะกัน')
}

 // งานในห้อง
const array: number[] = [1,2,3,4,5,6,7,8,9,10]


for (let i = 0; i < 10; i++) {
    if (array[i] === 3||array[i] === 5 ||array[i] === 7 ) {
        array[i] = 0
    }
  
}

console.log(array)
