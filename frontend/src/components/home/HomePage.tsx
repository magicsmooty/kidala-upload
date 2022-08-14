import React from 'react';
import Footer from '../navigation/Footer';
// import Ads from '../myads/ads';
import UploadForm from './upload/UploadForm';

function HomePage() {
    return (
        <div className="page flex items-center justify-center flex-col bg-sky-900">
            <h1 className="mb-5 text-white font-mono">kidala upload</h1>

            <UploadForm />

            <Footer />
            {/* <Ads /> */}
        </div>
    );
}

export default HomePage;
