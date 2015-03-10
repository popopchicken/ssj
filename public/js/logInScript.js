
function myFunction() {
    if ($("input[type=text]").filter(function () {
        return this.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    })) {
        window.alert("Incorrect Username or Password");
    } else {



    }




}
