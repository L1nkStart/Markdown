import reactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import react from "https://cdn.skypack.dev/react@17.0.1";
import "https://cdn.skypack.dev/bootstrap@5.2.2"
import "https://cdnjs.cloudflare.com/ajax/libs/marked/0.8.0/marked.js"
//Components

const initState =`
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


`
class App extends React.Component {
  state = {
    text: initState
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
    
  };
  render() {
    const { text } = this.state;
     
    const markdown = marked(text, { breaks:true })
    
    return (
      <div>
        
        <div className="row">
          <h1 className=" tittle text-center m-4">Convert Your MarkDown</h1>
          <div className="column col-6">
            <h5 className="tittle text-center">Edit your markdown</h5>
            <textarea
              className='form-control'
              id="editor"
              value={text}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="column col-6" >
            <h5 className="tittle text-center">See the result</h5>
            <div  className='preview rounded' dangerouslySetInnerHTML={{__html:markdown}} id= "preview"/>
            </div>
          </div>
        </div>
      
    
    );
  }
}
let a = ''
const test = marked(a)
reactDOM.render(<App />, document.getElementById("root"));
