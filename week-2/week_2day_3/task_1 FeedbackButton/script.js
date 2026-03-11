const btn=document.getElementById("feedbackBtn");
const msg=document.getElementById("message");
btn.addEventListener("click",()=>{
    msg.textContent="Thank you! for submitting your feedback.";
});
