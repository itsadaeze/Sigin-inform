function validateform() {
    var firstName = document.myform.firstname.value;
    var lastName = document.myform.lastname.value;
    var emailAdd = document.myform.emailaddress.value;
    var passwordForm = document.myform.passwords.value.length;
    var status = false

    if (firstName == "") {
        document.getElementById("firstlocation").innerHTML = "required";
        status = false;
    } else {
        document.getElementById("firstlocation").innerHTML = "correct";
        status = true;
    }

    if (lastName == "") {
        document.getElementById("lastlocation").innerHTML = "name wrong";
        return false;
    } else {
        document.getElementById("lastlocation").innerHTML = "correct";
        status = true;
    }

    if (emailAdd == "") {
        document.getElementById("emaillocation").innerHTML = "emailwrong";
        return false;
    } else {
        document.getElementById("emaillocation").innerHTML = "correct";
        status = true;
    }
    if (passwordForm.length < 6 || passwordForm == "") {
        document.getElementById("passwordlocation").innerHTML = "emailwrong";
        return false;
    } else {
        document.getElementById("passwordlocation").innerHTML = "correct";

    }
    return status;
}