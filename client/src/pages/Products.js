import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    getProducts()
  },[])

  const normalizeData = (data)=>{
	  let	ids = data.map( t => t.seller_id)
    let uniqueIds = [... new Set(ids)]

		let normalizedData = uniqueIds.map( id =>{
		let products =  data.filter( d=> d.seller_id === id)
		let filterProducts = products.map(p=>{
      return {key: p.id, price: p.price, description: p.description}
		})
    return {
      name:  products[0].seller_name,
      email:  products[0].email,
      products: filterProducts
      
			}
		})
	return normalizedData
	}

  const getProducts = async () => {
    try{
      let data = await axios.get('/api/products')
      let normalizedData = normalizeData(data.data)
      setProducts(normalizedData)
    } catch(err){
      alert("Error Occured getting products")
    }
  }

  const renderTable = (products) => {
    let sellersTable = products.map(m=>{
      return(
        <table class="table caption-top table-striped">
        <caption>{m.name} ({m.email})</caption>
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableRows(m.products)}
        </tbody>
      </table>
      )
    })
    return sellersTable
  }
  
  const tableRows = (data) => {
    let tableRow = data.map(d=>{
      return(
        <tr>
            <th scope="row">{d.key}</th>
            <td>{d.description}</td>
            <td>{d.price}</td>
        </tr>
      )
    })
    return tableRow
  }

  return (
    <div>
      <h1>Products Page</h1>
      <br />
      {renderTable(products)}
    </div>
  )
}

export default Products;