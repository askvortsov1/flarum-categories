import { extend } from 'flarum/common/extend';
import BasicsPage from 'flarum/admin/components/BasicsPage';

app.initializers.add('askvortsov/flarum-categories', () => {
  app.extensionData
    .for('askvortsov-categories')
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.nav')}</legend>, 10)
    .registerSetting(
      {
        setting: 'askvortsov-categories.keep-tags-nav',
        label: app.translator.trans('askvortsov-categories.admin.labels.keep_tags_nav'),
        type: 'switch',
      },
      9
    )
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.layout')}</legend>)
    .registerSetting({
      setting: 'askvortsov-categories.full-page-desktop',
      label: app.translator.trans('askvortsov-categories.admin.labels.full_page_desktop'),
      help: app.translator.trans('askvortsov-categories.admin.help.full_page_desktop'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'askvortsov-categories.compact-mobile',
      label: app.translator.trans('askvortsov-categories.admin.labels.compact_mobile_mode'),
      type: 'switch',
    })
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.parent_display')}</legend>)
    .registerSetting({
      setting: 'askvortsov-categories.parent-remove-icon',
      label: app.translator.trans('askvortsov-categories.admin.labels.parent_remove_icon'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'askvortsov-categories.parent-remove-description',
      label: app.translator.trans('askvortsov-categories.admin.labels.parent_remove_description'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'askvortsov-categories.parent-remove-stats',
      label: app.translator.trans('askvortsov-categories.admin.labels.parent_remove_stats'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'askvortsov-categories.parent-remove-last-discussion',
      label: app.translator.trans('askvortsov-categories.admin.labels.parent_remove_last_discussion'),
      type: 'switch',
    })
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.child_display')}</legend>)
    .registerSetting({
      setting: 'askvortsov-categories.child-bare-icon',
      label: app.translator.trans('askvortsov-categories.admin.labels.child_bare_icon'),
      help: app.translator.trans('askvortsov-categories.admin.help.child_bare_icon'),
      type: 'switch',
    })
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.performance')}</legend>)
    .registerSetting({
      setting: 'askvortsov-categories.small-forum-optimized',
      label: app.translator.trans('askvortsov-categories.admin.labels.small_forum_optimized'),
      help: app.translator.trans('askvortsov-categories.admin.help.small_forum_optimized'),
      type: 'switch',
    })
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.colors')}<div class="helpText">{app.translator.trans('askvortsov-categories.admin.help.colors')}</div></legend>)
    .registerSetting({
      setting: 'askvortsov-categories.enable-primary-tag-color',
      label: app.translator.trans('askvortsov-categories.admin.labels.enable_primary_tag_color'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'askvortsov-categories.enable-primary-child-tag-color',
      label: app.translator.trans('askvortsov-categories.admin.labels.enable_primary_child_tag_color'),
      type: 'switch',
    })
    .registerSetting(() => <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.widgets')}<div class="helpText">{app.translator.trans('askvortsov-categories.admin.help.widgets')}</div></legend>)
    .registerSetting({
      setting: 'askvortsov-categories.widget-header',
      label: app.translator.trans('askvortsov-categories.admin.labels.widget_header'),
      help: app.translator.trans('askvortsov-categories.admin.help.widget_header'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'askvortsov-categories.widget-left',
      label: app.translator.trans('askvortsov-categories.admin.labels.widget_left'),
      help: app.translator.trans('askvortsov-categories.admin.help.widget_left'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'askvortsov-categories.widget-right',
      label: app.translator.trans('askvortsov-categories.admin.labels.widget_right'),
      help: app.translator.trans('askvortsov-categories.admin.help.widget_right'),
      type: 'switch',
    })
    .registerSetting({
      setting: 'askvortsov-categories.widget-footer',
      label: app.translator.trans('askvortsov-categories.admin.labels.widget_footer'),
      help: app.translator.trans('askvortsov-categories.admin.help.widget_footer'),
      type: 'switch',
    });

  extend(BasicsPage.prototype, 'homePageItems', (items) => {
    items.add('categories', {
      path: '/categories',
      label: app.translator.trans('askvortsov-categories.admin.basics.categories_label'),
    });
  });
});
