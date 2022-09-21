import React, { useState } from 'react';
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const DateTable = () => 
{
    const[studentList] = useState([{id: 0, firstName: "", lastName: "", age: 0, birthDate: "", country: "", city: ""},
    {id:20, firstName:'2', lastName:'2', age:20, birthday:'', country:'', city:''}]);

    return (
        <div>
            <table className='table table-dark' border="1">
                <TableHeader/>
                <TableRow student={studentList}/>
            </table>
        </div>
    );
};

export default DateTable;