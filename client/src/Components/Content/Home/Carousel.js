import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import getCarousel from './../../../API/getCarousel';
import {connect} from 'react-redux';
import Card from './CCard';

let getData = (store) => {
    return {
        carousel : store.carousel.carouselList
    }
}

let getFunction = (dispatch) => {
    return {
         setCarousel: dispatch
    }
}

export default connect(getData, getFunction)(class Carouse extends Component {

    componentDidMount = () => {
        let data = getCarousel()
        data.then(res => {
            let action = {
                type : "set_carousel",
                payload : res
            }
            this.props.setCarousel(action);
        })
    }
    
    render() {
        return (
                <Carousel centerMode centerSlidePercentage={50} showThumbs={false} showStatus={false} emulateTouch autoPlay interval={2000} infiniteLoop>

                    {this.props.carousel && this.props.carousel.map((items, key) => {
                        return (
                            <div key={key}>
                                <Card key={key} id={items.snippet.resourceId.videoId} thumbnail={items.snippet.thumbnails.maxres.url} title={"a"} duration={"a"}/>
                            </div>
                        )
                    })}
            </Carousel>
        )
    }
})
