# 구현한 방법과 이유에 대한 간략한 내용
- 주요 사용스택
    - nodejs, express, jwt, sequelize, sqlite3
- DB 스키마

     <img width="481" alt="스크린샷 2021-10-27 오전 11 10 30" src="https://user-images.githubusercontent.com/81801012/138988057-4528cf23-4c12-435f-8a8c-c5f5b89b621c.png">
- 유저 생성
    - 아이디, 비밀번호, 이메일을 입력받아 아이디,이메일을 디비에 저장하고 bcrypt를 이용하여 암호화된 비밀번호를 디비에 저장
- 로그인
    - 아이디와 비밀번호를 입력받아 입력된 아이디와 같은 유저를 검색하고, 그 유저의 비밀번호와 입력된 비밀번호가 같은지 bcrypt를 이용하여 확인한 후 로그인 여부를 결정한다.
    - 로그인 시에 jwt를 이용하여 토큰을 생성하고, 쿠키에 전달하여 게시글 작성, 삭제, 수정 등을 시도할 때 인증과 인가가 가능하게 하였다.
- 게시글 삭제와 수정
    - 게시글 삭제와 수정기능 시, 인증과 인가가 가능하게 하기 위해서 로그인에서 쿠키에 저장했던 토큰을 해독하여 게시글을 작성한 유저인지 판단한다.
    - 게시글을 작성한 유저인지를 인증한 후, 삭제 혹은 수정이 가능하도록 구현하였다.
- 게시글 읽기
    - 게시글의 목록과 목록 중에서 원하는 게시글을 선택하여 하나의 게시글을 볼 수 있도록 구현하였다.
    - 게시글 목록은 한 번에 4개씩, 게시글의 생성 순서대로 보일 수 있도록 설정하였다(pagenation) 
    - 게시글 목록 중 원하는 게시글을 따로 볼 수 있도록 하나의 게시글을 볼 수 있도록 따로 작성하였다.
- 데이터베이스
    - 데이터베이스는 in-memory database 중, 예시되어 있는 sqlite3을 이용하여 구현하였다.
 
# api 명세와 실행방법
- [api 명세링크 with gitbook](https://app.gitbook.com/s/JSJWflJiC7X7hf6nfs1f/reference/user)
