// Declaration Function

function UserGrade(){
    var UserGrade = prompt(`Enter Your Grade From 100`);
   if(UserGrade >= 90) console.log(`Excellent`);
   else if (UserGrade >= 80 && UserGrade < 90) console.log(`Good`);
   else if (UserGrade >= 70 && UserGrade < 80) console.log(`Average`);
   else if (UserGrade >= 60 && UserGrade < 70) console.log(`Pass`);
   else console.log(`Fail`);

} 



// For Loop

for(var i=1;i<=10;i+=2) console.info(`User ${i}`)

// Even Odd  && Positive Negative
let flag=1;

while(flag == 1) {
var UserTest = prompt   (`type number`);

if (UserTest > 0) console.log(`Positive-Number`);
else if (UserTest < 0) console.log(`Negative-Number`);
else console.log(`zero`);

if (UserTest % 2 == 0) console.log(`Even-Number`);
else console.log(`Odd-Number`);
flag = prompt(`0 for pause 1 for continue`);
}

// Do While

let resume=0;

do {
console.log(`Youssef 2`);
flag = prompt(`0 for pause 1 for continue`);
} while (flag == 1) ;

// Object

let user = {
    Fullname: "Youssef Mostafa",
    Age: 18 ,
    Job: "Frontend Developer" ,
    Salary: 18000 ,
    Practice: function(sport) {
        console.log(`Youssef is Practice ${sport} `);
    }

};

// Expression Function
var ExpFunc = function () {
    var calc =4 ;
    return calc ;
    var calc =6 ;
};




// Invoke

user.sport = "GYM" ;
console.table(user);
UserGrade();
var result = ExpFunc();
console.log(`Expression Function Result = ${result}`);
