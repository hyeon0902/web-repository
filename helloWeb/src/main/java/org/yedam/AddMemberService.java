package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.serviceImpl.MemberServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AddMemberService
 */
@WebServlet("/AddMemberServ.html") 
public class AddMemberService extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberService() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//?mid=M009&pass=9999&name=Kim&phone=090-9876-0987 //?뒤에것이 파라메터를 호출할때 값을 전달하겠다는 의미
		//(mid, pass, name, phone) {mid ...}메소드에서는 이렇게 넘기지만 위에것은 mid라는 파라메터를 호출할때 M009라는 값을 넘기겠다는 의미
		String mid = request.getParameter("mid");            //웹페이지에 값을 넘기는 방식!
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		//멤버 인스턴스 선언.
		MemberVO vo = new MemberVO(mid, pass, name, phone);
		
		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();
//		String json = gson.toJson(vo);
		
		//Map.
		Map<String, Object> map = new HashMap<>();
		
		
		if(svc.addMember(vo)){
			// {"retCode": "OK"}
//			out.print("{\"retCode\": \"OK\"}");
//			out.print(json);
			map.put("retCode", "OK");
			map.put("vo", vo);
		}else {
			// {"retCode": "NG"}
//			out.print("{\"retCode\": \"NG\"}");
//			out.print(json);
			map.put("retCode", "NG");
			map.put("vo", vo.getMid());
		}
		String json = gson.toJson(map);
		out.print(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
