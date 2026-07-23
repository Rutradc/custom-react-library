import Checkbox from './Checkbox'
import { useState } from 'react'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
}

export const Default = {
    render: () => {
        const [checked, setChecked] = useState(false)
        return <Checkbox checked={checked} onChange={setChecked} label="I agree to the terms" />
    },
}

export const CheckedByDefault = {
    render: () => {
        const [checked, setChecked] = useState(true)
        return <Checkbox checked={checked} onChange={setChecked} label="Already checked" />
    },
}

export const Disabled = {
    render: () => {
        const [checked, setChecked] = useState(true)
        return <Checkbox checked={false} onChange={setChecked} label="Can't touch this" disabled />
    }
}