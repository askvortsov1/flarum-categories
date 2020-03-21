import Component from 'flarum/Component';

export default class StatWidget extends Component {
    view() {
        return (
            <div class="StatWidget">
                <div class="StatWidget-count">
                    {this.props.count}
                </div>
                <div class="StatWidget-label">
                    {this.props.label}
                </div>
            </div>
        );
    }
}