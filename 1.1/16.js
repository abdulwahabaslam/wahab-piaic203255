var names = ['Ahmad', 'Asjad', 'Akif']



console.log('Hello',names[0],'you are invited to the dinner.')
console.log('Hello',names[1],'Lets have a dinner party.')
console.log('Hello',names[2],'Its time for a dinner.')

console.log('Unfortunately', names[2], 'wont be able to make it to the dinner.')
names[2] = 'Salman'

console.log('Hello',names[0],'you are still invited to the dinner.')
console.log('Hello',names[1],'Dont miss this.')
console.log('Hello',names[2],'Its time for a dinner.')

console.log('I just found more space on the dinner table!')

names.unshift('Ali');
middle = names.length / 2;
names.splice(middle, 0, 'Salman')
names.push('Ammar');

for(num in names) {
    console.log(names[num], 'you are invited to the dinner!!')
}

