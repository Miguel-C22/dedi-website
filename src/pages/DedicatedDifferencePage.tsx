import { useState } from "react";
import QuestionsCta from "../components/QuestionsCta";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

const chips = [
  {
    label: "Comprehensive Inventory",
    desc: "250,000+ products in stock and ready to ship.",
  },
  {
    label: "Hardware Expertise",
    desc: "Every unit inspected, tested, and expertly refurbished.",
  },
  {
    label: "Ease & Assurance",
    desc: "Backed by a 1-year guarantee on every order.",
  },
  { label: "Speed & Efficiency", desc: "Same-day shipping in many cases." },
].map((c, i) => ({ ...c, n: i + 1 }));

const values = [
  {
    title: "Start with the Customer",
    desc: "Think of the customer, know their expectations and do your part to deliver an exceptional customer experience.",
  },
  {
    title: "Connect",
    desc: "Open yourself to others, build strong relationships, and combine your talents to accomplish more.",
  },
  {
    title: "Bring Your Best",
    desc: "Nothing’s beneath me; do great work, provide great service, and overdeliver.",
  },
  {
    title: "Own It",
    desc: "Act with integrity, deliver on your promises, and take pride in your work.",
  },
  {
    title: "Grow",
    desc: "Be curious and courageous, create solutions, and continuously improve.",
  },
].map((v, i) => ({ ...v, n: i + 1 }));

interface Testimonial {
  name: string;
  role: string;
  photo: string;
  quote: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Robin C.",
    role: "Germany, Participant in the Not-A-Boring Competition",
    photo: "/uploads/Boring-headshot-edited.png",
    quote:
      "I live in Germany and entered an American tunnel boring competition. The event was in Las Vegas in the middle of the summer. When the extreme heat got the best of us and we needed new equipment in a pinch, Dedicated Networks saved the day and overnighted replacement parts to us.",
  },
  {
    name: "Andy B.",
    role: "Vice President of Marketing",
    photo: "/uploads/Andy-Photo.png",
    quote:
      "Seriously amazing service! An office branch firewall suddenly bricked and the manufacturer didn’t give a solid ETA on a replacement. I contacted Dedicated Networks and they were able to get my order ready for local pickup within 90 minutes. I was able to get my site up within a few hours vs an unknown amount of days. Responsive communication. Friendly staff. Buy with confidence! Thank you!",
  },
  {
    name: "Callum H.",
    role: "Chief Operations Officer",
    photo: "/uploads/callum.png",
    quote:
      "We have been sourcing equipment from Dedicated Networks Inc for nearly 2 years. We rely on top quality products with a fast turnaround and that is exactly what the team at Dedicated Networks provides. They have been a fantastic company to work with and have assisted us in our global expansions with high quality products.",
  },
];

interface Leader {
  name: string;
  role: string;
  photo: string;
  quote: string;
  bio: string;
  education: string;
}

