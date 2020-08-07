import jsdom from "jsdom";
const { JSDOM } = jsdom;
import { Response, Request } from "express";
import HomePageShow from "../models/HomePageShow";
import { instance } from "../api/axios";
import {
  LATEST_EPISODES_SELECTOR,
  IMG_SELECTOR,
  SHOW_NAME_SELECTOR,
  BASE_URL,
  SHOW_URL_SELEECTOR,
  CURRENT_EPISODE_URL_SELECTOR,
  CURRENT_EPISODE_NAME_SELECTOR
} from "../constants";

let showCache = { shows: [] };
var counter = 0;
const getTrending = async (url: string): Promise<HomePageShow[]> => {
  console.log(`Scraping: ${url} \n`);
  counter++;
  if (counter > 100000) {
    showCache.shows = [];
  }
  if (showCache.shows.length <= 0) {
    const res = await instance.get(url);

    const html = res.data;
    // console.log(html);

    const dom = new JSDOM(html);
    const document = dom.window.document;
    let showsArr= Array.from(
      document.querySelectorAll(LATEST_EPISODES_SELECTOR)
    )
    showsArr.length = 50
    let shows = showsArr.map(show => {
      let img = BASE_URL + getSrcText(show, IMG_SELECTOR);
      let showURL = BASE_URL + getHref(show, SHOW_URL_SELEECTOR);
      let name = getTextContent(show, SHOW_NAME_SELECTOR).trim()
      let currentEpUrl = BASE_URL + getHref(show, CURRENT_EPISODE_URL_SELECTOR);
      let currentEp = getTextContent(
        show,
        CURRENT_EPISODE_NAME_SELECTOR
      ).trim().replace(/(\r\n|\n|\r)/gm,"").match(/\(([^)]+)\)/)!= null ? getTextContent(
        show,
        CURRENT_EPISODE_NAME_SELECTOR
      ).trim().replace(/(\r\n|\n|\r)/gm,"").match(/\(([^)]+)\)/)[1].trim(): getTextContent(
        show,
        CURRENT_EPISODE_NAME_SELECTOR
      ).trim().replace(/(\r\n|\n|\r)/gm,"");

      return new HomePageShow(name, img, showURL, currentEpUrl, currentEp);
    });
    showCache.shows = shows;
    return shows;
  }
  return showCache.shows;
};

const getHref = (doc: Element, selector: string): string =>
  select(doc, selector).attributes.getNamedItem("href").textContent;

const getTextContent = (doc: Element, selector: string): string =>
  select(doc, selector).textContent;

const getSrcText = (doc: Element, selector: string): string =>
  select(doc, selector).attributes.getNamedItem("src").textContent;

const select = (doc: Element, selector: string): Element =>
  doc.querySelector(selector);

export const getHomePageShows = async (req: Request, res: Response) => {



  let shows = await Promise.all([getTrending(BASE_URL)])
  let latestShows = shows[0]
  res.json({latestShows});
};
