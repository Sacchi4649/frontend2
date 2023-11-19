import { css } from "@emotion/css";

export const LayoutStyle: any = css`
  .trigger {
    padding: 0 24px;
    color: white;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #f2f2f2;
    }
  }

  .site-layout-background {
    padding: 0px;

    &.header {
      position: relative;
      z-index: 9;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      padding: 0;
      color: #f0f0f0;
      box-shadow: 4px 4px 40px 0 rgb(0 0 0 / 5%);
      -ms-flex-pack: justify;
      -ms-flex-align: center;

      .account-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 500px;
        margin: 16px;

        .roles {
          cursor: pointer;
        }

        .ant-avatar-icon {
          margin-right: 8px;
        }

        .divider {
          height: 20px;
          margin: 0px 20px;
          border: 0.5px solid #ffffff6e;
        }

        .account-name {
          color: #f0f0f0;
        }
      }
    }
  }

  .menu {
    height: 100%;
    border-right: 0;
  }
`;
