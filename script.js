let disp = "";
let buttons = document.querySelectorAll('.buns');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) =>{
        console.log(e.target.innerHTML); 
    })
});
