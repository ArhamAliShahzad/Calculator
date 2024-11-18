let string = "";
let buttons = document.querySelectorAll('.button')
let Del = document.getElementsByClassName('Del')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "Del") {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
    
        }

        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        function deleteResult() {
            Result.value = Result.value.slice(0, -1);
        }
    })
})



