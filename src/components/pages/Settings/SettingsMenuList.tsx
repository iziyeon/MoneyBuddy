import { ChevronRight } from 'lucide-react';
import { settingsStyles } from '../../../styles/settings.styles';

interface SettingsMenuListProps {
  onFinancialFieldChange: () => void;
  onPasswordChange: () => void;
  onSecuritySettings: () => void;
  onNotificationSettings: () => void;
  onCustomerCenter: () => void;
}

export default function SettingsMenuList({
  onFinancialFieldChange,
  onPasswordChange,
  onSecuritySettings,
  onNotificationSettings,
  onCustomerCenter,
}: SettingsMenuListProps) {
  const menuItems = [
    {
      label: '금융분야 변경',
      onClick: onFinancialFieldChange,
    },
    {
      label: '비밀번호 변경',
      onClick: onPasswordChange,
    },
    {
      label: '보안 설정',
      onClick: onSecuritySettings,
    },
    {
      label: '알림 설정',
      onClick: onNotificationSettings,
    },
    {
      label: '고객센터',
      onClick: onCustomerCenter,
    },
  ];

  return (
    <div className={settingsStyles.menuList}>
      {menuItems.map((item, index) => {
        const isLastBeforeSeparator = index === 1; // 비밀번호 변경 다음에 구분선

        return (
          <div key={item.label}>
            <button onClick={item.onClick} className={settingsStyles.menuItem}>
              <span className={settingsStyles.menuText}>{item.label}</span>
              <ChevronRight className={settingsStyles.chevronIcon} />
            </button>

            {/* 비밀번호 변경 메뉴 다음에 구분선 추가 */}
            {isLastBeforeSeparator && (
              <div className={settingsStyles.separator} />
            )}
          </div>
        );
      })}
    </div>
  );
}
