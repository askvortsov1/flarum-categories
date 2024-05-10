import avatar from 'flarum/common/helpers/avatar';
import Link from 'flarum/common/components/Link';
import username from 'flarum/common/helpers/username';
import extractText from 'flarum/common/utils/extractText';

export default function lastDiscussionAvatar(user, className) {
  let avatarName;
  let avatarDisplay;
  if (user && user.id() > 0) {
      avatarName = extractText(username(user));
      avatarDisplay = avatar(user);
  }
  if (!avatarDisplay) {
    avatarName = "Anonymous";
    avatarDisplay = <span class="Avatar Avatar--anonymous" loading="lazy">?</span>;
  }

  return <Link className={className} href={user ? app.route.user(user) : '#'} aria-label={avatarName}>
        {avatarDisplay}
      </Link>
}
