import Component from 'flarum/common/Component';
import icon from 'flarum/common/helpers/icon';
import ItemList from 'flarum/common/utils/ItemList';
import classList from 'flarum/common/utils/classList';
import app from 'flarum/forum/app';

import type Mithril from 'mithril';

interface Attrs {
  count: number;
  icon: string;
  label: Mithril.Children;
  className: string;
}

export default class StatWidget extends Component<Attrs> {
  view() {
    return (
      <div class={classList('StatWidget', { 'Categories-compactMobileModeEnabled': !!app.forum.attribute('categories.compactMobile') }, this.attrs.className)}>
        {this.content().toArray()}
      </div>
    );
  }

  content() {
    const items = new ItemList();

    items.add('count', <div class="StatWidget-count">{this.attrs.count}</div>, 100);
    items.add(
      'label',
      <div class="StatWidget-label" class={this.attrs.className+'muted'}>
        <span className="Categories-showOnMobile">{icon(this.attrs.icon)}</span>
        <span className="Categories-hideOnMobile">{this.attrs.label}</span>
      </div>,
      80
    );

    return items;
  }
}
