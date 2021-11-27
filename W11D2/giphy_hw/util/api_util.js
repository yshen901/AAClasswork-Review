import { GIPHY_API_KEY } from "./api_keys"

export const fetchSearchGiphys = (searchTerm) => {
  return $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${GIPHY_API_KEY}&limit=2`
  });
};