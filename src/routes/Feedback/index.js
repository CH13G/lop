import React from 'react';
import { connect } from 'dva';
import style from './style.less';
import { List, InputItem, Toast, TextareaItem} from 'antd-mobile';
import { createForm } from 'rc-form';


const Title = () => (
    <div className={style.outer}>
        <a href="" className={style.back}>返回</a>
        <div className={style.inner}> 意见反馈</div>
        <a href="" className={style.feedback}>提交</a>
    </div>
);


class TextareaItemExample extends React.Component {
  state = {
    focused: false,
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className={style.inp}>
          <TextareaItem className={style.texts}
            {...getFieldProps('note1')}
            autoFocus={true}
            placeholder="输入意见"
            count={1000}
            rows={8}
          />
      </div>
    );
  }
}


const TextareaItemExampleWrapper = createForm()(TextareaItemExample);

class ErrorInputExample extends React.Component {
  state = {
    hasError: false,
    value: '',
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  render() {
    return (
      <List className={style.visit} renderHeader={() => '需要回访可填手机'}>
        <InputItem className={style.tel}
          type="phone"
          placeholder="需要回访问时请输入"
          error={this.state.hasError}
          onErrorClick={this.onErrorClick}
          onChange={this.onChange}
          value={this.state.value}
        >手机号</InputItem>
      </List>
    );
  }
}


const Feedback = () => (<div className={style.total}>
    <Title />
    <TextareaItemExampleWrapper />
    <ErrorInputExample />

</div>);
const mapStateToProps = (state) => {
    return { ...state };
};
export default connect(mapStateToProps)(Feedback);
