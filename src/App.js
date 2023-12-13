import React, { useState }  from 'react';
import Table  from 'react-boostrap/Table';
import Container from 'react-boostrap/Container';
import InputGroup from 'react-boostrap/InputGroup';
import 'boostrap/dist/css/boostrap.min.css';
import {data} from './data.js'

function App(){
   const [search,setSearch]=useState('')
   console.log(search)

    return (
        <div className='App'>
            <Container>
                <Form>
                    <InputGroup className='my-3'>
                        <Form.Control 
                        onchange={(e) => setSearch(e.target.value )} 
                        placeholder='Search'/>
                        </InputGroup>
                </Form>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                     {data.filter((item) => {
                        return search.toLowerCase()===''? item : item.Date.
                        toLowerCase().includes(search);


                     })
                     .map((items) => (

                       <><tr key={items.id}>
                             <td>{items.Date}September 25</td>
                             <td>{items.Description}Email Corresponding</td>
                             <td>{items.Status}Project</td>

                         </tr><tr>
                                 <td>{items.Date}September 26</td>
                                 <td>{items.Description}Data Entry</td>
                                 <td>{items.Status}Meeting</td>

                             </tr><tr>
                                 <td>{items.Date}September 27</td>
                                 <td>{items.Description}Project Launch</td>
                                 <td>{items.Status}Task</td>

                             </tr></>



                     ))
                     }

                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
export default App;


