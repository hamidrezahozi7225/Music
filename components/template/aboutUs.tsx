import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import styles from './aboutUs.module.css';
import OriginalAbout from '../module/about-us/originalAbout';
import TrckAbout from '../module/about-us/trckAbout';
import AlbmAbout from '../module/about-us/albmAbout';
import All from '../module/about-us/all';

const AboutUs = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'Home' },
    { title: 'Track' },
    { title: 'Albums' },
    { title: 'All' },
  ];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <OriginalAbout />;
      case 1:
        return <TrckAbout />;
      case 2:
        return <AlbmAbout />;
      case 3:
        return <All />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Stepper steps={steps} activeStep={activeStep} />
        {getSectionComponent()}
      </div>
      <div className={styles.btn} style={{ padding: '20px' }}>
        <button
          disabled={activeStep == 0}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Previous
        </button>
        <button
          disabled={activeStep == steps.length - 1}
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default AboutUs;
