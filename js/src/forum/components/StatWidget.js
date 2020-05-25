import Component from "flarum/Component";
import icon from "flarum/helpers/icon";

export default class StatWidget extends Component {
  view() {
    const compactMobile =
      app.forum.attribute("categories.compactMobile") &&
      window.innerWidth < 767;
    return (
      <div class="StatWidget">
        <div class="StatWidget-count">{this.props.count}</div>
        <div class="StatWidget-label">
          {compactMobile ? icon(this.props.icon) : this.props.label}
        </div>
      </div>
    );
  }
}
