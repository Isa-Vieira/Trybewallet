import getApi from '../../services/chamaApi';

export const USER = 'USER';
export const CARACTERS_DESPESAS = 'CARACTERS_DESPESAS';

export const newAction = (payload) => ({ type: USER, payload });
export const despesasAction = (payload) => ({ type: CARACTERS_DESPESAS, payload });

export const TIPO_MOEDA = 'TIPO_MOEDA';
export const valorMoeda = (payload) => ({ type: TIPO_MOEDA, payload });
export const getApiAction = () => async (dispatch) => {
  const response = await getApi();
  delete (response.USDT);
  const payload = response;
  const recebeSiglas = Object.keys(payload);
  dispatch(valorMoeda(recebeSiglas));
};
