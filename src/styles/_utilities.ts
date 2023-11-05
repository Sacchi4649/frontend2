import { injectGlobal } from "@emotion/css";
export const utilities: any = injectGlobal`

body {
  margin: 0;
  padding: 0;
}

.trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .trigger:hover {
    color: #1890ff;
  }
  
  .site-layout .site-layout-background {
    background: #fff;
    padding: 1rem;
    border-radius: 0.2rem;
  }

  .sider-background{
    background: #19376D !important;
  }

  .container-content{
    background: #fff;
    padding: 1rem;
    border-radius: 0.2rem;
    margin-bottom: 1rem;
  }  

  .m-1{
    margin: 0.1rem;
  }

  .loading-loader {
    top: 45%;
    position: relative;
    text-align: center;
  }

  .loading-container {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99999999 !important;
    background-color: rgba(138, 138, 138, 0.3) !important;
  },

  .ant-table-thead > tr > th {
    background: #537FE7 !important;
    color: #fff !important;
  }

  .u-h1 {
        font-size: 2rem;
    }

  .u-h2 {
      font-size: 1.5rem;
  }

  .u-h3 {
      font-size: 1.25rem;
  }

  .u-h4 {
      font-size: 1rem;
  }

  .u-h5 {
      font-size: 0.875rem;
  }

  .u-h6 {
      font-size: 0.75rem;
  }

  .u-h7 {
      font-size: 0.625rem;
  }

  .u-h8 {
      font-size: 0.5rem;
  }

  .u-font-family-inherit {
      font-family: inherit;
  }

  .u-font-size-inherit {
      font-size: inherit;
  }

  .u-text-decoration-none {
      text-decoration: none;
  }

  .u-text-error {
      font-size: 10px;
      color: #B52025;
  }

  .u-bold {
      font-weight: bold;
  }

  .u-regular {
      font-weight: normal;
  }

  .u-light {
      font-weight: 300;
  }

  .u-italic {
      font-style: italic;
  }

  .u-caps {
      text-transform: uppercase;
      letter-spacing: 0.2em;
  }

  .u-case-upper {
      text-transform: uppercase;
  }

  .u-case-lower {
      text-transform: lowercase;
  }

  .u-case-title {
      text-transform: capitalize;
  }

  .u-left-align {
      text-align: left;
  }

  .u-center {
      text-align: center;
  }

  .u-right-align {
      text-align: right;
  }

  .u-justify {
      text-align: justify;
  }

  .u-nowrap {
      white-space: nowrap;
  }

  .u-preline {
      white-space: pre-line;
  }

  .u-break-word {
      word-wrap: break-word;
  }

  .u-break-all {
      word-break: break-word;
  }

  .u-line-height-1 {
      line-height: 1;
  }

  .u-line-height-2 {
      line-height: 1.125;
  }

  .u-line-height-3 {
      line-height: 1.25;
  }

  .u-line-height-4 {
      line-height: 1.5;
  }

  .u-list-style-none {
      list-style: none;
  }

  .u-underline {
      text-decoration: underline;
  }

  .u-strikethrough {
      text-decoration: line-through;
  }

  .u-truncate {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  .u-list-reset {
      list-style: none;
      padding-left: 0;
  }

  .u-inline {
      display: inline;
  }

  .u-block {
      display: block;
  }

  .u-inline-block {
      display: inline-block;
  }

  .u-table {
      display: table;
  }

  .u-table-cell {
      display: table-cell;
  }

  .u-overflow-hidden {
      overflow: hidden;
  }

  .u-overflow-scroll {
      overflow: scroll;
  }

  .u-overflow-auto {
      overflow: auto;
  }

  .u-overflow-x-auto {
      overflow-x: auto;
  }

  .u-overflow-y-auto {
      overflow-y: auto;
  }

  .u-clearfix::before,
  .u-clearfix::after {
      content: " ";
      display: table;
  }

  .u-clearfix::after {
      clear: both;
  }

  .u-left {
      float: left;
  }

  .u-right {
      float: right;
  }

  .u-fit {
      max-width: 100%;
  }

  .u-max-width-1 {
      max-width: 24rem;
  }

  .u-max-width-2 {
      max-width: 32rem;
  }

  .u-max-width-3 {
      max-width: 48rem;
  }

  .u-max-width-4 {
      max-width: 64rem;
  }

  .u-max-width-160P {
      max-width: 160px;
  }

  .u-border-box {
      box-sizing: border-box;
  }

  .u-align-baseline {
      vertical-align: baseline;
  }

  .u-align-top {
      vertical-align: top;
  }

  .u-align-middle {
      vertical-align: middle;
  }

  .u-align-bottom {
      vertical-align: bottom;
  }

  .u-m0 {
      margin: 0;
  }

  .u-mt0 {
      margin-top: 0;
  }
  .u-mt-auto {
      margin-top: auto;
  }

  .u-mr0 {
      margin-right: 0;
  }

  .u-mb0 {
      margin-bottom: 0;
  }

  .u-ml0 {
      margin-left: 0;
  }
  .u-ml-auto {
      margin-left: auto;
  }

  .u-mx0 {
      margin-left: 0;
      margin-right: 0;
  }

  .u-my0 {
      margin-top: 0;
      margin-bottom: 0;
  }

  .u-m05 {
      margin: 0.25rem;
  }

  .u-mr05 {
      margin-right: 0.25rem;
  }

  .u-m1 {
      margin: 0.5rem;
  }

  .u-mt1 {
      margin-top: 0.5rem;
  }

  .u-mr1 {
      margin-right: 0.5rem;
  }

  .u-mb1 {
      margin-bottom: 0.5rem;
  }

  .u-ml1 {
      margin-left: 0.5rem;
  }

  .u-mx1 {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
  }

  .u-my1 {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
  }

  .u-my-auto {
      margin-top: auto;
      margin-bottom: auto;
  }

  .u-m2 {
      margin: 1rem;
  }

  .u-mt2 {
      margin-top: 1rem;
  }

  .u-mr2 {
      margin-right: 1rem;
  }

  .u-mb2 {
      margin-bottom: 1rem;
  }

  .u-ml2 {
      margin-left: 1rem;
  }

  .u-mx2 {
      margin-left: 1rem;
      margin-right: 1rem;
  }

  .u-my2 {
      margin-top: 1rem;
      margin-bottom: 1rem;
  }

  .u-m3 {
      margin: 2rem;
  }

  .u-mt3 {
      margin-top: 2rem;
  }

  .u-mr3 {
      margin-right: 2rem;
  }

  .u-mb3 {
      margin-bottom: 2rem;
  }

  .u-ml3 {
      margin-left: 2rem;
  }

  .u-mx3 {
      margin-left: 2rem;
      margin-right: 2rem;
  }

  .u-my3 {
      margin-top: 2rem;
      margin-bottom: 2rem;
  }

  .u-m4 {
      margin: 4rem;
  }

  .u-mt4 {
      margin-top: 4rem;
  }


  .u-mr4 {
      margin-right: 4rem;
  }

  .u-mb4 {
      margin-bottom: 4rem;
  }

  .u-ml4 {
      margin-left: 4rem;
  }

  .u-mx4 {
      margin-left: 4rem;
      margin-right: 4rem;
  }

  .u-my4 {
      margin-top: 4rem;
      margin-bottom: 4rem;
  }

  .u-mxn1 {
      margin-left: -0.5rem;
      margin-right: -0.5rem;
  }

  .u-mxn2 {
      margin-left: -1rem;
      margin-right: -1rem;
  }

  .u-mxn3 {
      margin-left: -2rem;
      margin-right: -2rem;
  }

  .u-mxn4 {
      margin-left: -4rem;
      margin-right: -4rem;
  }

  .u-mx6 {
    margin-left: 6rem;
    margin-right: 6rem;
  }

  .u-ml-auto {
      margin-left: auto;
  }

  .u-mr-auto {
      margin-right: auto;
  }

  .u-mx-auto {
      margin-left: auto;
      margin-right: auto;
  }

  .u-p0 {
      padding: 0;
  }

  .u-pt0 {
      padding-top: 0;
  }

  .u-pr0 {
      padding-right: 0;
  }

  .u-pb0 {
      padding-bottom: 0;
  }

  .u-pl0 {
      padding-left: 0;
  }

  .u-px0 {
      padding-left: 0;
      padding-right: 0;
  }

  .u-py0 {
      padding-top: 0;
      padding-bottom: 0;
  }

  .u-p1 {
      padding: 0.5rem;
  }

  .u-pt1 {
      padding-top: 0.5rem;
  }

  .u-pr1 {
      padding-right: 0.5rem;
  }

  .u-pb1 {
      padding-bottom: 0.5rem;
  }

  .u-pl1 {
      padding-left: 0.5rem;
  }

  .u-py1 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
  }

  .u-px1 {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
  }

  .u-p2 {
      padding: 1rem;
  }

  .u-pt2 {
      padding-top: 1rem;
  }

  .u-pr2 {
      padding-right: 1rem;
  }

  .u-pb2 {
      padding-bottom: 1rem;
  }

  .u-pl2 {
      padding-left: 1rem;
  }

  .u-py2 {
      padding-top: 1rem;
      padding-bottom: 1rem;
  }

  .u-px2 {
      padding-left: 1rem;
      padding-right: 1rem;
  }

  .u-p3 {
      padding: 2rem;
  }

  .u-pt3 {
      padding-top: 2rem;
  }

  .u-pr3 {
      padding-right: 2rem;
  }

  .u-pb3 {
      padding-bottom: 2rem;
  }

  .u-pl3 {
      padding-left: 2rem;
  }

  .u-py3 {
      padding-top: 2rem;
      padding-bottom: 2rem;
  }

  .u-px3 {
      padding-left: 2rem;
      padding-right: 2rem;
  }

  .u-p4 {
      padding: 4rem;
  }

  .u-pt4 {
      padding-top: 4rem;
  }

  .u-pr4 {
      padding-right: 4rem;
  }

  .u-pb4 {
      padding-bottom: 4rem;
  }

  .u-pl4 {
      padding-left: 4rem;
  }

  .u-py4 {
      padding-top: 4rem;
      padding-bottom: 4rem;
  }

  .u-px4 {
      padding-left: 4rem;
      padding-right: 4rem;
  }

  .u-g0 {
      gap: 0rem;
  }

  .u-g1 {
      gap: 0.5rem;
  }

  .u-g2 {
      gap: 1rem;
  }

  .u-g3 {
      gap: 2rem;
  }

  .u-g4 {
      gap: 4rem;
  }

  .u-gx0 {
      column-gap: 0rem;
  }

  .u-gx1 {
      column-gap: 0.5rem;
  }

  .u-gx2 {
      column-gap: 1rem;
  }

  .u-gx3 {
      column-gap: 2rem;
  }

  .u-gx4 {
      column-gap: 4rem;
  }

  .u-gy0 {
      row-gap: 0rem;
  }

  .u-gy1 {
      row-gap: 0.5rem;
  }

  .u-gy2 {
      row-gap: 1rem;
  }

  .u-gy3 {
      row-gap: 2rem;
  }

  .u-gy4 {
      row-gap: 4rem;
  }

  .u-col {
      float: left;
      box-sizing: border-box;
  }

  .u-col-right {
      float: right;
      box-sizing: border-box;
  }

  .u-col-1 {
      width: 8.33333%;
  }

  .u-col-2 {
      width: 16.66667%;
  }

  .u-col-3 {
      width: 25%;
  }

  .u-col-4 {
      width: 33.33333%;
  }

  .u-col-5 {
      width: 41.66667%;
  }

  .u-col-6 {
      width: 50%;
  }

  .u-col-7 {
      width: 58.33333%;
  }

  .u-col-8 {
      width: 66.66667%;
  }

  .u-col-9 {
      width: 75%;
  }

  .u-col-10 {
      width: 83.33333%;
  }

  .u-col-11 {
      width: 91.66667%;
  }

  .u-col-12 {
      width: 100%;
  }

  .u-flex {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
  }
  .u-flex-row {
      -webkit-box-orient: horizontal !important;
      -webkit-box-direction: normal !important;
      -webkit-flex-direction: row !important;
      -ms-flex-direction: row !important;
      flex-direction: row !important;
  }

  .u-flex-column {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
  }

  .u-flex-row-reverse {
      flex-direction: row-reverse;
  }

  .u-flex-wrap {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  }

  .u-flex-no-shrink {
      flex-shrink: 0;
  }

  .u-flex-grow {
      flex-grow: 1;
  }

  .u-items-start {
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      -ms-grid-row-align: flex-start;
      align-items: flex-start;
  }

  .u-items-end {
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      -ms-grid-row-align: flex-end;
      align-items: flex-end;
  }

  .u-items-center {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      -ms-grid-row-align: center;
      align-items: center;
  }

  .u-items-baseline {
      -webkit-box-align: baseline;
      -webkit-align-items: baseline;
      -ms-flex-align: baseline;
      -ms-grid-row-align: baseline;
      align-items: baseline;
  }

  .u-items-stretch {
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      -ms-grid-row-align: stretch;
      align-items: stretch;
  }

  .u-self-start {
      -webkit-align-self: flex-start;
      -ms-flex-item-align: start;
      align-self: flex-start;
  }

  .u-self-end {
      -webkit-align-self: flex-end;
      -ms-flex-item-align: end;
      align-self: flex-end;
  }

  .u-self-center {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
  }

  .u-self-baseline {
      -webkit-align-self: baseline;
      -ms-flex-item-align: baseline;
      align-self: baseline;
  }

  .u-self-stretch {
      -webkit-align-self: stretch;
      -ms-flex-item-align: stretch;
      align-self: stretch;
  }

  .u-justify-start {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
  }

  .u-justify-end {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
  }

  .u-justify-center {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
  }

  .u-justify-between {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
  }

  .u-justify-around {
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      justify-content: space-around;
  }

  .u-content-start {
      -webkit-align-content: flex-start;
      -ms-flex-line-pack: start;
      align-content: flex-start;
  }

  .u-content-end {
      -webkit-align-content: flex-end;
      -ms-flex-line-pack: end;
      align-content: flex-end;
  }

  .u-content-center {
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
  }

  .u-content-between {
      -webkit-align-content: space-between;
      -ms-flex-line-pack: justify;
      align-content: space-between;
  }

  .u-content-around {
      -webkit-align-content: space-around;
      -ms-flex-line-pack: distribute;
      align-content: space-around;
  }

  .u-content-stretch {
      -webkit-align-content: stretch;
      -ms-flex-line-pack: stretch;
      align-content: stretch;
  }

  .u-flex-auto {
      -webkit-box-flex: 1;
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      min-width: 0;
      min-height: 0;
  }

  .u-flex-none {
      -webkit-box-flex: 0;
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
  }

  .u-order-0 {
      -webkit-box-ordinal-group: 1;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;
  }

  .u-order-1 {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
  }

  .u-order-2 {
      -webkit-box-ordinal-group: 3;
      -webkit-order: 2;
      -ms-flex-order: 2;
      order: 2;
  }

  .u-order-3 {
      -webkit-box-ordinal-group: 4;
      -webkit-order: 3;
      -ms-flex-order: 3;
      order: 3;
  }

  .u-order-last {
      -webkit-box-ordinal-group: 100000;
      -webkit-order: 99999;
      -ms-flex-order: 99999;
      order: 99999;
  }

  .u-relative {
      position: relative;
  }

  .u-absolute {
      position: absolute;
  }

  .u-fixed {
      position: fixed;
  }

  .u-top-0 {
      top: 0;
  }

  .u-right-0 {
      right: 0;
  }

  .u-bottom-0 {
      bottom: 0;
  }

  .u-left-0 {
      left: 0;
  }

  .u-z-1 {
      z-index: -1;
  }
  .u-z-2 {
      z-index: -2;
  }
  .u-z-100 {
      z-index: -100;
  }

  .u-z1 {
      z-index: 1;
  }

  .u-z2 {
      z-index: 2;
  }

  .u-z3 {
      z-index: 3;
  }

  .u-z4 {
      z-index: 4;
  }

  .u-border {
      border-style: solid;
      border-width: 1px;
  }

  .u-border-top {
      border-top-style: solid;
      border-top-width: 1px;
  }

  .u-border-right {
      border-right-style: solid;
      border-right-width: 1px;
  }

  .u-border-bottom {
      border-bottom-style: solid;
      border-bottom-width: 1px;
  }

  .u-border-left {
      border-left-style: solid;
      border-left-width: 1px;
  }

  .u-border-none {
      border: 0;
  }

  .u-rounded {
      border-radius: 3px;
  }

  .u-rounded-5 {
      border-radius: 5px;
  }

  .u-circle {
      border-radius: 50%;
  }

  .u-rounded-top {
      border-radius: 3px 3px 0 0;
  }

  .u-rounded-right {
      border-radius: 0 3px 3px 0;
  }

  .u-rounded-bottom {
      border-radius: 0 0 3px 3px;
  }

  .u-rounded-left {
      border-radius: 3px 0 0 3px;
  }

  .u-not-rounded {
      border-radius: 0;
  }

  .u-hide {
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
  }

  .u-xs-hide {
      @media (max-width: 639px) {
          display: none;
      }
  }

  .u-sm-hide {
      @media (min-width: 640px) and (max-width: 831px) {
          display: none;
      }
  }

  .u-md-hide {
      @media (min-width: 832px) and (max-width: 1023px) {
          display: none;
      }
  }

  .u-lg-hide {
      @media (min-width: 1024px) {
          display: none;
      }
  }

  .u-display-none {
      display: none !important;
  }

  .u-inline {
      display: inline;
  }


  .u-inline-block {
      display: inline-block;
  }

  .u-inline-flex {
      display: inline-flex;
  }

  .loading-loader {
      top: 45%;
      position: relative;
      text-align: center;
  }

  .loading-container {
      position: fixed;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 99999999 !important;
      background-color: rgba(138, 138, 138, 0.3) !important;
  }

  .breadcrumb {
      margin-bottom: 16px;
      color: gray;
      text-align: right;
      a {
          color: gray;
      }
  }

  .main-content {
      width: 100%;
      height: auto;
      padding: 16px;
      background: white;
      border-radius: 8px;
  }

  .u-m16 {
      margin: 16px;
  }

  .u-text-light{
      color: #fff
  }

  .u-h-100{
      height: 100%
  }

  .u-h-min-content {
      height: min-content;
  }

  .u-h-icon {
      height: 130px;
  }

  .u-pointer {
      cursor: pointer;
  }

  .ant-upload {
      width: 100%;
  }

  .u-display-none {
      display: none;
  }

  .u-border-color {
      border-color: #D9D9D9;
  }

  .u-border-color-grey {
      border-color: #F0F0F0;
  }

  .u-height-330 {
      height: 330px;
  }

  .button-warning {
      background-color: #faad14;
      border-color: #faad14;
      color: #fff;

      &:hover,
      &:focus,
      &:focus-within {
          background-color: #fdba2b;
          border-color: #fdba2b;
          color: #fff;
      }

      &:active {
          background-color: #ef9d06;
          border-color: #ef9d06;
          color: #fff;
      }
  }

  .u-color-white{
      color: #FFFFFF;
  }

  .u-color-gray{
      color: gray;
  }

  .u-gap15{
      gap: 15px;
  }

  .u-mb-24{
      margin-bottom: 24px;
  }

  .u-background-replacement-red {
      background-color: #ffadad !important;
  }

  .u-background-replacement-blue {
      background-color: #54bded !important;
  }
  .u-background-white {
      background-color: #fff !important;
  }

  .u-background-green {
      background-color: #B7EB8F;
  }

  .u-min-20{
      min-width: 20%;
  }

  .u-text-blue{
      color: #00C0EF;
  }

  .u-bg-error{
      background: #B52025;
  }

  .u-bg-blue{
      background: #30BCED;
  }

  .u-bg-green{
      background: #27C884;
  }

  .u-btn-error{
      background: #B52025;
      color: white;
      border-color: #B52025;

      &:hover{
          background: #B52025;
          color: white;
          border-color: #B52025;
      }
  }

  .u-btn-blue-light{
      background: #30BCED;
      color: white;
      border-color: #30BCED;
      &:hover{
          background: #30BCED;
          color: white;
          border-color: #30BCED;
      }
  }

  .u-text-red{
      color: #B52025;
  }

  .u-text-green {
      color: #52C41A;
  }

  .u-border-color-grey{
    border-color: #E9E9E9
  }

  .u-max-h80{
      max-height: 80px;
  }

  .u-text-blue-link{
      color: #1890FF;
      :hover {
          color: #006ad4
      }
  }

  .u-py05 {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }

  .u-bg-gray{
      background-color: #f5f5f5;
  }

  .u-text-gray{
      color: rgba(0, 0, 0, 0.25);
  }

  .u-mandatory-star{
    color: #c24242;
    font-size: 12px;
  }



  .u-color-success {
    color: #52c41a;
  }

  .u-color-danger {
    color: #f5222d
  }

  .u-font-size-1 {
    font-size: 1rem
  }
  .u-font-size-2 {
    font-size: 1.5rem
  }
`;
