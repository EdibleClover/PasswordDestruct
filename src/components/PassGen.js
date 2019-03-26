import React, { Component } from 'react';
import { Button } from 'reactstrap';
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
        let myBuffer = await hashIt(pw);
        let pwHash = hexString(myBuffer);
        window.history.replaceState({}, "Ticking", "?" + pwHash);
        this.setState((state, props) => {
            return { "pw": pw, "pwHash": pwHash, 'sending': true, buttonDisabled: true };
        });
    }

    render() {
        return (
            <div>
                <Button
                    onClick={(e) => this.generate()}   //Onclick is async :)
                    disabled={this.state.buttonDisabled}
                >
                    Generate
            </Button>
                <br></br>
                password: {this.state.pw}
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
//This is a promise, so chain away we go, 
//Really after having a better understanding of the async stuff in react, this can all be just one function, 
//called inside this.generate
const digestMessage = async (message) => {
    const encoder = new TextEncoder();
    const data = await encoder.encode(message);
    return crypto.subtle.digest('SHA-256', data);
}
//Basically just an async wrapper, Again it is uneeded 
//gets called within onClick which IS ASYNC
const hashIt = async (pw) => {
    let message = await digestMessage(pw)
    return message;
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