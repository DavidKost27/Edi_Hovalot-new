import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export default function AboutSection(props) {
  const { aboutSectionAnimation, aboutSectionRef, variants } = props;

  return (
    <motion.div
      className="about-section-container"
      id="אודות"
      ref={aboutSectionRef}
      animate={aboutSectionAnimation}
      initial="hidden"
      variants={variants}
      transition={{
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <h2>אדי הובלות</h2>
      <p>
        חברתנו בעלת נסיון של 25 שנים בהובלת ציוד רגיש ומכשור יקר בכל רחבי הארץ
        למגוון של חברות שונות גדולות וקטנות. העברנו משרדים, מרפאות ומעבדות. יש
        לנו נסיון בהובלת מכשור כבד כמו מנדפים, צנטריפוגות ומקפיאים אשר דורש ידע
        נסיון וציוד מיוחד לטובת פירוק הובלה והרכבה ביעד ללא נזק. אנחנו דואגים
        לתת לכל הלקוחות שלנו יחס אישי ומקצועיות, בהקפדה על סטנדרטים גבוהים
        ואחריות מלאה על כל הנעשה. אנחנו יודעים שהעברה של ציוד רגיש ויקר היא
        משימה לא פשוטה ומהווה חלק מאוד קריטי בחיי העסק לכן אנו עושים את מרב
        המאמצים בשביל לספק לכם את הרוגע הנפשי ומוודאים שתמיד תשארו מרוצים.
      </p>
    </motion.div>
  );
}
