import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import LinkButton from 'flarum/common/components/LinkButton';
import Model from 'flarum/common/Model';
import Tag from 'flarum/tags/models/Tag';
import CategoriesPage from './components/CategoriesPage';

app.initializers.add('askvortsov/flarum-categories', () => {
  app.routes.categories = {
    path: '/categories',
    component: CategoriesPage,
  };

  Tag.prototype.postCount = Model.attribute('postCount');

  extend(IndexPage.prototype, 'navItems', function (items) {
    if (items.has('tags') && !app.forum.attribute('categories.keepTagsNav')) {
      items.remove('tags');
    }
    items.add(
      'categories',
      <LinkButton icon="fas fa-th-list" href={app.route('categories')}>
        {app.translator.trans('askvortsov-categories.forum.index.categories_link')}
      </LinkButton>,
      -9.5
    );

    if (items.has('moreTags')) {
      items.replace('moreTags', <LinkButton href={app.route('categories')}>{app.translator.trans('flarum-tags.forum.index.more_link')}</LinkButton>);
    }

    return items;
  });

  extend(IndexPage.prototype, 'sidebarItems', function (items) {
    if (app.current.matches(CategoriesPage) && app.forum.attribute('categories.fullPageDesktop')) {
      for (const item in items.items) {
        if (item !== 'newDiscussion' && item !== 'nav') {
          items.remove(item);
        }
      }
    }
    return items;
  });
});
