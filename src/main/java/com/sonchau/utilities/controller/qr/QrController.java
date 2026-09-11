package com.sonchau.utilities.controller.qr;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class QrController {

    // Đón request khi người dùng bấm vào "Create a QR code"
    @GetMapping("/qr-generator")
    public String qrGeneratorPage() {
        // Trả về file giao diện: src/main/resources/templates/qr/qr-generator.html
        return "qr/qr-generator"; 
    }

    // Chuẩn bị sẵn route đón request khi người dùng bấm vào "Read a QR code"
    @GetMapping("/qr-decoder")
    public String qrDecoderPage() {
        // Trả về file giao diện (bạn sẽ tạo sau): src/main/resources/templates/qr/qr-decoder.html
        return "qr/qr-decoder"; 
    }
}