import React, { Component } from "react";
import Slider from "react-slick";

import './Slide.css';

export default class MultipleRows extends Component {
    state = {
        width: 300,
        display: true,
      };
  
    render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      slidesPerRow: 3,
      rows: 3,
    };
    return (
      <div
        styled={{
            width: this.state.width+ "px",
            display: this.state.display ? "block":"none"

        }}>
        <h2>Students</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
        </Slider>
      </div>
    );
  }
}