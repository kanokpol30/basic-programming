function sayHi(dayOfweek: number) {
    if (dayOfweek === 1) {
        console.log('สวัสดีวันจันทร์') 
    } else if (dayOfweek === 2) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayOfweek === 3) {
        console.log('สวัสดีวันพุธ')
    } else if (dayOfweek === 4) {
        console.log('สวัสดีวันพฤหัส')
    } else if (dayOfweek === 5) {
        console.log('สวัสดีวันศุกร์')
    } else if (dayOfweek === 6) {
        console.log('สวัสดีวันเสาร์')
    } else if (dayOfweek === 7) {
        console.log('สวัสดีวันอาทิตย์')
    }
}

sayHi (4)


function sayHi2(dayOfweek: number) {
    switch(dayOfweek) {
        case 1 :
            console.log('สวัสดีวันอาทิตย์')
            break
            case 2 : 
            console. log('สวัสดีวันจันทร์')
            break
            case 3 :
            console.log('สวัสดีวันอังคาร')
            break
            case 4 : 
            console.log('สวัสดีวันพุธ')
            break
            case 5 : 
            console.log('สวัสดีวันพฤหัส')
            break
            case 6 :
            console.log('สวัสดีวันศุกร์')
            break
            case 7 :
            console.log('สวัสดีวันเสาร์')
            break
        default :
            console.log('ใส่ทำไมเขามี7วันไอควาย')
            break
    }
}

sayHi2 (5)

function Shirt(size: string) {
    switch(size) {
        case 's' :
            console.log('ผอมไปแดกข้าวบ้าง')
            break
            case 'm' :
            console.log('ก็บอกว่าผอมไปไอควาย')
            break
            case 'l' :
            console.log('ท่วมจัดอะ')
            break
            case 'xl' :
            console.log('อ้วนเกินออกกำลังกายบ้าง')
            break
            case '2xl' :
            console.log('ก็บอกว่าอ้วนไงเลิกแดก')
            break
    }
}

Shirt ('s')

function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(40.64676,10))

function toCurrency11 (g: number) {
    return g.toLocaleString()
}
console.log(toCurrency11(300000))

const str: string = 'ผมชื่อณเดชณ์ ณ บางระจันทร์ บ้านหนองกระทุ่มแบน'

console.log(str.length)
const str: string = 'ผมชื่อณเดชณ์ ณ บางระจันทร์ บ้านหนองกระทุ่มแบน'

console.log(str.charAt(2))

const str: string = '  ผมชื่อณเดชณ์ ณ บางระจันทร์ บ้านหนองกระทุ่มแบน   '

console.log(str.trim())

const str: string = "kanokpol"

console.log(str.toLocaleUpperCase())

function CheckStingLength(c : string){
    console.log(c.length)
}

CheckStingLength('ว่าไงน้องสาว')

function getCharByIndex(msg: string, index: number) {
    return msg.charAt(index)
 }

console.log(getCharByIndex('ง่วงนอนมาก',5))

const str: string= 'กลับบ้านได้ยัง'

console.log(str.lastIndexOf('ง'))

const str:string = 'ใครรักมึง'

console.log(str.includes('มึง'))

function Findtheword(a: string,s: string ) {
    if (a.includes(s)) {
        console.log(a.indexOf(s))
    } else {
        console.log('ไม่พบคำค้นหา')
    }
 }
Findtheword('ไม่อยากกลับ','อยาก')