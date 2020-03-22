import Component from 'flarum/Component';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import { truncate } from 'flarum/utils/string';

export default class LastDiscussionWidget extends Component {
    view() {
        const discussion = this.props.discussion;


        if (!discussion) {
            return (
                <div class="LastDiscussion">
                    {app.translator.trans('askvortsov-categories.forum.last_discussion_widget.no_discussions')}
                </div>
            );
        }

        return (
            <a class="LastDiscussion" href={app.route.discussion(discussion)} config={this.stopProp}>
                <div class="LastDiscussion-avatar">
                    {avatar(discussion.lastPostedUser())}
                </div>
                <div class="LastDiscussion-content">
                    <div class="LastDiscussion-topRow">
                        {truncate(discussion.title(), 26)}
                    </div>
                    <div class="LastDiscussion-bottomRow">
                        {humanTime(discussion.lastPostedAt())} |  {username(discussion.lastPostedUser())}
                    </div>
                </div>
            </a>
        );
    }

    stopProp(element, isInitialized) {
        if (isInitialized) return;
        $(element).on('click', e => e.stopPropagation());
        m.route.apply(this, arguments);
    }
}