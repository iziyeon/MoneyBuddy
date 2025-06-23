// 마이페이지 상태별 테스트 설정
export interface TestConfig {
  name: string;
  description: string;
  hasConsultation: boolean;
  hasChallenge: boolean;
}

export const testConfigs: Record<string, TestConfig> = {
  // 1. Basic 상태 - 상담❌, 챌린지❌
  basic: {
    name: 'Basic 상태',
    description: '상담❌, 챌린지❌ - BannerSection만 표시',
    hasConsultation: false,
    hasChallenge: false,
  },

  // 2. consultationOnly 상태 - 상담✅, 챌린지❌
  consultationOnly: {
    name: 'Consultation-only 상태',
    description: '상담✅, 챌린지❌ - ConsultationSection만 표시',
    hasConsultation: true,
    hasChallenge: false,
  },
  // 3. Challenge-only 상태 - 상담❌, 챌린지✅
  'Challenge-only': {
    name: 'Challenge-only 상태',
    description: '상담❌, 챌린지✅ - BannerSection + ChallengeSection 표시',
    hasConsultation: false,
    hasChallenge: true,
  },

  // 4. Both 상태 - 상담✅, 챌린지✅
  both: {
    name: 'Both 상태',
    description:
      '상담✅, 챌린지✅ - ConsultationSection + ChallengeSection 표시',
    hasConsultation: true,
    hasChallenge: true,
  },
};

// 현재 활성화할 테스트 상태 (여기서 변경하여 테스트)
export const ACTIVE_TEST_CONFIG: keyof typeof testConfigs = 'both';

// 테스트 정보 로깅
export const logTestInfo = (configName: keyof typeof testConfigs) => {
  const config = testConfigs[configName];

  if (!config) {
    console.error('❌ 테스트 설정을 찾을 수 없습니다:', configName);
    return;
  }

  console.log('=== 마이페이지 상태 테스트 ===');
  console.log(`활성 설정: ${configName} - ${config.name}`);
  console.log(`상담 여부: ${config.hasConsultation}`);
  console.log(`챌린지 여부: ${config.hasChallenge}`);
  console.log('===============================');
};

// 테스트 설정 변경 가이드
export const TEST_GUIDE = `
🔧 마이페이지 상태 테스트 방법:

1. src/utils/mypage-test-config.ts 파일에서 ACTIVE_TEST_CONFIG 값을 변경하세요:

   // Basic 상태 테스트 (상담❌, 챌린지❌)
   export const ACTIVE_TEST_CONFIG = 'basic';

   // Consultation-only 상태 테스트 (상담✅, 챌린지❌)
   export const ACTIVE_TEST_CONFIG = 'consultationOnly';

   // Challenge-only 상태 테스트 (상담❌, 챌린지✅)
   export const ACTIVE_TEST_CONFIG = 'challengeOnly';

   // Both 상태 테스트 (상담✅, 챌린지✅)
   export const ACTIVE_TEST_CONFIG = 'both';

2. 파일을 저장하고 브라우저를 새로고침하세요.

3. 브라우저 개발자 도구 콘솔에서 현재 테스트 상태를 확인할 수 있습니다.

📋 각 상태별 예상 화면:
- Basic: BannerSection만 표시
- Consultation-only: ConsultationSection만 표시  
- Challenge-only: BannerSection + ChallengeSection 표시
- Both: ConsultationSection + ChallengeSection 표시
`;
