import { INIT_TRAINING } from './types';
import serviceServices from '../services/services';

export const trainingServiceData = () => async (dispatch) => {
  const trainings = await serviceServices.getTrainingService();
  dispatch({
    type: INIT_TRAINING,
    payload: trainings,
  });
};
