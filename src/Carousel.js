import { Component } from "react";

class Carousel extends Component {
    state = { active: 0 }
    
    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    }

    handleImageClick = (event) => {
        console.log(this)
        this.setState({
            active: +event.target.dataset.index
        })
    }

    render() {
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="profile"></img>
                <div className="carousel-smaller">
                    {
                        images.map((image, index) => (
                            <img key={image}
                                src={image}
                                className={index === active ? 'active' : ""}
                                data-index={index}
                                onClick={this.handleImageClick}
                            />
                        ))  
                    }
                </div>
            </div>
        )
    }
}

export default Carousel;