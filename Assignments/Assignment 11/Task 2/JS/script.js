var UserGrade = prompt(`Enter Your Grade From 100`);

if(UserGrade >= 90) console.log(`Excellent`);
else if (UserGrade >= 80 && UserGrade < 90) console.log(`Good`);
else if (UserGrade >= 70 && UserGrade < 80) console.log(`Average`);
else if (UserGrade >= 60 && UserGrade < 70) console.log(`Pass`);
else console.log(`Fail`);



/*
"Excellent" for grades 90 and up
"Good" for grades 80-89
"Average" for grades 70-79
"Pass" for grades 60-69
"Fail" for grades below 60
*/