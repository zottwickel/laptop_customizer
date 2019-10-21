import React from 'react';
import FeatureList from '../FeatureList/FeatureList';
import './FeatureForm.css';

class FeatureForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeatureList 
                    handleUpdate={this.props.handleUpdate}
                    selected={this.props.selected}
                    features={this.props.features} />
          </form>
        )
    }
}

export default FeatureForm;