module.exports = function toReadable(number) {
    let oneNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let twoNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fifteen', 'eighteen']
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'eighty']
    let hundredNumber = 'hundred'
    let teen = 'teen'
    let ty = 'ty'
    let numberStr = ''

    if (number % 100 === 0 && number !== 0) {
        numberStr = oneNumber[number / 100] + ' ' + hundredNumber
    }

    if (number > 100 && number % 100 !== 0) {
        numberStr = oneNumber[Math.trunc(number / 100)] + ' ' + hundredNumber + ' '
        number = number - (100 * Math.trunc(number / 100))
    }

    switch (number) {
        case 0:
            return oneNumber[0]
        case 1:
            return (numberStr + oneNumber[1])
        case 2:
            return (numberStr + oneNumber[2])
        case 3:
            return (numberStr + oneNumber[3])
        case 4:
            return (numberStr + oneNumber[4])
        case 5:
            return (numberStr + oneNumber[5])
        case 6:
            return (numberStr + oneNumber[6])
        case 7:
            return (numberStr + oneNumber[7])
        case 8:
            return (numberStr + oneNumber[8])
        case 9:
            return (numberStr + oneNumber[9])
        case 10:
            return (numberStr + twoNumber[0])
        case 11:
            return (numberStr + twoNumber[1])
        case 12:
            return (numberStr + twoNumber[2])
        case 13:
            return (numberStr + twoNumber[3])
        case 15:
            return (numberStr + twoNumber[4])
        case 18:
            return (numberStr + twoNumber[5])
        case 20:
            return (numberStr + dozens[0])
        case 30:
            return (numberStr + dozens[1])
        case 40:
            return (numberStr + dozens[2])
        case 50:
            return (numberStr + dozens[3])
        case 80:
            return (numberStr + dozens[4])
    }

    if (number > 13 && number < 20 && number !== 15 && number !== 18) {
        numberStr = numberStr + oneNumber[number - 10] + teen
    }

    if (number > 20 && number < 30) {
        numberStr = numberStr + dozens[0] + ' ' + oneNumber[number - 20]
    }

    if (number > 30 && number < 40) {
        numberStr = numberStr + dozens[1] + ' ' + oneNumber[number - 30]
    }

    if (number > 40 && number < 50) {
        numberStr = numberStr + dozens[2] + ' ' + oneNumber[number - 40]
    }

    if (number > 50 && number < 60) {
        numberStr = numberStr + dozens[3] + ' ' + oneNumber[number - 50]
    }

    if (number > 80 && number < 90) {
        numberStr = numberStr + dozens[4] + ' ' + oneNumber[number - 80]
    }

    if (number === 60 || number === 70 || number === 90) {
        numberStr = numberStr + oneNumber[number / 10] + ty
    }

    if (number > 60 && number < 70 || number > 70 && number < 80 || number > 90 && number < 100) {
        numberStr = numberStr + oneNumber[Math.trunc(number / 10)] + ty + ' ' + oneNumber[number - (10 * Math.trunc(number / 10))]
    }
    return numberStr
}
