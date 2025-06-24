
let InputField = document.querySelector("#InputField");
let btn = document.querySelector("#btn");
let ullist = document.querySelector("#ullist");

function textAdd(){
    let text = InputField.value.trim()
    
    if (text === ""){
        alert("Input Field Empty");
        return;
    }

    const li = document.createElement("li")
    li.innerHTML = `
                 ${text} <button class = "edit">Edit</button>
                 <button class = "remove-me">Remove-me</button>
    `

    li.querySelector(".remove-me").addEventListener("click",()=>{
        ullist.removeChild(li)
    })
  li.querySelector(".edit").addEventListener("click",()=>{
    let newText = prompt("Enter new text:" ,text);
    if(newText !== null && newText.trim() !==""){
        li.firstChild.textContent =newText + ""
    }
  })
  ullist.appendChild(li)
  InputField.value = " ";

}


btn.addEventListener("click",textAdd);

InputField.addEventListener("keypress",(even)=>{
    if(even.key == "Enter"){
        textAdd()
    }
})