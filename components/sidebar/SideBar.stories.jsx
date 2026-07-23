import SideBar from './SideBar'

export default {
    title: 'Components/SideBar',
    component: SideBar,
}

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
]

export const Default = {
    args: {
        links: navLinks,
    },
}

export const NoLinks = {
    args: {
        links: [],
    },
}