select * from tab;

--ȸ����ȣ ��й�ȣ �̸� ����ó
create table member (
    mid varchar2(10) PRIMARY KEY,
    pass varchar2(10) not null,
    name varchar2(10) not null,
    phone varchar2(13) default '010-1111-2222'
);
insert into member values('M001', '1111', 'ȫ�浿', '010-1234-5678');
insert into member values('M002', '2222', '������', '010-4567-8763');
insert into member values('M003', '3333', '���α�', '010-1982-8392');
commit;