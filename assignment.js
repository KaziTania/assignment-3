
function kilometerToMeter(kilometer){
    if (kilometer<=0){
        return "Distance can not be negetive."
    }
    var meter = kilometer*1000;
    return meter;
}
//  This lines are not required for assignment
//   var resultmeter = kilometerToMeter(-2);
//   console.log(resultmeter);

function budgetCalculator(watchValue,phoneValue,laptopValue){
    if(watchValue<0){
        return "Values can not be negetive.";
    }
    if(phoneValue<0){
        return "Values can not be negetive.";
    }
    if(laptopValue<0){
        return "Values can not be negetive.";
    }
     var watchPrize = watchValue*50;
     var phonePrize = phoneValue*100;
     var laptopPrize = laptopValue*500;

     var totalPrize = watchPrize + phonePrize + laptopPrize;
     return totalPrize;
}
// This lines are not required for assignment.
//  var totalBudget = budgetCalculator(10,10,10);
//  console.log(totalBudget);

 function hotelCost(days){
    
     if(days<=0){
        return "Days can not be negetive";
     }
     var totalCost = 0;
    if(days<=10){
        totalCost = days * 100;
    }
    
    else if(days<=20){
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days-20;
        var lastDays = remaining * 50;
        totalCost = firstTenDays + secondTenDays + lastDays;
    }
    return totalCost;
 }
//  This lines are not required for assignment.
//  var findCost = hotelCost(41);
//  console.log(findCost);

function megaFriend(friendName){
    if(friendName<=0){
        return "Name can not be negetive."

    }
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
//  var findname = megaFriend(["tania", "ilma" , "supti","Suchi","Niharika", "karima","Maksuda","nazmun", "sabikun"]);
//  console.log(findname);

