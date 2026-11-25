import React, { useState, useEffect } from 'react';

import {
    Link,
    NavLink,
    useLocation
} from 'react-router-dom';

import {
    Menu,
    X,
    Heart,
    Brain,
    Puzzle,
    Hand,
    Shapes,
    Sparkles,
    ArrowRight,
    Star,
    BookOpen,
    Smile,
    MessageCircle,
    Mail,
    ChevronDown,
    Eye,
    Lightbulb,
    Target,
    GraduationCap,
    Users,
    Layers,
    Compass,
    ArrowUpRight
} from 'lucide-react';

import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp
} from 'react-icons/fa';

import './Homepage.css';


// ==========================================
// WEBSITE CONFIGURATION
// ==========================================

const BRAND_NAME = 'Tiny Bridges';

const CONTACT = {
    whatsapp: '',
    email: '',
    instagram: '',
    facebook: ''
};

const SEO_TITLE =
    'Tiny Bridges – Interactive Educational Tools for Children';

const SEO_DESCRIPTION =
    'Discover Tiny Bridges, creating interactive educational tools and learning activities for children to support language, cognitive skills, and learning through play.';


// ==========================================
// LOGO CONFIGURATION
// ==========================================

// Expected logo location:
// src/assets/logo.png
//
// The fallback logo will be displayed until
// the actual logo is added.
//
// This uses Webpack's require.context, which
// is supported by Create React App.

let websiteLogo = null;

try {

    const assets = require.context(
        '../',
        true,
        /^\.\/assets\/logo\.(png|jpg|jpeg|svg|webp)$/i
    );

    const logoFiles = assets.keys();

    if (logoFiles.length > 0) {

        const logoModule = assets(logoFiles[0]);

        websiteLogo =
            logoModule.default || logoModule;

    }

} catch (error) {

    websiteLogo = null;

}


// ==========================================
// NAVIGATION CONFIGURATION
// ==========================================

const navigationLinks = [

    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Our Philosophy',
        href: '/our-philosophy'
    },
    {
        label: 'Educational Tools',
        href: '/educational-tools'
    },
    {
        label: 'About Us',
        href: '/about-us'
    },
    {
        label: 'Resources',
        href: '/resources'
    },
    {
        label: 'Contact',
        href: '/contact-us'
    }

];


// ==========================================
// WELCOME MESSAGES
// ==========================================

const welcomeMessages = [

    'Learning through play.',
    'Growing through discovery.',
    'Celebrating every little step.',
    'Connecting children with learning.',
    'Building bridges to possibilities.'

];


// ==========================================
// PHILOSOPHY VALUES
// ==========================================

const philosophyValues = [

    {
        icon: Heart,
        title: 'Every Child Is Unique',
        description:
            'Each child has individual strengths, interests, abilities and learning needs.'
    },
    {
        icon: Compass,
        title: 'Different Learning Journeys',
        description:
            'Children deserve opportunities that respect their own learning pace and individual differences.'
    },
    {
        icon: Sparkles,
        title: 'Learning Without Limitations',
        description:
            'Learning should be flexible, engaging, accessible and adapted to the child.'
    }

];


// ==========================================
// EDUCATIONAL TOOLS
// ==========================================

const educationalTools = [

    {
        icon: Puzzle,
        title: 'Interactive Activities',
        description:
            'Engaging educational activities that encourage active participation.'
    },
    {
        icon: MessageCircle,
        title: 'Language & Vocabulary',
        description:
            'Exercises that encourage language development and meaningful communication.'
    },
    {
        icon: Brain,
        title: 'Memory & Attention',
        description:
            'Meaningful activities that encourage memory, reasoning and concentration.'
    },
    {
        icon: Lightbulb,
        title: 'Problem-Solving',
        description:
            'Challenges that encourage logical thinking and independent discovery.'
    },
    {
        icon: Eye,
        title: 'Visual Learning',
        description:
            'Visual discrimination, observation and pattern-recognition activities.'
    },
    {
        icon: Users,
        title: 'Parent-Guided Learning',
        description:
            'Practical resources that create meaningful opportunities to learn together.'
    }

];


// ==========================================
// LEARNING APPROACH
// ==========================================

const learningApproach = [

    {
        icon: Compass,
        title: 'Explore & Discover',
        description:
            'Learning through exploration, curiosity and discovery.'
    },
    {
        icon: Hand,
        title: 'Learn by Doing',
        description:
            'Hands-on and interactive educational experiences.'
    },
    {
        icon: Shapes,
        title: 'Make Connections',
        description:
            'Connecting learning to familiar situations and everyday life.'
    },
    {
        icon: Lightbulb,
        title: 'Think Independently',
        description:
            'Encouraging curiosity, problem-solving and independent thinking.'
    },
    {
        icon: Users,
        title: 'Grow Together',
        description:
            'Creating opportunities for meaningful parent-child interaction.'
    }

];


// ==========================================
// SKILLS WE SUPPORT
// ==========================================

