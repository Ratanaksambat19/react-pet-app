import Pet from "./Pet";

const Results = ({ pets }) => {
    console.log(pets)
    return (
        <div className='search grid gap-4 grid-cols-2 lg:grid-cols-4'>
            {!pets.length ? (
                <div>
                    No animal found
                </div>) : (
                pets.map((pet) => (
                    <Pet
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        key={pet.id}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />
                )))
            }
        </div>
    )
}

export default Results