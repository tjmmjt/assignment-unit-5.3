console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// TODO Declare Array
let myCollection = [];

// --- ORIGINAL FUNCTION - did not pass test
// function addToCollection(collection, title, artist, yearPublished) {
//   collection.push({title, artist, yearPublished});
//   return {title, artist, yearPublished};
// }

// TODO addToCollection
console.log('--- Add to Collection ---');
function addToCollection(collection, title, artist, yearPublished) {
  let record = { // object variable declared
    title,
    artist,
    yearPublished
  }
  // console.log('Record:', record); // logging object for testing
  collection.push(record); // pushing object to array
  return record; // return object
}

addToCollection(myCollection, 'The Wall', 'Pink Floyd', '1979');
addToCollection(myCollection, 'Stadium Arcadium', 'Red Hot Chili Peppers', '2006');
addToCollection(myCollection, 'Purgatory', 'Tyler Childers', '2017');
addToCollection(myCollection, 'Zach Bryan (self titled)', 'Zach Bryan', '2023');
addToCollection(myCollection, "A Sailor's Guide to Earth", 'Sturgill Simpson', '2016');
addToCollection(myCollection, 'Juarez', 'Terry Allen', '1975');

console.log('My Collection:', myCollection); // Logging array

// TODO showCollection
console.log('--- Show Collection ---');
function showCollection(collection) {
  for (let objects of collection) {
    console.log(objects.title + ' by ' + objects.artist + ' published in ' + objects.yearPublished);
  }
}

showCollection(myCollection);

// TODO findByArtist

console.log('-- adding 2nd RHCP album --');
addToCollection(myCollection, 'By the Way', 'Red Hot Chili Peppers', '2002'); // adding 2nd RHCP album
console.log(myCollection); // logging new myCollection

console.log('--- findByArtists ---');
function findByArtist(collection, artist) {
  let artistArray = []; // create empty artistArray
  for (objects of collection) { // loop through 'collection' parameter
    if (artist === objects.artist) { // if artist parameter === object.artist 
      artistArray.push(objects); // push the entire object to artist.Array
    }
  }
  console.log('You searched:', artist, '| Results found:', artistArray);
  return artistArray;
}

findByArtist(myCollection, 'Wu-Tang Clan'); // Test, return empty array
findByArtist(myCollection, 'Red Hot Chili Peppers'); // Test, return 2 albums

// TODO Stretch
// console.log('--- Stretch ---');
// function search(collection, searchCriteria) {
//   let searchResults = [];
//   for (objects of collection) {
//     if (searchCriteria.artist === objects.artist && searchCriteria.yearPublished === objects.yearPublished) {
//       searchResults.push(objects);
//     } else if (searchCriteria === undefined ||  searchCriteria.yearPublished === undefined || searchCriteria.artist === undefined) {
//       console.log(`Missing search parameters! Displaying all results:`, collection);
//       return collection;
//     }
//   }
//   console.log(`Search Results for Artist: ${searchCriteria.artist}, Album Year: ${searchCriteria.yearPublished} :`, searchResults);
//   return searchResults;
// }

console.log('--- Stretch ---');
function search(collection, searchCriteria) {
  let searchResults = []; // Empty Array
  for (objects of collection) { // Loop through collection
    if (searchCriteria === undefined || searchCriteria.yearPublished === undefined || searchCriteria.artist === undefined || searchCriteria.artist === '' || searchCriteria.yearPublished === '') {
      console.log(`Missing search parameters! Displaying all results:`, collection);
      return collection; // Set falsey parameters first, display 'missing' message with whole collection. 
    } else if (searchCriteria.artist === objects.artist && searchCriteria.yearPublished === objects.yearPublished) {
      searchResults.push(objects); // else set truthy parameters, push object to searchResults array
    } 
  }
  console.log(`Search Results for Artist: ${searchCriteria.artist}, Album Year: ${searchCriteria.yearPublished} :`, searchResults);
  return searchResults; // return the array
}

console.log('\n - Searching w/ missing yearPublished -');
search(myCollection, { artist: 'Eminem' });

console.log('\n - Searching Artist that doesnt exist in array with year -');
search(myCollection, { artist: 'Eminem', yearPublished: '2002' });

console.log('\n - Searching valid artist/year - ');
search(myCollection, { artist: 'Red Hot Chili Peppers', yearPublished: '2002' });

console.log('\n - Searching w/ empty object - ');
search(myCollection, {});

console.log('\n - Searching w/o object - ');
search(myCollection);

console.log('\n - Searching undefined artist - ');
search(myCollection, { artist: '', yearPublished: '2002' });

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
