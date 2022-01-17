import { CONTACT_FORM_NOTIFICATION, CONTACT_FORM_NOTIFICATION_ERROR } from '../actions/types';
import axios from 'axios';
import FormData from 'form-data';

export const formData = (state) => async (dispatch) => {
  let data = new FormData();
  data.append('your-name', state.name);
  data.append('your-email', state.email);
  data.append('your-subject', 'From Contact Form(website)');
  data.append('your-message', state.message);
  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_CONTACT_US_API}`,
    data: data,
  };
  try {
    let res = await axios(config);
    dispatch({
      type: CONTACT_FORM_NOTIFICATION,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_FORM_NOTIFICATION_ERROR,
      payload: {
        status: 'error',
        message: 'Network Error.Please check your connection!',
      },
    });
  }
};
