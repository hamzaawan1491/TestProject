import React, { useEffect, FC, useState } from 'react';
import 'styles/LoadResult.css';

// query method
import { useQuery } from '@apollo/client';

// GQL query
import { GET_CHARACTERS } from 'services/query';

// custom components imports
import { Loading } from 'components/Loading/Loading';
import { Error } from 'components/Error/Error';
import { Table } from 'components/Table/Table';

// interface declaration
import { ILoadResult, IList, IObjectItem } from 'shared/interfaces';

// render function
export const LoadResult: FC<ILoadResult> = () => {

    const [dataList, setDataList] = useState<IList[]>([]);

    const headers: string[] = ["Name", "Gender", "Status"];
    const rowData: IObjectItem[] = [
        {
            name: 'Name',
            value: "name"
        },
        {
            name: 'Gender',
            value: "gender"
        },
        {
            name: 'Status',
            value: "status"
        }
    ];

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { page: 10 }
    });

    useEffect(() => {
        setDataList(data?.characters?.results);
    }, [data]);

    if (loading) { return <Loading flag={loading} />; }
    if (error) { return <Error error={error} />; }

    return (

        <div className='load-result' id="load-result">
            <Table
                headers={headers}
                rows={dataList}
                maxRecordsPerView={10}
                rowValues={rowData}
            />
        </div>

    );

}