import { useState } from 'react';
import Text from '../common/Text';
import Input from '../common/Input';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);

  return (
    <>
      {/* 이메일 입력 */}
      <div>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
        />
      </div>

      {/* 비밀번호 입력 */}
      <div>
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          type="password"
          hasToggle
        />
      </div>

      {/* 로그인 버튼 */}
      <div>
        <button disabled={!email || !password}>로그인</button>
      </div>

      {/* 자동 로그인 */}
      <div>
        <input
          type="checkbox"
          id="auto-login"
          checked={autoLogin}
          onChange={() => setAutoLogin(!autoLogin)}
        />
        <label htmlFor="auto-login">자동 로그인</label>
      </div>

      {/* 구분선 */}
      <div>
        <div />
        <Text type="B2">또는</Text>
        <div />
      </div>

      {/* 소셜 로그인 */}
      <div>
        <button>카카오 계정으로 1초 만에 시작하기</button>
        <button>구글 계정으로 시작하기</button>
        <button>네이버 계정으로 시작하기</button>
      </div>

      {/* 하단 링크 */}
      <div>
        <button>회원가입</button>
        <button>아이디 · 비밀번호 재설정</button>
      </div>
    </>
  );
}
