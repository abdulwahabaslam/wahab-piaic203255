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

show_magicians(magician_names);
show_magicians(make_great(magician_names));
