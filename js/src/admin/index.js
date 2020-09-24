import { settings } from '@fof-components';
import { extend } from 'flarum/extend';
import BasicsPage from 'flarum/components/BasicsPage';

const {
  SettingsModal,
  items: { BooleanItem },
} = settings;

app.initializers.add('askvortsov/flarum-categories', () => {
  app.extensionSettings['askvortsov-categories'] = () =>
    app.modal.show(SettingsModal, {
      title: app.translator.trans('askvortsov-categories.admin.title'),
      type: 'small',
      items: (s) => [
        <div className="Form-group">
          <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.nav')}</legend>
          <BooleanItem name="askvortsov-categories.keep-tags-nav" setting={s} required>
            <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.keep_tags_nav')}</span>
          </BooleanItem>

          <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.layout')}</legend>
          <BooleanItem name="askvortsov-categories.full-page-desktop" setting={s} required>
            <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.full_page_desktop')}</span>
          </BooleanItem>
          <BooleanItem name="askvortsov-categories.compact-mobile" setting={s} required>
            <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.compact_mobile_mode')}</span>
          </BooleanItem>

          <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.parent_display')}</legend>
          <BooleanItem name="askvortsov-categories.parent-remove-icon" setting={s} required>
            <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.parent_remove_icon')}</span>
          </BooleanItem>
          <BooleanItem name="askvortsov-categories.parent-remove-description" setting={s} required>
            <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.parent_remove_description')}</span>
          </BooleanItem>
          <BooleanItem name="askvortsov-categories.parent-remove-stats" setting={s} required>
            <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.parent_remove_stats')}</span>
          </BooleanItem>
          <BooleanItem name="askvortsov-categories.parent-remove-last-discussion" setting={s} required>
            <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.parent_remove_last_discussion')}</span>
          </BooleanItem>

          <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.child_display')}</legend>
          <BooleanItem name="askvortsov-categories.child-bare-icon" setting={s} required>
            <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.child_bare_icon')}</span>
          </BooleanItem>

          <legend class="categories-legend">{app.translator.trans('askvortsov-categories.admin.headings.performance')}</legend>
          <BooleanItem name="askvortsov-categories.small-forum-optimized" setting={s} required>
            <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.small_forum_optimized')}</span>
          </BooleanItem>
        </div>,
      ],
    });
  extend(BasicsPage.prototype, 'homePageItems', (items) => {
    items.add('categories', {
      path: '/categories',
      label: app.translator.trans('askvortsov-categories.admin.basics.categories_label'),
    });
  });
});
