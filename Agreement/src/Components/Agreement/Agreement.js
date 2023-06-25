import "../CSS/Agreement.css";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { FormLabel,TextField} from "@mui/material";
import { Box } from "@mui/system";
import swal from "sweetalert";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AgreementTemplate from "./AgreementTemplate";
import { set } from "date-fns";
import Navbar from "./NavBar";
import { Link } from "react-router-dom";

export default function Agreement() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
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
  const [customerName, setCustomerName] = useState("");
  const [agreementId, setAgreementId] = useState("");
  const [deliveryBy, setdeliveryBy] = useState("");
  const [collectBy, setcollectBy] = useState("");
  const [countBy, setcountBy] = useState("");
  const [invoiceCreate, setinvoiceCreate] = useState("");
  const [invoicePeriod, setinvoicePeriod] = useState("");
  const [templateOpen, setTemplateOn] = useState(false);
  const [customeremail, setcustomeremail] = useState("");
  const [date,setDate]=useState("");
  const [endDate,setEndDate]=useState("");

  const [Data, setData] = useState({
    customerName: "",
    agreementId: "",
    customeremail:"",
    deliveryBy: "",
    collectBy: "",
    countBy: "",
    invoiceCreate: "",
    invoicePeriod: "",
    date:"",
    endDate:""
    
  });

  const handledeliveryByChange = (e) => {
    setdeliveryBy(e.target.value);
  };
  const handlecollectByChange = (e) => {
    setcollectBy(e.target.value);
  };
  const handlecountByChange = (e) => {
    setcountBy(e.target.value);
  };
  const handleinvoiceCreateCreate = (e) => {
    setinvoiceCreate(e.target.value);
  };
  const handleinvoicePeriod = (e) => {
    setinvoicePeriod(e.target.value);
  };
  const handleStartDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split("T")[0];
    if (selectedDate !=="") {
      setDate(selectedDate);
    }
    else {
      alert("Please select a date.");
      setDate("");
    }
  };
  const[errorDate,setErrorDate]=useState("");
  const handleEndDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split("T")[0];
    if (selectedDate !== today) {
      setEndDate(selectedDate);
      setErrorDate("");
     
    }
    else {
      setErrorDate("End date cannot be today !");
      setEndDate("");
    }
  };
  
  //update the data using spread operator
  const openEditDialog = () => {
    setData({
      ...Data,
      customerName: customerName,
      customeremail:customeremail,
      agreementId: agreementId,
      deliveryBy: deliveryBy,
      collectBy: collectBy,
      countBy: countBy,
      invoiceCreate: invoiceCreate,
      invoicePeriod: invoicePeriod,
      date:date,
      endDate:endDate
    });
    setTemplateOn(true);
  };

  const PostData = async (e) => {
    e.preventDefault();
    if (
      deliveryBy === "" ||
      collectBy === "" ||
      countBy === "" ||
      invoiceCreate === "" ||
      invoicePeriod === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    } else {
      e.preventDefault();
      console.log({
        customerName,
        agreementId,
        customeremail,
        deliveryBy,
        collectBy,
        countBy,
        invoiceCreate,
        invoicePeriod,
        date,
        endDate
      });
      try {
        await axios.post("http://localhost:8083/api/agreement/add", {
          customerName,
          agreementId,
          customeremail,
          deliveryBy,
          collectBy,
          countBy,
          invoiceCreate,
          invoicePeriod,
          date,
          endDate,
        });
        swal({
          title: "Success!",
          text: "Registration Successful",
          icon: "success",
          buttons: "OK!",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const[id,setId]=useState([]);
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const[items,setItems]=useState([]);

  function getCurrentDate(separator = '') {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
  
    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
  }
  useEffect(() => {
    checkdate();
  }, []);
  
  const checkdate = async () => {
    try {
      const result = await axios.get("http://localhost:8083/api/agreement/get");
      for (let i = 0; i < result.data.length; i++) {
        if (getCurrentDate('-') === result.data[i].endDate) {
          toast.error(result.data[i].customerName + " Agreement is ending today");
          return;
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllItems();
  }, []);
  const getAllItems=async()=>{
    const result=await axios.get("http://localhost:8083/api/agreement/get");
    setId(result.data);
  }

  //For validation of the Itemcode
  const handleIDChange = (e) => {
    const regex = /^IN\d+$/;
    if (/^[a-zA-Z0-9]*$/.test(agreementId)) {
      for(let i=0;i<id.length;i++){
        if(id[i].agreementId===agreementId){
          setError("Agreement Id is already exist");
          setAgreementId("");
          return;
        }else{
          if(agreementId.match(regex)){
            setError("");
          }else{
            setError("Enter a valid item code starting with IN followed by numbers.");
            setAgreementId("");
            return;
          } 
        }
      }
    } else {
      setError("Input must contain only digits and letters");
      setAgreementId("");
    }
  }; //End itemname validation
  // For validation of the ItemName

  const handleNameChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (/^[A-Za-z\s]+$/.test(value)) {
      for(let i=0;i<id.length;i++){
        if(id[i].customerName==value){
          setError1("This customer is already exist");
          setCustomerName("");
          return;
        }
      }
    setCustomerName(value);
    setError1("");
    } else {
      setCustomerName("");
      setError1("Input must contain only letters");
    }
  }; //End itemname validation
  //Start Customer email validation

  const handleEmailChange=()=>{
    if (/^[\w\.-]+@gmail\.com$/.test(customeremail)) {
      setError2("");
    } else {
      setError2("Enter a valid email address");
      setcustomeremail("");
    }
  }
  //End Email Validation
  return (
    <div>
      <Navbar/>
      {/* used for the toast library */}
      <ToastContainer position="top-center" />
      {templateOpen && <AgreementTemplate Dialog={setTemplateOn} Data={Data} />}
      <div className="inner">
        <div className="header">
          <h1>AGREEMENT</h1>
        </div>
        <form onSubmit={PostData}>
          <div className="devide_1">
            <div className="devide_2">
              <h3>ITEM DELIVARY AND COLLECT</h3>

              <Box>
                <FormControl style={{ margin: "10px" }}>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    style={{ color: "white" }}
                  >
                    DELIVARY BY :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={deliveryBy}
                    onChange={handledeliveryByChange}
                  >
                    <FormControlLabel
                      control={<Radio required />}
                      value="LAUNDROMAT"
                      label="LAUNDROMAT"
                      style={{ color: "white" }}
                    />
                    <FormControlLabel
                      control={<Radio required />}
                      value="CUSTOMER"
                      label="CUSTOMER"
                      style={{ color: "white" }}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>

              <Box>
                <FormControl style={{ margin: "10px" }}>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    style={{ color: "white" }}
                  >
                    COLLECT BY :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={collectBy}
                    onChange={handlecollectByChange}
                    required
                  >
                    <FormControlLabel
                      control={<Radio required />}
                      value="LAUNDROMAT"
                      label="LAUNDROMAT"
                      style={{ color: "white" }}
                    />
                    <FormControlLabel
                      control={<Radio required />}
                      value="CUSTOMER"
                      label="CUSTOMER"
                      style={{ color: "white" }}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </div>
            <div className="middle">
              <h3>ITEM COUNT WHEN COLLECTING</h3>

              <Box>
                <FormControl style={{ margin: "10px" }}>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    style={{ color: "white" }}
                  >
                    COUNT BY :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={countBy}
                    onChange={handlecountByChange}
                  >
                    <FormControlLabel
                      control={<Radio required />}
                      value="LAUNDROMAT"
                      label="LAUNDROMAT"
                      style={{ color: "white" }}
                    />
                    <FormControlLabel
                      control={<Radio required />}
                      value="CUSTOMER"
                      label="CUSTOMER"
                      style={{ color: "white" }}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </div>
            <div className="devide_4">
              <h3>INVOICE CREATE DETAILS</h3>

              <Box>
                <FormControl style={{ margin: "10px" }}>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    style={{ color: "white" }}
                  >
                    INVOICE CREATE :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={invoiceCreate}
                    onChange={handleinvoiceCreateCreate}
                  >
                    <FormControlLabel
                      control={<Radio required />}
                      value="WHEN COLLECT"
                      label="WHEN COLLECT"
                      style={{ color: "white" }}
                    />
                    <FormControlLabel
                      control={<Radio required />}
                      value="WHEN DELIVARY"
                      label="WHEN DELIVARY"
                      style={{ color: "white" }}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box>
                <FormControl style={{ margin: "10px" }}>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    style={{ color: "white" }}
                  >
                    INVOICE CREATE PERIOD :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={invoicePeriod}
                    onChange={handleinvoicePeriod}
                  >
                    <FormControlLabel
                      control={<Radio required />}
                      value="15 DAYS"
                      label="15 DAYS"
                    />
                    <FormControlLabel
                      control={<Radio required />}
                      value="30 DAYS"
                      label="30 DAYS"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"row"}}>
        
            <div className="devide_3">
              <h3> OTHER DETAILS</h3>
              <div className="details">
                <div className="input">
                  <input
                    type="text"
                    name="AgreementId"
                    required="required"
                    value={agreementId}
                    onChange={(e)=>setAgreementId(e.target.value.toUpperCase())}
                    onBlur={handleIDChange}
                  />
                  <span>AGREEMENT ID</span>
                  <div style={{ color: "red",fontSize:"13px" }}>{error}</div>
                </div>
                <div className="input">
                  <input
                    type="text"
                    name="customerName"
                    required="required"
                    value={customerName}
                    onChange={(e)=>setCustomerName(e.target.value.toUpperCase())}
                    onBlur={handleNameChange}
                  />
                  <span>CUSTOMER NAME</span>
                  <div style={{ color: "red",fontSize:"13px" }}>{error1}</div>
                </div>
                <div className="input">
                  <input
                    type="text"
                    name="CustomerEmail"
                    required="required"
                    value={customeremail}
                    onChange={(e)=>setcustomeremail(e.target.value.toLowerCase())}
                    onBlur={handleEmailChange}
                  />
                  <span>CUSTOMER EMAIL</span>
                  <div style={{ color: "red",fontSize:"13px" }}>{error2}</div>
                </div>

              </div>

            </div>
            <div className="devide_3" style={{marginLeft:"50px"}}>
              <h3> START DATE</h3>
              <div className="details">
              <div className="input">
                  <input
                    type="date"
                    name="CustomerEmail"
                    required="required"
                    value={date}
                    min={new Date().toISOString().split("T")[0]}
                    max={new Date().toISOString().split("T")[0]}
                    onChange={handleStartDateChange}
                  />
                  </div>
              </div>
              </div>
              <div className="devide_3" style={{marginLeft:"50px"}}>
              <h3> END DATE</h3>
              <div className="details">
              <div className="input">
                  <input
                    type="date"
                    name="CustomerEmail"
                    required="required"
                    value={endDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={handleEndDateChange}
                  />
                  </div>
                  <div style={{color:"red",marginTop:"-30px",fontSize:"14px"}}>{errorDate}</div>
              </div>
              </div>

          </div>
           
          
          <div className="card-footer">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => openEditDialog()}
            >
              PREVIEW
            </button>
            <button type="submit" class="btn btn-outline-primary">
              SUBMIT
            </button>
            <Link type="button" class="btn btn-outline-danger" to="/">
              CANCEL
            </Link>
          </div>
        </form>
      </div>
      <div className="register-bg" />
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
        className="square square-3"
        id="square3"
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
  );
}
