class Movie extends Media {
	
	constructor (title, duration, year) {
		super(this);
		this.year = year;
	}

	toHtml = function(){
		return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
		<div class="col-sm-9">${this.title} - ${this.year}</div>
		<div class="col-sm-3">${this.duration}</div>
		</div>`
	}

}