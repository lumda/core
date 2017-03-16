import { Component, h, render } from "preact"
import * as R from "ramda"

/** Components can just be pure functions */
const Header = props =>
  h("header", null,
    h("h1", null, "App"), props.message && h("h2", null, props.message))

/** Instead of JSX, use: h(type, props, ...children) */
class Main extends Component {
  render() {
    const items = R.map(item => h("li", { id: item }, `Item ${item}`), [1, 2, 3, 4, 5])
    return (
      h("main", null,
        h("ul", null, items),
       )
    )
  }
}

class App extends Component {
  componentDidMount() {
    this.setState({ message: "Hello!" })
  }
  render(props, state) {
    return (
      h("div", { id: "app" },
        h(Header, { message: state.message }),
        h(Main),
       )
    )
  }
}

render(h(App), document.body)
