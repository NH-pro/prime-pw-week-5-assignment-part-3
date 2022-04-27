console.log('***** Music Collection *****')
let collection = [];
// End var 'collection'.

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    // creates 'album' object.

    collection.push(album);
    // pushes 'album' object into 'collection' array.
    
    console.log(`You've added the album ${title} to your collection!`);
    return album;
    // returns the album object to the console.
}
// End function 'addToCollection'.

console.log(addToCollection('Americana', 'The Offspring', 1998));
// Testing 
console.log(addToCollection('Showbiz', 'Muse', 1999));

