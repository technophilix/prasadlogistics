import React, {useEffect, useState} from 'react';
import Header from '../Component/Header';
import Footer from "../Component/Footer";

const Layout = (WrappedComponent) => {
    const ComponentWithLayout = () => {


        return (
            <>
                <div className="admin-layout">
                    <Header />
                <WrappedComponent />
                  <Footer />
                </div>


            </>
        );
    };

    return ComponentWithLayout;
};

export default Layout;