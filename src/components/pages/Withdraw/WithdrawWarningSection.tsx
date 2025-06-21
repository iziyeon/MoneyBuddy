import { X } from 'lucide-react';
import { withdrawStyles } from '../../../styles/withdraw.styles';

const warningItems = [
  '탈퇴 후, 동일한 아이디로 30일간 재가입이 불가능합니다.',
  '진행중인 상담이나 결제의 경우, 환불이 불가합니다.',
  '모든 개인정보는 탈퇴 후, 복구할 수 없습니다.',
];

export default function WithdrawWarningSection() {
  return (
    <div className={withdrawStyles.warningSection.container}>
      <h2 className={withdrawStyles.warningSection.title}>
        탈퇴전 꼭 확인해주세요
      </h2>

      <div className={withdrawStyles.warningSection.list}>
        {warningItems.map((item, index) => (
          <div key={index} className={withdrawStyles.warningSection.item}>
            <div className={`${withdrawStyles.warningSection.icon} relative`}>
              <div className={withdrawStyles.warningSection.iconInner} />
              <X size={8} color="white" className="absolute inset-0 m-auto" />
            </div>
            <span className={withdrawStyles.warningSection.text}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
