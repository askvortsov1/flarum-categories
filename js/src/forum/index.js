import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import LinkButton from 'flarum/common/components/LinkButton';
import Model from 'flarum/common/Model';
import Tag from 'flarum/tags/models/Tag';
import CategoriesPage from './components/CategoriesPage';
import TagsPage from 'flarum/tags/forum/components/TagsPage';
import Category from './components/Category';
import LastDiscussionWidget from './components/LastDiscussionWidget';
import StatWidget from './components/StatWidget';
import sortWidgets from 'flarum/extensions/afrux-forum-widgets-core/common/utils/sortWidgets';


function pruneIndexNav(items, func) {
  const isTagsPageVisible = app.forum.attribute('categories.keepTagsNav');

  const isCustomTagsHidden = (app.current.matches(CategoriesPage) || app.current.matches(TagsPage));
  for (const item in items.items) {
    if (func(item)) {
      if(item.startsWith('tag')) {
        if(item == 'tags') {
          /*
          * Tags must be visible on the navibation bar, when the User has selected to keep Tags within the Extension Settings.
          * Finding all items that begins with 'tag' will also load 'tags', due to custom tag are labelled 'tag1', 'tag2' and so-on
          */
          if (!isTagsPageVisible) {
            items.remove(item);
          }
        } else {
          /*
          * This is for custom tags, where they should not be visible within CategoriesPage and TagsPage
          */
          if (isCustomTagsHidden) {
            items.remove(item);
          }
        }
      } else {
        /*
         * Remove widget on the left side if disabled from settings
         */
        if (!app.forum.attribute('categories.widgetLeft')) {
          items.remove(item);
        }
      }
    }
  }
  return items;
}

app.initializers.add('askvortsov/flarum-categories', () => {
  app.routes.categories = {
    path: '/categories',
    component: CategoriesPage,
  };

  Tag.prototype.postCount = Model.attribute('postCount');

  extend(IndexPage.prototype, 'navItems', function (items) {
    items.add(
      'categories',
      <LinkButton icon="fas fa-th-list" href={app.route('categories')}>
        {app.translator.trans('askvortsov-categories.forum.index.categories_link')}
      </LinkButton>,
      -9.5
    );

    if (app.current.matches(CategoriesPage) || app.current.matches(TagsPage)) {
      // There is not need to display More Tags button for Categories or Tags Page
      items.remove('moreTags');
    } else {
      if (items.has('moreTags')) {
        items.replace('moreTags', <LinkButton href={app.route('categories')}>{app.translator.trans('flarum-tags.forum.index.more_link')}</LinkButton>);
      }
    }

    pruneIndexNav(items, (item) => item.startsWith('tag'));

    return items;
  });

  extend(IndexPage.prototype, 'sidebarItems', function (items) {
    pruneIndexNav(items, (item) => item !== 'newDiscussion' && item !== 'nav');
  });
});

export default {
  'components/CategoriesPage': CategoriesPage,
  'components/Category': Category,
  'components/LastDiscussionWidget': LastDiscussionWidget,
  'components/StatWidget': StatWidget,
};
