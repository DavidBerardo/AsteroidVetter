const crypto = require('crypto'); // Node.js built-in module for cryptographic operations

// Function to generate a salt and hash a password
function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex'); // Hash the password using PBKDF2

    return { salt, hash };
}

// Function to verify a password
function verifyPassword(inputPassword, storedSalt, storedHash) {
    const hash = crypto.pbkdf2Sync(inputPassword, storedSalt, 10000, 64, 'sha512').toString('hex');

    return hash === storedHash;
}

// Example usage:
const userPassword = 'user123password'; // User's input password
const { salt, hash } = hashPassword(userPassword);

// Store the salt and hash in your database for this user

// Later, when verifying a login attempt
const inputPassword = 'user123password'; // User's input password during login

// Retrieve the salt and hash from the database
if (verifyPassword(inputPassword, salt, hash)) {
    console.log('Password is correct. User authenticated.');
} else {
    console.log('Invalid password. Authentication failed.');
}