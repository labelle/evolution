// For the script to function, elements on the page must reference everything in this js file
// If anything in the html page is missing then the js will error out


// // http://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript#4338544

//     if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}+$/.test(p))  {
//         phoneErrorLine = "Please correct your phone number";
//         document.getElementById("phone1_error_contact_line").innerHTML = phoneErrorLine;
//         submit = false;
//     }



document.getElementById("form-validation-contact-line").onsubmit = function () {


    var n = document.forms["form-validation-contact-line"]["name1"].value;
    var e = document.forms["form-validation-contact-line"]["email1"].value;
    var p = document.forms["form-validation-contact-line"]["phone1"].value;
    var m = document.forms["form-validation-contact-line"]["message1"].value;

    // console.log(n)

    var submit = true;

    if (n.length < 8) {
        nameErrorLine = "8 or more characters";
        document.getElementById("name1_error_contact_line").innerHTML = nameErrorLine;
        submit = false;

    } else if (n.length > 100) {
        nameErrorLine = "Way too many characters";
        document.getElementById("name1_error_contact_line").innerHTML = nameErrorLine;
        submit = false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {  
        emailErrorLine = "Your email is not valid";
        document.getElementById("email1_error_contact_line").innerHTML = emailErrorLine;
        submit = false;
    }

    if (p.length < 10)  {
        phoneErrorLine = "10 or more characters";
        document.getElementById("phone1_error_contact_line").innerHTML = phoneErrorLine;
        submit = false;

    } else if (p.length > 25) {
        phoneErrorLine = "Too many characters";
        document.getElementById("phone1_error_contact_line").innerHTML = phoneErrorLine;
        submit = false;
    }

    if (m.length < 12) {
        messageErrorLine = "12 or more characters";
        document.getElementById("message1_error_contact_line").innerHTML = messageErrorLine;
        submit = false;

    } else if (m.length > 5000) {
        messageErrorLine = "Too many characters";
        document.getElementById("message1_error_contact_line").innerHTML = messageErrorLine;
        submit = false;
    }


    return submit;
}

function removeWarningContactLine() {
    document.getElementById(this.id + "_error_contact_line").innerHTML = "";
}


document.getElementById("name1").onkeyup = removeWarningContactLine;
document.getElementById("email1").onkeyup = removeWarningContactLine;
document.getElementById("phone1").onkeyup = removeWarningContactLine;
document.getElementById("message1").onkeyup = removeWarningContactLine;
