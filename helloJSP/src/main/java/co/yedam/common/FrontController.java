package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;
import co.yedam.reply.web.AddReplyControl;
import co.yedam.reply.web.RemoveReplyControl;
import co.yedam.reply.web.ReplyListControl;
//@WebServlet("/FirstServlet.do")
public class FrontController extends HttpServlet{
	
	// init -> service 
	Map<String, Command> map = new HashMap<>();
	@Override
	public void init(ServletConfig config) throws ServletException {
		//메인페이지
		map.put("/main.do", new MainControl());
		//로그인
		map.put("/loginForm.do", new LoginFormControl());
		map.put("/login.do", new LoginControl());
		map.put("/logout.do", new LogoutControl());
		
		//회원관리
		map.put("/memberList.do", new MemberListControl());
		
//		map.put("/FirstServlet.do", new FirstControl());
//		map.put("/second.do", new SecondControl());
		map.put("/boardList.do", new BoardListControl());
		map.put("/getBoard.do", new GetBoardControl());
		//등록화면
		map.put("/boardForm.do", new BoardFormControl());
		map.put("/addBoard.do", new AddBoardControl());
		//수정화면
		map.put("/modifyForm.do", new ModifyFormControl());  //화면이동 : ~Form
		map.put("/modifyBoard.do", new ModifyBoardControl()); //기능구현 : ~Board
		//삭제화면
		map.put("/removeForm.do", new RemoveFormControl()); 
		map.put("/removeBoard.do", new RemoveBoardControl()); 

		//댓글목록.
		map.put("/replyList.do", new ReplyListControl());
		map.put("/addReply.do", new AddReplyControl());
		map.put("/removeReply.do", new RemoveReplyControl());
		
		// 차트
		map.put("/chartForm.do", new ChartFormControl());
		map.put("/drawChart.do", new DrawChartControl());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//요청정보의 한글 인코딩 방식
		req.setCharacterEncoding("UTF-8");
		
		resp.setContentType("text/html; charset=utf-8");
		System.out.println("FrontController");
		String uri = req.getRequestURI();  //http://localhost:8080/helloJSP/??.do
		String context = req.getServletContext().getContextPath(); //helloJSP
		String page = uri.substring(context.length());
		System.out.println(page);
		
		Command controller = map.get(page);
		controller.execute(req, resp);
		
		
		
//		if(page.equals("/second.do")) {
//			
//		}else if(page.equals("/FirstServlet.do")) {
//			
//		}
	}
	
}
