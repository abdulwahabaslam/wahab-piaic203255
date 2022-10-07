function sandwich (details) {
    for (num in details) {
        console.log(details[num]);
    }
}

var items = ['Salad', 'Mayo', 'BBQ Chicken', 'Cheese'];
var items2 = ['Salad'];
var items3 = ['Cheeze', 'Vegetables'];

sandwich(items);
console.log();
sandwich(items2);
console.log();
sandwich(items3);
