import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './app/store.js';
import { fetchCountries } from './features/countries/countrySlice.js';
import { fetchAuthUser } from './features/users/userSlice.js';
import { fetchImages, fetchTestimonies } from './features/images/imageSlice.js';
import { fetchQuestions } from './features/questions/questionSlice.js';

store.dispatch(fetchCountries());
store.dispatch(fetchAuthUser());
store.dispatch(fetchImages());
store.dispatch(fetchTestimonies());
store.dispatch(fetchQuestions());

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
