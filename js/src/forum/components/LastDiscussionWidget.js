import Component from 'flarum/Component';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/utils/humanTime';
import { truncate } from 'flarum/utils/string';

export default class LastDiscussionWidget extends Component {
    view() {
        const discussion = this.props.discussion;


        if (!discussion) {
            return (
                <div class="LastDiscussion">
                    No Discussions Yet!
                </div>
            );
        }

        return (
            <a class="LastDiscussion" href={app.route.discussion(discussion)} config={m.route}>
                <div class="LastDiscussion-avatar">
                    {avatar(discussion.lastPostedUser())}
                </div>
                <div class="LastDiscussion-content">
                    <div class="LastDiscussion-topRow">
                        {truncate(discussion.title(), 26)}
                    </div>
                    <div class="LastDiscussion-bottomRow">
                        {humanTime(discussion.createdAt())} |  {discussion.lastPostedUser().displayName()}
                    </div>
                </div>
            </a>
        );
    }
}