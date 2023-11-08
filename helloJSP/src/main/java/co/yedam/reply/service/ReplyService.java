package co.yedam.reply.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface ReplyService {
	// 목록 , 단건,추가 ,수정,삭제.
	public List<ReplyVO> replyList(int boardNo, int page); //목록
	public ReplyVO selectReply(int replyNo); //단건조회
	public boolean addReply(ReplyVO vo);  //등록
	public boolean updateReply(ReplyVO vo); //수정 ->댓글내용만 수정
	public boolean deleteReply(int replyNo); //삭제
	
	
	// 댓글건수
	public int getTotalCnt(int boardNo);
}
