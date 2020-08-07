class Video {
    private _src: string;
    constructor(src: string) {
        this._src = src;
    }


    public get src() {
        return this._src;
    }
}
export default Video