let disp = "";
let ans = document.getElementById("ans");
let buttons = document.querySelectorAll('.buns');
let result = 0;
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) =>{ 
        if(e.target.innerHTML == "="){
            result = eval(disp);
            ans.innerText = result;
            disp = "";
        }
        else if(e.target.innerHTML == "AC"){
            ans.innerHTML = "";
            disp = "";
        }
        else{
            disp = disp + e.target.innerHTML;
            ans.innerHTML = disp;
        }
        console.log(ans);
    })
});
