  ///////////////////////
 // ENTER STOLEN CODE //
///////////////////////

// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

  //////////////////////
 // EXIT STOLEN CODE //
//////////////////////

document.addEventListener('mousemove', () => {
    document.getElementsById('randomText1').innerHTML = generateString(9999999);
    document.getElementsById('randomText2').innerHTML = generateString(9999999);
});