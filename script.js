var count=0
function newtask() {
     count++;
    var li = document.createElement("li");
    // var label=document.createElement("label");
    var btn = document.createElement("button");
    var input = document.getElementById("input1").value;
    var task = document.createTextNode(input);
    var h = document.querySelector("h2");

    btn.innerText = "Delete";
    btn.class = "delete";

    li.appendChild(task);
    li.appendChild(btn);
    btn.style.backgroundColor = "red";
    btn.style.margin = "10px";
    btn.style.padding = "5px";
    btn.style.color = "white";
    btn.style.borderRadius = "5px";
    // btn.style.cssText=" backgroundColor:red;margin:5px;border-radius:10px;color:black;padding:5px";
    document.getElementById("myul").appendChild(li);
    document.getElementById("input1").value = " ";

    btn.onclick = deletetask;
    if (count!=0) {
        h.style.display="none";
    }
    else{
        h.style.display="block";
    }
   
}
function deletetask() {
    var li = this.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
    count--;
}
count=0;

// count++;
// console.log(count);


