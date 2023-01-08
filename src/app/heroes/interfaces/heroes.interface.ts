export interface HeroesServer {
    usuarios: Usuario[];
    heroes:   Hero[];
}

export interface Hero {
    id?:               string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:          string;
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}

export interface Usuario {
    id:      number;
    usuario: string;
    email:   string;
}
