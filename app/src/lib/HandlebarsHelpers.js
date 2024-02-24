/*
 This library contains custom handlebars helpers
*/
import Handlebars from "handlebars";

export default {
  noop: function (options) {
    return "magic";
  },
  bold: function (options) {
    const content = options.fn(this);
    //its more safe
    return new Handlebars.SafeString(`<strong> ${content} </strong>`);
  },
  button: function (className, type, options) {
    return new Handlebars.SafeString(
      `<button class="${className}" type="${type}">${options.fn(this)}</button>`
    );
  },
  hyperlink: function (url, label) {
    return new Handlebars.SafeString(`<a href='${url}'>${label}</a>`);
  },
};
