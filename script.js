// Membangun objek JSEncrypt
var encryptor = new JSEncrypt();

// Mengatur kunci publik RSA
var publicKey = '-----BEGIN PUBLIC KEY-----\n' +
                'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3KeARs30FnF/0QZbRxhB\n' +
                'o9Ee8n/rB1PQOgE1XJSgS8wLKR7uh4h2Ytiya1tceP7GvXnUJTD0+tHdLObItqEx\n' +
                '9Q5Gj8ITi2Sx2FlaOmbyiH1MTlJJb6HLuWnMVilTNQJ7WCLW0TwI8Mv2uUdUqfDB\n' +
                'zU+9bzOrakSoA4IneOtwCawdLylHyDwMmdH+H1iQUQcZTjXgIzYs0XcStNftPnCr\n' +
                '7S8Hj5XpweU7Ust7JqXgASUR+2V0sMDrpwO9OuhQufVX8AXD6xgX1Bq8CnM5+L7v\n' +
                'zTmGd3SJkH6VkY1slz8aCHN+fwJx91xh2qqP5reQqZ7Q+6n+URcPz7w9F/SCvaMa\n' +
                '8QIDAQAB\n' +
                '-----END PUBLIC KEY-----';

// Mengatur kunci publik pada enkripsi
encryptor.setPublicKey(publicKey);

// Teks yang akan dienkripsi
var plaintext = 'Ini adalah teks yang akan dienkripsi';

// Melakukan enkripsi RSA
var encrypted = encryptor.encrypt(plaintext);

// Menampilkan teks terenkripsi
document.getElementById("encryptedText").innerHTML += ' ' + encrypted;
