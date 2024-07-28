function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'เกรด F'
    } else if (score < 60) {
        return 'เกรด D'
    } else if (score < 70) {
        return 'เกรด C'
    } else if (score < 80) {
        return 'เกรด B'
    } else if (score < 90) {
        return 'เกรด A'
    }
}



console.log(grade(100,100, 100)) // มี input มี output

function helloWoeld() {
    console.log ("สวัสดี")
}

helloWoeld()

function helloName(name:string) {
    console.log(name)
}
helloName('MAx')

function getPi() {
    return 3.14
}
console.log(getPi())

function st(fname: string, sname: string) {
    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else{
        console.log('ไม่สอน')
    }
}

st('mix','zane')


function st(aname:string, bname:string, cname:string) {
    if (aname === 'mix' && bname === 'zane' || cname === 'forth') {
        console.log('พร้อมเรียน')
    } else{
        console.log('ยังไม่พร้อมเรียน')
    }
}

st('mix','zane','forth')

function st(sex:string, height:number, weight:number) {
    if (sex === 'Man' && (height > 170 || weight > 50 && weight <= 110)) {
        console.log('จับใบดำใบแดง')
    } else{
        console.log('ไม่เข้าเกณฑ์')
    }
}

st('Man',170,60)

function st(age:number, salary:number, deposit:number) {
    if (age => 16 && salary < 70000 && deposit < 500000 ) {
        console.log('รับ 10000 บาท')
    } else {
        console.log('อดแดก')
    }
} 

st(17,60000,400)


