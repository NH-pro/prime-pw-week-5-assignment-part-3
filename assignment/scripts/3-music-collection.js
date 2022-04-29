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
console.log(addToCollection('Fake Title', 'Fake Artist', 1957));
// TEST for Stretch Goals


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

console.log('There are 2 albums by Muse in the collection, so this should show 2 in the array:', findByArtist('Muse'));
// TEST to see if function works properly. Should show 2 objects in the 'artistInCollection' array with "Muse" 'artist' property.
console.log('There is no Bach in the collection, so this should show an empty array:', findByArtist('Bach'));
// TEST of 'findByArtist' function. Should show an empty 'artistInCollection' array cause there are no albums in the collection by "Bach".

/*
function search(artist, publishedYear) {
    let searchResult = [];
    // Empty array to store found search results.

    for (album of collection){
    // Looping through every album in the 'collection' array.
        if (album.artist === artist && album.yearPublished === publishedYear) {
        // Checking if there are any albums that have match properties of both 'artist' AND 'yearPublished'.
            searchResult.push(album);
        }
    }
    return searchResult;
    // Return 'searchResult' array to show any matches with input parameters and 'collection' array.
}
// END of first try at the 'search' function.

console.log(search('Ray Charles', 1957));
// Test to see if there are any of these arguments in collection. Should show an empty array, cause there are none.
*/ 

let searchObject = {
    artist: 'Ray Charles',
    year: 1957
};
// Search object with the specified properties.

function search(searchCriteriaObject) {
    let searchResult = [];
    // Empty array to store found search results.

    let criteria = Object.values(searchCriteriaObject);
    // Make a var called 'criteria' to store 'searchCriteriaObject' values in an array.
    console.log(criteria);
    // Shows the values we are interested in searching the 'collection' array for.

    let collectionCriteria = [];
    // Empty array to store 'album' values from 'collection' array. So we can compare them to the values we have in the 'criteria' array.

    for (album of collection){
    // Loop through each album in 'collection' array.
        let albumCriteria = Object.values(album);
        // Make a var called 'albumCriteria' to store album values from 'collection'.
        collectionCriteria.push(albumCriteria);
        // Push each value into the mega array called 'collectionCriteria'.
    }
    console.log(collectionCriteria);
    // Shows all the values from every album in 'collection' array.

    for (value of criteria){
    // Loop through each element in 'criteria' array.
        for (albumValue of collectionCriteria){
        // Loop through each element in 'collectionCriteria' array.
            if (value === albumValue){
            // Check to see if any of the vales from each array match.
                searchResult.push(value);
            }
            return searchResult;
        }
    
    }
}
console.log(search(searchObject));

