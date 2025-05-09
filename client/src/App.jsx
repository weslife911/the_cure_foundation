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
import { useSelector } from "react-redux";
import { getUserStatus } from "./features/users/userSlice";
import { getCountryStatus } from "./features/countries/countrySlice";
import { getImageStatus } from "./features/images/imageSlice";
import { getQuestionStatus } from "./features/questions/questionSlice";

function App() {

  const jwt = Cookies.get("jwt");

  console.log(jwt)

  const userStatus = useSelector(getUserStatus);
  const countryStatus = useSelector(getCountryStatus);
  const imageStatus  = useSelector(getImageStatus);
  const questionStatus = useSelector(getQuestionStatus);

  if(userStatus === "pending" || countryStatus === "pending" || imageStatus === "pending" || questionStatus === "pending") return <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>

  return (
    <>

      <Header/>

      <Routes>
        {/* Guest Routes */}

        <Route path="/about" element={ !jwt ? <AboutPage/> : <Navigate to="/" />} />
        <Route path="/activities" element={ !jwt ? <ActivitiesPage/> : <Navigate to="/" />} />
        <Route path="/services" element={ !jwt ? <ServicesPage/> : <Navigate to="/" />} />
        <Route path="/testimonials" element={ !jwt ? <TestimonialsPage/> : <Navigate to="/" />} />

        {/* Guest Routes */}

        {/* Auth Routes */}

        <Route path="/login" element={ !jwt ? <LoginPage/> : <Navigate to="/" />} />
        <Route path="/signup" element={ !jwt ? <SignupPage/> : <Navigate to="/" />} />
        <Route path="/confirm-email" element={ !jwt ? <ConfirmEmailPage/> : <Navigate to="/" />} />
        <Route path="/reset-password" element={ !jwt ? <ResetPasswordPage/> : <Navigate to="/" />} />

        {/* Auth Routes */}

        {/* Verified Routes */}

        <Route path="/ca" element={ jwt ? <CAPage/> : <Navigate to="/" />} />
        <Route path="/gce" element={ jwt ? <GCEPage/> : <Navigate to="/" />} />
        <Route path="/notes" element={ jwt ? <NotesPage/> : <Navigate to="/" />} />
        <Route path="/profile" element={ jwt ? <ProfilePage/> : <Navigate to="/" />} />
        <Route path="/results" element={ jwt ? <ResultsPage/> : <Navigate to="/" />} />
        <Route path="/revision" element={ jwt ? <RevisionPage/> : <Navigate to="/" />} />

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
