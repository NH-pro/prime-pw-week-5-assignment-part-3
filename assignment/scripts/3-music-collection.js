console.log('***** Music Collection *****')
let collection = [];
// END of var 'collection'.

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
    console.log('Total number of albums in your collection:',array.length);
    // Console logs the number of items in a certain array.

    for (item of array){
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}.`)
    }
    // Console logs a loop of each item in certain array. Foramtted to show title by artist and published year.
}
// END of 'showCollection' function.

console.log('Above should be your music collection ^',showCollection(collection));
// TEST to see if 'showCollection' properly works.

function findByArtist(artist) {
    let artistInCollection = [];
    // Empty array to store found artist parameter from 'collection' array.

    for (album of collection){
    // Looping through every album in the 'collection' array.
        if (album.artist === artist){
        // Checking if 'album.artist' property is equal to artist parameter.
            artistInCollection.push(album);
        }
    }
    return artistInCollection;
    // Return 'artistInCollection' array to show if you have any albums by the artist parameter.
}
// END of 'findByArtist' function.

console.log(findByArtist('Muse'));
// TEST to see if function works properly. Should show 2 objects in the 'artistInCollection' array with "Muse" 'artist' property.
console.log(findByArtist('Bach'));
// TEST of 'findByArtist' function. Should show an empty 'artistInCollection' array cause there are no albums in the collection by "Bach".