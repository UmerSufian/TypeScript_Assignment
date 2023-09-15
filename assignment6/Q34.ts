// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

type Album = {
  artist: string;
  title: string;
  noOfTracks?: number;
  year?: number;
};

function make_album(artist: string, title: string, noOfTracks?: number, year?: number): Album {
  const album: Album = {
      artist,
      title,
  };

  if (noOfTracks !== undefined) {
      album.noOfTracks = noOfTracks;
  }

  if (year !== undefined) {
      album.year = year;
  }

  return album;
}
console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2", 10));
console.log(make_album("Artist3", "Album3", 8, 2022)); 
