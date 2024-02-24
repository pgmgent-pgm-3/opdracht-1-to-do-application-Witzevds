/*
 This library contains custom handlebars helpers
*/
import Handlebars from "handlebars";

export default {
  hyperlink: function (url, label) {
    return new Handlebars.SafeString(
      `<a href='${url}'><button><p>${label}</p></button></a>`
    );
  },
};
