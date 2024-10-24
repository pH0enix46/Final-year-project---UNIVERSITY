/* eslint-disable react/prop-types */
import styles from "./Title.module.css";

function Title({ text1, text2 }) {
  return (
    <div className="inline-flex gap-2 items-center mb-3 font-sofia font-bold">
      <h3 className="text-teal-600">
        {text1} <span className={`${styles.animate}`}>{text2}</span>
      </h3>
    </div>
  );
}
export default Title;
