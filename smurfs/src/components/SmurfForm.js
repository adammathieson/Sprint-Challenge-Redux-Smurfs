import React, { Component } from 'react';

import { addSmurf } from '../actions';

import Loader from 'react-loader-spinner';

import { connect } from 'react-redux';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: `${this.state.height}cm`
        }
        this.props.addSmurf(newSmurf);

        this.setState({
            name: '',
            age: '',
            height: ''
        });
    }

    render() {

        if (this.props.addingSmurf) {
            return (
                <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
            )
        }

        return (
            <div className='smurf-form'>
            <h2>Add to Village</h2>
                <form onSubmit={this.onSubmit}>
                    <input
                        name='name'
                        type='text'
                        onChange={this.changeHandler}
                        value={this.state.name}
                        placeholder='name'
                    />
                    <br />
                    <input
                        name='age'
                        type='text'
                        onChange={this.changeHandler}
                        value={this.state.age}
                        placeholder='age'
                    />
                    <br />
                    <input
                        name='height'
                        type='text'
                        onChange={this.changeHandler}
                        value={this.state.height}
                        placeholder='height'
                    />
                    <br />
                    <button type='submit'>Create Smurf</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    addingSmurf: state.addingSmurf
});

export default connect(mapStateToProps, { addSmurf })(SmurfForm);