import Select from './Select'
import { useState } from 'react'

export default {
    title: 'Components/Select',
    component: Select,
}

const countryOptions = [
    { value: 'be', label: 'Belgium' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'nl', label: 'Netherlands' },
]

export const Default = {
    render: () => {
        const [selected, setSelected] = useState('')
        return (
            <Select
                options={countryOptions}
                value={selected}
                onChange={setSelected}
                placeholder="-- Choose a country --"
            />
        )
    },
}

export const WithPreselectedValue = {
    render: () => {
        const [selected, setSelected] = useState('fr')
        return (
            <Select
                options={countryOptions}
                value={selected}
                onChange={setSelected}
            />
        )
    },
}

export const NoPlaceholder = {
    render: () => {
        const [selected, setSelected] = useState('be')
        return (
            <Select
                options={countryOptions}
                value={selected}
                onChange={setSelected}
            />
        )
    },
}

export const EmptyOptions = {
    render: () => {
        const [selected, setSelected] = useState('')
        return (
            <Select
                options={[]}
                value={selected}
                onChange={setSelected}
                placeholder="No options available"
            />
        )
    },
}