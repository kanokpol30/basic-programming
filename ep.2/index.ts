function add(a: number, b: number) {
    return a + b
}


console.log (add(3,4))

function ssss(a: number, b: number) {
    return a - b
}


console.log (ssss(5,4))


function aaaa(a: number, b: number, c: number, d:number) {
    return a * b * c / d
}


console.log (aaaa (4,5,6,7))



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

console. log(grade(2, 50, 30))

