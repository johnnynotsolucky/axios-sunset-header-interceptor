import { ifThen, split, paramsToObject, matchRelation, hasKey } from "./utils";

// https://coderwall.com/p/zrlulq/parsing-a-link-header-in-javascript
const LINK = /<[^>]*>\s*(\s*;\s*[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*")))*(?=,|$)/g;
const PARAMS = /[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*"))/g;

const extractLinkParams = params =>
  params
    .match(PARAMS)
    .map(split(/=/))
    .reduce(paramsToObject, {});

const parseLink = v => () =>
  v
    .match(LINK)
    .map(split(/>/g))
    .map(([link, params]) => ({
      link: link.substring(1),
      params: extractLinkParams(params)
    }))
    .find(matchRelation("sunset"));

const getSunsetLink = headers =>
  ifThen(hasKey("link", headers), parseLink(headers["link"]));

const interceptor = (extractHeaders, f) => response => {
  const headers = extractHeaders(response);

  ifThen(
    () => headers && !!headers["sunset"],
    () => {
      const sunset = new Date(headers["sunset"]);
      const extra = {
        ...getSunsetLink(headers)
      };
      f(response, sunset, extra);
    }
  );

  return response;
};

export default interceptor;
