import './Table.css'

export default function Table({ items }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {Object.keys(items[0]).map(key => (
                            <th key={key}>{key.charAt(0).toUpperCase() + key.substring(1)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            {Object.values(item).map((value, i) => (
                                <td key={i}>{String(value)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}