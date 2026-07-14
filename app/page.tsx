"use client";

import { useEffect, useState } from "react";

const gallery = Array.from({ length: 9 }, (_, i) =>
  `/images/penthouse-${String(i + 1).padStart(2, "0")}.png`,
);

const features = [
  "5 חדרים, במקור 6",
  "כ־160 מ״ר בנוי",
  "כ־40 מ״ר מרפסת שמש",
  "קומה 18 מתוך 18",
  "חלל אירוח גדול ומפנק",
  "קמין בסלון",
  "מטבח מפואר עם שיש דקטון",
  "נגרות מרשימה בכל הבית",
  "סוויטת הורים מפנקת",
  "מיזוג VRF",
  "ממ״ד",
  "3 כיווני אוויר",
  "2 חניות",
  "מחסן צמוד",
  "פינוי גמיש",
];

const links = [
  { label: "הנכסים שלנו במדלן", note: "כל הנכסים במקום אחד", href: "https://did.li/iEbUY", mark: "M", image: "/images/penthouse-08.png" },
  { label: "העמוד העסקי בפייסבוק", note: "עדכונים, נכסים וסיפורי הצלחה", href: "https://did.li/KhhDN", mark: "f", image: "/images/elad-miri.png" },
  { label: "הכתבה שלנו ב־TheMarker", note: "להכיר את הדרך והחזון שלנו", href: "https://did.li/R16aa", mark: "T", image: "/images/elad-miri.png" },
  { label: "הנכסים שלנו ביד2", note: "היצע הנכסים העדכני", href: "https://did.li/3sJgT", mark: "Y", image: "/images/penthouse-01.png" },
  { label: "המלצות עלינו ב־Google", note: "מה הלקוחות שלנו מספרים", href: "https://g.co/kgs/UwTFFo", mark: "G", image: "/images/logo.jpg" },
];

