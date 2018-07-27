const React = require("react");
const ReactDom = require("react-dom");
import Li from "./Li";

class List extends React.Component{ // declare a customised tag as  <List></List>
  constructor(props){
    super(props);
  }

  render(){
    return <ul>
      <Li title={"title1"} content={"content1"}></Li>
      <Li title={"title2"} content={"content2"}></Li>
      <Li title={"title3"} content={"content3"}></Li>
      <Li title={"title4"} content={"content4"}></Li>
    </ul>
  }
}
ReactDom.render(<List></List>, document.body);