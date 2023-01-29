import { NavbarItem } from '@interfaces/navbar.interface';

export const NAVBAR_ITEMS: NavbarItem[] = [
    {
        name: 'Inicio',
        link: '/home',
        icon: 'bi bi-house',
    },
    {
        name: 'Peliculas',
        link: '/movies',
        icon: 'bi bi-film',
    },
    {
        name: 'Generos',
        link: '/genres',
        icon: 'bi bi-collection',
    },
    {
        name: 'Ayuda',
        link: '/help',
        icon: 'bi bi-question-square',
    },
];