const leadersData: Leader[] = [
  {
    name: "Paul Cullen",
    role: "CEO",
    photo: "/uploads/Paul-1024x1024-1.jpg",
    quote:
      "My passion and priority have always been to exceed our customer’s expectations.",
    bio: "Paul and his father, Jerry Cullen, co-founded Dedicated Networks in 2005. He is now Chairman, acting as a strategic advisor to the CEO, and his influence permeates not only our company, but our entire industry. From a small startup in 2005, he grew the company to over 150 employees, and continues to help extend the life of more and more pieces of excellent equipment.",
    education: "Marketing Management, University of St. Thomas",
  },
  {
    name: "Beau Gulsvig",
    role: "COO",
    photo: "/uploads/Beau-2.png",
    quote:
      "Let’s embrace experimentation, positive intention, and the power of teamwork to achieve our goals.",
    bio: "Beau is a vital contributor in driving scale through systems and processes. He came to Dedicated Networks in early 2021 and has since been essential in the growth of our company, leading Revenue functions including Product Management, Sales, eCommerce, and Marketing.",
    education: "University of Minnesota – Duluth",
  },
  {
    name: "Joe Williams",
    role: "CFO",
    photo: "/uploads/Joe-1-e1712241114713-600x600.png",
    quote:
      "Start with yes. We exist to solve problems for our customers and partners.",
    bio: "Start with yes. We exist to solve problems for our customers and partners.",
    education: "",
  },
  {
    name: "Jesse Johnson",
    role: "VP of Revenue",
    photo: "/uploads/Jesse-Headshot.png",
    quote:
      "Leadership means owning the outcome, building trust, and doing what it takes, every time.",
    bio: "Leadership means owning the outcome, building trust, and doing what it takes, every time.",
    education: "",
  },
  {
    name: "Adam Kohl",
    role: "Plant Manager",
    photo: "/uploads/Adam-1-e1712241770130-600x600.png",
    quote:
      "Collaborative operations ignite progress and perpetual improvement. Together, we excel and elevate.",
    bio: "Collaborative operations ignite progress and perpetual improvement. Together, we excel and elevate.",
    education: "",
  },
  {
    name: "Tyler Ford",
    role: "Compliance and Quality Manager",
    photo: "/uploads/Tyler-2-e1712241979223-600x600.png",
    quote:
      "My passion lies in driving others to success, laying the groundwork for organizational growth, and ensuring unwavering quality and compliance for our customers’ consistent satisfaction.",
    bio: "My passion lies in driving others to success, laying the groundwork for organizational growth, and ensuring unwavering quality and compliance for our customers’ consistent satisfaction.",
    education: "",
  },
];

