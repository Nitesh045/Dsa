let weekdays=['mon','tue','wed','thu','fri','sat','sun'];

function weekdayText(weekdays,){
    for(let i=0;i<weekdays.length;i++){
        function getText(n){
            if(i==n){
                console.log(weekdays[n])
            }
        }
        getText(5)
    }
}
weekdayText(weekdays);