package com.lsn.dto;

import lombok.Data;

import java.util.Date;

/**
 * 存储寻物信息的对象，作为数据流转介质：可存储前台传入的寻物信息、数据库寻物信息
 */
@Data
public class Found {
    int id;
    String title;
    String keyWord;
    String des;
    String userName;
    String concat;
    String userNumber;
    Date createTime;
    int status;
    int grade;
    int useGrade;
    int checkNumber;
}
