import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './app/store.js';
import { fetchCountries } from './features/countries/countrySlice.js';
import { fetchAuthUser } from './features/users/userSlice.js';

store.dispatch(fetchCountries());
store.dispatch(fetchAuthUser());

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
