import { INIT_RESOURCES } from './types';
import resourceServices from '../services/resources';


export const getResourcesData = () => async dispatch => {
    const services = await resourceServices.getResources();
    dispatch({
        type: INIT_RESOURCES,
        payload: services
    })
}