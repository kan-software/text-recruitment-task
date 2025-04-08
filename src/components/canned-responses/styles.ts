import { css, keyframes } from '@emotion/css';
import { DesignToken } from '@livechat/design-system-react-components';

const maxWidth = '100%';

const highlight = keyframes`
  from {
    background-color: rgba(67, 132, 245, 0.1);
  }

  to {
    background-color: white;
  }
`;

export const avatar = css`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  user-select: text;
`;

export const actionBar = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  max-width: ${maxWidth};

  .lc-search-bar__container {
    height: 36px;
  }
`;

export const barContainer = css`
  display: flex;
  flex-direction: column;
`;

export const searchBar = css`
  align-self: flex-end;
  max-width: 250px;
`;

export const item = css`
  position: relative;
  padding: 16px 18px 0 18px;
  box-sizing: border-box;
  border-bottom: 1px solid var(${DesignToken.BorderSubtle});
  background-color: var(${DesignToken.SurfaceBasicDefault});

  &.justModified {
    animation: ${highlight} 2s linear;
  }

  &:hover {
    background-color: var(${DesignToken.SurfaceBasicSubtle});

    .foldButton,
    .controls {
      visibility: visible;
      display: flex;
      span {
        padding-top: 2px;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export const footer = css`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: var(${DesignToken.ContentDefault});
  padding-bottom: 19px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
  min-height: 24px;
  flex-wrap: wrap;

  .foldButton {
    display: none;
    color: var(${DesignToken.ColorActionActive});
    font-size: 14px;
    font-weight: 600;
    align-items: center;

    svg {
      margin: 2px 0 0 5px;
      width: 9px !important;

      path {
        fill: var(${DesignToken.ColorActionActive});
      }
    }
  }
`;

export const content = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(${DesignToken.ContentBasicPrimary});
  margin: 11px 0 10px 0;
  white-space: pre-line;
  overflow-wrap: break-word;
`;

export const itemHeader = css`
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;

  .controls {
    visibility: hidden;
    display: flex;
    justify-content: space-between;
    width: 112px;

    button {
      width: 32px;
      height: 32px;
      border-radius: 5px;

      &:hover {
        background-color: var(${DesignToken.SurfaceBasicHover});
      }
    }
  }
`;

export const tags = css`
  margin-bottom: -8px;

  span {
    text-transform: uppercase;
    letter-spacing: 0.2px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: var(${DesignToken.ContentDefault});
    opacity: 0.8;
  }

  ul {
    display: inline;
    padding: 0;

    li {
      position: relative;
      display: inline-block;
      width: auto;
      max-width: 100%;
      overflow-wrap: break-word;
      padding: 5px 8px;
      margin: 0 8px 8px 0;
      font-size: 14px;
      font-weight: 600;
      color: var(${DesignToken.ContentDefault});
      line-height: 22px;
      border: 1px solid var(${DesignToken.BorderSubtle});
      border-radius: 4px;
      text-shadow: none;

      &:before {
        content: '#';
        font-size: 14px;
        line-height: 22px;
        font-weight: 600;
        color: var(${DesignToken.ColorActionDefault});
        margin-right: 4px;
      }
    }
  }
`;

export const wrapper = css`
  &.fullHeight {
    height: calc(100vh - 189px);
  }

  &,
  & > div > div {
    box-sizing: border-box;
  }

  .heading {
    width: 100%;
    max-width: ${maxWidth};
    padding-top: 32px;
  }
`;

export const list = css`
  margin-top: 16px;
  position: relative;
  height: 100%;
  min-height: 400px;
  max-width: ${maxWidth};
`;

export const confirmationOverlay = css`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(${DesignToken.SurfaceBasicSubtle});
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
`;

export const emptyState = css`
  margin-top: 32px;
  padding: 20px 20px 48px;

  img {
    max-width: 635px;
    max-height: 275px;
  }
`;

export const privateItemHandle = css`
  background-color: var(${DesignToken.SurfaceSecondarySubtle});
`;

export const sharedItemHandle = css`
  background-color: var(${DesignToken.SurfaceBasicDefault});
`;

export const segmentedControlButton = css`
  box-sizing: border-box;

  button:focus {
    box-shadow: none;
  }
`;

export const segmentedControllButtonTopSpace = css`
  height: 32px;
`;

export const foldContent = css`
  margin-left: auto;
  min-width: 90px;
`;

export const tooltip = css`
  width: max-content;
`;

export const modifiedText = css`
  margin-right: 16px;
`;

export const iconButton = css`
  display: flex;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;