const whatsapp =
  "https://wa.me/972527216050?text=" +
  encodeURIComponent("היי אלעד ומירי, הגעתי דרך האתר ואשמח לקבל פרטים נוספים");

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const move = (step: number) => {
    setCurrent((value) => (value + step + gallery.length) % gallery.length);
  };

  return (
    <main dir="rtl">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="הראשונים בנדל״ן, חזרה לראש העמוד">
          <img src="/images/logo.jpg" alt="הראשונים בנדל״ן" />
          <span>
            <strong>הראשונים בנדל״ן</strong>
            <small>אלעד ומירי בן־ברוך</small>
          </span>
        </a>
        <nav aria-label="ניווט ראשי">
          <a href="#about">עלינו</a>
          <a href="#property">נכס נבחר</a>
          <a href="#links">קישורים</a>
        </nav>
        <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">
          דברו איתנו ב־WhatsApp
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">תיווך · יזמות · שיווק פרויקטים</p>
          <h1>
            עסקת נדל״ן טובה מתחילה
            <span>באנשים הנכונים לצידכם.</span>
          </h1>
          <p className="lead">
            אלעד ומירי בן־ברוך מלווים מוכרים, קונים ומשקיעים בראשון לציון והסביבה
            עם היכרות עמוקה של השטח, יחס אישי וניהול מקצועי של כל שלב בדרך.
          </p>
          <div className="hero-actions">
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
              בואו נדבר ב־WhatsApp
            </a>
            <a className="text-link" href="#property">לנכס הנבחר שלנו ←</a>
          </div>
          <div className="trust-row" aria-label="יתרונות מרכזיים">
            <span><b>4 פעמים</b> בעשירייה המובילה במדד המתווכים של מדלן</span>
            <span><b>מעטפת מלאה</b> משלב הייעוץ ועד חתימת העסקה</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="gold-orbit" />
          <img src="/images/elad-miri.png" alt="אלעד ומירי בן־ברוך" />
          <div className="name-card">
            <strong>אלעד ומירי בן־ברוך</strong>
            <span>הנדל״ן שלכם, האחריות שלנו</span>
          </div>
        </div>
      </section>

      <section className="about section" id="about" data-reveal>
        <div>
          <p className="eyebrow">הסיפור שלנו</p>
          <h2>מקצועיות של משרד גדול.<br />ליווי שמרגיש אישי.</h2>
        </div>
        <div className="about-copy">
          <p>
            הראשונים בנדל״ן מתמחים במכירת דירות יד שנייה, שיווק דירות חדשות,
            עסקאות מגרשים ונדל״ן מסחרי, לצד ליווי דיירים וקידום פרויקטים של
            התחדשות עירונית בראשון לציון וביישובים הסמוכים.
          </p>
          <p>
            מבחינתנו, נדל״ן הוא קודם כל החלטה אנושית גדולה. לכן אנחנו מקשיבים,
            בונים מהלך מדויק לכל לקוח, מנהלים את המשא ומתן ומחברים בעת הצורך
            לאנשי המקצוע הנכונים, כדי שתוכלו להתקדם בביטחון.
          </p>
        </div>
      </section>

      <section className="property section" id="property">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">נכס נבחר</p>
            <h2>פנטהאוז ענק ומושקע<br />עם נוף פתוח מהקומה ה־18</h2>
          </div>
          <p>
            כ־200 מ״ר של תכנון מוקפד, השקעה של כמיליון שקלים וחוויית מגורים
            יוצאת דופן. נכס מרווח, מפנק וייחודי מאוד.
          </p>
        </div>

        <div className="gallery-shell" data-reveal>
          <div className="gallery-main">
            <img key={gallery[current]} className="gallery-photo" src={gallery[current]} alt={`הפנטהאוז, תמונה ${current + 1} מתוך ${gallery.length}`} />
            <button className="gallery-arrow gallery-next" onClick={() => move(1)} aria-label="לתמונה הבאה">‹</button>
            <button className="gallery-arrow gallery-prev" onClick={() => move(-1)} aria-label="לתמונה הקודמת">›</button>
            <span className="counter">{current + 1} / {gallery.length}</span>
          </div>
          <div className="thumbs" aria-label="בחירת תמונה">
            {gallery.map((image, index) => (
              <button
                key={image}
                className={index === current ? "active" : ""}
                onClick={() => setCurrent(index)}
                aria-label={`הצגת תמונה ${index + 1}`}
                aria-current={index === current ? "true" : undefined}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="more-properties" aria-label="קישורים לנכסים נוספים">
          <span>רוצים לראות נכסים נוספים?</span>
          <a href="https://did.li/3sJgT" target="_blank" rel="noreferrer">
            עוד נכסים ביד2 <b>↗</b>
          </a>
          <a href="https://did.li/iEbUY" target="_blank" rel="noreferrer">
            עוד נכסים במדלן <b>↗</b>
          </a>
        </div>

        <div className="property-details" data-reveal>
          <div className="feature-grid">
            {features.map((feature) => <span key={feature}>{feature}</span>)}
          </div>
          <aside className="contact-card">
            <p className="eyebrow">רוצים לראות אותו מקרוב?</p>
            <h3>נשמח לתאם לכם ביקור אישי בנכס.</h3>
            <p>שלחו לנו הודעה ונחזור אליכם עם כל הפרטים.</p>
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer">לתיאום ביקור ב־WhatsApp</a>
            <a className="phone" href="tel:+972527216050">052-721-6050</a>
          </aside>
        </div>
      </section>

      <section className="press section" data-reveal>
        <blockquote>
          “המטרה שלנו היא להעניק לרוכש ולמוכר ביטחון, בהירות ושקט לאורך כל הדרך.”
        </blockquote>
        <a href="https://did.li/R16aa" target="_blank" rel="noreferrer">לכתבה המלאה ב־TheMarker ←</a>
      </section>

      <section className="links-section section" id="links">
        <div className="section-heading compact" data-reveal>
          <div>
            <p className="eyebrow">מכירים אותנו יותר</p>
            <h2>הנכסים, ההמלצות והעשייה שלנו</h2>
          </div>
          <p>כל המקומות שבהם אפשר להתרשם, לקרוא ולראות מה אנחנו עושים.</p>
        </div>
        <div className="link-grid" data-reveal>
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <div className="link-image">
                <img src={link.image} alt="" />
                <span className="link-mark">{link.mark}</span>
              </div>
              <div className="link-content">
                <strong>{link.label}</strong>
                <small>{link.note}</small>
                <span className="arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/images/logo.jpg" alt="" />
          <div><strong>הראשונים בנדל״ן</strong><span>אלעד ומירי בן־ברוך</span></div>
        </div>
        <div className="footer-contact">
          <a href="tel:+972527216050">052-721-6050</a>
          <span>ראשון לציון והסביבה</span>
        </div>
        <a className="button" href={whatsapp} target="_blank" rel="noreferrer">דברו איתנו עכשיו</a>
      </footer>

      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="שליחת הודעה ב־WhatsApp">
        <span>שולחים הודעה</span>
        <b>✆</b>
      </a>
    </main>
  );
}
