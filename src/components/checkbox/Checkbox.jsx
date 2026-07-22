import './Checkbox.css'

function Checkbox({ checked, onChange, label, disabled = false }) {
    return (
        <label className={`checkbox ${disabled ? 'checkbox-disabled' : ''}`}>
            <input
                type="checkbox"
                className="checkbox-input"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />

            <span className="checkbox-box"></span>

            {label && (
                <span className="checkbox-text">
                    {label}
                </span>
            )}
        </label>
    )
}

export default Checkbox