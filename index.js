const loco = require("locomotion");
loco.then((svc) => {
    let pal = svc.locate("palindrome");
    if (pal) {
        console.log("Is: no X in Nixon! a palindrome? ", (pal.isPalindrome("no X in Nixon!")) ? "Yes" : "no");
    }
}).catch((err) => {
    console.error(err);
});