var current_users = ['ali', 'Wahab', 'sarmad', 'RAO', 'Bilal'];

var new_users = ['Sarmad', 'Ehtsham', 'Zargham','ali', 'Mirza'];

for (num in new_users) {
    for (num2 in current_users) {
        if (new_users[num].toUpperCase() == current_users[num2].toUpperCase()) {
            console.log(new_users[num],'you need to enter a new username.');
        }
    }
    console.log('The username is available.');
}