
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
//  This lines are not required for assignment
//  var resultmeter = kilometerToMeter(14);
//  console.log(resultmeter);

function budgetCalculator(watchValue,phoneValue,laptopValue){
     var watchPrize = watchValue*50;
     var phonePrize = phoneValue*100;
     var laptopPrize = laptopValue*500;

     var totalPrize = watchPrize + phonePrize + laptopPrize;
     return totalPrize;
}
// This lines are not required for assignment.
// var totalBudget = budgetCalculator();
// console.log(totalBudget);

 function hotelCost(days){
    var totalCost = 0;
    if(days<=10){
        totalCost = days * 100;
    }
    else if(days<=20){
        var firstTenDays = days * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = days * 100;
        var secondTenDays = days * 80;
        var remaining = days-20;
        var lastDays = days * 50;
        totalCost = firstTenDays + secondTenDays + lastDays;
    }
    return totalCost;
 }
//  This lines are not required for assignment.
//  var findCost = hotelCost(20);
//  console.log(findCost);





function megaFriend(friendName){
    var longestName = friendName[0];
    
    for(var i = 0 ; i < friendName.length; i++){
        var element = friendName[i];
        if(element.length >longestName.length){
            longestName = element;
        }
    }
    return longestName;
}
// This lines are not required for assignment.
// var findname = megaFriend(["tania", "ilma" , "supti","Suchi","Niharika", "karima","Maksuda","nazmun", "sabikun"]);
// console.log(findname);

