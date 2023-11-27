import React from 'react'

const Products = ({item,deleteHandler }) => {
  const {title, date, productId, price, quantity, description, colors} = item

  return (
    <>
      <tr>
        <td>{productId}</td>
        <td>{date}</td>
        <td>{title}</td>
        <td>{price}tk</td>
        <td>{quantity}</td>
        <td style={{background: colors}}></td>
        <td>{description}</td>
        <td><button onClick={() => deleteHandler(productId)}>Delete</button></td>
      </tr>
    </>
  )
}

export default Products