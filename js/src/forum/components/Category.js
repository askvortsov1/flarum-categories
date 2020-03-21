import Component from 'flarum/Component';

import icon from 'flarum/helpers/icon';
import ItemList from 'flarum/utils/ItemList';
import sortTags from 'flarum/tags/utils/sortTags';

import StatWidget from './StatWidget';
import LastDiscussionWidget from './LastDiscussionWidget';

export default class Category extends Component {
    init() {
        super.init();

        this.tag = this.props.tag;

        this.isChild = this.props.isChild || false;
    }

    view() {
        const tag = this.tag;

        const children = this.isChild ? [] : sortTags(app.store.all('tags').filter(child => child.parent() === tag));

        const cardStyle = this.isChild ? {} : { backgroundColor: tag.color() };

        const classNames = (this.isChild ? ['TagCategory SubCategory'] : ['TagCategory']).join(' ');

        return (
            <li class={classNames}>
                <a class="TagCategory-content" style={cardStyle} href={app.route.tag(tag)} config={m.route}>
                    <div class="TagCategory-alignStart">
                        <span class="TagCategory-icon">
                            {this.iconItems().toArray()}
                        </span>
                        <div class="TagCategory-main">
                            {this.mainItems().toArray()}
                        </div>
                    </div>
                    <div class="TagCategory-alignEnd">
                        <div class="TagCategory-stats StatWidgetList">
                            {this.statItems().toArray()}
                        </div>
                        <div class="TagCategory-lastDiscussion">
                            {this.lastDiscussionItems().toArray()}
                        </div>
                    </div>
                </a>
                {this.isChild ? '' :
                    <ol className="TagCategory-subTagList">
                        {children.map(child => [
                            Category.component({ tag: child, isChild: true })
                        ])}
                    </ol>}
            </li>
        );
    }

    iconItems() {
        const items = new ItemList;

        if (this.tag.icon() && this.isChild) {
            items.add('icon',
                <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x icon-background" style={{ color: this.tag.color() }}></i>
                    {icon(this.tag.icon(), { className: 'fa-stack-1x CategoryIcon' })}
                </span>, 10);
        } else if (this.tag.icon()) {
            items.add('icon',
                <span class="fa-stack fa-3x">
                    {icon(this.tag.icon(), { className: 'fa-stack-1x CategoryIcon' })}
                </span>, 10);
        }

        return items;
    }

    mainItems() {
        const items = new ItemList;

        items.add('name', <h4 class="TagCategory-name">{this.tag.name()}</h4>, 15)

        if (this.tag.description()) {
            items.add('description', <div class="TagCategory-description">{this.tag.description()}</div>, 10)
        }

        return items;
    }

    statItems() {
        const items = new ItemList;

        items.add('discussionCount', StatWidget.component({
            count: this.tag.discussionCount(),
            label: app.translator.trans('askvortsov-categories.forum.stat-widgets.discussion_label')
        }), 15)

        items.add('postCount', StatWidget.component({
            count: this.tag.commentCount(),
            label: app.translator.trans('askvortsov-categories.forum.stat-widgets.post_label')
        }), 10)

        return items;
    }

    lastDiscussionItems() {
        const items = new ItemList;

        items.add('lastDiscussion', LastDiscussionWidget.component({
            discussion: this.tag.lastPostedDiscussion()
        }), 10);

        return items;
    }
}