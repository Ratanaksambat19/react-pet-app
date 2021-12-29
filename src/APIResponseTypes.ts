export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface Pet {
    breed: string;
    id: number;
    name: string;
    animal: Animal;
    description: string;
    images: string[];
    city: string;
    state: string;
}

export interface PetAPIResponse {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets: Pet[];
}

export interface BreedListAPIResponse {
    animal: Animal;
    breeds: string[];
}