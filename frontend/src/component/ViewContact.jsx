// import React from 'react'

// export const ViewContact = () => {

//      const [orderData, setOrderData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axiosInstance
//       .get("/view-contact")
//       .then((res) => {
//         setOrderData(res.data.orderList);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <fieldset>
//         <legend>Order List</legend>

//         {/* <h2>Order List</h2> */}
//         <table border={1} width={"1200px"}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Message</th>
              
//             </tr>
//           </thead>

//           <tbody>
//             {/* {orderData.map((order, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{order._id}</td>
//                   <td>{order.orderNumber}</td>
//                   <td>{order.productName}</td>
//                   <td>{order.status}</td>
//                   <td>{order.notes}</td>
//                   <td>{order.createdAt}</td>
//                   <td>
//                     <button
//                       onClick={() =>
//                         navigate(`/factory/order/view/${order._id}`)
//                       }
//                     >
//                       View
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() =>
//                         navigate(`/factory/order/edit/${order._id}`)
//                       }
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })} */}
//           </tbody>
//         </table>
//       </fieldset>
//       <hr />
//     </div>
//   );
// }


import React from 'react'

export const ViewContact = () => {
  return (
    <div>ViewContact</div>
  )
}

