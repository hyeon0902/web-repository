package co.yedam.student.web;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet("/editStudent.do")
public class ModStudentServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 수정 -> 바뀐정보 전송
		req.setCharacterEncoding("utf-8");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

		String id = req.getParameter("id");
		String name = req.getParameter("name");
		String pass = req.getParameter("password");

		String birth = req.getParameter("birth");

		StudentVO vo = new StudentVO();
		vo.setStudentId(id);
		vo.setStudentName(name);
		vo.setStudentPw(pass);
		System.out.println(vo);
		try {
			vo.setStudentBirthday(sdf.parse(birth));

		} catch (ParseException e) {
			e.printStackTrace();
		}

		Map<String, Object> map = new HashMap<>();

		StudentService svc = new StudentServiceImpl();
		if (svc.editStudent(vo)) {
			map.put("retCode", "OK");
			map.put("vo", vo);
		} else {
			map.put("retCode", "NG");
			map.put("vo", vo);
		}

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(map);

		resp.setCharacterEncoding("utf-8");
		resp.setContentType("text/json; charset=UTF-8");
		resp.getWriter().print(json);

	}
}
