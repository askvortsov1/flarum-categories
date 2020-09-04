import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';

export default class StatWidget extends Component {
  view() {
    const compactMobile = app.forum.attribute('categories.compactMobile') && window.innerWidth < 767;
    return (
      <div class="StatWidget">
        <div class="StatWidget-count">{this.attrs.count}</div>
        <div class="StatWidget-label">{compactMobile ? icon(this.attrs.icon) : this.attrs.label}</div>
      </div>
    );
  }
}
