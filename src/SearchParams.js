import { useState, useEffect, useContext } from "react"
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ['bird', 'reptile', 'dog', 'fish', 'cat'];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const [theme, setTheme] = useContext(ThemeContext);

    const inputTailwindClass = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets)
    }


    return (
        <div className="search-params my-0 mx-auto w-11/12">
            <form className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-start items-center divie-y divide-gray-700"
                onSubmit={e => {
                e.preventDefault()
                requestPets()
            }}>
                <label htmlFor="location"className="w-60">
                    location
                    <input
                        className={inputTailwindClass}
                        id="location"
                        value={location} placeholder="location"
                        onChange={e => setLocation(e.target.value)}
                    />
                </label>

                <label htmlFor="animal" className="w-60">
                    animal
                    <select
                        className={inputTailwindClass}
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        <option />
                        {ANIMALS.map((animal) => {
                            return (
                                <option value={animal} key={animal}>
                                    {animal}
                                </option>
                            )
                        })}
                    </select>
                </label>

                <label htmlFor="breed" className="w-60">
                    breed
                    <select
                        className={`${inputTailwindClass} disabled:opacity-50`}
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                    >
                        <option />
                        {breeds.map((breed) => {
                            return (
                                <option value={breed} key={breed}>
                                    {breed}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <label htmlFor='theme' className="w-60">
                    Theme
                    <select
                        className={inputTailwindClass}
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
                    >
                        <option value="darkblue">Dark blue</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="peru">Peru</option>
                        <option value="mediumorchid">Medium orchid</option>
                    </select>
                </label>
                <button className="mt-5 hover:opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{backgroundColor: theme}}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams