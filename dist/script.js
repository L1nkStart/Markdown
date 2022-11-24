function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import reactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import react from "https://cdn.skypack.dev/react@17.0.1";
import "https://cdn.skypack.dev/bootstrap@5.2.2";
import "https://cdnjs.cloudflare.com/ajax/libs/marked/0.8.0/marked.js";
//Components

const initState = `
This is a p

**Bolded text**

> BlockQuotes!

# This is a H1
## This is a H2
- list item 1
- list item 2

 [A link](https:www.cat/Perro.com)

this is an inline \`<div><div>\`

This is a Block of Code
\`\`\`
let x= -1
let y= 2
let r = x+y
\`\`\`

![Marked](https://cdnjs.com/_/f7a2ebfb819c118086546e481876aef6.svg)


`;
class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initState });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        text: e.target.value });


    });}
  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("h1", { className: " tittle text-center m-4" }, "Convert Your MarkDown"), /*#__PURE__*/
      React.createElement("div", { className: "column col-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "tittle text-center" }, "Edit your markdown"), /*#__PURE__*/
      React.createElement("textarea", {
        className: "form-control",
        id: "editor",
        value: text,
        onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { className: "column col-6" }, /*#__PURE__*/
      React.createElement("h5", { className: "tittle text-center" }, "See the result"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));






  }}

let a = '';
const test = marked(a);
reactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));