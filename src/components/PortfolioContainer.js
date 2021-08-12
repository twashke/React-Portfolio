import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

// Styling Added
const styles = {
    background: {
        backgroundColor: "black"
    }
}

// Export the Function
export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={styles.background}>
            <Header />
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
            <Footer />
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
                </style>
        </div>
    );
}