package com.sonchau.utilities.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/about")
    public String about() {
        return "about"; // Trả về templates/about.html
    }

    @GetMapping("/blog")
    public String blog() {
        return "blog"; // Trả về templates/blog.html
    }
}