window.addEventListener("load", function(){
    
    var addBtn = document.querySelector(".add-btn");
    var ulNode = document.querySelector(".todo-list ul");

    var todayDate = document.querySelector(".today-date span");
    var today = new Date();
    
    todayDate.textContent = today.toLocaleDateString();


    addBtn.onclick = function(){
        var template = document.querySelector("template");
        var inputBox = document.querySelector(".input-box");
        var inputData = inputBox.value;

        if(inputData == ""){
            alert("내용을 입력하세요.");
            return;
        }
        var cloneNode = document.importNode(template.content, true);
        var labelNode = cloneNode.querySelector("label");

        labelNode.textContent = inputData;
        ulNode.append(cloneNode);

        inputBox.value = "";
    };

    ulNode.onclick = function(e) {
        var target = e.target;
        if(target.classList.contains("fa-trash-alt")){
            var pe = target.parentElement;
            for(; pe.nodeName != "LI"; pe=pe.parentElement);
            pe.remove();
        }
        else if(target.classList.contains("checkBox")){
            var ce = target.nextElementSibling;
            ce.classList.toggle("done");
        }
    };

});