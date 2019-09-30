import React from 'react';
// import { EMPLOYEES_WATCHER } from '../actions/types';
import { fetchEmployees } from '../actions';
import { connect } from 'react-redux';

interface iProps {
    fetchEmployees: any
};

class HomePage extends React.Component<iProps, {}> {

    render() {

        const { fetchEmployees } = this.props;

        return (
            <div>
                Home Page

                <button onClick={fetchEmployees}>
                    Click Me!
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    const { employees } = state;
  
    return { employees };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchEmployees: () => {
            console.log('dispatch', dispatch);
            dispatch(fetchEmployees())
        },
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
