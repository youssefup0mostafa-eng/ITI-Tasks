/* 
    id: 1,
        name: "Mostafa Mohamed",
        age: 28,
        city: "Cairo",
        grade: 95,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS"]
*/




let student = [
    {
        id: 1,
        name: "Youssef Mostafa",
        age: 18,
        city: "Cairo",
        grade: 94,
        isGraduated: false,
        skills: ["HTML", "CSS", "JS" , "React"],
    }
    ,
    {
        id: 2,
        name: "Abdo Waled",
        age: 19,
        city: "Giza",
        grade: 91,
        isGraduated: false,
        skills: ["HTML", "CSS", "JS" , "React"],
    }
    ,
    {
        id: 3,
        name: "Ali Mohamed",
        age: 20,
        city: "Aswan",
        grade: 90,
        isGraduated: false,
        skills: ["HTML", "CSS", "JS" , "React"],
    }

];

console.log(student.length);
console.log(student.at(0).name);
console.log(student.at(student.length -1).name);

for (let i=0 ; i<student.length ; i++) console.log(student.at(i).name);

for (let i=0 ; i<student.length ; i++) console.table(student.at(i));

for (let i=0 ; i<student.length ; i++) {

    console.log(`UP 18 Years`);
    

    if(student.at(i).age > 18) console.log(student.at(i).name);

}

for (let i=0 ; i<student.length ; i++) {

    if(student.at(i).grade > 90)
        {
            console.log(`UP 90%`);
            console.log(student.at(i).name);
        } 

}

for (let i=0 ; i<student.length ; i++) {

    if(student.at(i).grade > 90)
        {
            console.log(`UP 90%`);
            console.log(student.at(i).name);
        }

}

for (let i=0 ; i<student.length ; i++) {

    if(student.at(i).isGraduated == true)
        {
            console.log(`Graduated`);
            console.log(student.at(i).name);
        }

}

for (let i=0 ; i<student.length ; i++) {

    if(student.at(i).isGraduated == false)
        {
            console.log(`Not Graduated`);
            console.log(student.at(i).name);
        }

}

let sumGrades = 0;
let avgGrades = 0;

for (let i=0 ; i<student.length ; i++) {

    sumGrades += student.at(i).grade;

}

avgGrades = sumGrades / student.length;

console.log(`The Sum of Grades` + sumGrades);
console.log(`The Avg of Grades` + avgGrades);


let maxGrade = -999999;
let minGrade = 999999;

for (let i=0 ; i<student.length ; i++) {

    if(student.at(i).grade > maxGrade) maxGrade=student.at(i).grade ;

}

console.log(`The Max Grade ` + maxGrade);


for (let i=0 ; i<student.length ; i++) {
    
    if(student.at(i).grade < minGrade) minGrade=student.at(i).grade ;
    
}

console.log(`The Min Grade ` + minGrade);

console.log(student.reverse());
student.reverse();

console.log(student.toSorted());


for(let i=0 ; i<student.length ; i++){
    console.log(student[i].name.toUpperCase());
    console.log(student[i].name.toLowerCase());
    console.log(student[i].name.length);
    console.log(student[i].name.charAt(0));
    console.log(student[i].name.charAt(student[i].name.length -1));
    console.log(student[i].name.split(" "));
    console.log(student[i].name.split(" ").join("-"));
    console.log(student[i].name.trim());

    console.log(`Skills ` + student[i].skills.length);
    console.log(`Skills : ` + student[i].skills);
    
    
}

for(let i=0 ; i<student.length ; i++){


}


