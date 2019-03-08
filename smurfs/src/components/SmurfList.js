import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { getSmurfs, deleteSmurf } from '../actions';

class SmurfList extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            return (
                <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
            )
        }

        return (
            <div className='SmurfList-wrapper'>
                    {this.props.smurfs.map(smurf => {
                        return <div key={smurf.name} className='smurf-card'>
                                <h2>Name: {smurf.name}</h2>
                                <p>{smurf.age} years young</p>
                                <p>{smurf.height} tall</p>
                                <button onClick={this.props.deleteSmurf(smurf.id)}>Delete Smurf</button>
                        </div>
                    })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
});

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(SmurfList);