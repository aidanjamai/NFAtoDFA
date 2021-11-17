var symbols = [],
  states = [],
  start = [],
  final = [],
  connections = [];

const prompt = require("prompt-sync")();

class Transition {
  constructor(start, end, sym) {
    this.start = start;
    this.end = end;
    this.sym = sym;
  }
}
/*
var inputNum = prompt("how many sympols are there?");
var i = 0;
while (i < inputNum) {
  symbols[i] = prompt("enter Symbol:");
  i++;
}
var stateNum = prompt("how many states are there?");
var i = 0;
while (i < stateNum) {
  states[i] = prompt("enter state:");
  i++;
}
var input;
i = 0;
//there must be atleast one transition or there will be an error
while (input != "stop") {
  var startQ = prompt("Enter start node for transition");
  var endQ = prompt(" enter end node for this transition");
  var symQ = prompt(" enter sym for transition");

  connections[i] = new Transition(startQ, endQ, symQ);
  input = prompt(
    'enter"stop" if there are no more transitions if there are more press enter '
  );
  i++;
}
*/
var symbols = ["0", "1"];
var states = ["A", "B", "C", "D"];
let array = Array(symbols.length)
  .fill()
  .map(() => Array(states.length).fill(0));
connections = [
  new Transition("A", "A", "1"),
  new Transition("A", "B", "0"),
  new Transition("B", "C", "1"),
  new Transition("A", "A", "0"),
  new Transition("D", "A", "0"),
];
console.log(array);
nfaStateTable();

function nfaStateTable() {
  i = 0;
  j = 0;
  let arr = new Array(states.length);
  var temp = [];
  symbols.forEach((symbol) => {
    states.forEach((state) => {
      connections.forEach((transit) => {
        //console.log(transit.start);

        if (state == transit.start && symbol == transit.sym) {
          console.log(temp);

          console.log(array[i][j], i, j);
          if (array[i][j] == 0) {
            temp.push(transit.end);
            array[i][j] = temp;
          } else {
            temp = array[i][j];
            temp.push(transit.end);
            array[i][j] = temp;
          }
        }
      });
      temp = [];

      j++;
    });
    j = 0;
    i++;
  });

  console.log("Horizontal: ");
  states.forEach((state) => {
    console.log(state);
  });

  console.log("Vertical: ");
  symbols.forEach((symbol) => {
    console.log(symbol);
  });

  console.log(array);
}
