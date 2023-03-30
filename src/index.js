import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './components/home/home';
import Services from './components/agencyServices/services'
import AgencyMethodology from './components/agencyMethod/methodology';
import Results from './components/results/results';
import BoxPrices from './components/BoxPrices/boxPrices';
import ParaQuem from './components/paraquemE/paraQuem';
import Oque from './components/empresaPrecisa/oQue';
import CommonQuestions from './components/CommonQuestions/commonQuestions';
import WhoIsEntony from './components/WhoIsEntony/whoIsEntony';
import Time from './components/Time/time';
import TrabalheConosco from './components/TrabalheConosco/workWithUs';
import Footer from './components/Footer/Footer';



import './styles/global.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Services />
    <AgencyMethodology />
    <Results />
    <BoxPrices/>
    <ParaQuem />
    <Oque />
    <CommonQuestions />
    <WhoIsEntony />
    <Time />
    <TrabalheConosco />
    <Footer /> 
  </React.StrictMode>
);