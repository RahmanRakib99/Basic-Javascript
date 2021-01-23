// https://github.com/RahmanRakib99/Basic-Javascript
// 1:
function kilometerToMeter(number){
    if (number<0){
        return "Value can't be Negative";
    }
    var meter=number*1000;
    return meter;
}

// 2:
function budgetCalculator(watchCount,mobileCount,laptopCount){
    if(watchCount<0 || mobileCount<0 || laptopCount<0){
        return "Value can't be Negative";
    }
    var watchPrice=50;
    var mobilePrice=100;
    var laptopPrice=500;

    var watchCost=watchCount*watchPrice;
    var mobileCost=mobileCount*mobilePrice;
    var laptopCost=laptopCount*laptopPrice;

    var totalCost=watchCost+mobileCost+laptopCost;

    return totalCost;
}

// 3:
function hotelCost(stayDays){
    if(stayDays<0){
        return "Value can't be Negative";
    }
    var firstPartCost=100;  //First ten days cost;
    var secondPartCost=80;  //second ten days cost;
    var thirdPartCost=50;   // cost after 20 days;

    var totalCost=0;
    if(stayDays<=10){
        totalCost=firstPartCost*stayDays;    
    }
    else if(stayDays<=20){
        var tenDaysCost=firstPartCost*10;
        var remainingDays=stayDays-10;
        var remainingDaysCost=remainingDays*secondPartCost;
        totalCost=tenDaysCost+remainingDaysCost;
    }
    else{
        var tenDaysCost=firstPartCost*10;
        var secondTenDaysCost=secondPartCost*10;
        var remainingDays=stayDays-20;
        var remainingDaysCost=remainingDays*thirdPartCost;
        totalCost=tenDaysCost+secondTenDaysCost+remainingDaysCost;
    }
    return totalCost;
}

// 4
function megaFriend(names){
    if (names.length<=0){
        return "Array can't be Empty";
    }
    var largestName="";
    for(var i=0;i<names.length;i=i+1){

        if(names[i].length>largestName.length){
            largestName=names[i];
        }
    }
    return largestName;
}






