const BASE_URL =
  'http://api.openweathermap.org/data/2.5/';
const APPID = "APPID=5305d19c7fd1b111d16e414a4d139dbb"
const lang = "&lang=id"

export const APIRoutes = {
    weather: {
        now: BASE_URL + '/weather?' + APPID + lang,
        forecast: BASE_URL + '/forecast?' + APPID + lang,
    },
    air: {
      now: BASE_URL + '/air_pollution?' + APPID + lang,
    }
}