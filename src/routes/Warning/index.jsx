import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { ellipisName, ellipisPID, ellipisCompany, ellipisPIDs } from '#/services';
import Chart from './Chart';
import { Link } from 'dva/router';
import classNames from 'classnames';
import { createForm } from 'rc-form';
import {
  Picker,
  List,
  Toast,
  Card,
  Flex,
  WingBlank,
  Button,
} from 'antd-mobile';
import style from './style.less';


const Title = () => (
  <div className={style.outer}>
    <div className={style.inner}>
      告警详情
      <Link to='/feedback' >意见反馈</Link>
    </div>
  </div>
);

const NoteContent = (props) => {
  const data = _.get(props, 'Warning.noteMessage', {});
  return data
    ? (
      <div className={style.NotContents}>
        <div className={style.NotContent}>
          <div className={style.title}>
            {
              `${ellipisCompany(data.company)}(${ellipisPID(data.id)})`
            }
          </div>
          <div className={style.note}>
            {
              `贵司(${ellipisPIDs(data.id)})的下家商户
              ${ellipisName(data.name)}(${ellipisPID(data.id)})于
              ${data.time}
              智能规则判断交易支付跌0，请核查（如果是签约账户切换请忽略）。`
            }
          </div>
        </div>
      </div>
    )
    : null;
};

const Pay = () => (<div className={style.pay} >支付创建笔数</div>);
const LoginControl = () => (
  <div >
    <span className={style.pay}>查看完整数据</span>
    <a href='' className={style.login} >登录云监控</a>
    <span className={style.pay}>（确保本手机登录的支付宝是该签约账号)</span>
  </div>
);
const Dayta = (props) => (
  <div className={style.dayta}>
    <Card full className={style.topLine}>
      <Card.Header title={<div>{Pay()}</div>} />
      <Card.Body className={style.tab} >
        <Chart data={props.data} />
      </Card.Body>
      <Card.Footer content={<div>{LoginControl()}</div>} />
    </Card>
  </div>
);

class Test extends React.Component {
  state = {
    label: '网络问题',
    value: '340000',
    data: [
      { value: '340000', label: '网络问题' },
      { value: '820000', label: '服务器问题' },
      { value: '110000', label: '数据库问题' },
      { value: '450000', label: '代码问题' },
      { value: '810000', label: '其他问题' },
    ],
  };

  successToast = () => {
    Toast.success('提交成功');
  }

  render() {
    // const { getFieldProps } = this.props.form;
    const { data } = this.state;
    return (<div className={style.buttonwrap}>
        <Picker
          className={style.lists}
          title={this.state.label}
          data={this.state.data}
          cols={1}
          value={[this.state.value]}
          onOk={val => {
            this.props.dispatch({
              type: 'Warning/setNoteMassage',
              payload: val,
              callback: this.successToast,
            });
          }}
          onPickerChange={
           (item) => {
            const datum = data.find(val => val.value == item);
            this.setState({ ...datum });
           }
          }
        >
          <List.Item align="middle" extra="" className={style.picker}>已修复</List.Item>
        </Picker>
    </div>);
  }
}
const TestWrapper = createForm()(Test);

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    // this.distortHandler = this.distortHandler.bind(this);
    this.state = {
      isDisabled: false,
    };
  }

  distortHandler = (e) => {
    e.preventDefault();
    this.successToast();
    this.setState({
      isDisabled: true,
    });
  }

  successToast=() => {
    Toast.success('提交成功');
  }
  render() {
    const { isDisabled } = this.state;
    const isSuccessed = _.get(this.props, 'Warning.isSuccessed', false);
    return (
      <WingBlank className={style.foot}>
        <Flex justify='around'>
          <Button
            className={classNames(style.btn, style['flex-center'], { [style.full]: isDisabled, [style.hidden]: isSuccessed })}
            inline
            size='small'
            disabled={isDisabled}
            onClick={this.distortHandler}
          >
            误报
          </Button>
          <Button
            className={classNames(style.btn, { [style.hidden]: isDisabled, [style.full]: isSuccessed })}
            inline size="small"
            disabled={isSuccessed}
            type="primary">
            {<div><TestWrapper {...this.props} /></div>}
          </Button>
        </Flex>
        <div className={style.accredit}>我不是最合适的处理人，<a href=''>授权他人处理</a></div>
      </WingBlank>
    );
  }
}

const Warning = props => (
  <div className={style.Components}>
    <Title />
    <NoteContent {...props} />
    <Dayta data={props.payData} />
    <Buttons {...props} />
  </div>
);

const mapStateToProps = (state) => {
  return { ...state, payData: state.Warning.payData };
};
export default connect(mapStateToProps)(Warning);
