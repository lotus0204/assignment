# 구현한 방법과 이유에 대한 간략한 내용

# api 명세와 실행방법
 ## - 회원가입
 ```
 put  /signup
 ```
 - Request
 ```
 {
 "id":"tnvjakzpt",
 "email":"tnvjakzpt@nate.com",
 "password":"1234
 }
 ```
 + Response
 ```
 200:OK
 {
 isSignup: true
 }
 ```
 ```
 400:Bad Request
 {
 isSignup: false
 }
 ```
 
