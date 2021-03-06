import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function withAuth(ComponentToBeRendered){
    class Authenticate extends Component{
        componentWillMount(){
            if(!this.props.isAuthenticated){
                return this.props.history.push('/signin')
            }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                return this.props.history.push('/signin')
            }
        }
        render(){
            return <ComponentToBeRendered {...this.props} postsOwner/>
        }
    }
    function mapStateToProps(state){
        return{
            isAuthenticated: state.currentUser.isAuthenticated
        }
    }
    return connect(mapStateToProps)(Authenticate)
}