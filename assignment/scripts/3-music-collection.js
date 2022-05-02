console.log('***** Music Collection *****')
let collection = [];
// END of var 'collection'.

function addToCollection(title, artist, yearPublished, tracks) {

    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    };
    // creates 'album' object.

    collection.push(album);
    // pushes 'album' object into 'collection' array.

    console.log(`You've added the album "${title}" to your collection!`);
    return album;
    // returns the album object to the console.
}
// END of 'addToCollection' function.

console.log(addToCollection('Americana', 'The Offspring', 1998, [{name:"Pretty Fly (for a White Guy)", duration:'3:08'}, {name:"The Kids Aren't Alright", duration:'3:56'}, {name:"Why Don't You Get a Job?", duration:'2:52'}]));
console.log(addToCollection('Showbiz', 'Muse', 1999, [{"Sunburn": '3:55'}, {"Fillip": '4:02'}]));
console.log(addToCollection('Smash', 'The Offspring', 1994, [{"Bad Habit": '3:44'}]));
console.log(addToCollection('Where the Light Is', 'Surfaces', 2019, [{"Sunday Best": '2:39'}]));
console.log(addToCollection('Non-Stop Erotic Cabaret', 'Soft Cell', 1981, [{"Tainted Love": '2:39'}]));
console.log(addToCollection('Origin of Symmetry', 'Muse', 2001, [{"Plug In Baby": '3:40'}]));
// TEST if 'addToCollection' function works by executing it 6 times with different arguments.
console.log(addToCollection('Ray Charles', 'Ray Charles', 1957, [{name:"Ain't That Love", duration:'2:51'}]));
// TEST for Stretch Goals


console.log("Here is your music collection:",collection);
// TEST to see if 'collection' logs out correctly.

function showCollection(array) {
    console.log('Total number of albums in your collection:',array.length);
    // Console logs the number of items in a certain array.

    for (let item of array){
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}, adnd the tracks:`, item.tracks)
    }
    // Console logs a loop of each item in certain array. Foramtted to show title by artist and published year.
}
// END of 'showCollection' function.

console.log('Above should be your music collection ^',showCollection(collection));
// TEST to see if 'showCollection' properly works.

function findByArtist(artist) {
    let artistInCollection = [];
    // Empty array to store found artist parameter from 'collection' array.

    for (let album of collection){
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


function search(artist, year, trackName) {

    let searchObject = {
        artist: artist,
        year: year,
        trackName: trackName
    };
    // End 'searchObject' var.

    let searchResult = [];
    // Empty array to store found search results.

    if (searchObject.artist === undefined || searchObject.year === undefined){
        return collection;
    }

    for (let album of collection){
    // Looping through every album in the 'collection' array.
        if (album.artist === searchObject.artist && album.yearPublished === searchObject.year) {
        // Checking if there are any albums that have match properties of both 'artist' AND 'yearPublished'.
            for (let trackTitle of album.tracks){
            // Looping through every track in each album.
                if (trackTitle.name === searchObject.trackName){
                // Checking to see if track name matches our search object track name.
                    searchResult.push(album);
                    // Pushing matching albums to 'searchResult' array.
                }
            }
        }
    }
    return searchResult;
    // Return 'searchResult' array to show any matches with input parameters and 'collection' array.
}
// END of 'search' function.

console.log(search('Ray Charles', 1957, "Ain't That Love" ));
// Test to see if there are any of these arguments in collection. Should show an array with one match.
console.log(search());
// Test to see if function 'search' returns 'collection' array when there are no inputs.
console.log(search('Rick Atsley', 1987));
// Test to see if function 'search' returns an empty array when there is no matching search criteria input in 'collection' array.