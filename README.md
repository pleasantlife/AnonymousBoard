# AnonymousBoard

## 프로젝트 설명

- 익명으로 게시물과 댓글(comment)을 작성할 수 있는 게시판 입니다.
- 게시물 작성시에는 비밀번호를 입력합니다.
- 게시물 수정/삭제시에는 작성시에 입력한 비밀번호를 확인합니다.
- 댓글에 대한 댓글(reply)을 작성할 수 있습니다.

## 폴더구조

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
