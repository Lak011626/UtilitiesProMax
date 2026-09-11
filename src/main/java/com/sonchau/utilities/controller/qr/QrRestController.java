package com.sonchau.utilities.controller.qr;

import com.sonchau.utilities.service.qr.QrService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.Map;

@RestController
public class QrRestController {

    private final QrService qrService;

    public QrRestController(QrService qrService) {
        this.qrService = qrService;
    }

    @GetMapping("/api/qr/generate")
    public ResponseEntity<byte[]> generateQrCode(@RequestParam("data") String data) {
        try {
            byte[] imageBytes = qrService.generateQrCodeImage(data, 400, 400);
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_PNG);
            return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/api/qr/decode")
    public ResponseEntity<Map<String, String>> decodeQrCode(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "Vui lòng chọn file ảnh QR!"));
        }
        try {
            String decodedText = qrService.decodeQrCodeImage(file);
            return ResponseEntity.ok(Collections.singletonMap("result", decodedText));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
                    .body(Collections.singletonMap("error", "Không tìm thấy mã QR hợp lệ trong ảnh tải lên."));
        }
    }
}