const skills = [

    {
        id: 1,
        title: 'Language & Communication',
        description:
            'Activities that encourage vocabulary development, language comprehension, verbal expression and effective communication.',
        icon: MessageCircle,
        color: 'beige'
    },
    {
        id: 2,
        title: 'Attention & Concentration',
        description:
            'Activities that encourage children to focus, observe details, follow instructions and maintain attention during different tasks.',
        icon: Target,
        color: 'yellow'
    },
    {
        id: 3,
        title: 'Memory & Working Memory',
        description:
            'Interactive experiences that encourage children to retain, retrieve and use information while completing activities.',
        icon: Brain,
        color: 'terracotta'
    },
    {
        id: 4,
        title: 'Reasoning & Problem-Solving',
        description:
            'Activities that invite children to analyze information, identify relationships, make connections, draw conclusions and find solutions.',
        icon: Puzzle,
        color: 'teal'
    },
    {
        id: 5,
        title: 'Executive Functions',
        description:
            'Opportunities to practice planning, organization, cognitive flexibility and inhibitory control through structured and purposeful activities.',
        icon: Layers,
        color: 'tan'
    },
    {
        id: 6,
        title: 'Visual Perception & Discrimination',
        description:
            'Activities that encourage children to recognize patterns, compare visual information, identify similarities and differences, and notice details.',
        icon: Eye,
        color: 'beige'
    }

];


// ==========================================
// BLOG ARTICLES
// ==========================================

const blogArticles = [

    {
        id: 1,
        category: 'Language Development',
        title:
            'How to Support Language Development Through Everyday Activities',
        icon: MessageCircle,
        color: 'beige'
    },
    {
        id: 2,
        category: 'Executive Functions',
        title:
            'What Are Executive Functions and Why Are They Important for Children?',
        icon: Brain,
        color: 'yellow'
    },
    {
        id: 3,
        category: 'Learning Through Play',
        title:
            'Learning Through Play: More Than Just Having Fun',
        icon: Puzzle,
        color: 'terracotta'
    },
    {
        id: 4,
        category: 'Cognitive Development',
        title:
            "Simple Activities to Support Children's Memory and Attention",
        icon: Lightbulb,
        color: 'teal'
    },
    {
        id: 5,
        category: 'Learning Difficulties',
        title:
            'Understanding Learning Difficulties: Every Child Has a Different Learning Journey',
        icon: Heart,
        color: 'tan'
    },
    {
        id: 6,
        category: 'Parenting & Home Learning',
        title:
            'How to Make Learning More Enjoyable at Home',
        icon: BookOpen,
        color: 'beige'
    }

];


// ==========================================
// REUSABLE SEO COMPONENT
// ==========================================

export function PageSEO({
    title = SEO_TITLE,
    description = SEO_DESCRIPTION
}) {

    useEffect(() => {

        document.title = title;

        function updateMeta(attribute, name, content) {

            let element = document.querySelector(
                `meta[${attribute}="${name}"]`
            );

            if (!element) {

                element = document.createElement('meta');

                element.setAttribute(attribute, name);

                document.head.appendChild(element);

            }

            element.setAttribute('content', content);

        }

        updateMeta(
            'name',
            'description',
            description
        );

        updateMeta(
            'name',
            'theme-color',
            '#3d6b6b'
        );

        updateMeta(
            'property',
            'og:title',
            title
        );

        updateMeta(
            'property',
            'og:description',
            description
        );

        updateMeta(
            'property',
            'og:site_name',
            BRAND_NAME
        );

        updateMeta(
            'property',
            'og:type',
            'website'
        );

    }, [title, description]);

    return null;

}


// ==========================================
// BRAND LOGO
// ==========================================

function BrandLogo({ onClick }) {

    const [logoFailed, setLogoFailed] = useState(false);

    return (

        <Link
            to="/"
            className="tb-brand-logo"
            aria-label="Tiny Bridges homepage"
            onClick={onClick}
        >

            {websiteLogo && !logoFailed ? (

                <img
                    src={websiteLogo}
                    alt="Tiny Bridges logo"
                    className="tb-brand-logo-image"
                    onError={() => setLogoFailed(true)}
                />

            ) : (

                <>

                    <div
                        className="tb-temporary-logo"
                        aria-hidden="true"
                    >

                        <svg
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                        >

                            <path
                                d="M9 47 V35 A23 23 0 0 1 55 35 V47"
                                fill="none"
                                stroke="#c06c5d"
                                strokeWidth="8"
                                strokeLinecap="round"
                            />

                            <path
                                d="M19 47 V35 A13 13 0 0 1 45 35 V47"
                                fill="none"
                                stroke="#e3b448"
                                strokeWidth="7"
                                strokeLinecap="round"
                            />

                            <path
                                d="M29 47 V35 A3 3 0 0 1 35 35 V47"
                                fill="none"
                                stroke="#3d6b6b"
                                strokeWidth="6"
                                strokeLinecap="round"
                            />

                            <circle
                                cx="54"
                                cy="10"
                                r="4"
                                fill="#e3b448"
                            />

                        </svg>

                    </div>

                    <div className="tb-brand-text">

                        <strong>{BRAND_NAME}</strong>

                        <small>Bridges to Learning</small>

                    </div>

                </>

            )}

        </Link>

    );

}


// ==========================================
// SHARED NAVBAR
// ==========================================

