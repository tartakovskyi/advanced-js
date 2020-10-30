class PlayList {
	constructor() {
		this.songs = [];
		this.currentIndex = 0;
	}

	add(media) {
		this.songs.push(media);
	}

	play() {
		const currentSong = this.songs[this.currentIndex];
		currentSong.play();
	}

	stop() {
		const currentSong = this.songs[this.currentIndex];
		currentSong.stop();
	}

	next() {
		this.stop();
		this.currentIndex++;
		if (this.currentIndex === this.songs.length) {
			this.currentIndex = 0;
		}
		this.play();
	}

	render(list) {
		list.innerHTML = "";
		return this.songs.forEach(song => {
			list.innerHTML += song.toHtml();
		});
	}
}

export default PlayList;