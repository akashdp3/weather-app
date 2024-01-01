import axios from "axios";

import AuthTokenService from "./token.service";

class _HTTPService {
  _apiDomain = "https://api.openweathermap.org/data/2.5/";

  prepareURL(url: string) {
    return `${this._apiDomain}${url}`;
  }

  get(url: string, params: Object) {
    const reqConfig = {
      method: "get",
      url,
      params: {
        ...params,
        appid: AuthTokenService.getAuthToken()
      }
    };
    return this.processRequest(reqConfig);
  }

  processRequest(reqConfig) {
    const config = {
      ...reqConfig,
      url: this.prepareURL(reqConfig.url)
    };

    return axios(config)
      .then((response) => {
        if (
          response &&
          response.status &&
          response.status >= 200 &&
          response.status < 300
        ) {
          return response;
        }
        throw Error(response.statusText);
      })
      .catch((error) => {
        if (error && error.response && error.response.status === 401) {
          // handle Un-authorized API requests
          return Promise.reject(error.response);
        }
        if (error.message === "Network Error") {
          return Promise.reject(error);
        }
        if (
          error.response &&
          (error.response.status > 500 ||
            [404, 403, 400].includes(error.response.status))
        ) {
          return Promise.reject(error.response);
        }
        if (error.response && error.response.status >= 500) {
          // handle API server errors in generic way. eg. show "Something went error" in modal
          return Promise.reject(error.response);
        }
        return Promise.reject(error);
      });
  }
}

const HTTPService = new _HTTPService();
export default HTTPService;
