import Base from "./component/Base";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import WebDevelopment from "./pages/WebDevelopment";
import SEO from "./pages/SEO";
import SocialMedia from "./pages/SocialMedia";
import Ecommerce from "./pages/Ecommerce";
import PPCmarketing from "./pages/PPCmarketing";
import Software from "./pages/Software";
import Android from "./pages/Android";
import ProductDevelopment from "./pages/ProductDevelopment";
import Career from "./pages/Career";
import ApplyForm from "./pages/ApplyForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CompanyPolicy from "./pages/CompanyPolicy";
import Founder from "./pages/Founder";


function App() {
  return (
    <div className="App">
    <BrowserRouter>  
    <Base>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="about"  element={<About/>}/> 
        <Route path="contact"  element={<Contact/>}/>
        <Route path="portfolio"  element={<Portfolio/>}/>
        <Route path="web-development"  element={<WebDevelopment/>}/> 
        <Route path="seo"  element={<SEO/>}/>
        <Route path="social-media-marketing"  element={<SocialMedia/>}/>
        <Route path="e-commerce-marketing"  element={<Ecommerce/>}/>
        <Route path="ppc-marketing"  element={<PPCmarketing/>}/>
        <Route path="software-developemnt"  element={<Software/>}/>
        <Route path="mobile-app-development"  element={<Android/>}/>
        <Route path="product-development"  element={<ProductDevelopment/>}/>
        <Route path="career"  element={<Career/>}/>
        <Route path="apply"  element={<ApplyForm/>}/>
        <Route path="privacy-policy"  element={<PrivacyPolicy/>}/>
        <Route path="company-policy"  element={<CompanyPolicy/>}/>
        <Route path="our-founder"  element={<Founder/>}/>
      </Routes>
    </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
