import './Table.css'
import { useState } from 'react'

export default function Table({ 
    items = [],
    columns = items.length <= 0 ? null : Object.keys(items[0]),
    rowsPerPage = 10
 }) {
    const [page, setPage] = useState(1);

    const maxPage = Math.max(1, Math.ceil(items.length / rowsPerPage));

    const itemsShown = items.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );

    const firstItem = (page - 1) * rowsPerPage + 1;
    const lastItem = Math.min(page * rowsPerPage, items.length);

    if (items.length === 0) {
        return (
            <div className="table-empty">
                <p>Empty table</p>
            </div>
        );
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {columns.map(key => (
                            <th key={key}>{key.charAt(0).toUpperCase() + key.substring(1)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {itemsShown.map((item, index) => (
                        <tr key={index}>
                            {columns.map(key => (
                                <td key={`${index}-${key}`}>
                                    {String(item[key])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {items.length > 0 && (
                <div className="pagination">
                    <span className="items-info">
                        {firstItem}–{lastItem} of {items.length} items
                    </span>

                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                    >
                        ← Précédent
                    </button>

                    <span className="page-info">
                        Page {page} / {maxPage}
                    </span>

                    <button
                        onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
                        disabled={page === maxPage}
                    >
                        Suivant →
                    </button>
                </div>
            )}
        </>
    )
}