export default function DedicatedDifferencePage() {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState<number | null>(
    null,
  );
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const activeLeader =
    activeLeaderIndex != null ? leadersData[activeLeaderIndex] : null;
  const n = testimonialsData.length;

  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % n);
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + n) % n);

  const [missionRef, missionInView] = useInView<HTMLElement>();
  const [valuesRef, valuesInView] = useInView<HTMLDivElement>({
    threshold: 0.15,
  });
  const [dedicationRef, dedicationInView] = useInView<HTMLElement>();
  const [testimonialsRef, testimonialsInView] = useInView<HTMLElement>();
  const [leadershipRef, leadershipInView] = useInView<HTMLElement>();
  const [leadersGridRef, leadersGridInView] = useInView<HTMLDivElement>({
    threshold: 0.15,
  });
  const [affiliatesRef, affiliatesInView] = useInView<HTMLElement>();
  const [certificationsRef, certificationsInView] = useInView<HTMLElement>();
  const [statsRef, statsProgress] = useCountUp<HTMLDivElement>();

  const stats = [
    {
      big: `${Math.round(250000 * statsProgress).toLocaleString()}+`,
      finalChars: 8,
      label: "Products in stock",
    },
    { big: "Same day", finalChars: 8, label: "Shipping, in many cases" },
    {
      big: `${Math.round(60 * statsProgress)}+`,
      finalChars: 3,
      label: "Countries served",
    },
  ];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section
        style={{ background: "oklch(0.2 0.05 258)", padding: "150px 0 64px" }}
      >
        <div className="dn-container">
          <div
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: 1.4,
              color: "oklch(0.68 0.16 148)",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Dedicated Difference
          </div>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 720,
              marginBottom: 28,
            }}
          >
            Extensive inventory. Exceptional quality. Excellent customer
            service.
          </h1>
          <div
            className="dn-grid-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 28,
              marginTop: 20,
              paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.14)",
              maxWidth: 980,
            }}
          >
            {chips.map((chip) => (
              <div
                key={chip.label}
                style={{
                  borderLeft: "1px solid rgba(255,255,255,0.14)",
                  paddingLeft: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "oklch(0.62 0.16 148)",
                      color: "oklch(0.16 0.02 150)",
                      fontFamily: "'Public Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {chip.n}
                  </span>
                  <span
                    style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}
                  >
                    {chip.label}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "oklch(0.75 0.02 255)",
                    lineHeight: 1.5,
                  }}
                >
                  {chip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION + VALUES ===== */}
      <section
        ref={missionRef}
        className={`dn-fade-section${missionInView ? " dn-in-view" : ""}`}
        style={{ background: "#fff", padding: "76px 0" }}
      >
        <div className="dn-container">
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto 72px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: 1.4,
                color: "oklch(0.56 0.17 255)",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Our Mission
            </div>
            <h2
              style={{
                fontSize: "clamp(26px,3.2vw,36px)",
                fontWeight: 800,
                color: "oklch(0.22 0.01 255)",
                lineHeight: 1.25,
              }}
            >
              To serve our customers and extend the useful life of data center
              equipment by delivering solutions that maximize value.
            </h2>
          </div>

          <div
            className="dn-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "0.8fr 1.2fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div
              style={{
                aspectRatio: 1.15,
                borderRadius: 8,
                overflow: "hidden",
                background: "oklch(0.94 0.006 255)",
                order: 2,
              }}
            >
              <img
                src="/uploads/Operational-Stack-3.png"
                alt="Refurbishing operations"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: 1.4,
                  color: "oklch(0.56 0.17 255)",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Our Values
              </div>
              <div
                ref={valuesRef}
                className={`dn-reveal-grid${valuesInView ? " revealed" : ""}`}
                style={{ display: "flex", flexDirection: "column", gap: 22 }}
              >
                {values.map((value, i) => (
                  <div
                    key={value.title}
                    className="dn-reveal-item"
                    style={{
                      transitionDelay: `${i * 80}ms`,
                      display: "flex",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "oklch(0.2 0.05 258)",
                        color: "#fff",
                        fontFamily: "'Public Sans', sans-serif",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14.5,
                      }}
                    >
                      {value.n}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 16.5,
                          color: "oklch(0.22 0.01 255)",
                          marginBottom: 3,
                        }}
                      >
                        {value.title}
                      </div>
                      <p
                        style={{
                          fontSize: 14.5,
                          color: "oklch(0.45 0.01 255)",
                          lineHeight: 1.55,
                        }}
                      >
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== UNWAVERING DEDICATION ===== */}
      <section
        ref={dedicationRef}
        className={`dn-fade-section${dedicationInView ? " dn-in-view" : ""}`}
        style={{ background: "oklch(0.16 0.045 258)", padding: "76px 0" }}
      >
        <div
          className="dn-container dn-grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: 0.85,
                borderRadius: 8,
                overflow: "hidden",
                background: "oklch(0.22 0.06 258)",
              }}
            >
              <img
                src="/uploads/Paul-Jerry-C.png"
                alt="Founders Paul and Jerry Cullen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                fontSize: 13,
                color: "oklch(0.7 0.02 255)",
                marginTop: 12,
                fontStyle: "italic",
              }}
            >
              Founders, Paul and Jerry Cullen
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: 1.4,
                color: "oklch(0.68 0.16 148)",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Unwavering Dedication
            </div>
            <p
              style={{
                fontSize: 17,
                color: "oklch(0.9 0.01 255)",
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              Inventory and speed are what you need. With over{" "}
              <strong style={{ color: "#fff" }}>
                250,000 products in stock
              </strong>
              , we are uniquely positioned to have what you're looking for, and
              to deliver quickly. In many cases we offer{" "}
              <strong style={{ color: "#fff" }}>same day shipping</strong>. We
              buy and sell globally, and ship to over 60 different countries.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "oklch(0.78 0.02 255)",
                lineHeight: 1.6,
                marginBottom: 36,
              }}
            >
              Delighting our customers and vendors has been important to us from
              the very beginning. We take pride and care with every piece of
              equipment and every interaction. Whether you're buying refurbished
              networking equipment, or selling pre-owned gear to us, we make the
              process easy while providing assurance.
            </p>
            <div
              ref={statsRef}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                borderTop: "1px solid rgba(255,255,255,0.14)",
                paddingTop: 28,
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className={`metric-item${statsProgress > 0 ? " counted" : ""}`}
                  style={{ flex: "1 1 120px", padding: 0, textAlign: "left" }}
                >
                  <div
                    className="metric-item-value"
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(26px,3vw,34px)",
                      color: "#fff",
                      minWidth: `${s.finalChars}ch`,
                    }}
                  >
                    {s.big}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "oklch(0.72 0.02 255)",
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        ref={testimonialsRef}
        className={`dn-fade-section${testimonialsInView ? " dn-in-view" : ""}`}
        style={{ background: "oklch(0.965 0.004 255)", padding: "76px 0" }}
      >
        <div
          className="dn-container"
          style={{ maxWidth: 640, textAlign: "center", marginBottom: 48 }}
        >
          <div
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: 1.4,
              color: "oklch(0.56 0.17 255)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Testimonials
          </div>
          <h2
            style={{
              fontSize: "clamp(24px,2.8vw,32px)",
              fontWeight: 800,
              color: "oklch(0.22 0.01 255)",
              marginBottom: 12,
            }}
          >
            What our customers are saying about us
          </h2>
          <p
            style={{
              fontSize: 15.5,
              color: "oklch(0.4 0.02 255)",
              lineHeight: 1.55,
            }}
          >
            Set apart by our quantity and quality. Standing out for our
            commitment to customers.
          </p>
        </div>
        <div
          className="dn-container"
          style={{ display: "flex", alignItems: "center", gap: 16 }}
        >
          <button
            className="dn-focus dn-carousel-arrow"
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
            style={{
              flexShrink: 0,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: "#fff",
              boxShadow: "0 4px 14px -6px rgba(15,30,60,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              color: "oklch(0.3 0.01 255)",
            }}
          >
            &lsaquo;
          </button>
          <div
            style={{ flex: 1, minWidth: 0, maxWidth: 640, margin: "0 auto" }}
          >
            {testimonialsData.map(
              (card, i) =>
                i === testimonialIndex && (
                  <div
                    key={card.name}
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      padding: 34,
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                      boxShadow: "0 20px 40px -16px rgba(15,30,60,0.3)",
                      animation: "dn-fade-in .4s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        color: "oklch(0.3 0.01 255)",
                      }}
                    >
                      "{card.quote}"
                    </p>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <img
                        src={card.photo}
                        alt={card.name}
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 14.5,
                            color: "oklch(0.22 0.01 255)",
                          }}
                        >
                          {card.name}
                        </div>
                        <div
                          style={{
                            fontSize: 12.5,
                            color: "oklch(0.5 0.01 255)",
                          }}
                        >
                          {card.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ),
            )}
          </div>
          <button
            className="dn-focus dn-carousel-arrow"
            aria-label="Next testimonial"
            onClick={nextTestimonial}
            style={{
              flexShrink: 0,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: "#fff",
              boxShadow: "0 4px 14px -6px rgba(15,30,60,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              color: "oklch(0.3 0.01 255)",
            }}
          >
            &rsaquo;
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 36,
          }}
        >
          {testimonialsData.map((t, i) => (
            <button
              key={t.name}
              className="dn-focus"
              aria-label="Show testimonial"
              onClick={() => setTestimonialIndex(i)}
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                background:
                  i === testimonialIndex
                    ? "oklch(0.56 0.17 255)"
                    : "oklch(0.85 0.005 255)",
              }}
            />
          ))}
        </div>
      </section>

      {/* ===== DEDICATED LEADERSHIP ===== */}
      <section
        ref={leadershipRef}
        className={`dn-fade-section${leadershipInView ? " dn-in-view" : ""}`}
        style={{ background: "#fff", padding: "76px 0" }}
      >
        <div className="dn-container">
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto 40px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: 1.4,
                color: "oklch(0.56 0.17 255)",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Leadership
            </div>
            <h2
              style={{
                fontSize: "clamp(26px,3.2vw,34px)",
                fontWeight: 800,
                color: "oklch(0.22 0.01 255)",
                marginBottom: 12,
              }}
            >
              Dedicated Leadership
            </h2>
            <p
              style={{
                fontSize: 15.5,
                color: "oklch(0.48 0.01 255)",
                lineHeight: 1.55,
              }}
            >
              Select a photo to read more.
            </p>
          </div>
          <div
            ref={leadersGridRef}
            className={`dn-reveal-grid${leadersGridInView ? " revealed" : ""}`}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "40px 32px",
              maxWidth: 660,
              margin: "0 auto",
            }}
          >
            {leadersData.map((leader, i) => (
              <button
                key={leader.name}
                className="dn-focus dn-reveal-item"
                onClick={() => setActiveLeaderIndex(i)}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  textAlign: "center",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  width: 172,
                }}
              >
                <div
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "oklch(0.93 0.005 255)",
                  }}
                >
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 15.5,
                      color: "oklch(0.22 0.02 255)",
                    }}
                  >
                    {leader.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "oklch(0.5 0.02 255)",
                      marginTop: 4,
                    }}
                  >
                    {leader.role}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADER MODAL ===== */}
      {activeLeader && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(10,18,32,0.6)",
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px 20px",
          }}
          onClick={() => setActiveLeaderIndex(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 12,
              maxWidth: 560,
              width: "100%",
              height: "fit-content",
              position: "relative",
              padding: 44,
              animation: "dn-fade-in .15s ease",
            }}
          >
            <button
              className="dn-focus"
              aria-label="Close"
              onClick={() => setActiveLeaderIndex(null)}
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                background: "none",
                border: "none",
                fontSize: 20,
                color: "oklch(0.45 0.01 255)",
              }}
            >
              &#10005;
            </button>
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
                marginBottom: 22,
              }}
            >
              <img
                src={activeLeader.photo}
                alt={activeLeader.name}
                style={{
                  width: 92,
                  height: 92,
                  borderRadius: 10,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 21,
                    color: "oklch(0.22 0.01 255)",
                  }}
                >
                  {activeLeader.name}
                </div>
                <div
                  style={{
                    fontSize: 14.5,
                    color: "oklch(0.56 0.17 255)",
                    fontWeight: 700,
                  }}
                >
                  {activeLeader.role}
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 16,
                color: "oklch(0.3 0.01 255)",
                fontStyle: "italic",
                lineHeight: 1.55,
                marginBottom: 18,
                borderLeft: "3px solid oklch(0.68 0.16 148)",
                paddingLeft: 16,
              }}
            >
              "{activeLeader.quote}"
            </p>
            <p
              style={{
                fontSize: 15,
                color: "oklch(0.42 0.01 255)",
                lineHeight: 1.6,
                marginBottom: 18,
              }}
            >
              {activeLeader.bio}
            </p>
            {activeLeader.education && (
              <div
                style={{
                  borderTop: "1px solid oklch(0.92 0.005 255)",
                  paddingTop: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    letterSpacing: 0.8,
                    color: "oklch(0.5 0.01 255)",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  Education
                </div>
                <div style={{ fontSize: 14.5, color: "oklch(0.35 0.01 255)" }}>
                  {activeLeader.education}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== AFFILIATES ===== */}
      <section
        ref={affiliatesRef}
        className={`dn-fade-section${affiliatesInView ? " dn-in-view" : ""}`}
        style={{ background: "oklch(0.2 0.05 258)", padding: "68px 0" }}
      >
        <div className="dn-container">
          <h2
            style={{
              fontSize: "clamp(22px,2.6vw,28px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 32,
            }}
          >
            Affiliates
          </h2>
          <div
            className="dn-affiliate-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <img
                src="/uploads/uneda-logo-2.png"
                alt="UNEDA"
                style={{
                  height: 52,
                  width: "auto",
                  objectFit: "contain",
                  alignSelf: "flex-start",
                  background: "#fff",
                  borderRadius: 6,
                  padding: "8px 12px",
                }}
              />
              <p
                style={{
                  fontSize: 14.5,
                  color: "oklch(0.78 0.02 255)",
                  lineHeight: 1.6,
                }}
              >
                UNEDA represents more than 300 of the leading marketers of
                pre-owned networking equipment. Together we promote industry
                best practices, ensure the highest standards of product quality,
                and work to eradicate counterfeit and fraud in the secondary
                market.
              </p>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <img
                src="/uploads/ascdinatd-logo-1-2.png"
                alt="AscdiNatd"
                style={{
                  height: 52,
                  width: "auto",
                  objectFit: "contain",
                  alignSelf: "flex-start",
                  background: "#fff",
                  borderRadius: 6,
                  padding: "8px 12px",
                }}
              />
              <p
                style={{
                  fontSize: 14.5,
                  color: "oklch(0.78 0.02 255)",
                  lineHeight: 1.6,
                }}
              >
                The AscdiNatd is a worldwide association representing companies
                that provide business solutions, technical support and value
                added services. We support their mission to promote high ethical
                standards of business conduct, and share industry knowledge
                among members and suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section
        ref={certificationsRef}
        className={`dn-fade-section${certificationsInView ? " dn-in-view" : ""}`}
        style={{ background: "#fff", padding: "68px 0" }}
      >
        <div className="dn-container">
          <h2
            style={{
              fontSize: "clamp(22px,2.6vw,28px)",
              fontWeight: 800,
              color: "oklch(0.22 0.01 255)",
              marginBottom: 32,
            }}
          >
            Certifications
          </h2>
          <div
            className="dn-affiliate-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
          >
            <div
              style={{
                background: "oklch(0.975 0.004 255)",
                border: "1px solid oklch(0.9 0.005 255)",
                borderRadius: 10,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <img
                src="/uploads/NAID-AAA-Certified-logo-white-472aaa82.webp"
                alt="NAID AAA Certified"
                style={{
                  height: 44,
                  width: "auto",
                  objectFit: "contain",
                  alignSelf: "flex-start",
                  background: "oklch(0.2 0.05 258)",
                  borderRadius: 6,
                  padding: "6px 12px",
                }}
              />
              <p
                style={{
                  fontSize: 14.5,
                  color: "oklch(0.42 0.01 255)",
                  lineHeight: 1.6,
                }}
              >
                NAID AAA Certification ensures the highest level of data
                security through Facility-based Operations Endorsement for
                secure overwriting of HDD and SSD devices. Our employees are
                trained in data security standards to protect sensitive
                information at every stage of the process, allowing us to
                deliver NAID certified processing for data-sensitive
                opportunities.
              </p>
            </div>
            <div
              style={{
                background: "oklch(0.975 0.004 255)",
                border: "1px solid oklch(0.9 0.005 255)",
                borderRadius: 10,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <img
                src="/uploads/ISO_9001_2015-232x300.webp"
                alt="ISO 9001:2015"
                style={{
                  height: 66,
                  width: "auto",
                  objectFit: "contain",
                  alignSelf: "flex-start",
                  background: "#fff",
                  borderRadius: 6,
                  padding: "4px 10px",
                }}
              />
              <p
                style={{
                  fontSize: 14.5,
                  color: "oklch(0.42 0.01 255)",
                  lineHeight: 1.6,
                }}
              >
                ISO 9001:2015 is a globally recognized quality management
                standard that ensures consistent, reliable processes across all
                operations. This certification is maintained through regular
                audits that verify that our systems, products, and services meet
                both customer and regulatory standards, enabling us to safely
                refurbish and return equipment to the green market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuestionsCta />
    </div>
  );
}
