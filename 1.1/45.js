function car (Manufacturer, Model_Name, ...Other) {
    if (Other.length == 0) {
        return {Manufacturer, Model_Name};
    }
    return {Manufacturer, Model_Name, Other};
}

console.log(car('Audi', 'V-8'));
console.log();
console.log(car('Audi', 'V-8', {Color: 'White'}, {Condition: 'New Model'}));
