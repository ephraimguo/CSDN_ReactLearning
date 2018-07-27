const React = require("react");
const ReactDom = require("react-dom");

class List extends React.Component{ // declare a customised tag as  <List></List>
  constructor(props){
    super(props);
  }

  render(){
    return <ul>
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
      <li>555</li>
      <li>666</li>
      <li>777</li>
    </ul>
  }
}
ReactDom.render(<List></List>, document.body);