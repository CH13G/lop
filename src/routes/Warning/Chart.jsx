import { Component } from 'react';
import GM from 'g2-mobile';
export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.id = `id-${new Date().getTime()}`;
    this.state = {
      width: '100vw',
      height: '45vw',
    };
  }

  componentDidMount() {
    const { data } = this.props;
    GM.Global.pixelRatio = 3;
    this.chart = new GM.Chart({
      id: this.id,
      width: 300,
      height: 200,
    });
    this.initChart(this.chart, data);
  }

  componentWillUpdate(props) {
    if (JSON.stringify(props) !== JSON.stringify(this.props)) {
      this.initChart(this.chart, props.data);
    }
  }

  initChart=(node, data) => {
    if (!Array.isArray(data) || data.length < 1) {
      return null;
    }
    const Util = GM.Util;
    const labelCss = {
      fill: '#979797',
      font: '14px san-serif',
      offset: 6,
    };
    node
    .source(data, {
      time: {
        type: 'timeCat',
        mask: 'HH:MM',
        tickCount: 7,
        range: [0, 1],
      },
      tem: {
        tickCount: 5,
        nice: false,
      },
    });
    node
      .axis('tem', {
        label: null,
        line: {
          lineWidth: 1,
          stroke: '#eee',
        },
        grid: text => {
          return { stroke: '#eee' };
        },
      });
    node
      .axis('time', {
        //line: null,
        // tickLine: {
        //   lineWidth: 1,
        //   value: 5,
        //   stroke: 'red',
        // },
        label: function (text, index, total) {
          const cfg = Util.mix({}, labelCss);
          // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
          if (index === 0) {
           // cfg.textAlign = 'start';
            cfg.translate = '(-10px, 0)';
          }
          if (index > 0 && index === total - 1) {
           // cfg.textAlign = 'end';
          }
          return cfg;
        },
        grid: text => {
          return { stroke: '#fff' };
        },
      });
    node
      .area()
      .position('time*tem')
      .shape('smooth')
      .color('city', ['#8bc8f5'])
      .style({
        opacity: 0.6,
      });

      node
        .line()
        .position('time*tem')
        .shape('smooth')
        .color('city', ['#8bc8f5'])
        .size(2)
        .style({
          opacity: 1,
        });
    node.render();
  }

  render() {
    const style = { ...this.state };
    return <canvas style={style} id={this.id} />;
  }
}
