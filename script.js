function submitFunctionGet() {
    let userData = {
        fName: document.getElementById('userName').value,
        lName: document.getElementById('userSurname').value,
        age: document.getElementById('userAge').value,
        address: document.getElementById('address').value
    };

    
    let userAge = document.getElementById('userAge');

    if (userAge.value > 100) {
        userAge.value = 'Age must be less than 100';
    } else {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/formGet?fName="+userData.fName+"&lName="+userData.lName+"&address="+userData.address+"&age="+userData.age);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();


        let xhrPost = new XMLHttpRequest();
        

        xhrPost.open("POST", "/formPost");
        xhrPost.setRequestHeader("Content-type", "application/json");
        xhrPost.send(JSON.stringify(userData));
    }
    
}