export function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();


    // Close the mobile menu whenever navigation occurs.

    useEffect(() => {

        setMenuOpen(false);

    }, [location.key]);


    // Navbar scroll shadow.

    useEffect(() => {

        const handleScroll = () => {

            setIsScrolled(window.scrollY > 30);

        };

        handleScroll();

        window.addEventListener(
            'scroll',
            handleScroll,
            { passive: true }
        );

        return () => {

            window.removeEventListener(
                'scroll',
                handleScroll
            );

        };

    }, []);


    // Close mobile navigation with Escape.

    useEffect(() => {

        const handleKeyDown = event => {

            if (event.key === 'Escape') {

                setMenuOpen(false);

            }

        };

        window.addEventListener(
            'keydown',
            handleKeyDown
        );

        return () => {

            window.removeEventListener(
                'keydown',
                handleKeyDown
            );

        };

    }, []);


    // Close menu when switching back to desktop.

    useEffect(() => {

        const mediaQuery = window.matchMedia(
            '(min-width: 951px)'
        );

        const handleChange = event => {

            if (event.matches) {

                setMenuOpen(false);

            }

        };

        mediaQuery.addEventListener(
            'change',
            handleChange
        );

        return () => {

            mediaQuery.removeEventListener(
                'change',
                handleChange
            );

        };

    }, []);


    return (

        <>

            {/* Announcement bar */}

            <div className="tb-announcement">

                <Heart size={15} aria-hidden="true" />

                <span>
                    Building bridges between children and learning.
                </span>

                <Heart size={15} aria-hidden="true" />

            </div>


            {/* Shared navigation */}

            <header
                className={`tb-navbar ${
                    isScrolled ? 'tb-navbar-scrolled' : ''
                }`}
            >

                <div className="tb-navbar-container">

                    <BrandLogo
                        onClick={() => setMenuOpen(false)}
                    />


                    <nav
                        id="tb-main-navigation"
                        className={`tb-navigation ${
                            menuOpen ? 'tb-navigation-open' : ''
                        }`}
                        aria-label="Main navigation"
                    >

                        {navigationLinks.map(link => (

                            <NavLink
                                key={link.href}
                                to={link.href}
                                end={link.href === '/'}
                                className={({ isActive }) =>
                                    `tb-nav-link ${
                                        isActive ? 'tb-nav-active' : ''
                                    }`
                                }
                                onClick={() => setMenuOpen(false)}
                            >

                                {link.label}

                            </NavLink>

                        ))}

                    </nav>


                    <Link
                        to="/educational-tools"
                        className="tb-navbar-button"
                        onClick={() => setMenuOpen(false)}
                    >

                        <BookOpen size={19} />

                        <span>Explore Tools</span>

                    </Link>


                    <button
                        type="button"
                        className="tb-mobile-menu-button"
                        aria-label={
                            menuOpen
                                ? 'Close menu'
                                : 'Open menu'
                        }
                        aria-expanded={menuOpen}
                        aria-controls="tb-main-navigation"
                        onClick={() =>
                            setMenuOpen(previous => !previous)
                        }
                    >

                        {menuOpen ? (

                            <X size={28} />

                        ) : (

                            <Menu size={28} />

                        )}

                    </button>

                </div>

            </header>

        </>

    );

}


// ==========================================
// WHATSAPP BUTTON
// ==========================================

export function WhatsAppButton({
    className = '',
    children = 'Contact Us on WhatsApp',
    message =
        'Hello Tiny Bridges! I would like to learn more about your educational tools.'
}) {

    const phoneNumber =
        CONTACT.whatsapp.replace(/\D/g, '');

    const validPhoneNumber =
        /^[1-9]\d{6,14}$/.test(phoneNumber);

    if (!validPhoneNumber) {

        return (

            <button
                type="button"
                className={`tb-whatsapp-button ${className}`}
                disabled
                title="WhatsApp contact coming soon"
            >

                <FaWhatsapp size={23} />

                <span>WhatsApp — Coming Soon</span>

            </button>

        );

    }

    const whatsappUrl =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (

        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`tb-whatsapp-button ${className}`}
        >

            <FaWhatsapp size={23} />

            <span>{children}</span>

        </a>

    );

}


// ==========================================
// SOCIAL MEDIA LINK
// ==========================================

function SocialLink({
    icon: Icon,
    label,
    href
}) {

    if (!href) {

        return (

            <span
                className="tb-social-disabled"
                title={`${label} coming soon`}
                aria-label={`${label} coming soon`}
            >

                <Icon size={21} aria-hidden="true" />

            </span>

        );

    }

    return (

        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
        >

            <Icon size={21} aria-hidden="true" />

        </a>

    );

}


// ==========================================
// SECTION HEADING
// ==========================================

function SectionHeading({
    icon: Icon = Sparkles,
    eyebrow,
    title,
    highlight,
    description
}) {

    return (

        <div className="tb-section-heading">

            {eyebrow && (

                <span className="tb-eyebrow">

                    <Icon size={17} aria-hidden="true" />

                    {eyebrow}

                </span>

            )}

            <h2>

                {title}

                {highlight && (

                    <span> {highlight}</span>

                )}

            </h2>

            {description && (

                <p>{description}</p>

            )}

        </div>

    );

}


// ==========================================
// REUSABLE INFORMATION CARDS
// ==========================================

function InformationCards({
    items,
    className = ''
}) {

    return (

        <div className={`tb-information-grid ${className}`}>

            {items.map(
                ({ icon: Icon, title, description }) => (

                    <article
                        key={title}
                        className="tb-information-card"
                    >

                        <div className="tb-information-icon">

                            <Icon
                                size={32}
                                aria-hidden="true"
                            />

                        </div>

                        <h3>{title}</h3>

                        <p>{description}</p>

                    </article>

                )
            )}

        </div>

    );

}


// ==========================================
// HERO ILLUSTRATION
// ==========================================

