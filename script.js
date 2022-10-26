function saveData(){
    let name,email,psw;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    psw=document.getElementById("psw").value;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("psw",psw);
}

