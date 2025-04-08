import { css } from '@emotion/css';
import { DesignToken } from '@livechat/design-system-react-components';

export const fakeLink = css`
  color: var(${DesignToken.ActionPrimaryDefault});
  font-size: 14px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const disabledFakeLink = css`
  color: var(${DesignToken.ActionPrimaryDisabled});
  cursor: not-allowed;
`;
