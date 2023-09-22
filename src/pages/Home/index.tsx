import React from 'react';
import Style from './home.module.scss';
import Presentation from '../../layout/Presentation/index';

function Home() {
  return (
    <section className={`flex flex-col ${Style.app}`}>
        <div className={` ${Style.block1} h-screen`}>
          <Presentation />
          <div className="container relative flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className={Style.wavy}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L24,58.7C48,53,96,43,144,58.7C192,75,240,117,288,144C336,171,384,181,432,176C480,171,528,149,576,160C624,171,672,213,720,202.7C768,192,816,128,864,122.7C912,117,960,171,1008,165.3C1056,160,1104,96,1152,80C1200,64,1248,96,1296,112C1344,128,1392,128,1416,128L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
            </div>
          </div>
        </div>
      
        <div className={` ${Style.block2} h-screen hidden`}>
          <div className="container relative flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
              <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Bloco 1</h1>
            </div>
          </div>
        </div>

        <div className={` ${Style.block3} h-screen bg-indigo-900 hidden`}>
          <div className="container relative flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
              <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Bloco 2</h1>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Home;
