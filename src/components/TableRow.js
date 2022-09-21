import React from 'react';
import TableAction from './TableAction';

const TableRow = (props) =>{
    // Using an if check
    if (!props) 
    {
        return null;
    }

    return(
        <tbody>
            {props.student.map(stud => 
            <tr key={stud.id}>
                <td>{stud.id}</td>
                <td>{stud.firstName}</td>
                <td>{stud.lastName}</td>
                <td>{stud.age}</td>
                <td><TableAction studentProps={stud}></TableAction></td>{}
            </tr>)}
        </tbody>
    );
}

export default TableRow;