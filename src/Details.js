import { Component } from "react";
import { withRouter } from "react-router-dom"
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {

    state = { loading: true, showModal: false };
    // constructor() {
    //     super()
    //     this.state = {loading: true, Test: 'Testing'}
    // }
    async componentDidMount() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        )

        const json = await res.json()

        this.setState(Object.assign(
            {
                loading: false
            },
            json.pets[0]
        )
        )
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });
    adopt = () => (window.location = "http://bit.ly/pet-adopt");

    render() {
        if (this.state.loading) {
            return (<h2>loading...</h2>)
        }

        const { animal, breed, city, state, description, name, images, showModal } = this.state;

        return (
            <div className="details grid gap-4 lg:grid-cols-2 ">
                <Carousel className='' images={images} />

                <div className="details_text relative flex flex-col justify-center p-10 bg-gradient-to-tr from-blue-300 to-transparent">
                    <div className="header absolute w-full top-0 lg:top-20 flex justify-around items-center">
                        <div className="title text-center bg-gradient-to-tr from-pink-300 to-transparent">
                            <h1 className="text-xl"> {name} </h1>
                            <h2> {`${animal} - ${breed} - ${city}, ${state}`}</h2>
                        </div>
                        <ThemeContext.Consumer>
                            {([theme]) => (
                                <button onClick={this.toggleModal} className="hover:opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{ backgroundColor: theme }}>Adopt {name}</button>
                            )}
                        </ThemeContext.Consumer>
                    </div>
                    <p className="mt-10 lg:mt-0">{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {name}</h1>
                                    <div className="buttons">
                                        <button onClick={this.adopt}> Yes </button>
                                        <button onClick={this.toggleModal}> NO </button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

const DetailWithRouter = withRouter(Details);
export default function DetailWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailWithRouter />
        </ErrorBoundary>
    )
};