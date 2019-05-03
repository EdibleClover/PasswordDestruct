import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { PostController } from './index.js'
export default class PassGen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'pw': '',
            'pwHash': '',
            'sending': false,
            'buttonDisabled': false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    /**ToDo,
     * Add more seeds, make more random or something, but for now this will do
     */
    generate = async () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const digits = '1234567890';
        const punct = '!@#%'; //Should probably add all of them
        const charSet = letters + digits + punct;
        let pw = '';
        for (let i = 0; i <= 16; i++) {   //Hard coded pw length
            let kindaRandom = Math.floor((Math.random() * charSet.length) + 1);
            pw += charSet[kindaRandom]
        }
        this.setState((state, props) => {
            return { "pw": pw };
        });
    }
    handleSubmit = async () => {
        let myBuffer = await digestMessage(this.state.pw);
        let pwHash = hexString(myBuffer);
        window.history.replaceState({}, "Ticking", "?" + pwHash);
        this.setState({
            "pwHash": pwHash, 'sending': true, buttonDisabled: true 
        });
    }
    handleInputChange = (e) => {
        this.setState({ "pw": e.target.value});
    }

    render() {
        return (
            <div>
                <Button
                    onClick={(e) => this.generate()}   //Onclick is async :)
                >
                Generate
                </Button>
                <Button
                    onClick={(e) => this.handleSubmit(e)}
                    disabled={this.state.buttonDisabled}
                >
                Submit
                </Button>
                <br></br>
                <Input
                value = {this.state.pw}
                onChange = {(e) => this.handleInputChange(e)}
                />
                <br></br>
                {
                    (this.state.sending) ?
                        <PostController
                            data={{ 'pw': this.state.pw, 'pwHash': this.state.pwHash }}
                        />
                        :
                        ''
                }
            </div>
        )
    }
}
/**
* Some extra functions for creating a 256 bit hash
* This is all Vanilla JS, (other than dealing with callbacks with async)
*  
*/
const digestMessage = async (message) => {
    const encoder = new TextEncoder();
    const data = await encoder.encode(message);
    return crypto.subtle.digest('SHA-256', data);
}
//Make it human Readable
const hexString = (buffer) => {
    const byteArray = new Uint8Array(buffer);
    const hexCodes = [...byteArray].map(value => {
        const hexCode = value.toString(16);
        const paddedHexCode = hexCode.padStart(2, '0');
        return paddedHexCode;
    });
    return hexCodes.join('');
}