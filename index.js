function generate(num) {
    var screen = document.getElementById("minesweeper");
    var NumOfMine = (num > 9) ? (( num > 16) ? 99 : 40 ) : 10;
}

function JMS(id) {
    this.doc = document;
}

JMS.prototype = {
    $: function(id) {
        return this.doc.getElementById(id);
    },

    a: "test 2"
}

var qqq = JMS("minesweeper");

console.log(qqq);