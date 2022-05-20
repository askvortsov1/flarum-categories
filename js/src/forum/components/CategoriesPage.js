import Page from 'flarum/common/components/Page';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import AffixedSidebar from 'flarum/forum/components/AffixedSidebar';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';

import sortTags from 'flarum/tags/utils/sortTags';
import tagLabel from 'flarum/tags/helpers/tagLabel';

import Category from './Category';

export default class CategoriesPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.history.push('categories', app.translator.trans('askvortsov-category.forum.header.back_to_categories_tooltip'));

    this.tags = [];

    const preloaded = app.preloadedApiDocument();

    if (preloaded) {
      this.tags = sortTags(preloaded.filter((tag) => !tag.isChild()));
      return;
    }

    this.loading = true;

    app.tagList
      .load(['parent', 'children', 'lastPostedDiscussion', 'children.parent', 'parent.children.parent', 'lastPostedDiscussion.lastPostedUser'])
      .then(() => {
        this.tags = sortTags(app.store.all('tags').filter((tag) => !tag.isChild()));

        this.loading = false;

        m.redraw();
      });
  }

  view() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

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

    app.setTitle(app.translator.trans('askvortsov-categories.forum.all_categories.meta_title_text'));
  }
}
