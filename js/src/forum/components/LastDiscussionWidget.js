import Component from 'flarum/Component';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import humanTime from 'flarum/helpers/humanTime';
import { truncate } from 'flarum/utils/string';
import UserCard from 'flarum/components/UserCard';

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
      <a class="LastDiscussion" route={app.route.discussion(discussion)}>
        <a className="LastDiscussion-avatar" route={user ? app.route.user(user) : '#'}>
          {avatar(user)}
        </a>
        <div class="LastDiscussion-content">
          <div class="LastDiscussion-bottomRow">
            {humanTime(discussion.lastPostedAt())}{' '}
            <a className="LastDiscussion-usernameLink" route={user ? app.route.user(user) : '#'}>
              {' '}
              | {username(user)}
            </a>
          </div>
          <div class="LastDiscussion-topRow">{truncate(discussion.title(), 26)}</div>
        </div>
        <div class="LastDiscussion-userCardContainer">{card}</div>
      </a>
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
