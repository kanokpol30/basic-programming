const score = [10,23,26,30,33]

let sum: number = 0

for (let i = 0; i < score .length; i++) {
    sum = sum + score[i] 
}

let avg = sum / score.length

console.log("total: ", sum)
console.log("avg: ", avg)
const score = [10,23,26,30,33]

let sum: number = 0

for (let i = 0; i < score .length; i++) {
    sum = sum + score[i] 
}
console.log("total: ", sum)
const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)

const myStudents: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray[3])

const myStudentsArray: string = "เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"


console.log(myStudentsArray.toString())

const FullName: string = 'สุดดสวย สุดหล่อ'

console.log(FullName.split("")[0])

console.log(FullName.split(0, FullName.indexOf("")))
const myStudents: string = "ช้างม้าวัวควาย"

const myStudentsArray: string[] = myStudents.split('')

console.log(myStudents)
console.log(myStudentsArray[3])


const Animals: string = "หมาแมวะกระต่ายะหมู"
const AnimalsArray: string[] = Animals.split('')

console.log("ตั้งต้น: ", AnimalsArray)

AnimalsArray.pop () //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ", AnimalsArray)

AnimalsArray.push('ยีราฟ') //ใส่ต่อท้าย

console.log(" ใส่ต่อท้าย: ", AnimalsArray)

AnimalsArray.shift() //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", AnimalsArray)

AnimalsArray.unshift('กาปิบาร่า') //ใส่ตัวหน้า

console.log("ใส่ตัวหน้า: ", AnimalsArray)


const Friend: string = "ปุ๋ย,ปุ้ย,ป่าน,ป้าง"
const FriendlsArray: string[] = Friend.split(',')

console.log(FriendlsArray)

FriendlsArray.sort()

console.log(FriendlsArray)

FriendlsArray.reverse()

console.log(FriendlsArray)

const me = {
    firstName: 'kanokpol',
    lastName: 'Burawat',
    age: 20
}