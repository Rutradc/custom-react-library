import './Select.css'

function Select({ options = [], value, onChange, placeholder }) {

    return (
        <>
            <select className='select' value={value} onChange={(thisSelect) => onChange(thisSelect.target.value)}>
                {placeholder && (
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} className='select-option' value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    )
}

export default Select