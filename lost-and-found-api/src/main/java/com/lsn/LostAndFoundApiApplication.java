package com.lsn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * 项目启动入口
 */
@SpringBootApplication
public class LostAndFoundApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(LostAndFoundApiApplication.class, args);
    }

}
