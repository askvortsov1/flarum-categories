import { settings } from '@fof-components';
import { extend } from 'flarum/extend';
import BasicsPage from 'flarum/components/BasicsPage';

const {
    SettingsModal,
    items: { BooleanItem, SelectItem, StringItem },
} = settings;

app.initializers.add('askvortsov/flarum-categories', () => {
    app.extensionSettings['askvortsov-categories'] = () =>
        app.modal.show(
            new SettingsModal({
                title: app.translator.trans('askvortsov-categories.admin.title'),
                type: 'small',
                items: [
                    <legend class="categories-legend">
                        {app.translator.trans('askvortsov-categories.admin.headings.nav')}
                    </legend>,
                    <BooleanItem key="askvortsov-categories.keep-tags-nav" required>
                        <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.keep_tags_nav')}</span>
                    </BooleanItem>,

                    <legend class="categories-legend">
                        {app.translator.trans('askvortsov-categories.admin.headings.layout')}
                    </legend>,
                    <BooleanItem key="askvortsov-categories.full-page-desktop" required>
                        <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.full_page_desktop')}</span>
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-categories.compact-mobile" required>
                        <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.compact_mobile_mode')}</span>
                    </BooleanItem>,

                    <legend class="categories-legend">
                        {app.translator.trans('askvortsov-categories.admin.headings.parent_display')}
                    </legend>,
                    <BooleanItem key="askvortsov-categories.parent-remove-icon" required>
                        <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.parent_remove_icon')}</span>
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-categories.parent-remove-description" required>
                        <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.parent_remove_description')}</span>
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-categories.parent-remove-stats" required>
                        <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.parent_remove_stats')}</span>
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-categories.parent-remove-last-discussion" required>
                        <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.parent_remove_last_discussion')}</span>
                    </BooleanItem>,

                    <legend class="categories-legend">
                        {app.translator.trans('askvortsov-categories.admin.headings.child_display')}
                    </legend>,
                    <BooleanItem key="askvortsov-categories.child-bare-icon" required>
                        <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.child_bare_icon')}</span>
                    </BooleanItem>,

                    <legend class="categories-legend">
                        {app.translator.trans('askvortsov-categories.admin.headings.performance')}
                    </legend>,
                    <BooleanItem key="askvortsov-categories.small-forum-optimized" required>
                        <span class="categories-label">{app.translator.trans('askvortsov-categories.admin.labels.small_forum_optimized')}</span>
                    </BooleanItem>,
                ],
            })
        );
    extend(BasicsPage.prototype, 'homePageItems', items => {
        items.add('categories', {
            path: '/categories',
            label: app.translator.trans('askvortsov-categories.admin.basics.categories_label')
        });
    });
});
