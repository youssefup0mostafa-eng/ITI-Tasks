// "useStrict"

// let userNameInput  = document.querySelector(`#userNameInput`);

// let addBtn = document.querySelector(`.addBtn`);

// let logBtn = document.querySelector(`.logBtn`);

// let remvBtn = document.querySelector(`.remvBtn`);

// let clearBtn = document.querySelector(`.clearBtn`);

// let userName = localStorage.getItem("userName");

// let message = document.querySelector(".message");

// addBtn.addEventListener(`click` , function(){
//     localStorage.setItem(`userName` , userNameInput.value);
//     userName = userNameInput.value;
//     location.reload();
// })

// logBtn.addEventListener(`click` , function(){
//     message.innerHTML = `Hello ${userName}`;
// })

// remvBtn.addEventListener(`click` , function(){
//     localStorage.removeItem(`userName`);
//     location.reload();
// })

// clearBtn.addEventListener(`click` , function(){
//     localStorage.clear();
//     location.reload();
// })
// ===================================================================

// async function getPosts(){

//     try {
//         let response = await fetch(`https://fakestoreapi.com/products`);
//         if (response.ok) {
//             let result = await response.json();
//             for (const element of object) {
//                 for (const key in object) {
//                     console.log(post[item]);
                    
//                 }
                
//             }
//         } else {
//             console.log(`No data Found`);
            
//         } 
//     }
//         catch (error){
//             console.log(`Error : ${error}`);}
//     }

// getPosts();

// ================================================================
// async function getPost (){
//     try{
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//         if(response.ok){
//             let resData = await response.json();
//             for(const post of resData){
//                 for (const item in post) {
//                     console.log(post[item]);
                    
//                 }
//             }
//         } else {
//             console.log(`not found`);
            
//         }
//     }catch(error){
//         console.log(`an error${error}`);
        
//     }
// }
// getPost();

// =====================================================================
let postsDiv = document.querySelector(`.posts`);

async function getPost (){
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        if(response.ok){
            let resData = await response.json();
            displayContent(resData)
        } else {
            console.log(`not found`);
            
        }
    }catch(error){
        console.log(`an error${error}`);
        
    }
}
getPost();

// ===================================================================

function displayContent(dataArray) {
let contentContainer =``;
for (const post of dataArray) {
contentContainer += `
<div class="card">
<span>User ID: ${post.userId}</span>
<div class="card-body">
<h4 class="card-title">${post.title}</h4>
<p class="card-text">${post.body}</p>
</div>
<p>Post ID: ${post.id}</p>
</div>
`
postsDiv.innerHTML = contentContainer;

}}
