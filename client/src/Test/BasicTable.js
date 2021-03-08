import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import Mock_Data from './Mock_Data.json';
import { Columns } from './Column_Test';

export const BasicTable = () => {

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => Mock_Data, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const{
        getTableprops,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableprops()}>
            <thead>
                <tr>
                    <th>

                    </th>
                </tr>

            </thead>
            <tbody {...getTableBodyProps()}>
                <tr>
                    <td>

                    </td>
                </tr>
            </tbody>

        </table>
    )
}