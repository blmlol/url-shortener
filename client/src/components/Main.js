import React from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import shortid from 'shortid';
import { useState } from 'react';

function Main() {
    const shortid = require('shortid');
    const { register, handleSubmit, errors } = useForm();
    const [fullShort, setFullShort] = useState([]);
   





    const onSubmit = data => {

          setFullShort(fullShort => [...fullShort, {full: data.full, short: shortid.generate()}]);
        
    };
      console.log(fullShort);
    






    return (


        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="url" placeholder="URL Here" name="full" ref={register} />

                <input type="submit" />
            </form>

            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Full URL</th>
                        <th>Shortened URL</th>

                    </tr>
                </thead>
                <tbody>



                    {
                        fullShort.map((x) => (
                            <tr>

                                <td>
                                    <a href={x.full} target='_blank'> {x.full} </a>
                                </td>

                                <td>
                                    <a href={x.full} target='_blank'> {x.short} </a>
                                </td>
                            </tr>


                        ))
                    }
                    



                </tbody>
            </Table>


        </div>
    );
}

export default Main;