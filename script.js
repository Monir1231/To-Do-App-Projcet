// //  Selectied 
// let InputField = document.querySelector("#InputField");
// let btn = document.querySelector("#btn");
// let ullist = document.querySelector("#ullist");

// // add input 
// function textAdd(){
//     let text = InputField.value.trim()
    
//     if (text === ""){
//         alert("Input Field Empty");
//         return;
//     }

//     // create remmove edit 
//     const li = document.createElement("li")
//     li.innerHTML = `
//                  ${text} <button class = "edit">Edit</button>
//                  <button class = "remove-me">Remove-me</button>
//     `
// //   remove 

//     li.querySelector(".remove-me").addEventListener("click",()=>{
//         ullist.removeChild(li)
//     })

//     // prompt add 
//   li.querySelector(".edit").addEventListener("click",()=>{
//     let newText = prompt("Enter new text:" ,text);
//     if(newText !== null && newText.trim() !==""){
//         li.firstChild.textContent =newText + ""
//     }
//   })
//   ullist.appendChild(li)
//   InputField.value = " ";

// }


// btn.addEventListener("click",textAdd);

// // keypress add 

// InputField.addEventListener("keypress",(even)=>{
//     if(even.key == "Enter"){
//         textAdd()
//     }
// })


let InputField = document.querySelector("#InputField");

let btn = document.querySelector("#btn");

let ULlist =document.querySelector("#ULlist");

function textAdd(){
    let text = InputField.value.trim();

    if(text === ""){
        alert("Input your file");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `${text} <button class = "Edit">Edit</button>
                           <button class ="remove-me">Remove me</button>`

      li.querySelector(".remove-me").addEventListener("click",()=>{
        ULlist.removeChild(li)
      });
      
      li.querySelector(".Edit").addEventListener("click",()=>{
        let newText = prompt("Enter new text:", text);
        if( newText !== null && newText.trim() !==""){
            li.firstChild.textContent = newText + " "
        }
      })
      ULlist.appendChild(li)
      InputField.value = " ";
    }

    btn.addEventListener("click",textAdd)

    InputField.addEventListener("keypress",(even)=>{
        if(even.key == "Enter"){
            textAdd()
        }
    })