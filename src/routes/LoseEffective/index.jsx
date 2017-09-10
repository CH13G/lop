import React from 'react';
import { connect } from 'dva';
import style from './style.less';
import { Result, Icon } from 'antd-mobile';

const svg = require('#/svg/notice.svg');


const Title = () => (
  <div style={{ padding: '.2rem 0', width: '100%', borderBottom: '0.05rem solid #f6f6f6', textAlign: 'center', fontSize: '.4rem', color: '#6c6d6d' }}>
      提示
  </div>
);

const LoseEffective = () => (<div>
  <Title />
  <Result
    img={<Icon type={svg} className="icon" style={{ fill: '#1F90E6' }} />}
    title="链接已失效"
    message="推荐使用云监控查看业务异常"
    message="请登录https://openmonitor.alipay.com"
  />
</div>);
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(LoseEffective);
