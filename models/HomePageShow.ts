class HomePageShow {
  public title: String;
  public image: String;
  public url: String;
  public currentEpURL: string;
  public currentEp:string

  constructor(title: String, image: String, url: String, currentEpURL:string, currentEp:string) {
    this.title = title;
    this.image = image;
    this.url = url;
    this.currentEpURL = currentEpURL;
    this.currentEp = currentEp;
  }

}

export default HomePageShow;
