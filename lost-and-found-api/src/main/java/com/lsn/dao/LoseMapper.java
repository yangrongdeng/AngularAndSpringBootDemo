package com.lsn.dao;

import com.lsn.dto.Found;
import com.lsn.dto.Lose;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * 操作招领表lose
 */
@Mapper
public interface LoseMapper {
    /**
     * 插入招领信息
     * @param lose
     */
    @Insert("INSERT into lose (title,des,keyWord,userName,concat,userNumber,createTime) VALUES  (#{lose.title},#{lose.des},#{lose.keyWord},#{lose.userName},#{lose.concat},#{lose.userNumber},#{lose.createTime})")
    public void addLose(@Param("lose") Lose lose);

    /**
     * 查询部分招领表信息并按照时间倒序排列：未删除的即status字段=0,审核通过的即checkNumber字段！=2
     * @return
     */
    @Select("SELECT * from lose where status=0 and checkNumber!=2 ORDER BY createTime desc limit 2")
    public List<Lose> loseList();

    /**
     * 查询所有招领表信息并按照时间倒序排列：查询部分招领表信息：未删除的即status字段=0,审核通过的即checkNumber字段！=2
     * @return
     */
    @Select("SELECT * from lose where status=0  and checkNumber!=2 ORDER BY createTime desc")
    public List<Lose> loseListAll();

    /**
     * 按照用户账号查询用户已发布的招领信息并按时间倒序排列
     * @param userNumber
     */
    @Select("SELECT * from lose where userNumber=#{userNumber} ORDER BY createTime desc")
    public List<Lose> myList(@Param("userNumber")String userNumber);

    /**
     * 关闭、删除我发布失物招领信息:将记录的status字段设置为1（1:代表删除)
     * @param id 按照寻物id查询
     * @return
     */
    @Update("update lose set status=1 where id=#{id}")
    public int close(@Param("id")int  id);

    /**
     * 查询未审核的招领信息：未删除（status=0） 未审核（checkNumber=0）
     * @return
     */
    @Select("SELECT * from lose where status=0 and checkNumber=0 ORDER BY createTime desc")
    public List<Lose> noCheck();

    /**
     * 查询已审核通过的招领信息：未删除（status=0） 已审核（checkNumber=1）
     * @return
     */
    @Select("SELECT * from lose where status=0  and checkNumber=1  ORDER BY createTime desc")
    public List<Lose> alreadyCheck();

    /**
     * 查询未审核通过的招领信息：未删除（status=0） 已审核（checkNumber=2）
     * @return
     */
    @Select("SELECT * from lose where status=0  and checkNumber=2 ORDER BY createTime desc")
    public List<Lose> noPassCheck();

    /**
     * 将招领信息从未审核状态改变为已审核状态： 设置checkNumber=1
     * @return
     */
    @Update("update lose set checkNumber=1 where id=#{id}")
    public int pass(@Param("id")int  id);

    /**
     * 将招领信息从未审核状态改变为已审核状态： 设置checkNumber=2
     * @return
     */
    @Update("update lose set checkNumber=2 where id=#{id}")
    public int noPass(@Param("id")int  id);
}
