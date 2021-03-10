package com.github.alinux78.planningpoker;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller                        
public class HelloController {

  @GetMapping("/")                 
  public String home() {
    return "hello";                 
  }

}