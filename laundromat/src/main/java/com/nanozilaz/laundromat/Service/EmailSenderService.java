package com.nanozilaz.laundromat.Service;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;


@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender javaMailSender;

    public String sendEmailWithAttachment(MultipartFile file,String customer,String setTo){
        try{
            MimeMessage message=javaMailSender.createMimeMessage();
            MimeMessageHelper messageHelper=new MimeMessageHelper(message,true);
            messageHelper.setTo(setTo);
            messageHelper.setFrom("tharukshamadusanka853@gmail.com");
            messageHelper.setSubject("Agreement for your review and signature");
            messageHelper.setText("Dear"+" "+customer+" "+"I hope this email finds you well. We are pleased to share with you the Agreement for your review and signature. Attached to this email" +
                    "\n" +
                    "We have carefully prepared this agreement to outline the terms and conditions, ensuring transparency and clarity in our business relationship. Please take the time to thoroughly review the document");
            messageHelper.addAttachment(file.getOriginalFilename(),file);
            javaMailSender.send(message);
            return "Mail Sent Success!";
        }catch (Exception e){
        return "Mail Sent Failed!";
        }
    }
}
