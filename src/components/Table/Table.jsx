import './Table.css'
import { useState, useMemo } from 'react'

export default function Table({ 
    items = [],
    columns = items.length <= 0 ? null : Object.keys(items[0]),
    rowsPerPage = 10
}) {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [sorting, setSorting] = useState({column: '', desc: true});

    const itemsComputed = useMemo(() => {
        let result = items;

        if (filter) {
            result = result.filter((item) =>
                columns.some((column) =>
                    String(item[column])
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                )
            );
        }

        if (sorting?.column) {
            result = [...result].sort((a, b) => {
                const aValue = a[sorting.column];
                const bValue = b[sorting.column];

                // Gestion des nombres
                if (!isNaN(aValue) && !isNaN(bValue)) {
                    return sorting.desc
                        ? bValue - aValue
                        : aValue - bValue;
                }

                // Gestion des chaînes
                return sorting.desc
                    ? String(bValue).localeCompare(String(aValue))
                    : String(aValue).localeCompare(String(bValue));
            });
        }

        return result;
    }, [items, columns, filter, sorting]);

    const maxPage = Math.max(1, Math.ceil(itemsComputed.length / rowsPerPage));

    const itemsShown = itemsComputed.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );

    const firstItem = itemsComputed.length === 0 ? 0 : (page - 1) * rowsPerPage + 1;
    const lastItem = Math.min(page * rowsPerPage, itemsComputed.length);

    const handleSort = (column) => {
        if (sorting.column === column && sorting.desc){
            setSorting((current) => ({
                column: '',
                desc: true
            }));
        }
        else {
            setSorting((current) => ({
                column,
                desc: current.column === column ? !current.desc : false
            }));
        }

        setPage(1);
    };

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
            <caption>
                <input
                    className="table-filter"
                    type="text"
                    placeholder="Search..."
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                        setPage(1);
                    }}
                />
            </caption>
                <thead>
                    <tr>
                        {columns.map(key => (
                            <th key={key}>
                                <button
                                    className="sort-button"
                                    onClick={() => handleSort(key)}
                                >
                                    {key.charAt(0).toUpperCase() + key.substring(1)}

                                    <span className="sort-icon">
                                        {sorting.column === key
                                        ? sorting.desc ? "▼" : "▲"
                                        : "↕"}
                                    </span>
                                </button>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {itemsComputed.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="empty-table">
                                No results
                            </td>
                        </tr>
                    ) : (
                        itemsShown.map((item, index) => (
                            <tr key={index}>
                                {columns.map(key => (
                                    <td key={`${index}-${key}`}>
                                        {String(item[key])}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <div className="pagination">
                <span className="items-info">
                    {firstItem}–{lastItem} of {itemsComputed.length} items
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
        </>
    );
}