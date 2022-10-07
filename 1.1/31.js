var usernames = [];

if (usernames.length == 0) {
    console.log('We need to find some users!')
}

for (num in usernames) {


    if (usernames[num] == 'admin') {
        console.log('Hello',usernames[num],'would you like to see a status report?')
    }
    else {
        console.log('Hello',usernames[num],'thank you for logging in again')
    }
}