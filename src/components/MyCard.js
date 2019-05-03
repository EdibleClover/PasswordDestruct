import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';
import { MyRouter } from './index.js'
import bomb from './Bomb.jpg'
/**
 * Decided to use a card cuz its pretty
 */
class MyCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main">
                <Card inverse>
                    <CardImg width="100%" src={bomb} alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle>PassWord Destruct</CardTitle>
                    </CardImgOverlay>
                </Card>
                <Card >
                    <MyRouter />
                </Card>
            </div>
        );
    }
}
export default MyCard




