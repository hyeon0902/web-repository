package co.yedam.common;

public class PageDTO {
	int total; // 전체 건수
	int currentPage; // 현재페이지.
	boolean next, prev; // 이전, 이후.
	int startPage, endPage;
	int boardNo;
	
	
// 11page  13page. ~ 20page. 258건. 52page.
	public PageDTO(int boardNo, int total, int currentPage) {
		this.boardNo = boardNo;
		this.currentPage = currentPage;
		int realEnd = (int) Math.ceil(total / 5.0);
		
		this.total = total;
		
		this.endPage =  (int)Math.ceil(currentPage/10.0) * 10;
		this.startPage = this.endPage - 9;
		
		this.endPage =  this.endPage > realEnd ? realEnd : this.endPage;
				
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
	}
	
}

