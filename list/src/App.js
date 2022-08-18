import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [product,setProduct]=useState([
    {
        name:"Item1",
        id: 123456
    },
    {
        name:"Item2",
        id: 234567
    }
  ]);

  return (
    <div className="App">
       <h1>List is below</h1>
       <table>
       <tr>
          <th><h1>Product Name</h1></th>
          <th><h1>Product ID</h1></th>
       </tr> 
       {
          product.map(function(pro,index){
              return(
                  <tr>
                      <div>
                          <td><h1>{pro.name}</h1></td>
                          <td><h1>{pro.id}</h1></td>  
                      </div>
                  </tr>
              )
          })
      }
      </table>

    </div>
  );
}

export default App;




