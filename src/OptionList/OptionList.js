import React from 'react';
import slugify from 'slugify';
import './OptionList.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class OptionList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(this.props.feature)}
                        checked={item.name === this.props.selected[this.props.feature].name}
                        onChange={e => this.props.handleUpdate(this.props.feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                </div>
            );
        });
    }

}

export default OptionList;