import React, { useState, useEffect } from "react";
import "./Base.css";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../Components/Agreement/NavBar";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Base() {
  const [items, setItems] = useState([]);
  const [Id, setId] = useState(null);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [search,setSearch]=useState("");
  const [id1,setId1]=useState(null);
  const [take,setTake]=useState(false);

  const [itemCode, setItemCode] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [color,setcolor]=useState("");
  const [brand,setbrand]=useState("");
  const [itemName,setitemName]=useState("");
  const [avgweight,setavgweight]=useState("");
  const [netAmount,setnetAmount]=useState("");
  const [otherCharges,setotherCharges]=useState("");
  const [description,setdescription]=useState("");
  const[show,setShow]=useState(false);



  const openEditDialog = (id) => {
    setIsFormDialogOpen(true);
    setId(id);
  };

  const searchValue = (id1) => {
    setTake(true);
    setId1(id1);
    //console.log("This is id "+id1);
    getItems(id1);
  };
  const getItems=async (itemcode) => {
    try {
      const id1=itemcode;
      console.log("This is id "+id1);
      const result = await axios.get("http://localhost:8083/api/agreement/get");
      const itemData = result.data;
      setItemCode(itemData.itemCode);
      setcustomerName(itemData.customerName);
      setitemName(itemData.itemName);
      setcolor(itemData.color);
      setbrand(itemData.brand);
      setnetAmount(itemData.netAmount);
      setavgweight(itemData.avgweight);
      setotherCharges(itemData.otherCharges);
      setdescription(itemData.description);
    } catch (error) {
      toast.error('Item not exist !');
      console.error('Error fetching data:', error);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }
  const refresh=()=>{
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  useEffect(() => {
    getAllItems();
  }, []);
  const getAllItems = async () => {
    const result = await axios.get("http://localhost:8083/api/agreement/get");
    setItems(result.data);
  };

  const handleSearch = () => {
    const filteredItems = items.filter(
      (item) =>
        item.agreementId.toLowerCase().includes(search.toLowerCase()) ||
        item.customerName.toLowerCase().includes(search.toLowerCase())
    );
    setShow(true);
    setItems(filteredItems);
  };
 
  const deleteItems = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:8083/api/agreement/delete/${id}`);
        getAllItems();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };
  
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
    <Navbar/>
    <div className="table-container">
      <div className="shadow" style={{border:"3px solid black"}}>
        <div className="container">
          <h4 className="firsttext">DataTable</h4>
        </div>
        <div className="search1">
          {/* <input type="text" placeholder="Search Item" style={{borderRadius:"5px",border:"3px solid blue"}} /> */}
          <input class="form-control mr-sm-2" type="search" placeholder="Search Item" aria-label="Search" value={search} onChange={(e) =>setSearch(e.target.value.toUpperCase())}/>
          <button type="button" class="btn btn-primary" onClick={handleSearch}>SEARCH</button>
          <Link type="button" class="btn btn-primary" style={{width:"179px",height:"38px"}} to="/agreement">ADD NEW</Link>
        </div>
        <table
          className="table border"
          style={{ maxWidth: "800px", maxHeight: "500px", overflow: "auto" }}
        >
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th scope="col">AGREEMENT_ID</th>
              <th scope="col">CUS.NAME</th>

              <th scope="col">DELIVARY_BY</th>
              <th scope="col">COLLECT_BY</th>
              <th scope="col">COUNT_BY</th>
              <th scope="col">INVOICE_CREATE</th>
              <th scope="col">INVOICE_PERIOD</th>
              <th scope="col">START_DATE</th>
              <th scope="col"style={{paddingRight:"19px"}}>END_DATE</th>
              <th scope="col">ACTION</th>
            </tr>

          </thead>
          {take ? (<tbody>
                <tr>
                  <th scope="row">{1}</th>
                  <td>{itemCode}</td>
                  <td>{customerName}</td>
                  <td>{itemName}</td>
                  <td>{netAmount}</td>
                  <td>{color}</td>
                  <td>{brand}</td>
                  <td>{avgweight}</td>
                  <td>{otherCharges}</td>
                  <td>{description}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary mx-2"
                      onClick={() => openEditDialog(itemCode)}
                    >
                      EDIT
                    </button>

                    <button
                      className="btn btn-outline-danger mx-2"
                      onClick={() => deleteItems(itemCode)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
          </tbody>):(<tbody>
            {items.map((item, index) => (
              <>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.agreementId}</td>
                  <td>{item.customerName}</td>
          
                  <td>{item.deliveryBy}</td>
                  <td>{item.collectBy}</td>
                  <td>{item.countBy}</td>
                  <td>{item.invoiceCreate}</td>
                  <td>{item.invoicePeriod}</td>
                  <td>{item.date}</td>
                  <td>{item.endDate}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger mx-2"
                      onClick={() => deleteItems(item.agreementId)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>)}
        </table>
        {show ? (<Link type="button" class="btn btn-primary" style={{width:"179px",height:"38px"}} to="/" onClick={refresh}>BACK </Link> ):("")}
      </div>
    </div>
    <div className="register-bg">
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
             
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
              
    </div>
    <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
    <ToastContainer position="top-center" />
    </>
  );
}
