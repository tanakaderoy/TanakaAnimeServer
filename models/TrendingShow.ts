class TrendingShow {
  private title: String;
  private currentEpisode: String;
  private date: String;
  private rating: String;
  private languag: String;
  private image: String;
  private url: String;
  
	constructor(title: String, currentEpisode: String, date: String, rating: String, languag: String, image: String, url: String) {
		this.title = title;
		this.currentEpisode = currentEpisode;
		this.date = date;
		this.rating = rating;
		this.languag = languag;
		this.image = image;
		this.url = url;
    }
    

    /**
     * Getter title
     * @return {String}
     */
	public get getTitle(): String {
		return this.title;
	}

    /**
     * Getter currentEpisode
     * @return {String}
     */
	public get getCurrentEpisode(): String {
		return this.currentEpisode;
	}

    /**
     * Getter date
     * @return {String}
     */
	public get getDate(): String {
		return this.date;
	}

    /**
     * Getter rating
     * @return {String}
     */
	public get getRating(): String {
		return this.rating;
	}

    /**
     * Getter languag
     * @return {String}
     */
	public get getLanguag(): String {
		return this.languag;
	}

    /**
     * Getter image
     * @return {String}
     */
	public get getImage(): String {
		return this.image;
	}

    /**
     * Getter url
     * @return {String}
     */
	public get getUrl(): String {
		return this.url;
	}

    /**
     * Setter title
     * @param {String} value
     */
	public set setTitle(value: String) {
		this.title = value;
	}

    /**
     * Setter currentEpisode
     * @param {String} value
     */
	public set setCurrentEpisode(value: String) {
		this.currentEpisode = value;
	}

    /**
     * Setter date
     * @param {String} value
     */
	public set setDate(value: String) {
		this.date = value;
	}

    /**
     * Setter rating
     * @param {String} value
     */
	public set setRating(value: String) {
		this.rating = value;
	}

    /**
     * Setter languag
     * @param {String} value
     */
	public set setLanguag(value: String) {
		this.languag = value;
	}

    /**
     * Setter image
     * @param {String} value
     */
	public set setImage(value: String) {
		this.image = value;
	}

    /**
     * Setter url
     * @param {String} value
     */
	public set seturl(value: String) {
		this.url = value;
	}


}
