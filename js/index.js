// const message = 'Hello World!'
// alert(message);


// const sum = 2 + 2;
// alert(sum);

const age = parseFloat(prompt('Enter you age'));
alert('Your age is' + age);

const nextAge = add(age, 1);
alert('Next year you will be' + nextAge);

//String - '', "", ``
//Number -1, 2.5, Nan, +Infinity, -Infinity
//Boolean - terue,false

//undefined
//null
//Object


if (age < 18) { // < > <= >= === == !== || &&
    alert('You are underaged!')
} else {
    alert('You are adult')
}


function add(a, b) {
    const sum = a + b;
    return sum;
}