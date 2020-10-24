module.exports = function reverse(n) {


    let num = n.toString().split("");

    if (num.indexOf('-') !== -1) {

        num.shift();

    }

    num = num.reverse();

    num = num.join('');

    return num;

}