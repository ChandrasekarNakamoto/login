const mysql = require('mysql2');

// MySQL database credentials
const dbConfig = {
host: 'localhost',
user: 'root',
password: 'root',
database: 'Login'
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect((error) => {
if (error) {
console.error('Error connecting to the database: ' + error.stack);
return;
}

console.log('Connected to the database.');

// Query to fetch data from a table
const query = 'SELECT * FROM login';

// Execute the query
connection.query(query, (error, results) => {
if (error) {
console.error('Error executing the query: ' + error.stack);
return;
}

// Handle the results
console.log('Fetched data:');
console.log(results);
/*let output= results;
let uid=output[0];
let uname= uid.Username;
let upass= uid.Password;
console.log(uname,upass);*/
// Close the database connection
connection.end((error) => {
if (error) {
console.error('Error closing the database connection: ' + error.stack);
return;
}

console.log('Database connection closed.');
});
});
});