package com.nanozilaz.laundromat.Controller;
import com.nanozilaz.laundromat.Service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class Email_Controller {
    @Autowired
    private EmailSenderService emailSenderService;
@PostMapping("/send-email")
public String sendEmail(@RequestParam("file") MultipartFile file,@RequestParam("customerName") String customer,@RequestParam("customerEmail") String setTo) {

     emailSenderService.sendEmailWithAttachment(file,customer,setTo);
     return "Email sent successfully.";
}
}
