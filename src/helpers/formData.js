import axios from 'axios';
import FormData from 'form-data';

export const formData = async (state) => {
    let data = new FormData();
    data.append("your-name", state.name);
    data.append("your-email", state.email);
    data.append("your-subject", 'From Contact Form(website)');
    data.append("your-message", state.message);

    let config = {
        method: 'post',
        url: `${process.env.REACT_APP_CONTACT_US_API}`,
        data: data
    }
    let res = await axios(config)
  /*   console.log(res) */
    return res
}