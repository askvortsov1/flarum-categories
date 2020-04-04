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

        this.isChild = this.props.parent != null && this.props.parent != undefined;

        this.collapsed = false;

        window.addEventListener("resize", function () {
            m.redraw();
        });
    }

    view() {
        const tag = this.tag;

        if (!tag) {
            return '';
        }

        this.compactMobileMode = window.innerWidth <= 767 && app.forum.attribute('categories.compactMobile');

        const children = this.isChild ? [] : sortTags(app.store.all('tags').filter(child => child.parent() === tag));

        const cardStyle = this.isChild ? {} : { backgroundColor: tag.color() };

        const classNames = ['TagCategory'];
        if (this.isChild) {
            classNames.push('SubCategory');
        } else {
            classNames.push('ParentCategory');
        }
        if (this.compactMobileMode) {
            classNames.push('compactMobile');
        }

        const lastDiscussionClassNames = (tag.lastPostedDiscussion() ? ['TagCategory-lastDiscussion'] : ['TagCategory-lastDiscussion empty']).join(' ');

        const childrenInContent = !this.isChild && this.compactMobileMode;

        const renderedChildren = (<ol className="TagCategory-subTagList">
            {children.map(child => [
                Category.component({ tag: child, parent: this })
            ])}
        </ol>);

        return (
            <li class={classNames.join(' ')}>
                <a class="TagCategory-content"
                    style={cardStyle}
                    href={app.route.tag(tag)}
                    config={this.stopProp}>
                    <div class="TagCategory-alignStart">
                        <div class="TagCategory-alignStart-main">
                            <span class="TagCategory-icon">
                                {this.iconItems().toArray()}
                            </span>
                            <div class="TagCategory-main">
                                {this.mainItems().toArray()}
                            </div>
                        </div>
                        {children.length == 0 ? '' : <p class="TagCategory-toggleArrow" onclick={(e) => { this.toggleArrow(e) }}>{icon(this.collapsed ? 'fas fa-caret-down' : 'fas fa-caret-up')}</p>}
                    </div>
                    <div class="TagCategory-alignEnd">
                        <div class="TagCategory-stats StatWidgetList">
                            {this.statItems().toArray()}
                        </div>
                        <div class={lastDiscussionClassNames}>
                            {this.lastDiscussionItems().toArray()}
                        </div>
                    </div>
                    {childrenInContent && !this.collapsed ? renderedChildren : ''}
                </a>
                {!childrenInContent && !this.isChild ? renderedChildren: ''}
            </li>
        );
    }

    iconItems() {
        const items = new ItemList;

        if (this.tag.icon() && this.isChild) {
            const style = {};
            let iconClasses = 'fa-stack-1x CategoryIcon';
            if (app.forum.attribute('categories.childBareIcon')) {
                style.color = this.tag.color();
                iconClasses += ' NoBackgroundCategoryIcon';
            }
            const classes = this.compactMobileMode ? 'fa-stack fa-1x' : 'fa-stack fa-2x';
            items.add('icon',
                <span class={classes}>
                    {app.forum.attribute('categories.childBareIcon') ?
                        '' : <i class="fa fa-circle fa-stack-2x icon-background" style={{ color: this.tag.color() }}></i>}
                    {icon(this.tag.icon(), { className: iconClasses, style: style })}
                </span>, 10);
        } else if (this.tag.icon() && !app.forum.attribute('categories.parentRemoveIcon')) {
            const classes = this.compactMobileMode ? 'fa-stack fa-2x' : 'fa-stack fa-3x';
            items.add('icon',
                <span class={classes}>
                    {icon(this.tag.icon(), { className: 'fa-stack-1x CategoryIcon' })}
                </span>, 10);
        }

        return items;
    }

    mainItems() {
        const items = new ItemList;

        items.add('name', <h4 class="TagCategory-name">{this.tag.name()}</h4>, 15)

        if (this.tag.description() && (this.isChild || !app.forum.attribute('categories.parentRemoveDescription'))) {
            items.add('description', <div class="TagCategory-description">{this.tag.description()}</div>, 10)
        }

        return items;
    }

    statItems() {
        const items = new ItemList;

        if (this.isChild || !app.forum.attribute('categories.parentRemoveStats')) {
            items.add('discussionCount', StatWidget.component({
                count: this.tag.discussionCount(),
                label: app.translator.trans('askvortsov-categories.forum.stat-widgets.discussion_label'),
                icon: 'fas fa-file-alt',
            }), 15)

            items.add('postCount', StatWidget.component({
                count: this.tag.postCount(),
                label: app.translator.trans('askvortsov-categories.forum.stat-widgets.post_label'),
                icon: 'fas fa-comment',
            }), 10)
        }

        return items;
    }

    lastDiscussionItems() {
        const items = new ItemList;

        if (this.isChild || !app.forum.attribute('categories.parentRemoveLastDiscussion')) {
            items.add('lastDiscussion', LastDiscussionWidget.component({
                discussion: this.tag.lastPostedDiscussion()
            }), 10);
        }

        return items;
    }

    config(isInitialized) {
        if (isInitialized) return;

        this.$('.TagCategory-content,.TagCategory-toggleArrow').bind('mouseenter', function (e) {
            $(this).addClass('hover');
            if ($(this).parent().hasClass('SubCategory') || $(this).hasClass('TagCategory-toggleArrow')) {
                $(this).closest('.ParentCategory').children('.TagCategory-content').removeClass('hover');
            }
        });

        this.$('.TagCategory-content,.TagCategory-toggleArrow').bind('mouseleave', function (e) {
            $(this).removeClass('hover');
            if ($(this).parent().hasClass('SubCategory') || $(this).hasClass('TagCategory-toggleArrow')) {
                $(this).closest('.ParentCategory').children('.TagCategory-content').addClass('hover');
            }
        });
    }

    toggleArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.collapsed = !this.collapsed;
        m.redraw();
    }

    stopProp(element, isInitialized) {
        if (isInitialized) return;
        $(element).on('click', e => e.stopPropagation());
        m.route.apply(this, arguments);
    }
}