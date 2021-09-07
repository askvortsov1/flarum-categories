import Component from 'flarum/common/Component';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';
import humanTime from 'flarum/common/helpers/humanTime';
import { truncate } from 'flarum/common/utils/string';
import Link from 'flarum/common/components/Link';
import UserCard from 'flarum/forum/components/UserCard';

export default class LastDiscussionWidget extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    /**
     * Whether or not the user hover card is visible.
     *
     * @type {Boolean}
     */
    this.cardVisible = false;
  }

  view() {
    const discussion = this.attrs.discussion;

    if (!discussion) {
      return <div class="LastDiscussion">{app.translator.trans('askvortsov-categories.forum.last_discussion_widget.no_discussions')}</div>;
    }

    const user = discussion.lastPostedUser();

    let card = '';

    if (user && this.cardVisible) {
      card = UserCard.component({
        user,
        className: 'UserCard--popover',
        controlsButtonClassName: 'Button Button--icon Button--flat',
      });
    }

    return (
      <Link class="LastDiscussion" href={app.route.discussion(discussion, discussion.lastPostNumber())}>
        <Link className="LastDiscussion-avatar" href={user ? app.route.user(user) : '#'}>
          {avatar(user)}
        </Link>
        <div class="LastDiscussion-content">
          <div class="LastDiscussion-bottomRow">
            {humanTime(discussion.lastPostedAt())}{' '}
            <Link className="LastDiscussion-usernameLink" href={user ? app.route.user(user) : '#'}>
              {' '}
              | {username(user)}
            </Link>
          </div>
          <div class="LastDiscussion-topRow">{truncate(discussion.title(), 26)}</div>
        </div>
        <div class="LastDiscussion-userCardContainer">{card}</div>
      </Link>
    );
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    let timeout;

    this.$()
      .on('mouseover', '.LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard', () => {
        clearTimeout(timeout);
        timeout = setTimeout(this.showCard.bind(this), 300);
      })
      .on('mouseout', '.LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard', () => {
        clearTimeout(timeout);
        timeout = setTimeout(this.hideCard.bind(this), 150);
      });
  }

  /**
   * Show the user card.
   */
  showCard() {
    this.cardVisible = true;

    m.redraw();

    setTimeout(() => this.$('.UserCard').addClass('in'));
  }

  /**
   * Hide the user card.
   */
  hideCard() {
    $('.UserCard').removeClass('in');
    this.cardVisible = false;
    m.redraw();
  }
}
