function titleCase(string){
    var sentence = string.toLowerCase().split(' ');
    for(var i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(' ');
    
}
var name = 'abdul wahab'
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(titleCase(name));
