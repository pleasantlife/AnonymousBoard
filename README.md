# AnonymousBoard

## 프로젝트 설명

- 익명으로 게시물과 댓글(comment)을 작성할 수 있는 게시판 입니다.
- 게시물 작성시에는 비밀번호를 입력합니다.
- 게시물 수정/삭제시에는 작성시에 입력한 비밀번호를 확인합니다.
- 댓글에 대한 댓글(reply)을 작성할 수 있습니다.

## 폴더구조

![소스 코드 폴더 구조](./src_foldertree.jpg)

## 동작환경

- node 16.15.0 (nvm: https://github.com/nvm-sh/nvm)
- mysql (local)
- sequelize
- pm2 (dev & instance)

## 설치 및 동작 방법

0. nvm use (nvm이 설치 되어 있을 경우)
1. npm install
2. npm run
   2-1. npm run dev (development 환경)
   2-2. npm run start (production 환경)
   2-3. npm run test (jest ci test 수행)

## API 문서 (Swagger)

http://localhost:3000/api-docs

## 키워드 알림 동작 로직

1. keywordSubscribers에 작성자의 이름과 키워드가 등록됩니다.
2. 키워드는 '키워드1,키워드2,키워드3'와 같이 컴마로 구분하여 복수개를 등록할 수 있습니다.
3. 새 글 또는 댓글이 등록될 경우 해당 글의 body(내용)를 따로 가져와서 SQL내에서 정규식을 수행할 수 있는 상태로 변환합니다.
4. 키워드1|키워드2|키워드3 형태로 변환된 글의 body(내용)을 SQL WHERE문에서 REGEXP로 비교합니다.
5. 쿼리 수행 후 작성자 목록을 모아 알림을 보낼 수 있습니다. (현재 미구현)