function HeroIllustration() {

    return (

        <div
            className="tb-hero-visual"
            aria-hidden="true"
        >

            <div className="tb-visual-background" />

            <div className="tb-visual-dotted-circle" />


            {/* Floating decorations */}

            <Star
                className="tb-floating tb-floating-star"
                size={45}
                fill="#e3b448"
            />

            <Heart
                className="tb-floating tb-floating-heart"
                size={40}
                fill="#c06c5d"
            />

            <Sparkles
                className="tb-floating tb-floating-sparkle"
                size={36}
            />

            <div className="tb-floating-dot tb-dot-one" />

            <div className="tb-floating-dot tb-dot-two" />

            <div className="tb-floating-dot tb-dot-three" />


            {/* Bridge illustration */}

            <svg
                className="tb-bridge-illustration"
                viewBox="0 0 360 280"
                xmlns="http://www.w3.org/2000/svg"
            >

                <path
                    d="M38 232 V150 A142 142 0 0 1 322 150 V232"
                    stroke="#c06c5d"
                    strokeWidth="35"
                    fill="none"
                />

                <path
                    d="M73 232 V150 A107 107 0 0 1 287 150 V232"
                    stroke="#e3b448"
                    strokeWidth="35"
                    fill="none"
                />

                <path
                    d="M108 232 V150 A72 72 0 0 1 252 150 V232"
                    stroke="#3d6b6b"
                    strokeWidth="35"
                    fill="none"
                />

                <path
                    d="M143 232 V150 A37 37 0 0 1 217 150 V232"
                    stroke="#b29470"
                    strokeWidth="35"
                    fill="none"
                />

                <rect
                    x="10"
                    y="232"
                    width="340"
                    height="20"
                    rx="10"
                    fill="#804121"
                />

            </svg>


            {/* Alphabet blocks */}

            <div className="tb-alphabet-block tb-block-a">
                A
            </div>

            <div className="tb-alphabet-block tb-block-b">
                B
            </div>

            <div className="tb-alphabet-block tb-block-c">
                C
            </div>


            {/* Floating information cards */}

            <div className="tb-visual-card tb-visual-card-top">

                <div className="tb-visual-card-icon">

                    <Brain size={24} />

                </div>

                <div>

                    <strong>Little discoveries</strong>

                    <small>Big possibilities</small>

                </div>

            </div>


            <div className="tb-visual-card tb-visual-card-bottom">

                <div className="tb-visual-card-icon">

                    <Smile size={24} />

                </div>

                <div>

                    <strong>Meaningful learning</strong>

                    <small>At their own pace</small>

                </div>

            </div>

        </div>

    );

}


// ==========================================
// SHARED FOOTER
// ==========================================

export function Footer() {

    const phoneNumber =
        CONTACT.whatsapp.replace(/\D/g, '');

    const validPhoneNumber =
        /^[1-9]\d{6,14}$/.test(phoneNumber);

    return (

        <footer
            className="tb-footer"
            id="contact"
        >

            <div className="tb-footer-grid">

                {/* Brand */}

                <div className="tb-footer-brand">

                    <BrandLogo />

                    <p>
                        Tiny Bridges creates interactive educational
                        tools and purposeful learning activities that
                        encourage children to explore, develop their
                        skills and discover their unique ways of
                        learning.
                    </p>

                    <p className="tb-footer-statement">
                        We believe every child deserves
                        a bridge to learning.
                    </p>

                    <div className="tb-footer-socials">

                        <SocialLink
                            icon={FaInstagram}
                            label="Instagram"
                            href={CONTACT.instagram}
                        />

                        <SocialLink
                            icon={FaFacebookF}
                            label="Facebook"
                            href={CONTACT.facebook}
                        />

                        <SocialLink
                            icon={FaWhatsapp}
                            label="WhatsApp"
                            href={
                                validPhoneNumber
                                    ? `https://wa.me/${phoneNumber}`
                                    : ''
                            }
                        />

                        <SocialLink
                            icon={Mail}
                            label="Email"
                            href={
                                CONTACT.email
                                    ? `mailto:${CONTACT.email}`
                                    : ''
                            }
                        />

                    </div>

                </div>


                {/* Quick links */}

                <div className="tb-footer-links">

                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>

                    <Link to="/about-us">
                        About Us
                    </Link>

                    <Link to="/educational-tools">
                        Our Educational Tools
                    </Link>

                    <Link to="/our-philosophy">
                        Our Philosophy
                    </Link>

                    <Link to="/how-it-works">
                        How It Works
                    </Link>

                    <Link to="/contact-us">
                        Contact Us
                    </Link>

                </div>


                {/* Resources */}

                <div className="tb-footer-links">

                    <h3>Learning Resources</h3>

                    <Link to="/for-parents">
                        For Parents
                    </Link>

                    <Link to="/for-professionals">
                        For Professionals
                    </Link>

                    <Link to="/#skills">
                        Skills We Support
                    </Link>

                    <Link to="/resources">
                        Blog & Learning Resources
                    </Link>

                    <Link to="/#how-it-works">
                        Learning Through Play
                    </Link>

                </div>


                {/* Contact */}

                <div className="tb-footer-contact">

                    <h3>Let's Connect</h3>

                    <p>
                        Have a question about our educational
                        tools or want to learn more about
                        Tiny Bridges?
                    </p>

                    <WhatsAppButton>
                        WhatsApp Us
                    </WhatsAppButton>

                    {CONTACT.email ? (

                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="tb-footer-email"
                        >

                            <Mail size={18} />

                            {CONTACT.email}

                        </a>

                    ) : (

                        <span className="tb-footer-email">

                            <Mail size={18} />

                            Email coming soon

                        </span>

                    )}

                </div>

            </div>


            {/* Educational disclaimer */}

            <div className="tb-disclaimer">

                <Heart size={21} aria-hidden="true" />

                <p>
                    Tiny Bridges is an educational brand.
                    Our resources are designed to support
                    learning and development and are not
                    intended to replace individualized
                    assessment, therapy or professional
                    intervention.
                </p>

            </div>


            {/* Footer bottom */}

            <div className="tb-footer-bottom">

                <span>
                    © {new Date().getFullYear()} Tiny Bridges.
                    All rights reserved.
                </span>

                <div className="tb-legal-links">

                    <Link to="/privacy-policy">
                        Privacy Policy
                    </Link>

                    <Link to="/terms-and-conditions">
                        Terms & Conditions
                    </Link>

                </div>

                <span className="tb-footer-love">

                    Built with

                    <Heart size={15} aria-hidden="true" />

                    for every little learner.

                </span>

            </div>

        </footer>

    );

}


