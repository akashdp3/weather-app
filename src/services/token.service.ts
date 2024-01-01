class _AuthTokenService {
  constructor() {
    this._authToken = "";
  }

  getAuthToken() {
    return this._authToken;
  }

  setAuthToken() {
    this._authToken = import.meta.env.VITE_AUTH_TOKEN;
  }
}

const AuthTokenService = new _AuthTokenService();
export default AuthTokenService;
