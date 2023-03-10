import app from 'flarum/forum/app';
import Page from 'flarum/common/components/Page';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import AffixedSidebar from 'flarum/forum/components/AffixedSidebar';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import ItemList from 'flarum/common/utils/ItemList';
import extractText from 'flarum/common/utils/extractText';
import classList from 'flarum/common/utils/classList';

import sortTags from 'flarum/tags/utils/sortTags';
import tagLabel from 'flarum/tags/helpers/tagLabel';

import Category from './Category';

export default class CategoriesPage extends Page {
  tags!: any[];
  loading!: boolean;

  oninit(vnode) {
    super.oninit(vnode);

    app.history.push('categories', extractText(app.translator.trans('askvortsov-category.forum.header.back_to_categories_tooltip')));

    this.tags = [];

    const preloaded = app.preloadedApiDocument<any>();

    if (preloaded) {
      this.tags = sortTags(preloaded.filter((tag: any) => !tag.isChild()));
      return;
    }

    this.loading = true;

    app.tagList.load(['parent', 'children', 'lastPostedDiscussion', 'lastPostedDiscussion.lastPostedUser']).then(() => {
      this.tags = sortTags(app.store.all('tags').filter((tag) => !tag.isChild()));

      this.loading = false;

      m.redraw();
    });
  }

  view() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    const classes = app.forum.attribute('categories.fullPageDesktop') ? ['CategoriesPage', 'TagsPage'] : ['CategoriesPage'];

    return <div className={classList(classes)}>{this.pageItems().toArray()}</div>;
  }

  pageItems() {
    const items = new ItemList();

    items.add('hero', IndexPage.prototype.hero(), 100);

    items.add(
      'container',
      <div className="container">
        <div className={app.forum.attribute('categories.fullPageDesktop') ? '' : 'sideNavContainer'}>{this.containerItems().toArray()}</div>
      </div>,
      50
    );

    return items;
  }

  containerItems() {
    const items = new ItemList();

    const pinned = this.tags.filter((tag) => tag.position() !== null);
    const cloud = this.tags.filter((tag) => tag.position() === null);

    items.add(
      'sideNav',
      <AffixedSidebar>
        <nav className="CategoriesPage-nav TagsPage-nav IndexPage-nav sideNav">
          <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
        </nav>
      </AffixedSidebar>,
      100
    );

    items.add(
      'categoriesList',
      <div className="CategoriesPage-content sideNavOffset">
        <ol className="TagCategoryList">
          {pinned.map((tag) => {
            return Category.component({ model: tag });
          })}
        </ol>

        {cloud.length ? <div className="TagCloud">{cloud.map((tag) => [tagLabel(tag, { link: true }), ' '])}</div> : ''}
      </div>,
      50
    );

    return items;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    app.setTitle(extractText(app.translator.trans('askvortsov-categories.forum.all_categories.meta_title_text')));
  }
}
