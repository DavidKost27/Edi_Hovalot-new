import React from "react";
import "./styles.scss";

// Components
import Calendar from "../../assets/svg/calendar-line.svg";
import Insurance from "../../assets/svg/insurance.svg";
import Caution from "../../assets/svg/caution.svg";
import Packing from "../../assets/svg/boxes.svg";
import Truck from "../../assets/svg/truck.svg";
import Unpacking from "../../assets/svg/empty-box.svg";

export default function FeaturesSection() {
  return (
    <div className="features-section-container">
      <div className="grid-container">
        <div className="feature">
          <div className="feature__icon">
            <Calendar style={{ width: "40px", height: "auto" }} />
          </div>
          <h3>25 שנות נסיון</h3>
          <p>
            25 שנות נסיון בהובלת משרדים, מרפאות, ומעבדות עם ציוד רגיש ומיוחד.
          </p>
        </div>
        <div className="feature">
          <div className="feature__icon">
            <Insurance style={{ width: "40px", height: "auto" }} />
          </div>
          <h3>ביטוח מלאה</h3>
          <p>
            אנו מציעים ביטוח אשר מכסה, את כל הציוד, הרהיטים, והמכשירים למשך כל
            שלבי ההובלה.
          </p>
        </div>
        <div className="feature">
          <div className="feature__icon">
            <Caution style={{ width: "40px", height: "auto" }} />
          </div>
          <h3>זהירות ואחריות</h3>
          <p>
            אנו דוגלים בזהירות ואחריות, מה שיאפשר לכם להיות רגועים לאורך כל
            ההובלה.
          </p>
        </div>
        <div className="feature">
          <div className="feature__icon">
            <Packing style={{ width: "40px", height: "auto" }} />
          </div>
          <h3>אריזה מותאמת</h3>
          <p>
            אריזה מותאמת עבור כל מכישר, אשר מבטחת את שלמותו לאורך ההובלה ועד
            לרגע הפריקה ביעד.
          </p>
        </div>
        <div className="feature">
          <div className="feature__icon">
            <Truck style={{ width: "40px", height: "auto" }} />
          </div>
          <h3>הובלה בטוחה</h3>
          <p>
            אנו מוודאים מעבר בטוח לכל הציוד על ידי העמסה נכונה ועגינה נכונה, אשר
            ימנעו תנועה מיותרת ונזק.
          </p>
        </div>
        <div className="feature">
          <div className="feature__icon">
            <Unpacking style={{ width: "40px", height: "auto" }} />
          </div>
          <h3>פריקה מתוכננת</h3>
          <p>
            פריקה מתוכננת תאפשר חלוקת ציוד לפי חדרים מראש ותמנע חיפושים לקראת
            החזרה לשגרה.
          </p>
        </div>
      </div>
    </div>
  );
}
