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
            <div className="carousel flex-col h-full">
                <div className="flex items-center justify-center">
                    <img src={images[active]} className="w-7/12" alt="profile"></img>
                </div>
                <div className="carousel-smaller flex justify-center">
                    {
                        images.map((image, index) => (
                            <img key={image}
                                src={image}
                                className={`${index === active ? 'active' : ""} w-1/12 m-4`}
                                data-index={index}
                                onClick={this.handleImageClick}
                                alt="Img"
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Carousel;