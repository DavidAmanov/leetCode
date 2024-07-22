// Данн массив строк на входе - дни в которых номер в отеле занят, нужно найти самый максимальный отрезок из дней
// в которые номер свободен и вернуть координаты этого отрезка на выход 
// месяц длинной 28 дней, первое число месяца в понедельник, получается следующий понедельник 8 числа

let reservedDays = [['MON', 'TUE', 'FRI', 'SUN', 'THU', 'SAT', 'WED'], ['MON', 'TUE', 'FRI', 'SUN', 'THU', 'SAT', 'WED'], ['MON', 'TUE', 'FRI', 'SUN', 'THU', 'SAT', 'WED'], ['MON', 'TUE', 'FRI', 'SUN', 'THU', 'SAT', 'WED']] //- дни указанные в массиве заняты 

let oneMonth = Array(28).fill(0) // массив всех дней, изначально все дни свободны - 0 
function checkTheWeek(week, numberOfWeek){
    let step = 0 
    function dayToIndex(day){
        let daysOfWeek={
            'MON': 0,
            'TUE': 1,
            'WED': 2,
            'THU': 3,
            'FRI': 4,
            'SAT': 5,
            'SUN': 6
        }
        return daysOfWeek[day]
    }
    if(numberOfWeek===0){
        step=0
    } else if(numberOfWeek===1){
        step=7
    } else if(numberOfWeek===2){
        step=14
    } else if(numberOfWeek===3){
        step=21
    }

    for(let i =0; i<=week.length-1; i++){
        oneMonth[dayToIndex(week[i])+step] = 1 //занимаем дни
    }
}

function reservedDaysInMonth(){
    for(let i =0; i<=reservedDays.length-1;i++){
        checkTheWeek(reservedDays[i], i)
    }
}

function findTheVacation(){
    reservedDaysInMonth()
    let current = 0 
    let max = 0
    let end = 0 
    let start = 0
    for(let i = 0; i<=oneMonth.length-1; i++){
        if(oneMonth[i]===0){
            current+=1
            if(current>max){
                max = current
                end = i + 1
                start = end - current +1
            }
        } else if(oneMonth[i]===1){
            current=0
        }
    }
    return `${start} ${end}`
}

console.log(findTheVacation())
console.log(oneMonth)

