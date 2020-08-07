import cheerio from "cheerio";
import cors = require("cors");
import jsdom from "jsdom";
import getUrls from "get-urls";
import fetch from "node-fetch";
import { Response, Request } from "express";
const getTrending = async (url: String) => {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  let shows = $(
    "div[class='col-lg-3 col-md-4 col-sm-6 col-xs-12 anime-listing-col'"
  );
  console.log(shows);
};

module.exports.getTrendingShows = async (req: Request, res: Response) => {
  let shows = await getTrending("https://animevibe.tv/browse-anime/");
  res.status(200).json({ info: { status: "success" }, results: { shows } });
};
