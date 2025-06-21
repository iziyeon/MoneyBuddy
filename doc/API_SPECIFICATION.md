API 엔드포인트 개요
MoneyBuddy 프로젝트의 백엔드 API 문서입니다. 각 도메인별로 정리되어 있으며, 상세 내용은 토글을 클릭하여 확인할 수 있습니다.

---

## 유저 기능 (User)

1.  **회원가입**
    - URL: `POST /api/v1/users`
    - 설명: 사용자 계정을 생성합니다.
    - 요청 예시
      ```json
      {
        "email": "user@example.com",
        "password": "1234abcd!",
        "nickname": "머니버디유저",
        "phone": "010-1234-5678",
        "profileImage": "https://example.com/image.png",
        "role": "USER",
        "loginMethod": "EMAIL"
      }
      ```
    - 응답 예시
      ```json
      {
        "id": 1,
        "email": "user@example.com",
        "nickname": "머니버디유저",
        "phone": "010-1234-5678",
        "profileImage": "https://example.com/profile.png",
        "role": "USER",
        "loginMethod": "EMAIL"
      }
      ```
2.  **로그인**
    - URL: `POST /api/v1/users/login`
    - 설명: 사용자 로그인을 수행하고 JWT 토큰을 httpOnly 쿠키로 발급합니다.
    - 요청 예시
      ```json
      {
        "email": "user@example.com",
        "password": "1234abcd!"
      }
      ```
    - 응답 예시 (Map 형식)
      ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR...",
        "email": "user@example.com",
        "nickname": "머니버디유저"
      }
      ```
    - 비고: 토큰은 쿠키(`Set-Cookie: token=...`)로도 발급됩니다.
3.  **사용자 조회**
    - URL: `GET /api/v1/users/{id}`
    - 설명: 특정 사용자 ID로 전체 정보를 조회합니다.
    - 응답: UserResponseDto와 동일
4.  **사용자 정보 수정**
    - URL: `PUT /api/v1/users/{id}`
    - 설명: 사용자 정보를 수정합니다.
    - 요청 예시
      ```json
      {
        "nickname": "업데이트된유저",
        "phone": "010-9876-5432",
        "profileImage": "https://example.com/updated-image.jpg"
      }
      ```
    - 응답: 수정된 사용자 정보 (UserResponseDto)
5.  **사용자 삭제 (탈퇴)**
    - URL: `DELETE /api/v1/users/{id}`
    - 설명: 해당 ID의 사용자를 탈퇴 처리합니다.
    - 응답: 없음 (204)
6.  **공개 프로필 조회**
    - URL: `GET /api/v1/users/{id}/profile`
    - 설명: 다른 사용자에게 노출 가능한 공개 정보만 조회합니다.
    - 응답 예시
      ```json
      {
        "userId": 1,
        "nickname": "마이머니버디",
        "profileImage": "https://example.com/image.jpg"
      }
      ```
7.  **사용자 설정 조회**
    - URL: `GET /api/v1/users/{user_id}/settings`
    - 설명: 사용자의 알림 및 개인정보 설정 정보를 조회합니다.
    - 응답 예시
      ```json
      {
        "notificationEnabled": true,
        "privacyLevel": "PUBLIC"
      }
      ```
8.  **사용자 설정 수정**
    - URL: `PUT /api/v1/users/{user_id}/settings`
    - 설명: 알림 여부 및 개인정보 설정 변경
    - 요청 예시
      ```json
      {
        "notificationEnabled": false,
        "privacyLevel": "PRIVATE"
      }
      ```
    - 응답: 수정된 설정 값
9.  **탈퇴 계정 복구**
    - URL: `POST /api/v1/users/recover`
    - 설명: 탈퇴한 지 30일 이내인 계정을 복구합니다.
    - 요청 예시
      ```json
      {
        "email": "test@example.com"
      }
      ```
    - 응답: 복구된 사용자 정보 (UserResponseDto)
10. **내 정보 조회**
    - URL: `GET /api/v1/users/me`
    - 설명: 현재 로그인한 사용자의 정보를 조회합니다.
    - 응답: UserResponseDto

<!-- end list -->

- **공통 에러 응답 형식 (예시)**
  ```json
  {
    "code": "USER_NOT_FOUND",
    "message": "존재하지 않는 사용자입니다."
  }
  ```
- **인증 필요 API**
  `/me`, `/settings`, `/update`, `/delete` 등의 엔드포인트는 JWT 인증 필요 (Bearer Token or httpOnly Cookie)

---

## 인증 기능 (Auth)

### 🔑 Auth API 명세서

1.  **Access Token 재발급**
    - URL: `POST /api/v1/auth/refresh`
    - 설명: Refresh Token이 쿠키에 존재하고 유효할 경우, 새로운 Access Token을 쿠키로 재발급합니다.
    - 요청 헤더: 없음 (refresh_token 쿠키 필요)
    - 응답 예시
      - Access Token 재발급 완료
    - 실패 시 예시
      - Refresh Token 누락됨
      - Refresh Token 만료됨
2.  **로그아웃**
    - URL: `POST /api/v1/auth/logout`
    - 설명: 사용자의 Refresh Token을 삭제하고 Access Token 쿠키를 제거합니다.
    - 요청 헤더: 로그인된 사용자 (AuthenticationPrincipal 필요)
    - 응답 예시
      - 로그아웃 완료
3.  **OAuth2 소셜 연동 해제**
    - URL: `DELETE /api/v1/auth/unlink`
    - 설명: 현재 로그인한 사용자의 소셜 연동을 해제하고 loginMethod를 EMAIL로 변경합니다. 비밀번호가 없을 경우 설정 유도.
    - 요청 헤더: 로그인된 사용자 (AuthenticationPrincipal 필요)
    - 응답 예시
      - 소셜 연동이 해제되었습니다.

---

## 관리자 기능 (Admin)

### 📢 공지사항/FAQ API 명세서

#### 🔹 공지사항 (Public)

- `GET /api/v1/notices`: 전체 공지사항 목록 조회
  ```json
  [
    {
      "id": 1,
      "title": "서비스 점검 안내",
      "createdAt": "2025-06-18T00:00:00"
    }
  ]
  ```
- `GET /api/v1/notices/{id}`: 공지사항 상세 조회
  ```json
  {
    "id": 1,
    "title": "서비스 점검 안내",
    "content": "6월 18일 서버 점검 예정입니다.",
    "createdAt": "2025-06-18T00:00:00",
    "updatedAt": "2025-06-18T01:00:00"
  }
  ```

#### 🔸 공지사항 (Admin)

- `POST /api/v1/admin/notices`: 공지 생성
- `PUT /api/v1/admin/notices/{id}`: 공지 수정
- `DELETE /api/v1/admin/notices/{id}`: 공지 삭제

#### ❔ FAQ (Public)

- `GET /api/v1/faqs`: FAQ 목록 조회
  ```json
  [
    {
      "id": 1,
      "question": "비밀번호를 잊었어요."
    }
  ]
  ```
- `GET /api/v1/faqs/{id}`: FAQ 상세 조회
  ```json
  {
    "id": 1,
    "question": "비밀번호를 잊었어요.",
    "answer": "비밀번호 재설정 페이지를 이용해주세요.",
    "createdAt": "2025-06-18T00:00:00",
    "updatedAt": "2025-06-18T01:00:00"
  }
  ```

#### ❔ FAQ (Admin)

- `POST /api/v1/admin/faqs`: FAQ 생성

- `PUT /api/v1/admin/faqs/{id}`: FAQ 수정

- `DELETE /api/v1/admin/faqs/{id}`: FAQ 삭제

- **공통 에러 응답 형식 (예시)**

  ```json
  {
    "code": "NOT_FOUND",
    "message": "해당 항목이 존재하지 않습니다."
  }
  ```

- **인증 필요 API**
  `/admin/**` 엔드포인트는 관리자 인증 필요
  사용자 기반 엔드포인트는 JWT 인증 필요
  `/auth/**`는 쿠키 기반 인증 필요

---

## 전문가 기능 (Advisor)

### 👨‍🏫 Advisor API 명세서

1.  **전문가 등록**
    - URL: `POST /api/v1/advisors`
    - 설명: 로그인된 사용자가 전문가로 등록됩니다.
    - 요청 예시
      ```json
      {
        "name": "김전문",
        "bio": "20년 경력의 재무상담 전문가입니다.",
        "certificationFile": "certificate123.png",
        "available": true,
        "price": 40000,
        "isOnline": true
      }
      ```
    - 응답 예시
      ```
      1
      ```
2.  **전문가 목록 조회**
    - URL: `GET /api/v1/advisors`
    - 설명: 페이징, 정렬, 필터링, 키워드 검색이 가능한 전문가 리스트 조회
    - 쿼리 파라미터 예시
      `/api/v1/advisors?page=0&size=20&sortBy=price_asc&keyword=투자&categoryIds=1,2&minPrice=30000&maxPrice=50000&onlineOnly=true`
    - 응답 예시
      ```json
      {
        "content": [
          {
            "id": 1,
            "name": "김전문",
            "bio": "20년 경력의 재무상담 전문가입니다.",
            "price": 40000,
            "isOnline": true,
            "available": true,
            "categories": ["투자", "저축"]
          }
        ],
        "pageable": {
          "pageNumber": 0,
          "pageSize": 20
        },
        "totalPages": 1,
        "totalElements": 1
      }
      ```
3.  **전문가 상세 조회**
    - URL: `GET /api/v1/advisors/{advisorId}`
    - 설명: 전문가의 전체 정보와 추천 전문가 목록 조회
    - 응답 예시
      ```json
      {
        "id": 1,
        "userId": 101,
        "name": "김전문",
        "bio": "20년 경력의 재무상담 전문가입니다.",
        "certificationFile": "certificate123.png",
        "price": 40000,
        "isOnline": true,
        "available": true,
        "createdAt": "2025-06-19T12:00:00",
        "categories": ["투자", "저축"],
        "recommendedAdvisors": [
          {
            "id": 2,
            "name": "이추천",
            "bio": "금융 전문가입니다.",
            "price": 35000,
            "isOnline": false
          }
        ]
      }
      ```
4.  **사용자 ID로 전문가 조회**
    - URL: `GET /api/v1/advisors/user/{userId}`
    - 설명: 특정 사용자 ID에 연결된 전문가 정보 조회
5.  **온라인 상태 업데이트**
    - URL: `PUT /api/v1/advisors/{advisorId}/online-status`
    - 설명: 전문가의 온라인 여부 업데이트
    - 예시: `...?isOnline=true`
    - 응답 예시: 상태 코드 200 OK (본문 없음)
6.  **상담 가능 여부 업데이트**
    - URL: `PUT /api/v1/advisors/{advisorId}/availability`
    - 설명: 전문가의 상담 가능 여부 업데이트
    - 예시: `...?available=true`
    - 응답 예시: 상태 코드 200 OK (본문 없음)
7.  **전문가 등록 여부 확인**
    - URL: `GET /api/v1/advisors/exists/user/{userId}`
    - 설명: 해당 사용자가 전문가인지 여부 확인
    - 응답 예시
      ```
      true
      ```

### 🗂 카테고리 API 명세서

1.  **전체 카테고리 조회**
    - URL: `GET /api/v1/categories`
    - 설명: 등록된 모든 카테고리를 이름순으로 조회
    - 응답 예시
      ```json
      [
        {
          "id": 1,
          "name": "투자",
          "type": "INVESTMENT",
          "typeDisplayName": "투자"
        },
        {
          "id": 2,
          "name": "저축",
          "type": "SAVINGS",
          "typeDisplayName": "저축"
        }
      ]
      ```
2.  **타입별 카테고리 조회**
    - URL: `GET /api/v1/categories/type/{type}`
    - 설명: 카테고리 타입(INVESTMENT, SAVINGS 등)에 따른 카테고리 목록
3.  **카테고리 상세 조회**
    - URL: `GET /api/v1/categories/{categoryId}`
    - 설명: 카테고리 단건 상세 정보 조회

---

## 상담 기능 (Consultation)

### 💬 Consultation API 명세서

1.  **상담 채팅방 생성**
    - URL: `POST /api/v1/consultation/rooms`
    - 설명: 내담자가 상담사를 지정하여 상담 채팅방을 생성합니다.
    - 요청 예시
      ```json
      {
        "consultantId": 2,
        "topic": "불안 장애 상담",
        "durationMinutes": 30,
        "amount": 5000,
        "paymentMethod": "CARD"
      }
      ```
    - 응답 예시
      ```
      1001
      ```
2.  **채팅방 목록 조회**
    - URL: `GET /api/v1/consultation/rooms`
    - 설명: 로그인한 사용자의 상담 채팅방 요약 목록 조회
    - 응답 예시
      ```json
      [
        {
          "consultationRoomId": 1001,
          "topic": "우울증과 스트레스 관리",
          "opponentUserId": 15,
          "opponentNickname": "jenny88",
          "opponentProfileImage": "https://cdn.moneybuddy.com/profiles/jenny88.jpg",
          "lastMessage": "조금 늦을 수도 있어요",
          "lastMessageAt": "2025-04-25T16:30:00",
          "isClosed": false,
          "unreadCount": 2
        }
      ]
      ```
3.  **채팅방 상세 조회**
    - URL: `GET /api/v1/consultation/rooms/{roomId}/detail`
    - 설명: 채팅방의 상대방 정보, 주제 등 상세 정보 반환
    - 응답 예시
      ```json
      {
        "consultationRoomId": 1001,
        "topic": "불안장애",
        "opponentNickname": "johnny92",
        "opponentProfileImage": "https://cdn.moneybuddy.com/profiles/johnny92.jpg"
      }
      ```
4.  **메시지 목록 조회**
    - URL: `GET /api/v1/consultation/rooms/{roomId}/messages`
    - 설명: 특정 채팅방의 메시지를 페이징 조회
5.  **메시지 읽음 처리**
    - URL: `PATCH /api/v1/consultation/rooms/{roomId}/read`
    - 설명: 사용자가 해당 채팅방의 메시지를 읽음 처리
    - 응답: 204 No Content
6.  **채팅방 나가기**
    - URL: `DELETE /api/v1/consultation/rooms/{roomId}/leave`
    - 설명: 상담방 소프트 삭제 (목록에서 숨김)
    - 응답: 204 No Content
7.  **상담 상태 변경**
    - URL: `PATCH /api/v1/consultation/rooms/{id}/status`
    - 설명: 내담자/상담사에 따라 상담 상태를 변경 (REQUESTED → SCHEDULED → COMPLETED)
    - 요청 예시
      ```json
      {
        "userId": 3,
        "newStatus": "SCHEDULED"
      }
      ```
    - 응답: 204 No Content
8.  **이미지 업로드**
    - URL: `POST /api/v1/consultation/{consultationRoomId}/image`
    - 설명: 상담 중 채팅 이미지 업로드
    - 요청: Multipart Form (file)
    - 응답 예시
      ```json
      {
        "imageUrl": "https://moneytalk-s3.s3.ap-northeast-2.amazonaws.com/chat-images/sample.jpg"
      }
      ```
9.  **WebSocket 메시지 전송**
    - URL: `@MessageMapping /chat`
    - 설명: 실시간 채팅 메시지를 WebSocket으로 전송 (Redis 발행)
    - 예시 메시지 페이로드
      ```json
      {
        "consultationRoomId": 101,
        "senderId": 5,
        "senderNickname": "dohyunnn",
        "message": "안녕하세요! 거래 가능할까요?",
        "type": "TEXT",
        "imageUrl": null,
        "sentAt": "2025-04-25T14:05:00"
      }
      ```

---

## 챌린지 기능 (Challenge)

### 🏆 Challenge API 명세서

1.  **챌린지 생성 (ADMIN, ADVISOR)**
    - URL: `POST /api/v1/challenges`
    - 설명: 관리자가 새로운 챌린지를 생성합니다.
    - 요청 예시
      ```json
      {
        "title": "30일 소비 기록 챌린지",
        "description": "매일 소비 내용을 기록하고 검토하는 습관 만들기"
      }
      ```
    - 응답 예시
      ```json
      {
        "id": 1,
        "title": "30일 소비 기록 챌린지",
        "description": "매일 소비 내용을 기록하고 검토하는 습관 만들기",
        "createdAt": "2025-06-19T12:00:00"
      }
      ```
2.  **챌린지 전체 조회**
    - URL: `GET /api/v1/challenges`
    - 설명: 시스템에 등록된 모든 챌린지를 조회합니다.
    - 응답 예시
      ```json
      [
        {
          "id": 1,
          "title": "30일 소비 기록 챌린지",
          "description": "매일 소비 내용을 기록하고 검토하는 습관 만들기",
          "createdAt": "2025-06-19T12:00:00"
        }
      ]
      ```
3.  **챌린지 상세 조회**
    - URL: `GET /api/v1/challenges/{id}`
    - 설명: 특정 챌린지의 상세 정보를 조회합니다.
4.  **챌린지 참여 (USER)**
    - URL: `POST /api/v1/challenges/{challengeId}/participate`
    - 설명: 로그인한 사용자가 챌린지에 참여합니다.
    - 응답 예시
      ```json
      {
        "id": 101,
        "userId": 3,
        "challengeId": 1,
        "challengeTitle": "30일 소비 기록 챌린지",
        "participatedAt": "2025-06-19T13:00:00"
      }
      ```
5.  **사용자 참여 내역 조회**
    - URL: `GET /api/v1/users/{userId}/challenge-participations`
    - 설명: 특정 사용자의 챌린지 참여 내역을 조회합니다.
6.  **특정 참여 상세 조회**
    - URL: `GET /api/v1/challenge-participations/{id}`
    - 설명: 챌린지 참여 정보 단건을 조회합니다.

---

## 미션 기능 (Mission)

### 🎯 Mission API 명세서

1.  **미션 생성 (ADMIN, ADVISOR)**
    - URL: `POST /api/v1/admin/challenge-participations/{participationId}/missions`
    - 설명: 특정 챌린지 참여 ID에 대해 미션을 생성합니다.
    - 요청 예시
      ```json
      {
        "title": "하루 소비 내역 정리",
        "content": "오늘의 모든 소비를 기록하세요.",
        "advisorId": 5
      }
      ```
    - 응답 예시
      ```json
      {
        "id": 201,
        "title": "하루 소비 내역 정리",
        "content": "오늘의 모든 소비를 기록하세요.",
        "status": "PENDING",
        "participationId": 101,
        "advisorId": 5,
        "createdAt": "2025-06-19T15:00:00"
      }
      ```
2.  **미션 목록 조회**
    - URL: `GET /api/v1/challenge-participations/{participationId}/missions`
    - 설명: 특정 챌린지 참여에 속한 모든 미션을 조회합니다.
3.  **미션 상세 조회**
    - URL: `GET /api/v1/missions/{id}`
    - 설명: 특정 미션의 상세 정보를 조회합니다.
4.  **미션 상태 변경**
    - URL: `PATCH /api/v1/missions/{id}/status`
    - 설명: 미션 상태(PENDING → SUBMITTED → COMPLETED 등)를 변경합니다.
    - 요청 예시
      ```json
      {
        "status": "COMPLETED"
      }
      ```
5.  **미션 피드백 작성 (ADVISOR)**
    - URL: `POST /api/v1/missions/{missionId}/feedbacks`
    - 설명: 상담자가 미션에 대해 피드백을 작성합니다.
    - 요청 예시
      ```json
      {
        "feedback": "소비 내역이 잘 정리되어 있어요. 👍"
      }
      ```
    - 응답 예시
      ```json
      {
        "id": 301,
        "feedback": "소비 내역이 잘 정리되어 있어요. 👍",
        "reviewedAt": "2025-06-19T16:00:00"
      }
      ```
6.  **미션 피드백 목록 조회**
    - URL: `GET /api/v1/missions/{missionId}/feedbacks`
    - 설명: 특정 미션에 대한 모든 피드백을 조회합니다.
7.  **미션 인증 업로드**
    - URL: `POST /api/v1/missions/{missionId}/uploads`
    - 설명: 내담자가 해당 미션에 대한 인증 자료(이미지 등)를 업로드합니다.
    - 요청 예시
      ```json
      {
        "fileUrl": "https://cdn.moneybuddy.com/uploads/proof1.jpg"
      }
      ```
    - 응답 예시
      ```json
      {
        "id": 401,
        "fileUrl": "https://cdn.moneybuddy.com/uploads/proof1.jpg",
        "uploadedAt": "2025-06-19T17:00:00"
      }
      ```
8.  **미션 인증 업로드 목록 조회**
    - URL: `GET /api/v1/missions/{missionId}/uploads`
    - 설명: 특정 미션에 대한 모든 인증 업로드 내역을 조회합니다.

---

## 리포트 기능 (Report)

### 📊 Report API 명세서

1.  **리포트 생성 (ADMIN)**
    - URL: `POST /api/v1/reports`
    - 설명: 특정 사용자와 챌린지에 대한 요약 리포트를 생성합니다.
    - 요청 예시
      ```json
      {
        "userId": 7,
        "challengeId": 3,
        "summary": "이번 챌린지를 통해 지출 습관이 개선되었습니다.",
        "chartUrl": "https://cdn.moneybuddy.com/reports/chart-3.png"
      }
      ```
    - 응답 예시
      ```json
      {
        "id": 1001,
        "userId": 7,
        "challengeId": 3,
        "challengeTitle": "6월 소비 절약 챌린지",
        "summary": "이번 챌린지를 통해 지출 습관이 개선되었습니다.",
        "chartUrl": "https://cdn.moneybuddy.com/reports/chart-3.png",
        "generatedAt": "2025-06-19T18:30:00"
      }
      ```
2.  **단일 리포트 조회**
    - URL: `GET /api/v1/reports/{id}`
    - 설명: 리포트 ID를 통해 상세 리포트를 조회합니다.
3.  **사용자별 리포트 전체 조회**
    - URL: `GET /api/v1/reports/users/{userId}`
    - 설명: 특정 사용자가 생성한 리포트 전체를 조회합니다.

---

## CS 기능 (Customer Service)

### 🛎️ CS (고객센터) API 명세서

1.  **1:1 문의 생성**
    - URL: `POST /api/v1/cs-inquiries`
    - 설명: 사용자가 고객센터 문의를 생성합니다.
    - 요청 예시
      ```json
      {
        "title": "로그인 오류",
        "content": "로그인이 되지 않아요."
      }
      ```
2.  **사용자 문의 목록 조회**
    - URL: `GET /api/v1/users/{userId}/cs-inquiries`
    - 설명: 특정 사용자의 고객센터 문의 목록을 조회합니다.
3.  **문의 상세 조회**
    - URL: `GET /api/v1/cs-inquiries/{id}`
    - 설명: 특정 고객센터 문의의 상세 정보를 조회합니다.
4.  **전체 문의 목록 조회 (ADMIN 전용)**
    - URL: `GET /api/v1/admin/cs-inquiries`
    - 설명: 관리자가 모든 고객센터 문의를 필터 조건(status, isRead)에 따라 조회합니다.
    - 쿼리 파라미터 예시: `?status=PENDING&isRead=false`
5.  **문의 상태 변경 (ADMIN 전용)**
    - URL: `PATCH /api/v1/admin/cs-inquiries/{id}/status`
    - 설명: 관리자가 고객센터 문의의 상태를 변경합니다.
    - 요청 예시
      ```json
      {
        "responderId": 10,
        "status": "DONE",
        "respondedAt": "2025-06-19T19:00:00"
      }
      ```

---

## Webhook 관련 기능 (Webhook)

### 🔔 Webhook API 명세서

1.  **Webhook 설정 생성 (ADMIN)**
    - URL: `POST /api/v1/admin/webhooks`
    - 설명: 새로운 Webhook 설정을 등록합니다.
    - 요청 예시
      ```json
      {
        "type": "SLACK",
        "url": "https://hooks.slack.com/services/T000/B000/XXX",
        "enabled": true
      }
      ```
    - 응답 예시
      ```json
      {
        "id": 1,
        "type": "SLACK",
        "url": "https://hooks.slack.com/services/T000/B000/XXX",
        "enabled": true,
        "createdAt": "2025-06-19T19:10:00"
      }
      ```
2.  **Webhook 목록 조회 (ADMIN)**
    - URL: `GET /api/v1/admin/webhooks`
    - 설명: 등록된 모든 Webhook 설정을 조회합니다.
3.  **Webhook 수정 (ADMIN)**
    - URL: `PUT /api/v1/admin/webhooks/{id}`
    - 설명: Webhook의 설정 정보를 수정합니다.
4.  **Webhook 삭제 (ADMIN)**
    - URL: `DELETE /api/v1/admin/webhooks/{id}`
    - 설명: 특정 Webhook 설정을 삭제합니다.

---

## ⚠️ 공통 에러 응답 및 예외 처리

### 📌 공통 에러 응답 형식

모든 에러 응답은 HTTP 상태 코드와 함께 텍스트 메시지 형식으로 반환됩니다.

- 예시 1: 잘못된 요청
  - `400 Bad Request`
  - `"비밀번호는 8자 이상이어야 합니다."`
- 예시 2: 인증 실패
  - `401 Unauthorized`
  - `"Invalid credentials"`
- 예시 3: 리소스 없음
  - `404 Not Found`
  - `"Challenge not found"`
- 예시 4: 파라미터 타입 불일치
  - `400 Bad Request`
  - `"잘못된 파라미터 타입입니다: id"`

### ✅ 처리 중인 예외 목록

- `IllegalArgumentException`: 형식 오류, 유효성 검증 실패 등 (예: 비밀번호 문제)
- `IllegalStateException`: 상태 오류 (예: 탈퇴한 계정)
- `NoSuchElementException`: 리소스 미존재 (예: 유저/챌린지 없음)
- `MethodArgumentTypeMismatchException`: URL 파라미터 타입 불일치 (예: 숫자 아닌 ID 입력)

※ 커스텀 예외는 별도로 존재하지 않으며, 위의 표준 예외 처리만 사용됩니다.
