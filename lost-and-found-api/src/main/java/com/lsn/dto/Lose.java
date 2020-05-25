package com.lsn.dto;

import lombok.Data;

import java.util.Date;
/**
 * 存储招领信息的对象，作为数据流转介质：可存储前台传入的招领信息、数据库招领信息
 */
@Data
public class Lose {
    int id;
    String title;
    String keyWord;
    String des;
    String userName;
    String concat;
    String userNumber;
    Date createTime;
    int status;
    int checkNumber;
}
