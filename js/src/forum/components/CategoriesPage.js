import { extend } from 'flarum/extend';
import Page from 'flarum/components/Page';
import AffixedSidebar from 'flarum/components/AffixedSidebar';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

import sortTags from 'flarum/tags/utils/sortTags';
import tagLabel from 'flarum/tags/helpers/tagLabel';
import TagsPage from 'flarum/tags/components/TagsPage';

import Category from './Category';

export default class CategoriesPage extends TagsPage {
  oninit(vnode) {
    Page.prototype.oninit.call(this, vnode);

    this.tags = sortTags(app.store.all('tags').filter((tag) => !tag.parent()));

    app.history.push('categories', app.translator.trans('askvortsov-category.forum.header.back_to_categories_tooltip'));

    extend(IndexPage.prototype, 'sidebarItems', function (items) {
      if (app.current instanceof CategoriesPage && app.forum.attribute('categories.fullPageDesktop')) {
        for (const item in items.items) {
          if (item != 'newDiscussion' && item != 'nav') {
            items.remove(item);
          }
        }
      }
      return items;
    });
  }

  view() {
    const pinned = this.tags.filter((tag) => tag.position() !== null);
    const cloud = this.tags.filter((tag) => tag.position() === null);

    const classes = app.forum.attribute('categories.fullPageDesktop') ? ['CategoriesPage', 'TagsPage'] : ['CategoriesPage'];

    return (
      <div className={classes.join(' ')}>
        {IndexPage.prototype.hero()}
        <div className="container">
          <div className={app.forum.attribute('categories.fullPageDesktop') ? '' : 'sideNavContainer'}>
            <AffixedSidebar>
              <nav className="CategoriesPage-nav TagsPage-nav IndexPage-nav sideNav">
                <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
              </nav>
            </AffixedSidebar>

            <div className="CategoriesPage-content sideNavOffset">
              <ol className="TagCategoryList">
                {pinned.map((tag) => {
                  return Category.component({ model: tag });
                })}
              </ol>

              {cloud.length ? <div className="TagCloud">{cloud.map((tag) => [tagLabel(tag, { link: true }), ' '])}</div> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    app.setTitle(app.translator.trans('askvortsov-categories.forum.meta.categories_title'));
  }
}
