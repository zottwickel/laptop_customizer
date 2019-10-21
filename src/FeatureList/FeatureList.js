import React from 'react';
import OptionList from '../OptionList/OptionList';
import './FeatureList.css';

class FeatureList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                    <h3>{feature}</h3>
                    </legend>
                    <OptionList 
                        selected={this.props.selected}
                        handleUpdate={this.props.handleUpdate} 
                        feature={feature} 
                        options={this.props.features[feature]} />
                </fieldset>
            );
        });
    }

}

export default FeatureList;