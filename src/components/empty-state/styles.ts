import { css } from '@emotion/css';
import { DesignToken } from '@livechat/design-system-react-components';

export const container = css`
  padding: 90px 20px;
  text-align: center;
`;

export const icon = css`
  justify-content: center;
`;

export const title = css`
  max-width: 440px;
  margin: 0 auto 12px auto;
  color: var(${DesignToken.ContentBasicPrimary});
`;

export const description = css`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 22px;
  opacity: 0.8;
  color: var(${DesignToken.ContentBasicPrimary});
`;

export const button = css`
  margin-top: 30px;
`;

export const footer = css`
  margin-top: 20px;
  font-size: 14px;
  line-height: 22px;
  opacity: 0.8;
  color: var(${DesignToken.ContentBasicPrimary});
`;
