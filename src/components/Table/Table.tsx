import React, { useState, FC } from 'react';
import 'styles/Table.css';

// components imports
import { Modal } from 'components/Modal/Modal';
import { TableRow } from 'components/TableRow/TableRow';

// interface declaration
import { IList, ITable } from 'shared/interfaces';

export const Table:FC<ITable> = (props) => {

    const { headers, rows, maxRecordsPerView, rowValues } = props;

    const [pageNo, setPageNo] = useState<number>(1);
    const [bracket, setBracket] = useState<{ lower: number; heigher: number; }>({
        lower: 0,
        heigher: maxRecordsPerView
    });
    const [selectedRow, setSelectedRow] = useState<IList | undefined>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    const nextPage = (): void => {
        setBracket({
            lower: bracket.heigher,
            heigher: bracket.heigher + maxRecordsPerView
        });
        setPageNo(pageNo + 1);
    };

    const PreviousPage = (): void => {
        setBracket({
            lower: bracket.lower - maxRecordsPerView,
            heigher: bracket.lower
        });
        setPageNo(pageNo - 1);
    };

    return (
        <div style={{ width: "100%" }}>

            {
                (selectedRow && isModalOpen) &&
                <Modal
                    onClose={() => { setIsModalOpen(false); setSelectedRow(undefined); }}
                >
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {
                            Object.entries(selectedRow).map(([key, value], i) => {
                                return i > 0 && (
                                    <div style={{ width: "300px", display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                                        <span style={{ fontWeight: "bold", textTransform: 'capitalize' }}>{key}</span>
                                        <span>{`${value ? value : '- - - - -'}`}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Modal>
            }

            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        { headers?.map((header: string, index: number) => (
                            <th
                                style={{ width: `${100 / headers.length}%`, textAlign: "left", color: 'white' }}
                                key={index}
                            >
                                {header}
                            </th>
                        )) }
                    </tr>
                </thead>
                <tbody>
                    { rows?.length ? rows.map((row: IList, rowIndex: number) => (
                            <tr className='tr-row' key={rowIndex} onClick={() => {
                                    setSelectedRow(row); 
                                    setIsModalOpen(true);
                                }}
                            >
                                { (rowIndex >= bracket.lower && rowIndex < bracket.heigher) &&                                 
                                    <TableRow list={row} rowValues={rowValues} /> 
                                }
                            </tr>
                        )) : null 
                    }
                </tbody>
            </table >

            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                {

                    <span style={{
                        marginRight: "20px", fontWeight: "600", fontSize: "23px",
                        cursor: pageNo !== 1 ? "pointer" : "not-allowed",
                        color: pageNo !== 1 ? "green" : "lightgray"
                    }}
                        onClick={() => pageNo !== 1 && PreviousPage()}
                    >
                        {"<"}
                    </span>
                }

                <span>{pageNo}</span>

                {
                    <span style={{
                        marginLeft: "20px", fontWeight: "600", fontSize: "23px",
                        cursor: rows?.length > bracket.heigher ? "pointer" : "not-allowed",
                        color: rows?.length > bracket.heigher ? "green" : "lightgray"
                    }}
                        onClick={() => rows?.length > bracket.heigher && nextPage()}
                    >
                        {">"}
                    </span>
                }

            </div>
        </div>
    )
};