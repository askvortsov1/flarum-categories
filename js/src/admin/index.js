import { settings } from '@fof-components';

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
                    <BooleanItem key="askvortsov-categories.keep-tags-nav" required>
                        {app.translator.trans('askvortsov-categories.admin.labels.keep_tags_nav')}
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-categories.parent-remove-icon" required>
                        {app.translator.trans('askvortsov-categories.admin.labels.parent_remove_icon')}
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-categories.parent-remove-description" required>
                        {app.translator.trans('askvortsov-categories.admin.labels.parent_remove_description')}
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-categories.parent-remove-stats" required>
                        {app.translator.trans('askvortsov-categories.admin.labels.parent_remove_stats')}
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-categories.parent-remove-last-discussion" required>
                        {app.translator.trans('askvortsov-categories.admin.labels.parent_remove_last_discussion')}
                    </BooleanItem>
                ],
            })
        );
});
