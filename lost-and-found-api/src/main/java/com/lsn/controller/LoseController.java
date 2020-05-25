package com.lsn.controller;

import com.lsn.dao.LoseMapper;
import com.lsn.dto.Found;
import com.lsn.dto.Lose;
import com.lsn.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * 关于招领的模块
 */
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping(value = "lose")
public class LoseController {
    @Autowired
    LoseMapper loseMapper;

    /**
     * 新增招领信息功能
     * @param lose 招领信息
     */
    @RequestMapping("/publish")
    public void publish(@RequestBody Lose lose) {
        System.out.println("新增招领信息功能");
        lose.setCreateTime(new Date());
        loseMapper.addLose(lose);
        System.out.println("新增成功");
    }

    /**
     * 返回部分招领信息列表
     * @return 返回部分招领信息列表
     */
    @RequestMapping("/list")
    public Result<List<Lose>> list() {
        System.out.println("返回部分招领信息列表");
        List<Lose> list = loseMapper.loseList();
        return Result.success(list);
    }

    /**
     * 返回所有招领信息列表（点击加载更多按钮）
     * @return 返回所有招领信息列表
     */
    @RequestMapping("/listAll")
    public Result<List<Lose>> listAll() {
        System.out.println("返回所有招领信息列表");
        List<Lose> list = loseMapper.loseListAll();
        return Result.success(list);
    }

    /**
     * 我发布的招领信息列表
     * @param userNumber 用户账号
     * @return  我发布的招领信息列表
     */
    @RequestMapping("/myList")
    public Result<List<Lose>> myList(@RequestParam("userNumber") String userNumber) {
        System.out.println(userNumber);
        System.out.println("我发布的招领信息列表");
        List<Lose> myFoundList = loseMapper.myList(userNumber);
        System.out.println(myFoundList);
        return Result.success(myFoundList);
    }

    /**
     * 关闭、完成寻物信息
     * @param id 所选择地寻物信息id
     */
    @RequestMapping("/close")
    public void close(@RequestParam("id") int id) {
        System.out.println("关闭、删除、完成寻物信息");
        loseMapper.close(id);
    }


    /**
     * 查询未审核的招领信息
     */
    @RequestMapping("/noCheck")
    public Result<List<Lose>> noCheck() {
        System.out.println("查询未审核的招领信息");
        List<Lose> list = loseMapper.noCheck();
        return Result.success(list);
    }

    /**
     * 查询已通过的招领信息
     */
    @RequestMapping("/alreadyCheck")
    public Result<List<Lose>> alreadyCheck() {
        System.out.println("查询已通过的招领信息");
        List<Lose> list = loseMapper.alreadyCheck();
        return Result.success(list);
    }
    /**
     * 查询未通过的招领信息
     */
    @RequestMapping("/noPassCheck")
    public Result<List<Lose>> noPassCheck() {
        System.out.println("查询未通过的招领信息");
        List<Lose> list = loseMapper.noPassCheck();
        return Result.success(list);
    }

    /**
     * 将寻物信息设置为通过
     * @param id 寻物信息id
     */
    @RequestMapping("/pass")
    public void pass(@RequestParam("id") int id) {
        System.out.println("将招领信息设置为通过");
        loseMapper.pass(id);
    }

    /**
     * 将寻物信息设置为未通过
     * @param id 寻物信息id
     */
    @RequestMapping("/noPass")
    public void noPass(@RequestParam("id") int id) {
        System.out.println("将招领信息设置为未通过");
        loseMapper.noPass(id);
    }
}
