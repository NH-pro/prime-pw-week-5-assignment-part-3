console.log('***** Music Collection *****')
let collection = [];
// END var 'collection'.

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    // creates 'album' object.

    collection.push(album);
    // pushes 'album' object into 'collection' array.

    console.log(`You've added the album "${title}" to your collection!`);
    return album;
    // returns the album object to the console.
}
// END of 'addToCollection' function.

console.log(addToCollection('Americana', 'The Offspring', 1998));
console.log(addToCollection('Showbiz', 'Muse', 1999));
console.log(addToCollection('Smash', 'The Offspring', 1994));
console.log(addToCollection('Where the Light Is', 'Surfaces', 2019));
console.log(addToCollection('Non-Stop Erotic Cabaret', 'Soft Cell', 1981));
console.log(addToCollection('Origin of Symmetry', 'Muse', 2001));
// TEST if 'addToCollection' function works by executing it 6 times with different arguments.

console.log("Here is your music collection:",collection);
// TEST to see if 'collection' logs out correctly.

function showCollection(array) {
    console.log(array.length);
    // Console logs the number of items in a certain array.

    for (item of array){
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}.`)
    }
    // Console logs a loop of each item in certain array. Foramtted to show title by artist and published year.
}
// END of 'showCollection' function.

console.log('Above should be my music collection ^',showCollection(collection));
// TEST to see if 'showCollection' properly works.