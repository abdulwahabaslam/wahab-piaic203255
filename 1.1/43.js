function show_magicians(names) {
    for (num in names) {
        console.log(names[num]);
    }
}

function make_great (names) {
    for (num in names) {
        names[num] = 'The Great ' + names[num];
    }
    return names;
}

var magician_names = ['Ali', 'Sami', 'Ibrahim'];

var copy_magiciab_name = magician_names.slice();


var new_array = make_great(copy_magiciab_name);

show_magicians(magician_names);
console.log();
show_magicians(new_array);
