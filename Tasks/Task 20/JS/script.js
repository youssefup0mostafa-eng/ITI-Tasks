// let ele = document.querySelector(`h1`);
// console.log(ele);

//     ele.addEventListener("click" , function(){
//     ele.style.color = `red`;
//     ele.style.backgroundColor = `black`;
//     ele.style.marginTop = `100px`;
// })

// let elementDiv = document.createElement(`div`);
// document.body.appendChild(elementDiv);

// elementDiv.setAttribute(`class` , `new`);
// elementDiv.id = `demo`

// let textSent = document.createTextNode(`Hello world!`);
// elementDiv.appendChild(textSent);

// document.getElementById(`demo`).remove;
let user = {
    funllname: "Youssef Mostafa ELSayed",
    age: 18,
    salary: 18000,
    son: {
        funllname: "Malak" ,
        gender: "female",
    }
}

console.log(user);
let {funllname:userName ,
    age:userAge ,
    son:
    {funllname:sonFullName ,
    gender:sonGender}} = user ;

    console.log(`Full Name : ${userName} Age : ${userAge} \n
    Son Full Name : ${sonFullName} Son Gender : ${sonGender}`);
    


