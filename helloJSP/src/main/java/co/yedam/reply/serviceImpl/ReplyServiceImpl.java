package co.yedam.reply.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSourceMybatis;
import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;

public class ReplyServiceImpl implements ReplyService{
	
	SqlSession session = DataSourceMybatis.getInstance().openSession(true);
	
	ReplyMapper mapper = session.getMapper(ReplyMapper.class);

	@Override
	public List<ReplyVO> replyList(int boardNo, int page) {
		return mapper.replyList(boardNo, page);
	}

	@Override
	public ReplyVO selectReply(int replyNo) {
		return mapper.selectReply(replyNo);
	}

	@Override
	public boolean addReply(ReplyVO vo) {
		return mapper.insertReply(vo);
	}

	@Override
	public boolean updateReply(ReplyVO vo) {
		return mapper.updateReply(vo);
	}

	@Override
	public boolean deleteReply(int replyNo) {
		return mapper.deleteReply(replyNo);
	}
	
	@Override
	public int getTotalCnt(int boardNo) {
		return mapper.getTotalCnt(boardNo);
	}
}
