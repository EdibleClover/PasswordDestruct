/**
 * Simple router to control page content according to query on url
 */
import React, { Component } from 'react';
import {PassGen, PostController} from './index.js';
class MyRouter extends Component {
    constructor(props){
        super(props)
        this.state = {
            'QueryString' : window.location.search.substring(1) //Get rid of leading ? in query
        }
    }
    /**
     * Render the components based on Query
     */
    render(){ 
        if(this.state.QueryString.length >= 32){
            console.log(this.state.QueryString)
            return(
                <PostController
                data={{'pwHash':this.state.QueryString}}
                />
            )
        }else{
            return(
                <div>
                <PassGen/>
                </div>
            )
        }
    }
}
export default MyRouter
 