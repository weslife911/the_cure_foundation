import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AboutPage from "./pages/guest/AboutPage";
import ActivitiesPage from "./pages/guest/ActivitiesPage";
import ServicesPage from "./pages/guest/ServicesPage";
import TestimonialsPage from "./pages/guest/TestimonialsPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ConfirmEmailPage from "./pages/auth/ConfirmEmailPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import CAPage from "./pages/verified/CAPage";
import GCEPage from "./pages/verified/GCEPage";
import ProfilePage from "./pages/verified/ProfilePage";
import ResultsPage from "./pages/verified/ResultsPage";
import RevisionPage from "./pages/verified/RevisionPage";
import NotesPage from "./pages/verified/NotesPage";
import NotFoundPage from "./pages/fallback/NotFoundPage";
import ContactPage from "./pages/common/ContactPage";
import HomePage from "./pages/common/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookies from "js-cookie";

function App() {

  const jwt = Cookies.get("jwt");
  const token = localStorage.getItem("token");

  console.log(jwt);

  return (
    <>

      <Header/>

      <Routes>
        {/* Guest Routes */}

        <Route path="/about" element={ !jwt || !token ? <AboutPage/> : <Navigate to="/" />} />
        <Route path="/activities" element={ !jwt || !token ? <ActivitiesPage/> : <Navigate to="/" />} />
        <Route path="/services" element={ !jwt || !token ? <ServicesPage/> : <Navigate to="/" />} />
        <Route path="/testimonials" element={ !jwt || !token ? <TestimonialsPage/> : <Navigate to="/" />} />

        {/* Guest Routes */}

        {/* Auth Routes */}

        <Route path="/login" element={ !jwt || !token ? <LoginPage/> : <Navigate to="/" />} />
        <Route path="/signup" element={ !jwt || !token ? <SignupPage/> : <Navigate to="/" />} />
        <Route path="/confirm-email" element={ !jwt || !token ? <ConfirmEmailPage/> : <Navigate to="/" />} />
        <Route path="/reset-password" element={ !jwt || !token ? <ResetPasswordPage/> : <Navigate to="/" />} />

        {/* Auth Routes */}

        {/* Verified Routes */}

        <Route path="/ca" element={ jwt || token ? <CAPage/> : <Navigate to="/" />} />
        <Route path="/gce" element={ jwt || token ? <GCEPage/> : <Navigate to="/" />} />
        <Route path="/notes" element={ jwt || token ? <NotesPage/> : <Navigate to="/" />} />
        <Route path="/profile" element={ jwt || token ? <ProfilePage/> : <Navigate to="/" />} />
        <Route path="/results" element={ jwt || token ? <ResultsPage/> : <Navigate to="/" />} />
        <Route path="/revision" element={ jwt || token ? <RevisionPage/> : <Navigate to="/" />} />

        {/* Verified Routes */}

        {/* Fallback Route */}

        <Route path="/*" element={<NotFoundPage/>} />

        {/* Fallback Route */}

        {/* Common Routes */}

        <Route path="/" element={<HomePage/>} /> 
        <Route path="/contact" element={<ContactPage/>} />

        {/* Common Routes */}

      </Routes>

      <Footer/>

      <Toaster/>
    </>
  )
}

export default App
