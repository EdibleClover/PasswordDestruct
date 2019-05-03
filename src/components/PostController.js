
import React, { Component } from 'react';
const rp = require('request-promise');
/**
 * Component to control postingh to api.php
 */
export default class PostController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {returnData:''}
    }
    async componentDidMount() {
        let jsonBody = JSON.stringify(this.props.data)
        const returnData = await this.Post(jsonBody); // Using await to get the result of async func
        this.setState({ returnData });
     }
    Post = async (body) => {
        try{
            const options = {
                method: 'POST',
                uri: 'https://10.1.100.17/pwDestruct/php/api.php',  /**HTTPS*/
                body: body
            }
            const data = await rp(options);
            return data; //This may or may not contain a password hash
        }catch(e){return e}
    }
    render(props) {
        return(
            <div>
                    {(!this.props.data.pw) ? 'Retrieved Password: ' + this.state.returnData : 'Generated PassWord!' + this.state.returnData }
            </div>
        )
    }
}