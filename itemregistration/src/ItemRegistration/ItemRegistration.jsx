import React, { useState,useEffect } from "react";
import "./ItemRegistration.css";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";
import swal from "sweetalert";
import AdminNavbar from "../NavBar/AdminNavbar";

export default function ItemRegistration() {
 let navigate = useNavigate();
  const [itemCode, setItemCode] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [color,setcolor]=useState("");
  const [brand,setbrand]=useState("");
  const [itemName,setitemName]=useState("");
  const [avgweight,setavgweight]=useState("");
  const [netAmount,setnetAmount]=useState("");
  const [otherCharges,setotherCharges]=useState("");
  const [description,setdescription]=useState("");
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    getAllItems();
  }, []);
  const getAllItems = async() => {
    const result = await axios.get("http://localhost:8083/api/item/get");
    setItems(result.data);
  };

  const postData = (e) => {
    
    e.preventDefault();
    console.log({})
   
    axios
      .post("http://localhost:8083/api/item/add", { itemCode,customerName,color,brand,itemName,avgweight,netAmount,otherCharges,description })
      .then((res) => console.log("posting data", res))
      .catch((err) => console.log(err));
      swal({
        title:"Success!",
        text:"Registration Successful",
        icon:"success",
        buttons:"OK!",
      })
      navigate("/",2000);
  };


// For validation of the Itemcode
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const regex = /^IN\d+$/;
    if (/^[a-zA-Z0-9]*$/.test(itemCode)) {
      for(let i=0;i<items.length;i++){
        if(items[i].itemCode===itemCode){
          setErrorMessage("ItemCode already exist");
          setItemCode("");
          return;
        }else{
          if(itemCode.match(regex)){
            setErrorMessage("");
          }else{
            setErrorMessage("Enter a valid item code starting with IN followed by numbers.");
            setItemCode("");
            return;
          } 
        }
      }
    } else {
      setItemCode("");
      setErrorMessage("Input must contain only digits and letters");
    }
  };//End itemCode validation
  // For validation of the ItemName
  const [errorMessage1, setErrorMessage1] = useState("");
  const handleChange1 = (e) => {
    const value = e.target.value.toUpperCase();
    if (/^[A-Za-z\s]*$/.test(value)) {
      setitemName(value);
      setErrorMessage1("");
    } else {
      setItemCode("");
      setErrorMessage1("Input must contain only letters");
    }
  };//End itemname validation
    // For validation of the color
   const [errorMessage3, setErrorMessage3] = useState("");
   const handleColorChange = (e) => {
     const value = e.target.value.toUpperCase();
     if (/^[A-Za-z\s]*$/.test(value)) {
       setcolor(value);
       setErrorMessage3("");
     } else {
       setcolor("");
       setErrorMessage3("Input must contain only letters");
     }
   };//End Color validation
   // For validation of the Brand
   const [errorMessage4, setErrorMessage4] = useState("");
   const handleBrandChange = (e) => {
     const value = e.target.value.toUpperCase();
     if (/^[A-Za-z\s]*$/.test(value)){
       setbrand(value);
       setErrorMessage4("");
     } else {
       setbrand("");
       setErrorMessage4("Input must contain only letters");
     }
   };//End Brand validation
