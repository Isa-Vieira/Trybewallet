import getApi from '../../services/chamaApi';

export const THUNK2 = 'THUNK2';
export const USER = 'USER';
export const CARACTERS_DESPESAS = 'CARACTERS_DESPESAS';

export const newAction = (payload) => ({ type: USER, payload });
export const despesasAction = (payload) => ({ type: CARACTERS_DESPESAS, payload });

export const thunk = (payload) => ({ type: THUNK2, payload });
export const TIPO_MOEDA = 'TIPO_MOEDA';
export const valorMoeda = (payload) => ({ type: TIPO_MOEDA, payload });
export const getApiAction = () => async (dispatch) => {
  const response = await getApi();
  delete (response.USDT);
  const payload = response;
  const recebeSiglas = Object.keys(payload);
  dispatch(valorMoeda(recebeSiglas));
};

export const thunkState = (payload) => async (dispatch) => {
  const exchangeRates = await getApi();
  const novoObject = { ...payload, exchangeRates };
  dispatch(despesasAction(novoObject));
  /*   const objState  */
};
export const removeThunk = (info) => (dispatch) => {
  const { id, expensesTable } = info;
  const newObject = expensesTable.filter((elem) => elem.id !== Number(id));
  dispatch(thunk(newObject));
};
