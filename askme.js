var elements = document.querySelectorAll("[type=radio]");
for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener("change", (e)=>{
        let mark = e.target.value;

        if(mark == "correct"){
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "green";

            let els = parentNode.parentNode.querySelectorAll("[type=radio]");
                for(var j = 0; j < els.length; j++){
                    els[j].disable = true;
            }

        }else if(mark == "incorrect"){
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "red";

            let els = parentNode.parentNode.querySelectorAll("[type=radio]");

                for(var j = 0; j < els.length; j++){
                    els[j].disable = true;
            }

            let correct = parentNode.parentNode.querySelector("[value=correct]");
            correct.parentNode.style.backgroundColor = "green";
        }
    })
}