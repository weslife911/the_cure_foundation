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

function App() {

  const token = localStorage.getItem("token");

  return (
    <>

      <Header/>

      <Routes>
        {/* Guest Routes */}

        <Route path="/about" element={ !token ? <AboutPage/> : <Navigate to="/" />} />
        <Route path="/activities" element={ !token ? <ActivitiesPage/> : <Navigate to="/" />} />
        <Route path="/services" element={ !token ? <ServicesPage/> : <Navigate to="/" />} />
        <Route path="/testimonials" element={ !token ? <TestimonialsPage/> : <Navigate to="/" />} />

        {/* Guest Routes */}

        {/* Auth Routes */}

        <Route path="/login" element={ !token ? <LoginPage/> : <Navigate to="/" />} />
        <Route path="/signup" element={ !token ? <SignupPage/> : <Navigate to="/" />} />
        <Route path="/confirm-email" element={ !token ? <ConfirmEmailPage/> : <Navigate to="/" />} />
        <Route path="/reset-password" element={ !token ? <ResetPasswordPage/> : <Navigate to="/" />} />

        {/* Auth Routes */}

        {/* Verified Routes */}

        <Route path="/ca" element={ token ? <CAPage/> : <Navigate to="/" />} />
        <Route path="/gce" element={ token ? <GCEPage/> : <Navigate to="/" />} />
        <Route path="/notes" element={ token ? <NotesPage/> : <Navigate to="/" />} />
        <Route path="/profile" element={ token ? <ProfilePage/> : <Navigate to="/" />} />
        <Route path="/results" element={ token ? <ResultsPage/> : <Navigate to="/" />} />
        <Route path="/revision" element={ token ? <RevisionPage/> : <Navigate to="/" />} />

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
