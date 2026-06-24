"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";
import "./home.css";

const eventsData = [
  { title: "Free Retirement Planning Webinar", date: "2025-03-15", time: "6:00 PM PST", location: "Online (Zoom)", price: "Free", description: "Learn how to build a secure retirement plan with tax-efficient strategies and smart investment allocation for long-term growth." },
  { title: "Tax-Saving Strategies Workshop", date: "2025-04-02", time: "7:00 PM PST", location: "San Jose, CA", price: "Free", description: "Discover proven methods to reduce tax liability, maximize deductions, and keep more of your hard-earned money legally." },
  { title: "College Funding Seminar for Parents", date: "2025-04-20", time: "5:30 PM PST", location: "Online (Zoom)", price: "Free", description: "Plan ahead for your child's education with 529 plans, scholarships, and smart savings strategies that grow over time." },
  { title: "Life Insurance Awareness Session", date: "2025-02-10", time: "6:30 PM PST", location: "Fremont, CA", price: "Free", description: "An interactive session covering term vs. permanent life insurance, how to choose the right coverage, and building wealth through insurance.", attendees: "85+", recapLink: "#" },
  { title: "2025 Financial Planning Kickoff", date: "2025-01-22", time: "7:00 PM PST", location: "Online (Zoom)", price: "Free", description: "Started the year strong with a comprehensive look at market trends, investment opportunities, and goal-setting frameworks for 2025.", attendees: "120+", recapLink: "#" },
  { title: "Year-End Tax Optimization Workshop", date: "2024-12-05", time: "6:00 PM PST", location: "San Jose, CA", price: "Free", description: "Helped families optimize their year-end tax positions with last-minute strategies for deductions, contributions, and charitable giving.", attendees: "95+", recapLink: "#" }
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [eventTab, setEventTab] = useState('upcoming');
  const [eventSlideIndex, setEventSlideIndex] = useState(0);
  const [alertVisible, setAlertVisible] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Headline Typing Animation State
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    const totalLength = "Built on Strategy.Driven by Purpose.".length; // 36 characters
    const interval = setInterval(() => {
      setTypedLength((prev) => {
        if (prev < totalLength) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 55);
    return () => clearInterval(interval);
  }, []);

  // Dynamic Word Rotation State
  const heroWords = ["Clarity", "Confidence", "Strategy", "Prosperity"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % heroWords.length);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const slideInterval = useRef(null);
  const eventInterval = useRef(null);

  // Hero Slider Logic
  useEffect(() => {
    const nextSlide = () => {
      setSlideIndex(prev => (prev + 1) % 4);
    };
    slideInterval.current = setInterval(nextSlide, 4000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const goToHeroSlide = (n) => {
    setSlideIndex(n);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => setSlideIndex(prev => (prev + 1) % 4), 4000);
  };

  // Events Logic
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingEvents = eventsData.filter(e => new Date(e.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date));
  const pastEvents = eventsData.filter(e => new Date(e.date) < today).sort((a, b) => new Date(b.date) - new Date(a.date));
  const activeEvents = eventTab === 'upcoming' ? upcomingEvents : pastEvents;

  const [visibleEventCount, setVisibleEventCount] = useState(3);
  useEffect(() => {
    const updateCount = () => {
      setVisibleEventCount(window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const maxEventIndex = Math.max(0, activeEvents.length - visibleEventCount);

  useEffect(() => {
    const nextEvent = () => {
      setEventSlideIndex(prev => (prev >= maxEventIndex ? 0 : prev + 1));
    };
    eventInterval.current = setInterval(nextEvent, 4000);
    return () => clearInterval(eventInterval.current);
  }, [maxEventIndex, eventTab]);

  const slideEvents = (dir) => {
    setEventSlideIndex(prev => {
      let ni = prev + dir;
      if (ni > maxEventIndex) return 0;
      if (ni < 0) return maxEventIndex;
      return ni;
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setFormSubmitted(true);
        e.target.reset();
      } else {
        const err = await response.json();
        console.error("Form submission error:", err);
        setError("Technical issue. Please try again or click the link below.");
      }
    } catch (error) {
      console.error("Form network error:", error);
      setError("Network error. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [error, setError] = useState("");

  return (
    <div className="home-container">
      {/* Critical CSS for LCP Optimization */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* New Hero CSS */
        .hero-container {
          position: relative;
          width: 100%;
          height: calc(100vh - 85px);
          min-height: 600px;
          max-height: calc(100vh - 85px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 5% 45px 5%;
          box-sizing: border-box;
          background-color: #0a1c36;
          background-image: linear-gradient(135deg, rgba(10, 28, 54, 0.93) 0%, rgba(3, 8, 16, 0.96) 100%), url('/images/wealth-growth-arrow-bg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: transparent;
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
        }

        .hero-chart-svg {
          position: absolute;
          top: auto; left: 0; right: 0; bottom: 0;
          width: 100%; height: 35%;
          opacity: 0.15;
          pointer-events: none;
          z-index: 1;
        }

        /* Gold Concentric Circles Design */
        .concentric-circles-container {
          position: absolute;
          top: 50%;
          left: 15%;
          transform: translate(-50%, -50%);
          width: 900px;
          height: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
          opacity: 0.65;
        }

        .concentric-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(232, 198, 120, 0.35);
          box-shadow: 0 0 20px rgba(232, 198, 120, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cc-1 {
          width: 250px;
          height: 250px;
          border-color: rgba(232, 198, 120, 0.65);
          box-shadow: inset 0 0 15px rgba(232, 198, 120, 0.08), 0 0 15px rgba(232, 198, 120, 0.08);
          animation: spinClockwise 45s linear infinite;
        }

        .cc-2 {
          width: 450px;
          height: 450px;
          border-style: dashed;
          border-color: rgba(232, 198, 120, 0.5);
          animation: spinCounterClockwise 55s linear infinite;
        }

        .cc-3 {
          width: 650px;
          height: 650px;
          border-color: rgba(232, 198, 120, 0.4);
          border-style: double;
          border-width: 3px;
          animation: spinClockwise 70s linear infinite;
        }

        .cc-4 {
          width: 850px;
          height: 850px;
          border-style: dotted;
          border-color: rgba(232, 198, 120, 0.3);
          animation: spinCounterClockwise 90s linear infinite;
        }
        .circle-node {
          position: absolute;
          width: 7px;
          height: 7px;
          background: #e8c678;
          border-radius: 50%;
          box-shadow: 0 0 8px #fff, 0 0 15px #e8c678;
        }

        .circle-orb {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #ffffff 0%, #e8c678 40%, #c9a84c 85%, transparent 100%);
          box-shadow: 0 0 18px rgba(232, 198, 120, 0.85);
        }

        .circle-arrow {
          position: absolute;
          width: 14px;
          height: 14px;
          fill: none;
          pointer-events: none;
        }

        .tilted-orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(232, 198, 120, 0.3);
          pointer-events: none;
        }

        .to-1 {
          width: 750px;
          height: 750px;
          transform: rotateX(70deg) rotateY(20deg) rotateZ(0deg);
          animation: spinTiltedClockwise 60s linear infinite;
        }

        .to-2 {
          width: 750px;
          height: 750px;
          transform: rotateX(70deg) rotateY(-20deg) rotateZ(0deg);
          border-style: dashed;
          border-color: rgba(232, 198, 120, 0.25);
          animation: spinTiltedCounterClockwise 80s linear infinite;
        }

        @keyframes spinTiltedClockwise {
          from { transform: rotateX(70deg) rotateY(20deg) rotateZ(0deg); }
          to { transform: rotateX(70deg) rotateY(20deg) rotateZ(360deg); }
        }

        @keyframes spinTiltedCounterClockwise {
          from { transform: rotateX(70deg) rotateY(-20deg) rotateZ(360deg); }
          to { transform: rotateX(70deg) rotateY(-20deg) rotateZ(0deg); }
        }

        @keyframes spinClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinCounterClockwise {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes quantumHeroFloatOrb {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(120px, -60px) scale(1.2); }
          100% { transform: translate(-80px, 80px) scale(0.95); }
        }

        /* Gold corner design – bottom left */
        .hero-gold-flare {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 620px;
          height: 320px;
          background-image: url('/images/gold-flare.svg');
          background-size: contain;
          background-position: bottom left;
          background-repeat: no-repeat;
          pointer-events: none;
          z-index: 1;
        }

        /* Sparkling gold particles */
        .sparkle-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 420px;
          height: 260px;
          pointer-events: none;
          z-index: 2;
        }

        .sparkle {
          position: absolute;
          border-radius: 50%;
          background: #e8c678;
          animation: sparklePulse 2.5s ease-in-out infinite;
        }

        .sparkle::before, .sparkle::after {
          content: '';
          position: absolute;
          background: #e8c678;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        /* 4-point star shape via box-shadow */
        .sparkle-star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: transparent;
          animation: starTwinkle 2.5s ease-in-out infinite;
        }

        .sparkle-star::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 2px;
          height: 12px;
          background: linear-gradient(to bottom, transparent, #e8c678, transparent);
          border-radius: 50%;
        }

        .sparkle-star::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 2px;
          background: linear-gradient(to right, transparent, #e8c678, transparent);
          border-radius: 50%;
        }

        @keyframes sparklePulse {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes starTwinkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          40% { opacity: 1; transform: scale(1) rotate(45deg); }
          60% { opacity: 1; transform: scale(1.1) rotate(45deg); }
          80% { opacity: 0.3; transform: scale(0.8) rotate(90deg); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 0px;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 4vw, 3.8rem);
          line-height: 1.15;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #fff;
        }

        .headline-span {
          display: inline-block;
          white-space: nowrap;
        }

        .hero-divider {
          width: 60px;
          height: 3px;
          background: #e8c678;
          margin-bottom: 15px;
        }

        .sub-headline {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 600;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .paragraph {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 25px 0;
          font-weight: 300;
          max-width: 480px;
        }

        .hero-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary-hero {
          background: linear-gradient(135deg, #e8c678, #c9a84c);
          color: #030a16;
          padding: 14px 28px;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .btn-primary-hero::after {
          content: '';
          position: absolute;
          top: 0; left: -150%;
          width: 80px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-25deg);
          animation: goldenShineSwipe 4s infinite ease-in-out;
        }

        @keyframes goldenShineSwipe {
          0% { left: -150%; }
          15% { left: 150%; }
          100% { left: 150%; }
        }

        .btn-primary-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(232, 198, 120, 0.35);
        }

        .btn-outline-hero {
          background: transparent;
          color: #fff;
          padding: 13px 28px;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.35);
        }

        .btn-outline-hero:hover {
          border-color: #e8c678;
          color: #e8c678;
        }

        .play-icon { color: #e8c678; }

        /* RIGHT COLUMN */
        .hero-right {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          height: 100%;
          min-height: 440px;
          overflow: visible;
        }

        /* Bright office background on right side only */
        .office-bg-layer {
          position: absolute;
          top: -120px; bottom: -60px;
          right: -15%; left: 10%;
          background-image: url('/images/office-bg.png');
          background-size: cover;
          background-position: center top;
          mask-image: linear-gradient(to right, transparent 0%, black 35%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 35%);
          z-index: 0;
          opacity: 0.9;
        }
        /* Profile image */
        .profile-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 620px;
          container-type: inline-size;
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .profile-wrapper:hover {
          transform: translateY(-8px) scale(1.015);
        }

        .main-profile-img {
          width: 100%;
          max-width: 620px;
          max-height: 65vh;
          height: auto;
          object-fit: contain;
          object-position: center bottom;
          position: relative;
          z-index: 2;
          display: block;
          mask-image: radial-gradient(ellipse at 45% 15%, black 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 75%, transparent 98%);
          -webkit-mask-image: radial-gradient(ellipse at 45% 15%, black 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 75%, transparent 98%);
        }

        .laptop-logo-overlay {
          position: absolute;
          bottom: 12%;
          right: 3%;
          width: 25cqw;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transform: rotate(-10deg) skewX(-14deg);
        }

        .laptop-logo-overlay img {
          width: 100%;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .laptop-logo-overlay span {
          font-size: 1.5cqw;
          color: #0a1930;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-align: center;
        }

        @media (max-width: 500px) {
          .laptop-logo-overlay span {
            display: none;
          }
          .laptop-logo-overlay {
            width: 20cqw;
            bottom: 12%;
            right: 5%;
          }
        }

        /* Name plate image bottom-left */
        .name-plate-img {
          position: absolute;
          bottom: -5px;
          left: 0.5%;
          width: 38%;
          max-width: 240px;
          z-index: 5;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.4));
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .profile-wrapper:hover .name-plate-img {
          transform: translateY(3px) rotate(-1.5deg) scale(1.03);
        }

        @media (max-width: 500px) {
          .name-plate-img {
            bottom: 12px;
            left: 4%;
            width: 50cqw;
          }
        }

        /* PARTNER CARD – transparent background, right side */
        .partner-card {
          position: absolute;
          right: -115px;
          top: 8%;
          background: transparent;
          width: 280px;
          z-index: 6;
        }

        .partner-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #8B6914;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .partner-eyebrow-bar {
          width: 3px;
          height: 18px;
          background: #8B6914;
          display: inline-block;
          border-radius: 2px;
        }

        .partner-main-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          color: #030a16;
          line-height: 1.1;
          font-weight: 700;
          margin: 0 0 16px 0;
        }

        .partner-desc {
          font-size: 0.88rem;
          color: #333333;
          line-height: 1.7;
          margin: 0;
        }

        /* BOTTOM BANNER */
        .bottom-banner {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: rgba(3, 10, 22, 0.92);
          border-top: 1px solid rgba(232, 198, 120, 0.25);
          padding: 14px 30px;
          color: #e8c678;
          font-size: 1.05rem;
          font-family: 'Playfair Display', serif;
          letter-spacing: 2px;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .banner-line {
          flex: 1; max-width: 100px; height: 1px;
          background: linear-gradient(to right, transparent, #e8c678);
        }
        .banner-line.right {
          background: linear-gradient(to left, transparent, #e8c678);
        }

        .bottom-banner .dot { font-size: 0.5rem; opacity: 0.7; }

        #services {
          background: #ffffff;
          padding-top: 80px;
          margin-top: 0;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .hero-container {
            height: auto !important;
            max-height: none !important;
            padding: 80px 0 0 0 !important;
            overflow: hidden !important;
          }
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 0 !important;
          }
          .hero-left {
            align-items: center;
            width: 100%;
            padding: 40px 20px 60px 20px !important;
            box-sizing: border-box;
          }
          .hero-btns {
            justify-content: center;
            width: 100%;
            gap: 12px;
          }
          .btn-primary-hero, .btn-outline-hero {
            width: 100%;
            max-width: 320px;
            justify-content: center;
            box-sizing: border-box;
          }
          .headline {
            font-size: clamp(2rem, 7vw, 2.8rem) !important;
            line-height: 1.25;
            width: 100%;
          }
          .headline-span {
            white-space: normal !important;
            display: inline !important;
          }
          .paragraph {
            margin-left: auto;
            margin-right: auto;
            max-width: 100%;
          }
          .hero-right {
            min-height: auto;
            justify-content: center;
            align-items: center;
            margin-top: 0 !important;
            width: 100%;
            background: #ffffff !important;
            padding: 60px 20px 80px 20px !important;
            box-sizing: border-box;
          }
          .office-bg-layer {
            left: 0 !important;
            right: 0 !important;
            top: 0 !important;
            bottom: 0 !important;
            opacity: 0.15 !important;
            background-image: url('/images/office-bg.png') !important;
            background-size: cover !important;
          }
          .profile-wrapper {
            max-width: 420px;
            margin: 0 auto;
            width: 100%;
          }
          .main-profile-img {
            max-height: 50vh;
            width: 100%;
            height: auto;
          }
          .partner-card {
            position: relative;
            right: auto;
            top: auto;
            margin: 30px auto 0 auto;
            text-align: center;
            width: 100%;
            max-width: 400px;
            box-sizing: border-box;
            background: transparent !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          .partner-card .partner-main-title {
            color: #030a16 !important;
          }
          .partner-card .partner-desc {
            color: #333333 !important;
          }
          .partner-card .partner-eyebrow {
            color: #8B6914 !important;
            justify-content: center;
          }
          .partner-card .partner-eyebrow-bar {
            background: #8B6914 !important;
          }
          .concentric-circles-container {
            left: 50%;
            width: 500px;
            height: 500px;
            transform: translate(-50%, -50%) scale(0.65);
            opacity: 0.2;
          }
          .bottom-banner {
            position: relative !important;
            z-index: 10;
            width: 100%;
            box-sizing: border-box;
            font-size: 0.85rem !important;
            letter-spacing: 1px !important;
            padding: 12px 15px !important;
            gap: 8px !important;
            margin-top: 0 !important;
          }
          .bottom-banner .banner-line {
            display: none !important;
          }
          #services { padding-top: 40px; }
        }

        @keyframes shineSweep {
          0% { left: -100%; } 50% { left: 100%; } 100% { left: 100%; }
        }

        .reveal {
          opacity: 0; transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        .typing-cursor {
          display: inline-block;
          font-weight: 300;
          color: #e8c678;
          animation: cursorBlink 0.8s infinite;
          margin-left: 4px;
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        /* Drifting Gold Particles Background */
        .drifting-particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          bottom: -10px;
          background: radial-gradient(circle, rgba(232, 198, 120, 0.8) 0%, rgba(201, 168, 76, 0.4) 60%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(232, 198, 120, 0.5);
          animation: floatUpParticle linear infinite;
        }

        @keyframes floatUpParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-110vh) translateX(50px);
            opacity: 0;
          }
        }

        /* Subtle Geometric Grid Overlay */
        .hero-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(232, 198, 120, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(232, 198, 120, 0.035) 1px, transparent 1px);
          z-index: 1;
          pointer-events: none;
          animation: gridPulse 8s ease-in-out infinite alternate;
        }

        @keyframes gridPulse {
          0% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}} />

      {/* HERO SECTION */}
      <section className="hero-container" id="home">

        <div className="hero-overlay"></div>
        <div className="hero-grid-overlay"></div>
        <div className="hero-gold-flare"></div>

        {/* Drifting Gold Particles Background */}
        <div className="drifting-particles-container">
          <div className="particle" style={{ left: '10%', width: '4px', height: '4px', animationDuration: '14s', animationDelay: '0s' }}></div>
          <div className="particle" style={{ left: '25%', width: '6px', height: '6px', animationDuration: '18s', animationDelay: '3s' }}></div>
          <div className="particle" style={{ left: '45%', width: '3px', height: '3px', animationDuration: '12s', animationDelay: '1s' }}></div>
          <div className="particle" style={{ left: '65%', width: '8px', height: '8px', animationDuration: '22s', animationDelay: '5s' }}></div>
          <div className="particle" style={{ left: '85%', width: '5px', height: '5px', animationDuration: '16s', animationDelay: '2s' }}></div>
        </div>

        {/* Gold Concentric Circles Design with Orbiting Orbs and Arrows */}
        <div className="concentric-circles-container">
          {/* Tilted 3D Gyroscopic Orbits */}
          <div className="tilted-orbit to-1"></div>
          <div className="tilted-orbit to-2"></div>

          {/* CC-4 (Counter-Clockwise) */}
          <div className="concentric-circle cc-4">
            <div className="circle-orb" style={{ top: '50%', left: '0', transform: 'translate(-50%, -50%)' }}></div>
            <svg className="circle-arrow" style={{ top: '50%', left: '30px', transform: 'translate(-50%, -50%) rotate(90deg)' }} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#e8c678" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {/* CC-3 (Clockwise) */}
          <div className="concentric-circle cc-3">
            <div className="circle-node" style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className="circle-node" style={{ bottom: '0', left: '50%', transform: 'translate(-50%, 50%)' }}></div>
            <div className="circle-orb" style={{ top: '50%', right: '0', transform: 'translate(50%, -50%)' }}></div>
            <svg className="circle-arrow" style={{ top: '50%', right: '30px', transform: 'translate(50%, -50%) rotate(90deg)' }} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#e8c678" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {/* CC-2 (Counter-Clockwise) */}
          <div className="concentric-circle cc-2">
            <div className="circle-node" style={{ top: '50%', left: '0', transform: 'translate(-50%, -50%)' }}></div>
            <div className="circle-node" style={{ top: '50%', right: '0', transform: 'translate(50%, -50%)' }}></div>
            <div className="circle-orb" style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <svg className="circle-arrow" style={{ top: '30px', left: '50%', transform: 'translate(-50%, -50%) rotate(180deg)' }} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#e8c678" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {/* CC-1 (Clockwise) */}
          <div className="concentric-circle cc-1">
            <div className="circle-node" style={{ top: '15%', left: '85%', transform: 'translate(-50%, -50%)' }}></div>
            <div className="circle-orb" style={{ bottom: '0', left: '50%', transform: 'translate(-50%, 50%)' }}></div>
            <svg className="circle-arrow" style={{ bottom: '30px', left: '50%', transform: 'translate(-50%, 50%) rotate(180deg)' }} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="#e8c678" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        {/* Abstract Glowing Financial Line Chart */}
        <svg className="hero-chart-svg" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8c678" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#e8c678" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M0,330 Q150,260 300,290 T600,160 T900,70 L1000,40 L1000,400 L0,400 Z" fill="url(#chartGlow)" />
          <path d="M0,330 Q150,260 300,290 T600,160 T900,70 L1000,40" fill="none" stroke="#e8c678" strokeWidth="2.5" strokeLinecap="round" style={{ filter: 'drop-shadow(0 2px 8px rgba(232, 198, 120, 0.5))' }} />
          <circle cx="300" cy="290" r="4.5" fill="#fff" style={{ filter: 'drop-shadow(0 0 6px #e8c678)' }} />
          <circle cx="600" cy="160" r="4.5" fill="#fff" style={{ filter: 'drop-shadow(0 0 6px #e8c678)' }} />
          <circle cx="900" cy="70" r="4.5" fill="#fff" style={{ filter: 'drop-shadow(0 0 6px #e8c678)' }} />
        </svg>
        {/* Sparkling gold in bottom-left corner */}
        <div className="sparkle-container">
          {/* Horizontal beam lines */}
          <div style={{ position:'absolute', bottom:'55px', left:0, width:'380px', height:'1.5px', background:'linear-gradient(to right, #c9a84c 0%, #e8c678 40%, #fff 55%, #e8c678 70%, transparent 100%)' }}></div>
          <div style={{ position:'absolute', bottom:'48px', left:'20px', width:'260px', height:'1px', background:'linear-gradient(to right, rgba(201,168,76,0.5) 0%, rgba(232,198,120,0.8) 50%, transparent 100%)' }}></div>
          <div style={{ position:'absolute', bottom:'42px', left:'40px', width:'160px', height:'0.5px', background:'linear-gradient(to right, transparent, rgba(232,198,120,0.4), transparent)' }}></div>

          {/* 4-point sparkle stars */}
          <div className="sparkle-star" style={{ bottom:'62px', left:'168px', animationDelay:'0s' }}></div>
          <div className="sparkle-star" style={{ bottom:'80px', left:'80px', animationDelay:'0.8s', transform:'scale(0.6)' }}></div>
          <div className="sparkle-star" style={{ bottom:'90px', left:'230px', animationDelay:'1.4s', transform:'scale(0.5)' }}></div>
          <div className="sparkle-star" style={{ bottom:'70px', left:'310px', animationDelay:'0.4s', transform:'scale(0.4)' }}></div>

          {/* Small glowing dots */}
          <div className="sparkle" style={{ bottom:'64px', left:'170px', width:'5px', height:'5px', boxShadow:'0 0 8px 3px rgba(232,198,120,0.8), 0 0 2px 1px #fff', animationDelay:'0.2s' }}></div>
          <div className="sparkle" style={{ bottom:'82px', left:'82px', width:'3px', height:'3px', boxShadow:'0 0 5px 2px rgba(232,198,120,0.6)', animationDelay:'1s' }}></div>
          <div className="sparkle" style={{ bottom:'92px', left:'232px', width:'2px', height:'2px', boxShadow:'0 0 4px 2px rgba(232,198,120,0.5)', animationDelay:'1.6s' }}></div>
          <div className="sparkle" style={{ bottom:'72px', left:'312px', width:'2px', height:'2px', boxShadow:'0 0 4px 2px rgba(232,198,120,0.4)', animationDelay:'0.6s' }}></div>
          <div className="sparkle" style={{ bottom:'100px', left:'140px', width:'2px', height:'2px', boxShadow:'0 0 4px 2px rgba(232,198,120,0.4)', animationDelay:'2s' }}></div>
        </div>

        <div className="hero-content">

          {/* LEFT: Headline + Text + Buttons */}
          <div className="hero-left">
            {(() => {
              const line1Text = "Built on Strategy.";
              const line2Text = "Driven by Purpose.";
              const displayLine1 = line1Text.slice(0, typedLength);
              const displayLine2 = typedLength > line1Text.length 
                ? line2Text.slice(0, typedLength - line1Text.length) 
                : "";

              return (
                <h1 className="headline">
                  <span className="headline-span" style={{ color: 'white' }}>
                    {displayLine1}
                    {typedLength < line1Text.length && <span className="typing-cursor">|</span>}
                  </span><br />
                  <span className="headline-span" style={{ color: '#e8c678' }}>
                    {displayLine2}
                    {typedLength >= line1Text.length && typedLength < (line1Text.length + line2Text.length) && <span className="typing-cursor">|</span>}
                  </span>
                </h1>
              );
            })()}
            <div className="hero-divider"></div>
            <h2 className="sub-headline">
              Take a Quantum Leap Toward Financial Confidence
            </h2>
            <p className="paragraph">
              Empowering families through education-first financial strategies designed for retirement confidence, wealth preservation, and lasting legacy.
            </p>
            <div className="hero-btns">
              <button onClick={(e) => {
                e.preventDefault();
                if (window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/quantumleapwealth/30min' });
              }} className="btn-primary-hero">
                <span>🗓️</span> BOOK DISCOVERY CALL
              </button>
              <a href="#services" className="btn-outline-hero">
                <span className="play-icon">▷</span> EXPLORE OUR SERVICES
              </a>
            </div>
          </div>

          {/* RIGHT: Image + overlays */}
          <div className="hero-right">
            <div className="office-bg-layer"></div>

            <div className="profile-wrapper">
              <img
                src="/images/Anu-Pic-with-laptop-removebg-preview.png"
                alt="Anuradha Pasupuleti"
                className="main-profile-img"
              />

              {/* Name plate image bottom-left */}
              <img
                src="/images/Anu-name-plate (1).png"
                alt="Anuradha Pasupuleti - Founder | Financial Strategist"
                className="name-plate-img"
              />
            </div>

            {/* Partner text – top right, transparent */}
            <div className="partner-card">
              <div className="partner-eyebrow">
                <span className="partner-eyebrow-bar"></span> MEET YOUR
              </div>
              <h2 className="partner-main-title">FINANCIAL<br/>PARTNER</h2>
              <p className="partner-desc">
                Providing thoughtful guidance and personalized strategies to help families make informed financial decisions and build a more confident future.
              </p>
            </div>
          </div>

        </div>

        <div className="bottom-banner">
          <span className="banner-line"></span>
          <span>Educate Today.</span>
          <span className="dot">♦</span>
          <span>Elevate Tomorrow.</span>
          <span className="dot">♦</span>
          <span>Empower Forever.</span>
          <span className="banner-line right"></span>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section" id="services">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '60px' }}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our Best Services</h2>
            <p className="section-sub">Comprehensive financial solutions designed to protect, grow, and sustain your wealth at every stage of life.</p>
          </div>
          <div className="services-grid">
            <ServiceCard href="/images/services/investment-planning" img="/images/financial_pics.png" title="Financial Needs Analysis" backTitle="Comprehensive Financial Needs Analysis" delay="1"
              desc="Strategic portfolio management aligned with your risk tolerance and long-term financial goals for maximum growth." />
            <ServiceCard href="/images/services/living-will-trust" img="/images/will&Trust_pics.png" title="Living Will & Trust" delay="2"
              desc="Protect your legacy and ensure your assets are distributed exactly as you intend, with confidence and clarity." />
            <ServiceCard href="/images/services/tax-saving" img="/images/LifeProtection_pics.png" title="Tax Savings" delay="3"
              desc="Maximize your wealth with smart, proactive tax strategies that keep more money in your pocket legally." />
            <ServiceCard href="/images/services/retirement-planning" img="/images/ritermentplanning_pics.png" title="Retirement Planning" delay="1"
              desc="Plan the retirement you deserve - comfortable, secure, and financially independent from day one." />
            <ServiceCard href="/images/services/kids-college" img="/images/kids_college_planning.png" title="Kids College Fund" delay="2"
              desc="Invest in your child's future today with education savings plans tailored to your family's timeline and goals." />
            <ServiceCard href="/images/services/life-insurance" img="/images/LifeProtection_PermanentInsurance_pics.png" title="Life Insurance" delay="3"
              desc="Comprehensive coverage that protects your loved ones financially while building long-term asset value." />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="why-choose-title">Why Choose Us?</h2>
          <div className="why-choose-grid">
            <WhyChooseItem icon="🎯" title="Expert Guidance" desc="Licensed professionals providing personalized financial strategies tailored to your goals." />
            <WhyChooseItem icon="📋" title="Comprehensive Solutions" desc="From insurance to real estate - all your financial needs under one trusted roof." />
            <WhyChooseItem icon="📈" title="Proven Results" desc="Trusted by hundreds of families to build, protect, and grow their wealth for generations." />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section section-light" id="process">
        <div className="container">
          <div className="text-center reveal">
            <div className="divider-container">
              <div className="divider-line"></div>
              <span className="divider-text">Our Process</span>
              <div className="divider-line"></div>
            </div>
            <h2 className="section-title">How We Work With You</h2>
            <p className="section-sub">A simple, 4-step journey to financial security and wealth growth.</p>
          </div>
          <div className="process-timeline">
            <div className="timeline-line"></div>
            <TimelineItem title="Free Consultation" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>} desc="We start with a no-obligation conversation to understand your current financial situation, challenges, and long-term goals." />
            <TimelineItem title="Financial Analysis" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"></path></svg>} desc="We analyze your assets, income, risk tolerance, and future needs using proprietary tools to build a complete, transparent picture." />
            <TimelineItem title="Custom Strategy" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>} desc="We craft a personalized financial plan covering multi-asset investments, life insurance protection, retirement, and tax optimization." />
            <TimelineItem title="Ongoing Support" icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>} desc="Your life changes, and so should your strategy. We monitor, adjust, and stay by your side as your family and wealth evolve over time." />
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="section section-light" id="products">
        <div className="container">
          <div className="text-center reveal">
            <div className="divider-container">
              <div className="divider-line"></div>
              <span className="divider-text">Our Product</span>
              <div className="divider-line"></div>
            </div>
            <h2 className="section-title">Strategic Partner <span className="highlight">Network</span></h2>
            <p className="section-sub">We collaborate with industry-leading financial institutions to bring you the best-in-class products and solutions.</p>
          </div>
        </div>
        <div className="logo-ticker-container">
          <div className="logo-ticker-track">
            {[1, 2].map(set => (
              <div key={set} style={{ display: 'contents' }}>
                <a href="https://www.american-equity.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/American_product.png" alt="American Product" /></a>
                <a href="https://www.annexus.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/annexus_product.png" alt="Annexus Product" /></a>
                <a href="https://www.corebridgefinancial.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/corebridge_product.png" alt="Corebridge Product" /></a>
                <a href="https://www.fidelity.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/Fidelity_product.png" alt="Fidelity Product" /></a>
                <a href="https://www.nationwidenewheights.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/nationwide_product._pic.jpg" alt="Nationwide Product" /></a>
                <a href="https://www.northamericancompany.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/northamerican_product.png" alt="North American Product" /></a>
                <a href="https://www.fglife.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/fg-life.png" alt="F&G Life" /></a>
                <a href="https://www.lincolnfinancial.com/public/individuals" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/lincoln-financial.png" alt="Lincoln Financial" /></a>
                <a href="https://www.athene.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/athene.jpg" alt="Athene" /></a>
                <a href="https://www.allianz.com/en.html" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/allianz.png" alt="Allianz" /></a>
                <a href="https://www.ameritas.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/ameritas.png" alt="Ameritas" /></a>
                <a href="https://www.ethos.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/ethos.png" alt="Ethos" /></a>
                <a href="https://www.americanamicable.com/v4/index.php" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/american-amicable.png" alt="American Amicable" /></a>
                <a href="https://www.mutualofomaha.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/mutual-of-omaha.png" alt="Mutual of Omaha" /></a>
                <a href="https://www.netlaw.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/netlaw.png" alt="NetLaw" /></a>
                <a href="https://www.agentpipeline.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/agent-pipeline.png" alt="Agent Pipeline" /></a>
                <a href="https://neishloss.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/neishloss.png" alt="Neishloss & Fleming" /></a>
                <a href="https://www.foresters.com/en-ca" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/forester-canada.svg" alt="Foresters" /></a>
                <a href="https://www.cpp.ca" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/canada-protection-plan.png" alt="Canada Protection Plan" /></a>
                <a href="https://ia.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/ia.png" alt="iA Financial Group" /></a>
                <a href="https://www.beneva.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/beneva.png" alt="Beneva" /></a>
                <a href="https://www.serenialife.ca/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/serenia-life.jpg" alt="Serenia Life" /></a>
                <a href="https://www.bmo.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex' }}><TickerLogo src="/images/product_images/bmo.png" alt="BMO" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="events-section" id="newsletter" style={{ padding: '50px 0', textAlign: 'center', background: '#ffffff', color: '#0b1d42' }}>
        <div className="container">
          <div className="events-header reveal" style={{ marginBottom: '25px' }}>
            <span className="section-label" style={{ color: '#c9a84c', fontWeight: '800' }}>Newsletter</span>
            <h2 className="section-title" style={{ color: '#0b1d42' }}>Stay Connected With Us</h2>
            <p className="section-sub" style={{ margin: '0 auto', maxWidth: '600px', color: '#555' }}>Subscribe to our weekly newsletter.</p>
          </div>
          <div className="reveal">
            <form onSubmit={async (e) => {
              e.preventDefault();
              const firstName = e.target.firstName.value;
              const email = e.target.email.value;
              try {
                const res = await fetch('/api/newsletter', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ firstName, email })
                });
                if (res.ok) {
                  window.location.href = '/newsletter/success';
                } else {
                  alert('Something went wrong. Please try again.');
                }
              } catch (err) {
                alert('Something went wrong. Please try again.');
              }
            }} style={{ display: 'flex', gap: '10px', justifyContent: 'center', maxWidth: '700px', margin: '0 auto', flexWrap: 'wrap' }}>
              <input type="text" name="firstName" required placeholder="First Name" style={{ padding: '15px', borderRadius: '4px', border: '1px solid #ccc', flex: 1, minWidth: '200px', fontSize: '1rem', fontFamily: 'inherit' }} />
              <input type="email" name="email" required placeholder="Email Address" style={{ padding: '15px', borderRadius: '4px', border: '1px solid #ccc', flex: 1, minWidth: '200px', fontSize: '1rem', fontFamily: 'inherit' }} />
              <button type="submit" className="btn-primary" style={{ padding: '15px 30px', borderRadius: '4px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', background: '#c9a84c', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 10px 20px rgba(201,168,76,0.3)' }}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY SECTION */}
      <section className="opp-section" id="opportunity">
        <div className="container">
          <div className="opp-inner" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
            <div className="reveal">
              <div className="opp-card">
                <h3>Get In Touch Today</h3>
                <form id="contact-form" className="contact-form-grid" onSubmit={handleFormSubmit}>
                  <div className="opp-form-group">
                    <label>First Name *</label>
                    <input type="text" name="first_name" required placeholder="First name" />
                  </div>
                  <div className="opp-form-group">
                    <label>Last Name *</label>
                    <input type="text" name="last_name" required placeholder="Last name" />
                  </div>
                  <div className="opp-form-group">
                    <label>Email Address *</label>
                    <input type="email" name="user_email" required placeholder="your@email.com" />
                  </div>
                  <div className="opp-form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="user_phone" placeholder="(+1) 000-000-0000" />
                  </div>
                  <div className="opp-form-group grid-span-2">
                    <label>Service of Interest</label>
                    <select name="service">
                      <option value="">- Select a service -</option>
                      <option>Financial Needs Analysis</option>
                      <option>Living Will &amp; Trust</option>
                      <option>Tax Savings</option>
                      <option>Retirement Planning</option>
                      <option>Kids College Fund</option>
                      <option>Life Insurance</option>
                      <option>6 Steps to Financial Freedom</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="opp-form-group grid-span-2">
                    <label>Your Message *</label>
                    <textarea name="message" required placeholder="Tell us about your goals..." style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1.5px solid var(--border)', background: 'var(--bg-light)', color: 'var(--text-dark)', outline: 'none', transition: '0.2s', fontFamily: "var(--font-inter)", resize: 'vertical', minHeight: '100px' }}></textarea>
                  </div>
                  <div className="grid-span-2">
                    <button
                       type="submit"
                       className="opp-submit form-submit"
                       disabled={isSubmitting}
                       style={{ marginTop: 0 }}
                     >
                       {isSubmitting ? "Sending..." : "Send Message →"}
                     </button>
                  </div>
                </form>
                {error && (
                  <div style={{ marginTop: "15px", textAlign: "center" }}>
                    <p style={{ color: "#ef4444", fontSize: "0.85rem", marginBottom: "5px" }}>{error}</p>
                    <a
                      href="mailto:connect@quantumleapwealth.com?subject=Contact Inquiry&body=Hi Quantum Leap Wealth team, I'm reaching out via the website fallback."
                      style={{ color: "#fff", fontSize: "0.8rem", textDecoration: "underline", opacity: 0.8 }}
                    >
                      Email us directly instead →
                    </a>
                  </div>
                )}
                {formSubmitted && (
                  <div className="form-success" id="form-success" style={{ display: 'block', background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '10px', padding: '20px', textAlign: 'center', color: '#166534', fontWeight: '600', marginTop: '15px' }}>
                    ✅ Thank you! Your message has been sent. We&apos;ll reach out within 24 hours.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimator />
    </div>
  );
}

// Sub-components for cleaner structure
function ServiceCard({ href, img, title, backTitle, desc, delay }) {
  return (
    <a href={href} className="flip-card" style={{ textDecoration: 'none' }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image src={img} alt={title} width={375} height={320} style={{ objectFit: 'cover' }} />
          <div className="front-content"><h3>{title}</h3></div>
        </div>
        <div className="flip-card-back">
          <h3>{backTitle || title}</h3>
          <p>{desc}</p>
          <span className="card-arrow">Learn more →</span>
        </div>
      </div>
    </a>
  );
}

function WhyChooseItem({ icon, title, desc }) {
  return (
    <div>
      <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{icon}</div>
      <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: '8px', fontWeight: '700' }}>{title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.5' }}>{desc}</p>
    </div>
  );
}

function TimelineItem({ title, icon, desc }) {
  const itemRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    }, { threshold: 0.2 });
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-item" ref={itemRef}>
      <div className="timeline-left"><h3 className="tl-title">{title}</h3></div>
      <div className="timeline-center">{icon}</div>
      <div className="timeline-right"><p className="tl-desc">{desc}</p></div>
    </div>
  );
}

function TickerLogo({ src, alt }) {
  return (
    <div className="logo-item">
      <Image src={src} alt={alt} width={150} height={50} style={{ objectFit: 'contain' }} />
    </div>
  );
}

function EventCard({ event, isPast }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const d = new Date(event.date);
  const day = String(d.getDate()).padStart(2, '0');
  const mon = months[d.getMonth()];

  return (
    <div className="events-slide">
      <div className="event-card">
        <div className="event-card-top">
          <div className="event-date-badge"><span className="eday">{day}</span><span className="emonth">{mon}</span></div>
          <h4>{event.title}</h4>
        </div>
        <div className="event-card-body">
          <span className={`event-badge-status ${isPast ? 'badge-completed' : 'badge-upcoming'}`}>
            {isPast ? '✓ Completed' : '● Upcoming'}
          </span>
          <p>{event.description}</p>
          <div className="event-meta">
            {isPast ? (
              <><span>👥 {event.attendees || 'N/A'} Attendees</span><span>📍 {event.location}</span></>
            ) : (
              <><span>📍 {event.location}</span><span>🎟️ {event.price || 'Free'}</span></>
            )}
          </div>
          {isPast ? (
            <a href={event.recapLink || '#'} className="event-btn event-btn-recap">View Recap →</a>
          ) : (
            <a href="#" className="event-btn event-btn-register" onClick={(e) => {
              e.preventDefault();
              if (window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/quantumleapwealth/30min' });
            }}>BOOK DISCOVERY CALL →</a>
          )}
        </div>
      </div>
    </div>
  );
}

function OppPerk({ text }) {
  return (
    <div className="opp-perk"><div className="opp-perk-icon">✓</div>{text}</div>
  );
}
