import { heroes } from "../data/heroes";

export const getheroesByName = (name = '') => {

    const filtredName = name.toLowerCase().trim();

    if (name.length === 0) return [];

    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes( filtredName )
    )
};