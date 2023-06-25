import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import logo from "../Images/logo.png";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";
import swal from "sweetalert";

import axios from "axios";

export default function AgreementTemplate(props) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    {
      props.Dialog(false);
    }
  };

  const GeneratePdf = async () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("Agreement.pdf");
      },
      x:
        doc.internal.pageSize.width / 2 -
        document.querySelector("#content").offsetWidth / 2,
    });
  };

  const handleSubmit = async () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        const formData = new FormData();
        formData.append("file", pdf.output("blob"), "Agreement.pdf");
        formData.append("customerName", props.Data.customerName);
        formData.append("customerEmail", props.Data.customeremail);

        if (props.Data.customeremail == ""||props.Data.customerName==""||props.Data.agreementId=="") {
          toast.error("Please fill Email field");
          setTimeout(() => {
            window.location.reload();
          }, 2500);
          return;
        } else {
          axios
            .post("http://localhost:8083/api/send-email", formData)
            .then((response) => {
              console.log("PDF sent to backend successfully.");
              console.log("Backend response:", response.data);
              swal({
                title: "Success!",
                text: " Email Sent Succesfully",
                icon: "success",
                buttons: "OK!",
              });
              setTimeout(() => {
                window.location.reload();
              }, 2000);
              console.log("PDF sent to backend successfully.");
              console.log("Backend response:", response.data);
            })
            .catch((error) => {
              console.error("Error sending PDF to backend:", error);
            });
        }
      },
      x:
        doc.internal.pageSize.width / 2 -
        document.querySelector("#content").offsetWidth / 2,
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent style={{ textAlign: "center" }}>
          <div id="content" style={{ textAlign: "center", marginLeft: "20px" }}>
            <Paper sx={{ width: "100%", height: "100%" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "20vh", marginTop: "15p", marginLeft: "15px" }}
              />
              <Box sx={{ p: 2 }}>
                <Grid container>
                  {/* Header */}
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <h2>SERVISE&ensp; AGREEMENT</h2>
                  </Grid>
                  {/* End of the Header */}
                  {/* Body */}
                  <section>
                    <h5 style={{ textDecoration: "underline" }}>PARTIES</h5>
                    <p>
                      This Service Agreement is entered into on {props.Data.date} by
                      between Laundromat and {props.Data.customerName}.
                    </p>
                    <div>
                      <h5 style={{ textDecoration: "underline" }}>
                        LIST&nbsp; OF&nbsp; AGREEMENT
                      </h5>
                      <p>
                        During the period of this Agreement, the Service
                        Provider shall have the responsibility to perform and
                        provide the following services under Agreement ID =
                        {props.Data.agreementId}
                      </p>
                      <ul style={{ textAlign: "start" }}>
                        <li>
                          PROVIDE&nbsp; VEHICLE&nbsp; WHEN&nbsp; ITEM&nbsp;
                          COLLECTING&nbsp; BY :
                          <strong>{props.Data.collectBy}</strong>
                        </li>
                        <li>
                          PROVIDE&nbsp; VEHIVLE&nbsp; WHEN&nbsp; ITEM&nbsp;
                          DELIVARING&nbsp; BY :
                          <strong>{props.Data.deliveryBy}</strong>
                        </li>
                        <li>
                          ITEM COUNTING&nbsp; BY :{" "}
                          <strong>{props.Data.countBy}</strong>
                        </li>
                        <li>
                          INVOICE&nbsp; CREATE&nbsp; WHEN&nbsp; ITEMS :
                          <strong> {props.Data.invoiceCreate}</strong>
                        </li>
                        <li>
                          INVOICE&nbsp; PERIOD&nbsp; IS :
                          <strong>{props.Data.invoicePeriod}</strong>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5
                        style={{
                          textDecoration: "underline",
                          marginTop: "10px",
                        }}
                      >
                        TERMS&ensp; OF&ensp; AGREEMENTS
                      </h5>
                      <p>
                        This Agreement shall be effective on the date of signing
                        this Agreement and will end on {props.Data.endDate}.
                      </p>
                      <p style={{ color: "red", marginTop: "-10px" }}>
                        At the end of the term of the Agreement, it will not be
                        automatically renewed for a new term.
                      </p>
                    </div>
                    <div>
                      <h5 style={{ textDecoration: "underline" }}>
                        {" "}
                        TERMINATION
                      </h5>
                      <p>
                        This Agreement may be terminated in the event that any
                        of the following occurs :
                      </p>
                      <ol>
                        <li style={{ paddingBottom: "15px" }}>
                          Immediately in the event that one of the Parties
                          breaches this Agreement.
                        </li>
                        <li style={{ paddingBottom: "15px" }}>
                          At any given time by providing written notice to the
                          other party 15 days prior to terminating the
                          Agreement.
                        </li>
                        <li style={{ paddingBottom: "15px" }}>
                          Customer fails to comply with the terms and conditions
                          of the Service Provider.
                        </li>
                      </ol>
                    </div>
                    <div>
                      <h5 style={{ textDecoration: "underline" }}>
                        ENTIRE&ensp; AGREEMENT
                      </h5>
                      <p>
                        This Agreement contains the entire agreement and
                        understanding among the Parties to it with respect to
                        its subject matter, and supersedes all prior agreements,
                        understandings, inducements and conditions, express or
                        implied, oral or written, of any nature whatsoever with
                        respect to its subject matter. The express terms of the
                        Agreement control and supersede any course of
                        performance and/or usage of the trade inconsistent with
                        any of its terms.
                      </p>
                    </div>
                    <div style={{ display: "flex", marginTop: "40px" }}>
                      <div style={{ marginRight: "20vh" }}>
                        <h6>
                          SERVICE&ensp; PROVIDER<br></br> LAUNDROMAT
                        </h6>
                        <p>SIGNATURE</p>
                        <p>DATE</p>
                      </div>
                      <div style={{}}>
                        <h6>
                          SERVICE&ensp; PROVIDER<br></br>
                          {props.Data.customerName}
                        </h6>
                        <p>SIGNATURE</p>
                        <p>DATE</p>
                      </div>
                    </div>
                  </section>
                </Grid>
              </Box>
            </Paper>
          </div>
        </DialogContent>
        <DialogActions sx={{ pr: "24px", pb: "16px" }}>
          <Button
            value="update"
            variant="contained"
            onClick={handleSubmit}
            endIcon={<SendIcon />}
          >
            SEND EMAIL
          </Button>
          <Button
            value="update"
            variant="contained"
            onClick={GeneratePdf}
            endIcon={<ArrowCircleDownIcon />}
            type="primary"
          >
            DOWNLOAD
          </Button>
          <Button value="update" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
