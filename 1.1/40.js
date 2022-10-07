function make_album(name, title, num_tracks=null) {
    var music_album = {
        album_name: name,
        album_title: title,
        num_of_tracks: num_tracks
    }
    return music_album;
}

console.log(make_album('Arif', 'Strong'));
console.log(make_album('Atif Aslam', 'Pari'));
console.log(make_album('Shamoon Ismail', 'Cookies'));
console.log(make_album('Shamoon Ismail', 'Cookies', 8));
