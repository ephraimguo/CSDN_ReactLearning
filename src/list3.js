const React = require("react");
const ReactDom = require("react-dom");
import Li from "./Li";

class List extends React.Component{ // declare a customised tag as  <List></List>
  constructor(props){
    super(props);
  }

  render(){
    //const article = this.props.article;
    /*
    const lis = this.props.article.map(art=>{
      <Li title={art.title} content={art.content} ></Li>
    });
    */
    console.log(this.props.article);
    const article = this.props.article;
    console.log("article",article,"article");

    const lis = article.map(
      //art=>{<Li title={art.title} content={art.content} />
      function(art){
        return <Li title={art.title} content={art.content} ></Li>
      });

    console.log("---",lis,"---");
    return <ul>
      {lis}
    </ul>
  }
}

let article = [
  {title:"救恩的头盔", content:"戴上救恩的头盔保守我们的心思意念"},
  {title:"公义的护心镜", content:"让我们的心中常怀公义的成为公义树"},
  {title:"真理的福音做腰带", content:"真理成我们的根基我们毫不动摇"},
  {title:"平安的福音鞋履", content:"我们将平安穿在脚上出入都平安"},
  {title:"圣灵的宝剑和信德的藤牌", content:"这是神的道，即可灭尽恩者的火箭也能征战"}
  //{title: "Helmet of Salvation", content: "Help us protect our minds"}
];

ReactDom.render(<List article={article} ></List>, document.body);