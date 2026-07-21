// let element = document.getElementById("demo");
// console.log("element");

// let element2 = document.getElementsByClassName("test");
// console.log("element2");

// let element3 = document.getElementsByTagName("h3");
// console.log("element3");



let btnElement = document.querySelector(".btn");

function btnAdd() {
    alert(`User added`);

    btnElement.style.background = "green";

    btnElement.innerHTML= "Clicked";

}

btnElement.addEventListener("click" , function (){btnAdd()});

