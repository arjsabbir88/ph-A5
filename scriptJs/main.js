let increaseNumber = document.getElementById("increaseNumber");
let decreaseNumber = document.getElementById("decreaseNumber");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
let title = document.querySelectorAll(".title");
const completeBtn = document.querySelectorAll(".completeBtn");
const blog = document.getElementById("blog");
blog.addEventListener("click", function(){
    window.location.href= "../blog/index.html";
})

for(let i = 0; i< completeBtn.length; i++){

    completeBtn[i].addEventListener("click", function(event){
        alert("Board updated Successfully");

        // increasing value 
        let increaseValue = parseInt(increaseNumber.innerText) + 1;
        increaseNumber.innerText = increaseValue;

        // decreasing value
        let decreaseValue = parseInt(decreaseNumber.innerText) - 1;
        decreaseNumber.innerText = decreaseValue;

        // for time
        let getTime = new Date();
        let hour = getTime.getHours();
        let mint = getTime.getMinutes();
        let sec = getTime.getSeconds();
        let period = hour>= 12? "PM" : "AM";
        hour = hour - 12;
        const presentTime = `${hour}:${mint}:${sec} ${period}`;
        const currentTitle = title[i].innerText; 

        // activity log
        const historyField = document.getElementById("historyField");
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="flex justify-center p-2 bg-[#F4F7FF] rounded-lg mt-2">
                You have Complete The Task ${currentTitle} at ${presentTime}
            </div>
        `;
        historyField.appendChild(div);

        // button disable 
        completeBtn[i].setAttribute("disabled","true");
        completeBtn[i].classList.add("disabled:bg-gray-200");

        if(decreaseValue === 0){
            alert("congrates!! You have completed all the current task")
        }
    })
}

clearHistoryBtn.addEventListener("click", function(){
    const historyField = document.getElementById("historyField");

    historyField.innerHTML = ""
})