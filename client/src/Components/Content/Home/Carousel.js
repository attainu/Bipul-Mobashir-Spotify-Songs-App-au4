import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default class Carouse extends Component {
    render() {
        return (
                <Carousel centerMode centerSlidePercentage={50} showThumbs={false} showStatus={false} emulateTouch autoPlay interval={2000} infiniteLoop>
                <div>
                    <img src="https://i.ytimg.com/vi/Ps4aVpIESkc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBB9d6tpKF6j1y3SmHCIjbLaE0W1Q" />
                </div>
                <div>
                    <img src="https://i.ytimg.com/vi/_iktURk0X-A/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA0VTBgvnXma3UIfCPVrt8lsk6bqA" />
                </div>
                <div>
                    <img src="https://i.ytimg.com/vi/JsXw02JUrA4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC3vyEZDCgNBxVFlzOmNnHFxKU5pA" />
                </div>
                <div>
                    <img src="https://i.ytimg.com/vi/8qovC498OIY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbF1moZI6xj7o2Owz2Fz90jpvnnA" />
                </div>
            </Carousel>
        )
    }
}
