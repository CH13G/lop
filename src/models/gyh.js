import {
  getNoteInfo,
  setNoteInfo,
} from '#/services';

export default {
  namespace: 'Warning',
  state: {
    noteMessage: {},
    payData: [],
    isSuccessed: false,
  },

  effects: {
    *getNoteMassage(action, { call, put }) {
      const data = yield call(getNoteInfo, {});
      if (data.data.stat === 'ok') {
        yield put({
          type: 'setState',
          noteMessage: data.data.data.value,
          payData: data.data.payData,
        });
      }
    },

    *setNoteMassage(action, { call, put }) {
      const res = yield call(setNoteInfo, action.payload);
      if (res.data.stat === 'ok') {
        yield put({
          type: 'setState',
          isSuccessed: true,
        });
        action.callback();
      }
    },
  },
  reducers: {
    setState(state, action) {
      return { ...state, ...action };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/warning' || location.pathname === '/') {
          dispatch({ type: 'getNoteMassage' });
        }
      });
    },
  },
};
