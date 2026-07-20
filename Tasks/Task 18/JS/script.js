// for(var i=1;i<=10;i+=2) console.info(`User ${i}`)

// let flag=1;

// while(flag == 1) {
// console.log(`Youssef`);
// flag = prompt(`0 for pause 1 for continue`);
// }


// let resume=0;

// do {
// console.log(`Youssef 2`);
// flag = prompt(`0 for pause 1 for continue`);
// } while (flag == 1) ;


let user = {
    fullname: "Youssef Mostafa",
    age: 18 ,
    job: "Frontend Developer" ,
    salary: 18000 ,
    practice: function(sport) {
        console.log(`Youssef is Practice ${sport} `);
    }

};

user.sport = "GYM" ;
console.log(user);
