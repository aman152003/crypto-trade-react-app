import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./ToggledNav.scss";
import CloseIcon from "../../assets/images/Close.svg";
import { AppContext } from "../AppContext";

function ToggledNav() {
  const { isNavToggled, setIsNavToggled } = useContext(AppContext);
  return (
    <AnimatePresence>
      {isNavToggled && (
        <motion.div
          initial={{ x: -810 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.25 }}
          exit={{ x: -810 }}
          className="toggled-nav"
        >
          <div>
            <div className="toggled-nav-logo">
              <svg
                width="280"
                height="84"
                viewBox="0 0 280 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8683 67.624L21.1441 61.4831L14.6899 60.1423L23.9849 15.4016L30.4391 16.7425L31.7539 10.4136L35.9523 11.2858L34.6375 17.6147L34.7628 17.6407C36.2249 17.9445 37.5487 18.2849 38.7341 18.6619L40.088 12.145L44.2863 13.0172L42.7892 20.2234C45.324 21.4472 47.0861 23.0335 48.0758 24.9822C49.1072 26.9396 49.3148 29.4013 48.6986 32.3673C48.1692 34.9155 47.2627 36.9715 45.9792 38.5351C44.6956 40.0987 43.1584 40.8905 41.3675 40.9107L41.3024 41.224C42.4531 41.7681 43.4308 42.5159 44.2354 43.4675C45.04 44.419 45.5872 45.6657 45.877 47.2076C46.1667 48.7494 46.0686 50.69 45.5826 53.0294C44.923 56.2043 43.5573 58.6878 41.4854 60.4798C39.4223 62.23 36.867 63.2026 33.8197 63.3975L32.4007 70.2277L28.2024 69.3554L29.4781 63.2146C29.1022 63.1365 28.7053 63.054 28.2876 62.9672L25.3424 62.3554L24.0667 68.4962L19.8683 67.624ZM32.1439 35.5954C34.2326 36.0293 35.765 35.8901 36.7409 35.1777C37.7169 34.4654 38.3785 33.2737 38.7256 31.6027C39.0815 29.8899 38.8571 28.5578 38.0525 27.6062C37.2479 26.6547 35.8012 25.9619 33.7125 25.528L31.8326 25.1374L29.7627 35.1007L32.1439 35.5954ZM28.2005 42.6201L25.7791 54.2753L28.8496 54.9132C31.0219 55.3645 32.6386 55.1338 33.6997 54.2213C34.8113 53.2756 35.5581 51.8837 35.9399 50.0456C36.2871 48.3746 36.1262 46.9467 35.4572 45.7619C34.7969 44.5353 33.297 43.6789 30.9577 43.1929L28.2005 42.6201Z"
                  fill="var(--Very-Dark-Blue)"
                />
                <path
                  d="M82.1523 46.5273C81.931 49.5872 80.7982 51.9961 78.7539 53.7539C76.7227 55.5117 74.0404 56.3906 70.707 56.3906C67.0612 56.3906 64.1901 55.1667 62.0938 52.7188C60.0104 50.2578 58.9688 46.8854 58.9688 42.6016V40.8633C58.9688 38.1289 59.4505 35.7201 60.4141 33.6367C61.3776 31.5534 62.7513 29.9583 64.5352 28.8516C66.332 27.7318 68.4154 27.1719 70.7852 27.1719C74.0664 27.1719 76.7096 28.0508 78.7148 29.8086C80.7201 31.5664 81.8789 34.0339 82.1914 37.2109H76.332C76.1888 35.375 75.6745 34.0469 74.7891 33.2266C73.9167 32.3932 72.582 31.9766 70.7852 31.9766C68.832 31.9766 67.3672 32.6797 66.3906 34.0859C65.4271 35.4792 64.9323 37.6471 64.9062 40.5898V42.7383C64.9062 45.8112 65.3685 48.0573 66.293 49.4766C67.2305 50.8958 68.7018 51.6055 70.707 51.6055C72.5169 51.6055 73.8646 51.1953 74.75 50.375C75.6484 49.5417 76.1628 48.2591 76.293 46.5273H82.1523ZM97.5039 40.1602C96.7357 40.056 96.0586 40.0039 95.4727 40.0039C93.3372 40.0039 91.9375 40.7266 91.2734 42.1719V56H85.6289V34.8672H90.9609L91.1172 37.3867C92.25 35.4466 93.819 34.4766 95.8242 34.4766C96.4492 34.4766 97.0352 34.5612 97.582 34.7305L97.5039 40.1602ZM108.48 48.0117L112.387 34.8672H118.441L109.945 59.2812L109.477 60.3945C108.214 63.1549 106.13 64.5352 103.227 64.5352C102.406 64.5352 101.573 64.4115 100.727 64.1641V59.8867L101.586 59.9062C102.654 59.9062 103.448 59.7435 103.969 59.418C104.503 59.0924 104.919 58.5521 105.219 57.7969L105.883 56.0586L98.4805 34.8672H104.555L108.48 48.0117ZM139.691 45.6289C139.691 48.8841 138.949 51.4948 137.465 53.4609C135.993 55.4141 134.001 56.3906 131.488 56.3906C129.353 56.3906 127.628 55.6484 126.312 54.1641V64.125H120.668V34.8672H125.902L126.098 36.9375C127.465 35.2969 129.249 34.4766 131.449 34.4766C134.053 34.4766 136.078 35.4401 137.523 37.3672C138.969 39.2943 139.691 41.9505 139.691 45.3359V45.6289ZM134.047 45.2188C134.047 43.2526 133.695 41.7357 132.992 40.668C132.302 39.6003 131.293 39.0664 129.965 39.0664C128.194 39.0664 126.977 39.7435 126.312 41.0977V49.75C127.003 51.1432 128.233 51.8398 130.004 51.8398C132.699 51.8398 134.047 49.6328 134.047 45.2188ZM149.965 29.6719V34.8672H153.578V39.0078H149.965V49.5547C149.965 50.3359 150.115 50.8958 150.414 51.2344C150.714 51.5729 151.286 51.7422 152.133 51.7422C152.758 51.7422 153.311 51.6966 153.793 51.6055V55.8828C152.686 56.2214 151.547 56.3906 150.375 56.3906C146.417 56.3906 144.398 54.3919 144.32 50.3945V39.0078H141.234V34.8672H144.32V29.6719H149.965ZM155.258 45.2383C155.258 43.1419 155.661 41.2734 156.469 39.6328C157.276 37.9922 158.435 36.7227 159.945 35.8242C161.469 34.9258 163.233 34.4766 165.238 34.4766C168.09 34.4766 170.414 35.349 172.211 37.0938C174.021 38.8385 175.03 41.2083 175.238 44.2031L175.277 45.6484C175.277 48.8906 174.372 51.4948 172.562 53.4609C170.753 55.4141 168.324 56.3906 165.277 56.3906C162.23 56.3906 159.796 55.4141 157.973 53.4609C156.163 51.5078 155.258 48.8516 155.258 45.4922V45.2383ZM160.902 45.6484C160.902 47.6536 161.28 49.1901 162.035 50.2578C162.79 51.3125 163.871 51.8398 165.277 51.8398C166.645 51.8398 167.712 51.319 168.48 50.2773C169.249 49.2227 169.633 47.543 169.633 45.2383C169.633 43.2721 169.249 41.7487 168.48 40.668C167.712 39.5872 166.632 39.0469 165.238 39.0469C163.858 39.0469 162.79 39.5872 162.035 40.668C161.28 41.7357 160.902 43.3958 160.902 45.6484ZM200.531 32.3086H191.82V56H185.961V32.3086H177.367V27.5625H200.531V32.3086ZM214.105 40.1602C213.337 40.056 212.66 40.0039 212.074 40.0039C209.939 40.0039 208.539 40.7266 207.875 42.1719V56H202.23V34.8672H207.562L207.719 37.3867C208.852 35.4466 210.421 34.4766 212.426 34.4766C213.051 34.4766 213.637 34.5612 214.184 34.7305L214.105 40.1602ZM228.5 56C228.24 55.4922 228.051 54.8607 227.934 54.1055C226.566 55.6289 224.789 56.3906 222.602 56.3906C220.531 56.3906 218.812 55.7917 217.445 54.5938C216.091 53.3958 215.414 51.8854 215.414 50.0625C215.414 47.8229 216.241 46.1042 217.895 44.9062C219.561 43.7083 221.964 43.1029 225.102 43.0898H227.699V41.8789C227.699 40.9023 227.445 40.1211 226.938 39.5352C226.443 38.9492 225.655 38.6562 224.574 38.6562C223.624 38.6562 222.875 38.8841 222.328 39.3398C221.794 39.7956 221.527 40.4206 221.527 41.2148H215.883C215.883 39.9909 216.26 38.8581 217.016 37.8164C217.771 36.7747 218.839 35.9609 220.219 35.375C221.599 34.776 223.148 34.4766 224.867 34.4766C227.471 34.4766 229.535 35.1341 231.059 36.4492C232.595 37.7513 233.363 39.5872 233.363 41.957V51.1172C233.376 53.1224 233.656 54.6393 234.203 55.668V56H228.5ZM223.832 52.0742C224.665 52.0742 225.434 51.8919 226.137 51.5273C226.84 51.1497 227.361 50.6484 227.699 50.0234V46.3906H225.59C222.764 46.3906 221.26 47.3672 221.078 49.3203L221.059 49.6523C221.059 50.3555 221.306 50.9349 221.801 51.3906C222.296 51.8464 222.973 52.0742 223.832 52.0742ZM236.82 45.2773C236.82 41.9831 237.556 39.3594 239.027 37.4062C240.512 35.4531 242.536 34.4766 245.102 34.4766C247.159 34.4766 248.858 35.2448 250.199 36.7812V26H255.863V56H250.766L250.492 53.7539C249.086 55.5117 247.276 56.3906 245.062 56.3906C242.576 56.3906 240.577 55.4141 239.066 53.4609C237.569 51.4948 236.82 48.7669 236.82 45.2773ZM242.465 45.6875C242.465 47.6667 242.81 49.1836 243.5 50.2383C244.19 51.293 245.193 51.8203 246.508 51.8203C248.253 51.8203 249.483 51.0846 250.199 49.6133V41.2734C249.496 39.8021 248.279 39.0664 246.547 39.0664C243.826 39.0664 242.465 41.2734 242.465 45.6875ZM269.965 56.3906C266.866 56.3906 264.34 55.4401 262.387 53.5391C260.447 51.638 259.477 49.1055 259.477 45.9414V45.3945C259.477 43.2721 259.887 41.3776 260.707 39.7109C261.527 38.0312 262.686 36.7422 264.184 35.8438C265.694 34.9323 267.413 34.4766 269.34 34.4766C272.23 34.4766 274.503 35.388 276.156 37.2109C277.823 39.0339 278.656 41.6185 278.656 44.9648V47.2695H265.199C265.382 48.6497 265.928 49.7565 266.84 50.5898C267.764 51.4232 268.93 51.8398 270.336 51.8398C272.51 51.8398 274.21 51.0521 275.434 49.4766L278.207 52.582C277.361 53.7799 276.215 54.7174 274.77 55.3945C273.324 56.0586 271.723 56.3906 269.965 56.3906ZM269.32 39.0469C268.201 39.0469 267.289 39.4245 266.586 40.1797C265.896 40.9349 265.453 42.0156 265.258 43.4219H273.109V42.9727C273.083 41.7227 272.745 40.7591 272.094 40.082C271.443 39.3919 270.518 39.0469 269.32 39.0469Z"
                  fill="var(--Very-Dark-Blue)"
                />
              </svg>
              <div onClick={() => setIsNavToggled(false)}>
                <img src={CloseIcon} />
              </div>
            </div>
            <ul>
              <li onClick={() => setIsNavToggled(false)}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "var(--Very-Dark-Blue)",
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setIsNavToggled(false)}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "var(--Very-Dark-Blue)",
                  }}
                  to="/trending"
                >
                  Trending
                </Link>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>©2021 CryptoTrade.in</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ToggledNav;