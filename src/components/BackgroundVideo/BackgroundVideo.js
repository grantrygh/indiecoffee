'use strict';

import React, {Component} from 'react';
import video from '../../assets/images/coffeemachine.mp4'

class BackgroundVideo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: video
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default BackgroundVideo;