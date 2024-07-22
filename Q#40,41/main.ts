//QUESTION NO:40
/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take
 in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums. Print each return value to show 
that Objects are storing the album information correctly. Add an optional parameter to make_album() 
that allows you to store the number of tracks on an album. If the calling line includes a value for 
the number of tracks, add that value to the album’s Object. Make at least one new function call that includes 
the number of tracks on an album.*/

function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist:string, title: string, tracks?: number} = {
      artist: artist_name,
      title : album_title,
    };
    if(tracks !== undefined){
        album.tracks =tracks
    }
     return album;
}
 let album1 = make_album("Muneer", "Album title 1");
 let album2 = make_album("Muqbool", "Album title 2");
 let album3 = make_album("Zahoor", "Album title 3");

console.log(album1);
console.log(album2);
console.log(album3);

//QUISTION NO:41
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/

function show_magicians(magicians : string[]){
  magicians.forEach(name => console.log(name));
}
let magicians_name = ["MUNEER","MUQBOOL","ZAHOOR"]
show_magicians(magicians_name)
