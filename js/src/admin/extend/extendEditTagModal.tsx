import {extend, override} from "flarum/common/extend";
import EditTagModal from "flarum/tags/admin/components/EditTagModal"
import ItemList from "flarum/common/utils/ItemList";
import app from 'flarum/admin/app';
import ColorPreviewInput from "flarum/common/components/ColorPreviewInput";
import Stream from 'flarum/common/utils/Stream';

export default function extendTagEditModal() {

  extend(EditTagModal.prototype, 'oninit', function () {
    this.fontColor = Stream('')
    if (this.tag.data.attributes) {
      this.fontColor = Stream(this.tag.data.attributes.fontColor || '');
    }
  })

  extend(EditTagModal.prototype, 'fields', function (items: ItemList<unknown>) {
    items.add(
      'font-color',
      <div className="Form-group">
        <label>{app.translator.trans('flarum-tags.admin.edit_tag.font_color_label')}</label>
        <ColorPreviewInput className="FormControl" placeholder="#000000" bidi={this.fontColor} />
      </div>,
      20
    );
  })

  override(EditTagModal.prototype, 'submitData', function () {
    return {
      name: this.name(),
      slug: this.slug(),
      description: this.description(),
      color: this.color(),
      icon: this.icon(),
      isHidden: this.isHidden(),
      primary: this.primary(),
      // custom attribute
      fontColor: this.fontColor(),
    };
  })
}
