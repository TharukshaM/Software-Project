import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import Swal from "sweetalert2";
import SendIcon from "@mui/icons-material/Send";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    {
      props.Dialog(false);
    }
  };

  const handleSubmit = () => {
    setOpen(false);
    {
      props.Dialog(false);
    }

    const item = {
      itemCode,
      customerName,
      color,
      brand,
      itemName,
      avgweight,
      netAmount,
      otherCharges,
      description,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.put(
          `http://localhost:8083/api/item/update/${props.ItemCode}`,
          item
        );
        Swal.fire("Updated!", "Your file has been Updated.", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };
  const [itemCode, setItemCode] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [color, setcolor] = useState("");
  const [brand, setbrand] = useState("");
  const [itemName, setitemName] = useState("");
  const [avgweight, setavgweight] = useState("");
  const [netAmount, setnetAmount] = useState("");
  const [otherCharges, setotherCharges] = useState("");
  const [description, setdescription] = useState("");
 

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    const result = await axios.get(
      `http://localhost:8083/api/item/get/${props.ItemCode}`
    );
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
  };
  //Validation Part
   // For validation of the ItemName
   const [errorMessage1, setErrorMessage1] = useState("");
   const [no1, setNo1] = useState(false);
   const handleNameChange= (e) => {
     const value = e.target.value.toUpperCase();
     if (/^[A-Za-z]*$/.test(value)) {
       setitemName(value);
       setErrorMessage1("");
       setNo1(false);
     } else {
        setNo1(true);
       setItemCode("");
       setErrorMessage1("Input must contain only letters");
     }
   };//End itemname validation
   const [errorMessage2, setErrorMessage2] = useState("");
   const [no2, setNo2] = useState(false);
   const handleCustomerNameChange = (e) => {
     const value = e.target.value.toUpperCase();
     if (/^[A-Za-z]*$/.test(value)) {
       setcustomerName(value);
       setErrorMessage2("");
       setNo2(false);
     } else {
        setNo2(true);
       setcustomerName("");
       setErrorMessage2("Input must contain only letters");
     }
   };//End Customer validation
    // For validation of the color
    const [errorMessage3, setErrorMessage3] = useState("");
    const [no3, setNo3] = useState(false);
    const handleColorChange = (e) => {
      const value = e.target.value.toUpperCase();
      if (/^[A-Za-z]*$/.test(value)) {
        setcolor(value);
        setErrorMessage3("");
        setNo3(false);

      } else {
        setNo3(true);
        setcolor("");
        setErrorMessage3("Input must contain only letters");
      }
    };//End Color validation
    // For validation of the Brand
   const [errorMessage4, setErrorMessage4] = useState("");
   const [no4, setNo4] = useState(false);
   const handleBrandChange = (e) => {
     const value = e.target.value.toUpperCase();
     if (/^[A-Za-z]*$/.test(value)) {
       setbrand(value);
       setErrorMessage4("");
       setNo4(false);
     } else {
        setNo4(true);
       setbrand("");
       setErrorMessage4("Input must contain only letters");
     }
   };//End Brand validation
     // For validation of the NetAmount
  const [errorMessage5, setErrorMessage5] = useState("");
  const [no5, setNo5] = useState(false);
  const handleNetAmountChange= (e) => {
    const value = e.target.value.toUpperCase();
    if (/^\d*\.?\d*$/.test(value)) {
      setnetAmount(value);
      setErrorMessage5("");
      setNo5(false);
    } else {
        setNo5(true);
      setnetAmount("");
      setErrorMessage5("Input must contain only digits");
    }
  };//End NetAmount validation
   // For validation of the AvgWeight
   const [errorMessage6, setErrorMessage6] = useState("");
   const [no6, setNo6] = useState(false);
   const handleAvgWeightChange= (e) => {
     const value = e.target.value.toUpperCase();
     if (/^\d*\.?\d*$/.test(value)) {
       setavgweight(value);
       setErrorMessage6("");
       setNo6(false);
     } else {
        setNo6(true);
       setavgweight("");
       setErrorMessage6("Input must contain only digits");
     }
   };//End AvgWeight validation
   // For validation of the OtherCharges
  const [errorMessage7, setErrorMessage7] = useState("");
  const [no7, setNo7] = useState(false);
  const handleOtherChargeChange= (e) => {
    const value = e.target.value.toUpperCase();
    if (/^\d*\.?\d*$/.test(value)) {
      setotherCharges(value);
      setErrorMessage5("");
      setNo7(false);
    } else {
        setNo7(true);
      setotherCharges("");
      setErrorMessage7("Input must contain only digits");
    }
  };//End OtherCharge validation

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>EDIT DETAILS</DialogTitle>
        <DialogContent style={{textAlign:"center"}}>
        
            <TextField
            style={{marginRight:"90px"}}
              autoFocus
              margin="dense"
              id="name"
              value={itemCode}
              disabled
              label="ITEM CODE"
              type="email"
              variant="standard"
            />
          
         {no2 ? ( <TextField
            
              error
              id="standard-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText={errorMessage2}
              variant="standard"
              onChange={handleCustomerNameChange}
            />):( <TextField
         
            autoFocus
            margin="dense"
            id="name"
            value={customerName}
            onChange={handleCustomerNameChange}
            label="CUSTOMER NAME"
            type="text"
            variant="standard"
          />)}

          {no1 ?( <TextField
            style={{marginRight:"90px"}}
              error
              id="standard-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText={errorMessage1}
              variant="standard"
              onChange={handleNameChange}
            />):(<TextField
            style={{marginRight:"90px"}}
            autoFocus
            margin="dense"
            id="name"
            value={itemName}
            onChange={handleNameChange}
            label="ITEM NAME"
            type="text"
            variant="standard"
          />
          )}

         {no3 ?(<TextField
            
              error
              id="standard-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText={errorMessage3}
              variant="standard"
              onChange={handleColorChange}
            />):( <TextField
            autoFocus
            margin="dense"
            id="name"
            value={color}
            onChange={handleColorChange}
            label="COLOR"
            type="text"
            variant="standard"
          />)}
         {no4 ? (<TextField
            style={{marginRight:"90px"}}
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText={errorMessage4}
            variant="standard"
            onChange={handleBrandChange}
          />):( <TextField
          style={{marginRight:"90px"}}
            autoFocus
            margin="dense"
            id="name"
            value={brand}
            onChange={handleBrandChange}
            label="BRAND"
            type="text"
            variant="standard"
          />)}
         {no5 ?(<TextField
            
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText={errorMessage5}
            variant="standard"
            onChange={handleNetAmountChange}
          />):( <TextField
         
            autoFocus
            margin="dense"
            id="name"
            value={netAmount}
            onChange={handleNetAmountChange}
            label="NET AMOUNT"
            type="text"
            variant="standard"
          />)}
          {no6 ?(<TextField
            style={{marginRight:"90px"}}
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText={errorMessage6}
            variant="standard"
           
            onChange={handleAvgWeightChange}
          />):(<TextField
          style={{marginRight:"90px"}}
            autoFocus
            margin="dense"
            id="name"
            value={avgweight}
            onChange={handleAvgWeightChange}
            label="AVG WEIGHT"
            type="text"
            variant="standard"
          />)}
          {no7 ?(<TextField
            
            error
            id="standard-error-helper-text"
            label="Error"
            value={otherCharges}
            helperText={errorMessage7}
            variant="standard"
           
            onChange={handleOtherChargeChange}
          />):(<TextField
            autoFocus
            margin="dense"
            id="name"
            value={otherCharges}
            onChange={handleOtherChargeChange}
            label="OTHER CHARGES"
            type="text"
            variant="standard"
          />)}
          <TextField
         style={{marginRight:"36vh"}}
            autoFocus
            margin="dense"
            id="name"
            value={description}
            onChange={(e) => setdescription(e.target.value.toUpperCase())}
            label="DESCRIPTION"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogActions sx={{pr:"24px",pb:"16px"}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            value="update"
            variant="contained"
            onClick={handleSubmit}
            endIcon={<SendIcon />}
          >
            UPDATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
