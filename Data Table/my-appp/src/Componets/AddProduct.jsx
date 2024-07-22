// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// const AddProduct = () => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:8000/products', { name, price, description });
//     history.push('/');
//   };

//   return (
//     <div>
//       <h1>Add Product</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Price</label>
//           <input
//             type="number"
//             className="form-control"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             className="form-control"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Add</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
