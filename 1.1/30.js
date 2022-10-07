var usernames = ['admin', 'taha', 'ali', 'sarmad', 'sufyan'];

for (num in usernames) {
    if (usernames[num] == 'admin') {
        console.log('Hello',usernames[num],'would you like to see a status report?')
    }
    else {
        console.log('Hello',usernames[num],'thank you for logging in again')
    }
}