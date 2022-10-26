function saveData(){
    let name,email,psw;
    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    psw=document.getElementById("psw").value;

//Form data Collect & Store [Array Create]
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    user_records.push({
        "name":name,
        "email":email,
        "psw":psw
    })
    localStorage.setItem("users",JSON.stringify(user_records));
    
}
