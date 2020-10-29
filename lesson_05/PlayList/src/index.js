import Song from './components/song';
import Movie from './components/movie';
import PlayList from './components/playlist';


const play = document.getElementById('btn-play');
const stop = document.getElementById('btn-stop');
const next = document.getElementById('btn-next');

play.onclick = function(){
    playList.play();
    playList.render(list)
}
stop.onclick = function(){
    playList.stop();
    playList.render(list)
}
next.onclick = function(){
    playList.next();
    playList.render(list)
}

const playlist = new Playlist;

const song1 = new Song('Let It Be', '4:30', 'The Beatles');
const song2 = new Song('Hit The Road Jack', '3:55', 'Ray Charles');
const song3 = new Song('Smoke On The Water', '4:45', 'Deep Purple');
const movie = new Movie('Avatar', '2:20:35', '2012');

playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(movie);

const list = document.getElementById('list');