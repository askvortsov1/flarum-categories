import app from 'flarum/forum/app';
import Page from 'flarum/common/components/Page';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import ItemList from 'flarum/common/utils/ItemList';
import extractText from 'flarum/common/utils/extractText';
import sortTags from 'flarum/tags/utils/sortTags';
import tagLabel from 'flarum/tags/helpers/tagLabel';

import Category from './Category';

/*
* Used for finding the correct location of widget containers, widget has undefined className which is used to compare and find.
* position types:
* POSITION_ANY = No position check (Used for Right Side Widget)
* POSITION_FIRST = First container only (Used for Header Widget)
* POSITION_AFTER_FIRST = After the first container (Used for the Footer Widget)
*/
const POSITION_ANY = 0;
const POSITION_FIRST = 1;
const POSITION_AFTER_FIRST = 2;

function findWidgetContainer(vdom, classNames, classNameIndex, position) {
  for (let i = 0; i < vdom.children.length; i++) {
    const child = vdom.children[i];
    const findClassName = classNames[classNameIndex];
    const isClassNameMatch = child.attrs.className? child.attrs.className.indexOf(findClassName) !== -1: false;
    if (isClassNameMatch || findClassName == child.attrs.className) {
      let isValid = false;
      if (position === POSITION_ANY || isClassNameMatch) {
        isValid = true;
      } else if (position === POSITION_FIRST && i == 0) {
        isValid = true;
      } else if (position === POSITION_AFTER_FIRST && i > 0) {
        isValid = true;
      }
      if (isValid) {
        classNameIndex += 1;
        if (classNameIndex == classNames.length) {
          // Found the last container from the classNames array
          return child;
        } else {
          return findWidgetContainer(child, classNames, classNameIndex, position);
        }
      }
    }
  }
}

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

    return <div className='CategoriesPage'>{this.pageItems().toArray()}</div>;
  }

  pageItems() {
    const items = new ItemList();

    items.add('hero', IndexPage.prototype.hero(), 100);

    items.add('container', <div class="container">{this.containerItems().toArray()}</div>, 50);

    return items;
  }

  containerItems() {
    const items = new ItemList();
    const indexPage = IndexPage.prototype.view();
    // Only check for header widget if enable in the settings
    if (app.forum.attribute('categories.widgetHeader')) {
      const foundHeaderWidget= findWidgetContainer(indexPage, ['container', undefined], 0, POSITION_FIRST);
      if (foundHeaderWidget) {
        items.add('header-widget', foundHeaderWidget, 100);
      }
    }

    items.add("sideNavContainer", <div class={app.forum.attribute('categories.fullPageDesktop') ? 'topNavContainer' : 'sideNavContainer'}>{this.contentItems().toArray()}</div>, 50);

    // Only check for footer widget if enable in the settings
    if (app.forum.attribute('categories.widgetFooter')) {
      const foundFooterWidget= findWidgetContainer(indexPage, ['container', undefined], 0, POSITION_AFTER_FIRST);
      if (foundFooterWidget) {
        items.add('footer-widget', foundFooterWidget, 0);
      }
    }
    return items;
  }

  contentItems() {
    const items = new ItemList();

    const pinned = this.tags.filter((tag) => tag.position() !== null);
    const cloud = this.tags.filter((tag) => tag.position() === null);

    items.add(
      'sideNav',
        <nav className={app.forum.attribute('categories.fullPageDesktop') ? 'CategoriesPage-nav IndexPage-nav topNav' : 'CategoriesPage-nav IndexPage-nav sideNav'}>
          <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
        </nav>,
      100
    );

    items.add(
      'categoriesList',
      <div className="CategoriesPage-content sideNavOffset">
        <ol className="TagCategoryList">
          {pinned.map((tag) => {
            return Category.component({ model: tag, enablePrimaryTagColor: app.forum.attribute('categories.enablePrimaryTagColor'), enablePrimaryChildTagColor: app.forum.attribute('categories.enablePrimaryChildTagColor') });
          })}
        </ol>

        {cloud.length ? <div className="TagCloud">{cloud.map((tag) => [tagLabel(tag, { link: true }), ' '])}</div> : ''}
      </div>,
      50
    );
    // Only check for right side widget if enable in the settings
    if (app.forum.attribute('categories.widgetRight')) {
      const indexPage = IndexPage.prototype.view();
      const foundWidget= findWidgetContainer(indexPage, ['container','sideNavContainer', undefined], 0, POSITION_ANY);
      if (foundWidget) {
        items.add('widget', foundWidget, 0);
      }
    }
    return items;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    app.setTitle(extractText(app.translator.trans('askvortsov-categories.forum.all_categories.meta_title_text')));
  }
}