// For validation of the OtherCharges
  const [errorMessage5, setErrorMessage5] = useState("");
  const handleOtherChargeChange= (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setotherCharges(value);
      setErrorMessage5("");
    } else {
      setotherCharges("");
      setErrorMessage5("Input must contain only digits");
    }
  };//End OtherCharge validation
  // For validation of the AvgWeight
  const [errorMessage6, setErrorMessage6] = useState("");
  const handleAvgWeightChange= (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setavgweight(value);
      setErrorMessage6("");
    } else {
      setavgweight("");
      setErrorMessage6("Input must contain only digits");
    }
  };//End AvgWeight validation
   // For validation of the Customer
   const [errorMessage7, setErrorMessage7] = useState("");
   const handleCustomerChange = (e) => {
     const value = e.target.value.toUpperCase();
     if (/^[A-Za-z\s]*$/.test(value)) {
       setcustomerName(value);
       setErrorMessage7("");
     } else {
       setcustomerName("");
       setErrorMessage7("Input must contain only letters");
     }
   };//End Customer validation
    // For validation of the NetAmount
  const [errorMessage8, setErrorMessage8] = useState("");
  const handleNetAmountChange= (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setnetAmount(value);
      setErrorMessage8("");
    } else {
      setnetAmount("");
      setErrorMessage8("Input must contain only digits");
    }
  };//End NetAmount validation

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
    <AdminNavbar/>
    <div className="form-1">
      <form onSubmit={postData}>
        <div className="reg">
          <h2>ITEM REGISTRATION</h2>
        </div>
        <h3>ITEM DETAILS</h3>
        <hr className="hr" />
        <div className="break">
          <div className="input">
            <input
              type="text"
              name="itemcode"
              required="required"
              value={itemCode}
              onChange={(e)=>setItemCode(e.target.value.toUpperCase())}
              onBlur={handleChange}
            />
            <span>ITEM CODE</span>
            <div style={{ color: "red",fontSize:"14px" }}>{errorMessage}</div>
          </div>
          <div className="input">
            <input
              type="text"
              name="name"
              required="required"
              value={itemName}
              onChange={handleChange1}
            />
            <span style={{color:""}}>ITEM NAME</span>
            <div style={{ color: "red",fontSize:"14px" }}>{errorMessage1}</div>
          </div>
          <div className="input">
            <input
              type="text"
              name="color"
              required="required"
              value={color}
            onChange={handleColorChange}
            />
            <span>COLOR</span>
            <div style={{ color: "red",fontSize:"14px" }}>{errorMessage3}</div>
          </div>
        </div>
        <div className="break">
          <div className="input">
            <input
              type="text"
              name="brand"
              required="required"
              value={brand}
              onChange={handleBrandChange}
            />
            <span>BRAND</span>
            <div style={{ color: "red",fontSize:"14px" }}>{errorMessage4}</div>
          </div>
          <div className="input">
            <input
              type="text"
              name="name"
              required="required"
              value={otherCharges}
              onChange={handleOtherChargeChange}
            />
            <span>OTHER CHARGES</span>
            <div style={{ color: "red",fontSize:"14px" }}>{errorMessage5}</div>
          </div>
          <div className="input">
            <input
              type="text"
              name="avgweight"
              required="required"
              value={avgweight}
              onChange={handleAvgWeightChange}
             
            />
            <span>AVG.WEIGHT</span>
            <div style={{ color: "red",fontSize:"14px" }}>{errorMessage6}</div>
          </div>
        </div>
        <div className="break">
        <div className="input">
            <input
              type="text"
              name="avgweight"
              required="required"
              value={description}
              onChange={(e)=>setdescription(e.target.value.toUpperCase())}
             
            />
            <span>DESCRIPTION</span>
          </div>
          {/* <div className="input" id="Desc">
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e)=>setdescription(e.target.value.toUpperCase())}
            />
            <span>DESCRIPTION</span>
          </div> */}
        </div>
        <h3>OTHER DETAILS</h3>
        <hr className="hr" />
        <div className="break">
          <div className="input">
            <input
               type="text"
               name="customer"
               required="required"
               value={customerName}
               onChange={handleCustomerChange}
            />
            <span>CUSTOMER NAME</span>
            <div style={{ color: "red",fontSize:"14px" }}>{errorMessage7}</div>
          </div>
          <div className="input">
            <input
              type="text"
              name="netAmount"
              required="required"
              value={netAmount}
              onChange={handleNetAmountChange}
            />
            <span>NET AMOUNT</span>
            <div style={{ color: "red",fontSize:"14px" }}>{errorMessage8}</div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-outline-primary">
            SUBMIT
          </button>
          <Link className="btn btn-outline-danger mx-3" to="/">
            CANCEL
          </Link>
        </div>
      </form>
      
      
      <div className="register-bg"/>
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
    </>
  );
}
