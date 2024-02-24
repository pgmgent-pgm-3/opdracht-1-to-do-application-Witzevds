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
  button: function (options) {
    return new Handlebars.SafeString(`<button>${options.fn(this)}</button>`);
  },
  hyperlink: function (url, label) {
    return new Handlebars.SafeString(
      `<a href='${url}'><button><p>${label}</p></button></a>`
    );
  },
};
