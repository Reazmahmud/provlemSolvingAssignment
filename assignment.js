//feetTomile assignment//
var feet = prompt("Enter the value of feet :");
function feetToMile(feet){
var mile = feet/5280;
return mile;
}
var result = feetToMile(feet);
console.log(result);

//woodCalculator assignment//
var chair = prompt("Enter the number of chair : ");
var table = prompt("Enter the number of table : ");
var bed = prompt("Enter the number of bed : ");
function woodCalculator(chair, table, bed){
    chair = chair*1;
    table = table*3;
    bed = bed*5;
    var totalBricks = chair + table + bed ;
    return totalBricks;
}
var result = woodCalculator(chair, table, bed);
console.log(result + " cubic feet");

//brickCalculator assignment//
var floor = prompt("Enter the number of floor : ");
function brickCalculator(floor){
    if(floor <=0){
        return ("Invalid number : ");
        }
        else if(floor <= 10){
            return (floor * 1500 + " bricks");
        }
        else if(floor <= 20){
        return (floor * 1200 + " bricks");
        }
        else{
            return (floor * 1000 + " bricks");
        }
}
var result = brickCalculator(floor);
console.log(result);

//tinyFriend assignment//
function tinyFriend(names){
    var smallest = names[0];
    for(var i = 0; i<names.length; i++){
        var currentName = names[i];
        if(currentName<smallest){
            smallest = currentName;
        }
    }
    return smallest;
}
var smallestName = tinyFriend(["RIYA", "RAFSA", "SAGORIKA", "MOU", "RAFIA ISLAM RAFA"]);
console.log(smallestName);