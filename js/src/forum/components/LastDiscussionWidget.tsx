import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import username from 'flarum/common/helpers/username';
import humanTime from 'flarum/common/helpers/humanTime';
import { truncate } from 'flarum/common/utils/string';
import Link from 'flarum/common/components/Link';
import UserCard from 'flarum/forum/components/UserCard';
import type Discussion from 'flarum/common/models/Discussion';
import ItemList from 'flarum/common/utils/ItemList';
import Tag from 'flarum/tags/models/Tag';
import classList from 'flarum/common/utils/classList';
import type Mithril from 'mithril';
import textContrastClass from 'flarum/common/helpers/textContrastClass';
import lastDiscussionAvatar from '../helpers/lastDiscussionAvatar';

interface Attrs {
  discussion: Discussion;
  selectedTag: {
    tag: Tag;
    isChild: boolean;
    isBackgroundTagColored: boolean;
  }
}

export default class LastDiscussionWidget extends Component<Attrs> {
  /**
   * Whether or not the user hover card is visible.
   */
  cardVisible!: boolean;

  oninit(vnode) {
    super.oninit(vnode);

    this.cardVisible = false;
  }

  view() {
    const discussion = this.attrs.discussion;

    if (!discussion) {
      return <div class="LastDiscussion">{app.translator.trans('askvortsov-categories.forum.last_discussion_widget.no_discussions')}</div>;
    }

    const user = discussion.lastPostedUser();

    return (
      <Link class="LastDiscussion" href={app.route.discussion(discussion, discussion.lastPostNumber() ?? 0)}>
        {this.content().toArray()}
      </Link>
    );
  }

  content() {
    const items = new ItemList();

    const discussion = this.attrs.discussion;
    const user = discussion.lastPostedUser();
    let className = 'auto-color-text';

    if (this.attrs.selectedTag.isChild) {
      if (this.attrs.selectedTag.isBackgroundTagColored) {
        className = textContrastClass(this.attrs.selectedTag.tag.color());
      }
    } else if (this.attrs.selectedTag.isBackgroundTagColored) {
      className = textContrastClass(this.attrs.selectedTag.tag.color());
    }

    items.add(
      'avatar',
      lastDiscussionAvatar(user, "LastDiscussion-avatar"),
      100
    );

    items.add(
      'mainContent',
      <div class={classList('LastDiscussion-content', className)}>
        <div class={classList("LastDiscussion-bottomRow", className+'muted' )}>
          {humanTime(discussion.lastPostedAt()!)}{' '}
          <Link className={classList('LastDiscussion-usernameLink', className+'muted')}  href={user ? app.route.user(user) : '#'}>
            <span style={{ display: 'inline', margin: '0 4px' }} role="presentation">
              |
            </span>
            {username(user)}
          </Link>
        </div>
        <div class="LastDiscussion-topRow">{truncate(discussion.title(), 26)}</div>
      </div>,
      50
    );

    let card: Mithril.Children = null;

    if (user && this.cardVisible) {
      card = UserCard.component({
        user,
        className: 'UserCard--popover',
        controlsButtonClassName: 'Button Button--icon Button--flat',
      });
    }

    items.add('card', <div class="LastDiscussion-userCardContainer">{card}</div>, 10);

    return items;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    let timeout: number;

    this.$()
      .on('mouseover', '.LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard', () => {
        clearTimeout(timeout);
        timeout = window.setTimeout(this.showCard.bind(this), 300);
      })
      .on('mouseout', '.LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard', () => {
        clearTimeout(timeout);
        timeout = window.setTimeout(this.hideCard.bind(this), 150);
      });
  }

  onremove(vnode): void {
    super.onremove(vnode);

    this.$().off('mouseover mouseout');
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
