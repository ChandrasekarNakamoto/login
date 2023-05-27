const mysql = require('mysql2');

function validated() {
    // Get the username and password from the user.
    var username = document.getElementsByClassName("username").value;
    var password = document.getElementsByClassName("password").value;
    
    // Query the database to find the user record with the matching username and password.
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "Login"
    });

    connection.connect((err) => {
        if (err) {
            console.log(err);
            return;
        }

        // Query the database.
        connection.query("SELECT * FROM login WHERE Username = ? AND Password = ?", [username, password], (err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            // Check if the user record is found.
            if (results.length > 0) {
                // The username and user credentials match.
                window.location.href = "home.html";
                return true;
            } else {
                // The username and user credentials do not match.
                document.getElementsByClassName("email_error").innerHTML = "Invalid username or password";
                document.getElementsByClassName("pass_error").innerHTML = "Invalid username or password";
                return false;
            }
        });
    });

    return false;
}
