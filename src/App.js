import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from 'react-router-dom';

import Homepage, {
    Navbar,
    Footer,
    PageSEO
} from './Homepage/Homepage';

import './App.css';


// ==========================================
// SCROLL MANAGEMENT
// ==========================================

function ScrollManager() {

    const { pathname, hash } = useLocation();

    useEffect(() => {

        const frame = requestAnimationFrame(() => {

            if (hash) {

                let elementId = hash.substring(1);

                try {
                    elementId = decodeURIComponent(elementId);
                } catch {
                    // Keep the original ID if decoding fails.
                }

                const element =
                    document.getElementById(elementId);

                if (element) {

                    element.scrollIntoView({
                        behavior: 'instant',
                        block: 'start'
                    });

                    return;
                }
            }

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });

        });

        return () => cancelAnimationFrame(frame);

    }, [pathname, hash]);

    return null;
}


// ==========================================
// TEMPORARY PAGE COMPONENT
// ==========================================

// Replace these temporary pages with your actual
// page components when they are ready.

function TemporaryPage({
    title,
    description,
    section
}) {

    return (

        <main className="tb-temporary-page">

            <PageSEO
                title={`${title} | Tiny Bridges`}
                description={description}
            />

            <div className="tb-temporary-decoration tb-decoration-one" />

            <div className="tb-temporary-decoration tb-decoration-two" />

            <div className="tb-temporary-content">

                <span className="tb-eyebrow">
                    TINY BRIDGES
                </span>

                <h1>{title}</h1>

                <p>{description}</p>

                <div className="tb-coming-soon">
                    Coming Soon
                </div>

                <p>
                    We are preparing something meaningful
                    for you. In the meantime, discover
                    more about Tiny Bridges on our homepage.
                </p>

                <div className="tb-button-group">

                    <Link
                        to="/"
                        className="tb-primary-button"
                    >
                        Back to Home
                    </Link>

                    {section && (

                        <Link
                            to={`/#${section}`}
                            className="tb-secondary-button"
                        >
                            Discover More
                        </Link>

                    )}

                </div>

            </div>

        </main>

    );
}


// ==========================================
// PAGE NOT FOUND
// ==========================================

function NotFound() {

    return (

        <main className="tb-temporary-page">

            <PageSEO
                title="Page Not Found | Tiny Bridges"
                description="The requested page could not be found."
            />

            <div className="tb-temporary-content">

                <span className="tb-eyebrow">
                    ERROR 404
                </span>

                <h1>Oops! A little detour.</h1>

                <p>
                    The page you are looking for
                    could not be found.
                </p>

                <Link
                    to="/"
                    className="tb-primary-button"
                >
                    Return to Home
                </Link>

            </div>

        </main>

    );
}


// ==========================================
// APPLICATION
// ==========================================

function App() {

    return (

        <Router>

            <ScrollManager />

            <div className="tb-site">

                {/* Shared navigation */}
                <Navbar />

                <Routes>

                    {/* Homepage */}

                    <Route
                        path="/"
                        element={<Homepage />}
                    />


                    {/* Our Philosophy */}

                    <Route
                        path="/our-philosophy"
                        element={
                            <TemporaryPage
                                title="Our Philosophy"
                                description="Every child has a different way of learning. Discover the beliefs behind Tiny Bridges."
                                section="philosophy"
                            />
                        }
                    />


                    {/* Educational Tools */}

                    <Route
                        path="/educational-tools"
                        element={
                            <TemporaryPage
                                title="Our Educational Tools"
                                description="Discover interactive educational resources designed to encourage meaningful learning through play."
                                section="categories"
                            />
                        }
                    />


                    {/* About Us */}

                    <Route
                        path="/about-us"
                        element={
                            <TemporaryPage
                                title="About Us"
                                description="Discover the story, professional expertise and purpose behind Tiny Bridges."
                                section="about"
                            />
                        }
                    />


                    {/* Learning Resources */}

                    <Route
                        path="/resources"
                        element={
                            <TemporaryPage
                                title="Learning Resources"
                                description="Explore educational insights, practical activities and ideas for parents and professionals."
                                section="resources"
                            />
                        }
                    />


                    {/* How It Works */}

                    <Route
                        path="/how-it-works"
                        element={
                            <TemporaryPage
                                title="How It Works"
                                description="Discover how purposeful activities encourage exploration, participation and learning through play."
                                section="how-it-works"
                            />
                        }
                    />


                    {/* For Parents */}

                    <Route
                        path="/for-parents"
                        element={
                            <TemporaryPage
                                title="For Parents"
                                description="Meaningful ways to support your child's individual learning journey."
                                section="for-parents"
                            />
                        }
                    />


                    {/* For Professionals */}

                    <Route
                        path="/for-professionals"
                        element={
                            <TemporaryPage
                                title="For Professionals"
                                description="Explore purposeful educational resources for children with diverse learning needs."
                                section="for-professionals"
                            />
                        }
                    />


                    {/* Contact Us */}

                    <Route
                        path="/contact-us"
                        element={
                            <TemporaryPage
                                title="Contact Us"
                                description="Have questions about Tiny Bridges or our educational tools? We would love to hear from you."
                                section="contact"
                            />
                        }
                    />


                    {/* Privacy Policy */}

                    <Route
                        path="/privacy-policy"
                        element={
                            <TemporaryPage
                                title="Privacy Policy"
                                description="Our website privacy policy will be available before the official launch."
                            />
                        }
                    />


                    {/* Terms and Conditions */}

                    <Route
                        path="/terms-and-conditions"
                        element={
                            <TemporaryPage
                                title="Terms & Conditions"
                                description="Our terms and conditions will be available before the official launch."
                            />
                        }
                    />


                    {/* Unknown routes */}

                    <Route
                        path="*"
                        element={<NotFound />}
                    />

                </Routes>

                {/* Shared footer */}
                <Footer />

            </div>
s
        </Router>

    );
}

export default App;