// ==========================================
// HOMEPAGE
// ==========================================

function Homepage() {

    const [messageIndex, setMessageIndex] = useState(0);

    const [animationPaused, setAnimationPaused] =
        useState(false);

    const [reducedMotion, setReducedMotion] =
        useState(() =>
            window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches
        );


    // ======================================
    // SYSTEM REDUCED MOTION PREFERENCE
    // ======================================

    useEffect(() => {

        const mediaQuery = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );

        const handleChange = event => {

            setReducedMotion(event.matches);

        };

        mediaQuery.addEventListener(
            'change',
            handleChange
        );

        return () => {

            mediaQuery.removeEventListener(
                'change',
                handleChange
            );

        };

    }, []);


    // ======================================
    // DYNAMIC WELCOME MESSAGE
    // ======================================

    useEffect(() => {

        if (animationPaused || reducedMotion) {

            return;

        }

        const interval = setInterval(() => {

            setMessageIndex(previous =>
                (previous + 1) % welcomeMessages.length
            );

        }, 3500);

        return () => clearInterval(interval);

    }, [animationPaused, reducedMotion]);


    return (

        <main
            className={`tb-homepage ${
                animationPaused || reducedMotion
                    ? 'tb-animations-paused'
                    : ''
            }`}
        >

            <PageSEO />


            {/* ==================================
                HERO SECTION
            ================================== */}

            <section className="tb-hero">

                <div className="tb-hero-circle tb-hero-circle-one" />

                <div className="tb-hero-circle tb-hero-circle-two" />


                <div className="tb-hero-container">

                    <div className="tb-hero-content">

                        <span className="tb-hero-label">

                            <Sparkles size={17} />

                            Welcome to Tiny Bridges

                        </span>


                        <h1>

                            Every Child Learns Differently.

                            <span>
                                Every Child Deserves a Bridge.
                            </span>

                        </h1>


                        <div className="tb-welcome-container">

                            <span
                                key={messageIndex}
                                className="tb-welcome-message"
                            >

                                {welcomeMessages[messageIndex]}

                            </span>


                            {!reducedMotion && (

                                <button
                                    type="button"
                                    className="tb-animation-toggle"
                                    onClick={() =>
                                        setAnimationPaused(
                                            previous => !previous
                                        )
                                    }
                                >

                                    {animationPaused
                                        ? 'Resume animations'
                                        : 'Pause animations'}

                                </button>

                            )}

                        </div>


                        <p className="tb-hero-description">
                            At Tiny Bridges, we believe that every
                            child has a unique way of learning,
                            exploring and understanding the world.
                        </p>

                        <p className="tb-hero-description">
                            We create interactive educational tools
                            and purposeful learning activities designed
                            to support children's language, cognitive
                            and thinking skills through play,
                            exploration and meaningful interaction.
                        </p>


                        <div className="tb-button-group">

                            <Link
                                to="/educational-tools"
                                className="tb-primary-button"
                            >

                                Explore Our Educational Tools

                                <ArrowRight size={20} />

                            </Link>

                            <Link
                                to="/about-us"
                                className="tb-secondary-button"
                            >

                                Discover Our Story

                                <Heart size={19} />

                            </Link>

                        </div>


                        <div className="tb-hero-message">

                            <div className="tb-small-heart">

                                <Heart size={20} />

                            </div>

                            <span>
                                Because learning should be engaging,
                                inclusive and adapted to the child.
                            </span>

                        </div>

                    </div>


                    <HeroIllustration />

                </div>


                <Link
                    to="/#benefits"
                    className="tb-scroll-indicator"
                    aria-label="Discover more about Tiny Bridges"
                >

                    <ChevronDown size={25} />

                </Link>

            </section>


            {/* ==================================
                BENEFITS STRIP
            ================================== */}

            <section
                className="tb-benefits"
                id="benefits"
            >

                <div className="tb-benefits-grid">

                    <div className="tb-benefit">

                        <Heart size={34} />

                        <div>

                            <h3>Inclusive Learning</h3>

                            <p>Every child matters</p>

                        </div>

                    </div>

                    <div className="tb-benefit">

                        <Brain size={34} />

                        <div>

                            <h3>Purposeful Activities</h3>

                            <p>Learning with meaning</p>

                        </div>

                    </div>

                    <div className="tb-benefit">

                        <GraduationCap size={34} />

                        <div>

                            <h3>Professional Expertise</h3>

                            <p>Knowledge meets creativity</p>

                        </div>

                    </div>

                    <div className="tb-benefit">

                        <Sparkles size={34} />

                        <div>

                            <h3>Learning Through Play</h3>

                            <p>Growing through discovery</p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==================================
                OUR PHILOSOPHY
            ================================== */}

            <section
                className="tb-section"
                id="philosophy"
            >

                <SectionHeading
                    icon={Heart}
                    eyebrow="Our Philosophy"
                    title="Every Child Has a"
                    highlight="Different Way of Learning."
                    description="We believe that differences in learning are not limitations. They are part of what makes every child unique."
                />


                <div className="tb-section-introduction">

                    <p>
                        Children do not all learn in the same way,
                        at the same pace or through the same
                        experiences. Each child has individual
                        strengths, interests, abilities and
                        learning needs.
                    </p>

                    <p>
                        At Tiny Bridges, we embrace these differences.
                        Rather than expecting every child to follow
                        the same path, we aim to create opportunities
                        that respect individual differences and
                        encourage children to discover their own
                        potential.
                    </p>

                    <p>
                        Through meaningful activities, hands-on
                        experiences and playful exploration, we
                        seek to make learning a positive experience
                        where children feel encouraged to participate,
                        experiment and grow.
                    </p>

                </div>


                <InformationCards
                    items={philosophyValues}
                />


                <blockquote className="tb-brand-quote">

                    <span
                        className="tb-quote-mark"
                        aria-hidden="true"
                    >
                        “
                    </span>

                    <p>
                        We don't believe in one path to learning.
                        We believe in building bridges that help
                        every child find theirs.
                    </p>

                    <small>THE TINY BRIDGES PHILOSOPHY</small>

                </blockquote>


                <div className="tb-section-action">

                    <Link
                        to="/our-philosophy"
                        className="tb-secondary-button"
                    >

                        Discover Our Philosophy

                        <ArrowRight size={19} />

                    </Link>

                </div>

            </section>


            {/* ==================================
                EDUCATIONAL TOOLS
            ================================== */}

            <section
                className="tb-section tb-beige-section"
                id="categories"
            >

                <div className="tb-content-container">

                    <SectionHeading
                        icon={BookOpen}
                        eyebrow="Discover Our Educational Tools"
                        title="Learning Tools"
                        highlight="Designed with Purpose."
                        description="Interactive educational experiences that bring learning to life."
                    />


                    <div className="tb-section-introduction">

                        <p>
                            Tiny Bridges develops interactive educational
                            tools designed to make learning more meaningful,
                            engaging and enjoyable.
                        </p>

                        <p>
                            Our resources combine educational activities,
                            games, workbooks, visual materials and hands-on
                            experiences to encourage children to explore,
                            think, communicate and learn through active
                            participation.
                        </p>

                        <p>
                            Each tool is thoughtfully designed around
                            specific learning objectives, offering children
                            opportunities to develop different skills
                            within familiar, meaningful and everyday
                            contexts.
                        </p>

                        <p>
                            Our goal is to make learning more accessible
                            while encouraging positive parent-child
                            interaction and supporting children's individual
                            learning journeys.
                        </p>

                    </div>


                    <div className="tb-tools-grid">

                        {educationalTools.map(
                            ({ icon: Icon, title, description }) => (

                                <article
                                    className="tb-tool-card"
                                    key={title}
                                >

                                    <div className="tb-tool-icon">

                                        <Icon size={29} />

                                    </div>

                                    <div>

                                        <h3>{title}</h3>

                                        <p>{description}</p>

                                    </div>

                                </article>

                            )
                        )}

                    </div>


                    {/* Arabic learning */}

                    <div className="tb-arabic-banner">

                        <div
                            className="tb-arabic-letter"
                            lang="ar"
                            aria-hidden="true"
                        >
                            أ
                        </div>

                        <div>

                            <span className="tb-eyebrow">

                                <BookOpen size={17} />

                                Language Learning

                            </span>

                            <h3>
                                Building Bridges to Arabic
                            </h3>

                            <p>
                                One area we aim to explore is Modern
                                Standard Arabic vocabulary, helping
                                children make connections between spoken
                                Lebanese Arabic and written Arabic
                                through meaningful educational activities.
                            </p>

                        </div>

                    </div>


                    <div className="tb-section-action">

                        <Link
                            to="/educational-tools"
                            className="tb-primary-button"
                        >

                            Explore Our Educational Tools

                            <ArrowRight size={20} />

                        </Link>

                    </div>

                </div>

            </section>


            {/* ==================================
                LEARNING THROUGH PLAY
            ================================== */}

            <section
                className="tb-section"
                id="how-it-works"
            >

                <SectionHeading
                    icon={Puzzle}
                    eyebrow="Our Educational Approach"
                    title="Learning Through Play."
                    highlight="Growing Through Discovery."
                    description="Because children benefit from being active participants in their learning experiences."
                />


                <div className="tb-section-introduction">

                    <p>
                        Play is more than entertainment. When
                        thoughtfully designed, it can provide valuable
                        opportunities for learning, exploration and
                        development.
                    </p>

                    <p>
                        At Tiny Bridges, we believe in the power of
                        interactive learning experiences that encourage
                        children to participate rather than simply
                        receive information.
                    </p>

                    <p>
                        Our activities invite children to observe,
                        experiment, make connections, solve problems,
                        ask questions and express their ideas.
                    </p>

                    <p>
                        By incorporating familiar themes and everyday
                        situations into educational activities, we aim
                        to help children connect new knowledge with
                        their experiences and use their skills in
                        meaningful contexts.
                    </p>

                </div>


                <div className="tb-learning-grid">

                    {learningApproach.map(
                        ({ icon: Icon, title, description }, index) => (

                            <article
                                className="tb-learning-card"
                                key={title}
                            >

                                <span className="tb-learning-number">

                                    {String(index + 1).padStart(2, '0')}

                                </span>

                                <div className="tb-learning-icon">

                                    <Icon size={32} />

                                </div>

                                <h3>{title}</h3>

                                <p>{description}</p>

                            </article>

                        )
                    )}

                </div>


                <div
                    className="tb-parent-banner"
                    id="for-parents"
                >

                    <div className="tb-parent-icon">

                        <Users size={44} />

                    </div>

                    <div>

                        <h3>
                            Learning Is a Shared Journey
                        </h3>

                        <p>
                            We value the role of parents in children's
                            learning. Sharing activities, exchanging
                            ideas and learning together can create
                            meaningful opportunities for communication
                            and connection.
                        </p>

                        <Link
                            to="/for-parents"
                            className="tb-text-link"
                        >

                            Discover More for Parents

                            <ArrowRight size={17} />

                        </Link>

                    </div>

                </div>

            </section>


            {/* ==================================
                SKILLS WE SUPPORT
            ================================== */}

            <section
                className="tb-section"
                id="skills"
            >

                <SectionHeading
                    icon={Brain}
                    eyebrow="What Skills Do We Support?"
                    title="Supporting Different Skills."
                    highlight="Creating Meaningful Opportunities."
                    description="Every activity has a purpose. Every experience creates an opportunity to learn."
                />


                <div className="tb-section-introduction">

                    <p>
                        Our educational tools are designed to provide
                        opportunities for children to practice and develop
                        a variety of language and cognitive skills.
                    </p>

                    <p>
                        Depending on the activity and its specific
                        learning objectives, our resources may address
                        the following areas.
                    </p>

                </div>


                <div className="tb-skills-grid">

                    {skills.map(skill => {

                        const SkillIcon = skill.icon;

                        return (

                            <article
                                className="tb-skill-card"
                                key={skill.id}
                            >

                                <div
                                    className={`tb-card-illustration tb-color-${skill.color}`}
                                >

                                    <div className="tb-card-circle" />

                                    <SkillIcon
                                        size={65}
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    />

                                    <Sparkles
                                        className="tb-card-sparkle"
                                        size={22}
                                        aria-hidden="true"
                                    />

                                </div>


                                <div className="tb-card-content">

                                    <h3>{skill.title}</h3>

                                    <p>{skill.description}</p>

                                    <span className="tb-card-label">

                                        <Heart size={16} />

                                        Purposeful learning

                                    </span>

                                </div>

                            </article>

                        );

                    })}

                </div>


                <p className="tb-section-closing">

                    Every child has a unique learning profile.
                    Our goal is to provide varied and purposeful
                    opportunities that encourage children to explore
                    their abilities and develop their skills at
                    their own pace.

                </p>

            </section>


            {/* ==================================
                ABOUT US
            ================================== */}

            <section
                className="tb-section tb-beige-section"
                id="about"
            >

                <div className="tb-about-container">

                    {/* Professional expertise illustration */}

                    <div
                        className="tb-about-visual"
                        aria-hidden="true"
                    >

                        <div className="tb-about-circle" />

                        <Heart
                            className="tb-about-heart"
                            size={135}
                            fill="#c06c5d"
                            strokeWidth={1.3}
                        />

                        <div className="tb-about-icon tb-about-icon-one">

                            <Brain size={40} />

                        </div>

                        <div className="tb-about-icon tb-about-icon-two">

                            <BookOpen size={40} />

                        </div>

                        <div className="tb-about-icon tb-about-icon-three">

                            <Puzzle size={40} />

                        </div>

                        <div className="tb-about-icon tb-about-icon-four">

                            <GraduationCap size={40} />

                        </div>

                        <div className="tb-about-caption">

                            Knowledge. Creativity. Purpose.

                        </div>

                    </div>


                    {/* Founder story */}

                    <div className="tb-about-content">

                        <span className="tb-eyebrow">

                            <GraduationCap size={18} />

                            Created with Purpose & Expertise

                        </span>

                        <h2>

                            A Passion for Learning.

                            <span>
                                A Purpose Behind Every Activity.
                            </span>

                        </h2>

                        <p>
                            Where professional experience meets
                            creativity and meaningful educational design.
                        </p>

                        <p>
                            Tiny Bridges was founded on a simple belief:
                            every child deserves learning experiences
                            that recognize their individual abilities,
                            respect their differences and encourage their
                            potential.
                        </p>

                        <p>
                            The idea emerged from the professional
                            experience of its founder, a Speech-Language
                            Pathologist with a Master's degree in
                            Speech-Language Pathology, a Bachelor's degree
                            in Psychology and six years of experience
                            working with children across different
                            clinical and educational settings.
                        </p>

                        <p>
                            Through working with children with diverse
                            developmental profiles, communication abilities
                            and learning needs, the founder recognized
                            the importance of creating educational resources
                            that go beyond traditional learning activities.
                        </p>

                        <p>
                            This experience inspired the development
                            of interactive tools that combine professional
                            knowledge, creativity and purposeful learning.
                        </p>


                        <div className="tb-about-values">

                            <div>

                                <Heart size={21} />

                                Respecting individual learning differences

                            </div>

                            <div>

                                <Sparkles size={21} />

                                Combining creativity and professional knowledge

                            </div>

                            <div>

                                <Target size={21} />

                                Designing activities with educational objectives

                            </div>

                        </div>


                        <Link
                            to="/about-us"
                            className="tb-secondary-button"
                        >

                            Discover Our Story

                            <ArrowRight size={19} />

                        </Link>

                    </div>

                </div>


                {/* Qualifications */}

                <div
                    className="tb-expertise-grid"
                    id="for-professionals"
                >

                    <article className="tb-expertise-card">

                        <GraduationCap size={36} />

                        <strong>Master's Degree</strong>

                        <span>Speech-Language Pathology</span>

                    </article>

                    <article className="tb-expertise-card">

                        <Brain size={36} />

                        <strong>Bachelor's Degree</strong>

                        <span>Psychology</span>

                    </article>

                    <article className="tb-expertise-card">

                        <Users size={36} />

                        <strong>6 Years</strong>

                        <span>Experience working with children</span>

                    </article>

                </div>


                <div className="tb-section-introduction tb-expertise-closing">

                    <p>
                        At Tiny Bridges, every resource begins with
                        an educational purpose. Activities are designed
                        to encourage active participation, support
                        specific skills and offer children opportunities
                        to learn through meaningful experiences.
                    </p>

                    <p>
                        We believe that learning is not simply about
                        finding the right answer. It is about encouraging
                        children to ask questions, explore possibilities,
                        make connections and discover what they can achieve.
                    </p>

                </div>

            </section>


            {/* ==================================
                BLOG AND LEARNING RESOURCES
            ================================== */}

            <section
                className="tb-section"
                id="resources"
            >

                <SectionHeading
                    icon={BookOpen}
                    eyebrow="Blog & Learning Resources"
                    title="A Space for Learning,"
                    highlight="Ideas and Discovery."
                    description="Explore insights and practical ideas to better understand and support children's learning journeys."
                />


                <div className="tb-section-introduction">

                    <p>
                        At Tiny Bridges, we believe that supporting
                        children's learning begins with understanding
                        how they develop, communicate, think and
                        interact with the world around them.
                    </p>

                    <p>
                        Through our upcoming educational articles
                        and learning resources, we aim to share
                        practical information, professional insights
                        and activity ideas related to language
                        development, cognitive skills, executive
                        functions, learning difficulties and
                        play-based learning.
                    </p>

                    <p>
                        Our goal is to provide accessible and meaningful
                        information that helps parents and professionals
                        discover new ways to support children's
                        learning and development.
                    </p>

                </div>


                <div className="tb-blog-grid">

                    {blogArticles.map(article => {

                        const ArticleIcon = article.icon;

                        return (

                            <article
                                className="tb-blog-card"
                                key={article.id}
                            >

                                <div
                                    className={`tb-card-illustration tb-blog-image tb-color-${article.color}`}
                                >

                                    <div className="tb-card-circle" />

                                    <ArticleIcon
                                        size={60}
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    />

                                    <span className="tb-blog-status">
                                        Coming Soon
                                    </span>

                                </div>

                                <div className="tb-card-content">

                                    <span className="tb-blog-category">
                                        {article.category}
                                    </span>

                                    <h3>{article.title}</h3>

                                    <span className="tb-card-label">

                                        Article coming soon

                                        <ArrowUpRight size={17} />

                                    </span>

                                </div>

                            </article>

                        );

                    })}

                </div>


                <div className="tb-section-action">

                    <Link
                        to="/resources"
                        className="tb-primary-button"
                    >

                        Explore Our Learning Resources

                        <ArrowRight size={20} />

                    </Link>

                </div>

            </section>


            {/* ==================================
                FINAL CALL TO ACTION
            ================================== */}

            <section className="tb-cta">

                <div className="tb-cta-decoration tb-cta-decoration-one" />

                <div className="tb-cta-decoration tb-cta-decoration-two" />


                <div className="tb-cta-content">

                    <Sparkles
                        size={42}
                        className="tb-cta-icon"
                    />

                    <h2>
                        Every Little Step Can Lead
                        to Something Big.
                    </h2>

                    <p>
                        Discover a world of interactive educational
                        tools designed to make learning more engaging,
                        meaningful and enjoyable.
                    </p>

                    <p>
                        Whether you are a parent looking for new ways
                        to support your child's learning or a professional
                        exploring purposeful educational resources,
                        Tiny Bridges is here to help you discover
                        new possibilities.
                    </p>

                    <p className="tb-cta-closing">
                        Let's build bridges between children and
                        learning, one little step at a time.
                    </p>

                    <div className="tb-button-group tb-cta-buttons">

                        <Link
                            to="/educational-tools"
                            className="tb-yellow-button"
                        >

                            Explore Our Tools

                            <ArrowRight size={21} />

                        </Link>

                        <WhatsAppButton />

                    </div>

                </div>

            </section>

        </main>

    );

}

export default Homepage;