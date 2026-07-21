let btn = document.getElementById("submitBtn");

btn.addEventListener("click" , function(){

    let name = document.querySelector("#name").value.trim();
    let age = document.getElementById("age").value.trim();
    let work = document.getElementById("work").value.trim();

    if(name == "" || age == "" || work == ""){
        alert("please fill all fields");
        return;
    }
    console.log(`Name : `+ name);
    console.log(`Age : ` + age);
    console.log(`Job : ` + work);

    if (age < 18) alert("You are Under Age");
    else alert("You are Under Age");
    
})

