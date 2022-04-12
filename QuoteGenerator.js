class Quotes extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: ['"Those who don’t believe in magic will never find it."', '"Be yourself and people will like you."', '"It is better to be hated for what you are than to be loved for what you are not. "', '"Time you enjoy wasting is not wasted time."', '"The worst enemy to creativity is self-doubt."'],
      author: ["Roald Dahl", "Jeff Kinney", "André Gide", "Marthe Troly-Curtin", "Sylvia Plath"],
      button: Math.floor(Math.random() * 5) };

  }
  buttonClick() {
    this.setState((prevState, props) => {
      return { button: Math.floor(Math.random() * 5) };
    });
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", { id: "text" }, this.state.quotes[this.state.button]), /*#__PURE__*/
      React.createElement("h5", { id: "author" }, this.state.author[this.state.button]), /*#__PURE__*/
      React.createElement("button", { onClick: () => this.buttonClick(), id: "new-quote", class: "nah btn btn-default btn-light btn-outline-danger" }, "Generate")));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Quotes, null), document.getElementById('quote-box'));