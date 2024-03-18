import React from 'react';

export { default as Button } from './common/Button/Button';
export { default as Icon } from './common/Icon/Icon';
export { default as Input } from './common/Input/Input';
export { default as Text } from './common/Text/Text';
export { default as Link } from './common/Link/Link';
export { default as AnimateHeight } from './common/AnimateHeight/AnimateHeight';
export { default as NotificationToast } from './common/NotificationToast/NotificationToast';

export const AuthLayout = React.lazy(() => import('./auth/AuthLayout/AuthLayout'));
