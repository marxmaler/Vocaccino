import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import TitleBlock from "./TitleBlock";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  loginState,
  weeklyWordsCntState,
  weeklyWordsState,
  wordsState,
} from "../atoms";
import { HeaderContainer, MenuItem } from "../styles/headerStyle";

function HeaderMenu() {
  const login = useRecoilValue(loginState);
  const PCMode = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const resetLogin = useResetRecoilState(loginState);
  const resetWords = useResetRecoilState(wordsState);
  const resetWeeklyWords = useResetRecoilState(weeklyWordsState);
  const resetWeeklyWordsCnt = useResetRecoilState(weeklyWordsCntState);

  const logout = () => {
    fetch("/api/users/logout");
    resetWords();
    resetWeeklyWords();
    resetWeeklyWordsCnt();
    resetLogin();
  };

  return (
    <HeaderContainer>
      <ul className="left">
        {PCMode ? (
          <>
            <li>
              <MenuItem
                whileHover={{
                  scale: 1.2,
                }}
              >
                <Link to={"/"}>
                  Review
                  <svg
                    id="review-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
                  </svg>
                </Link>
              </MenuItem>
            </li>
            <li>
              <MenuItem
                whileHover={{
                  scale: 1.2,
                }}
              >
                <Link to={"/words"}>
                  New
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                  </svg>
                </Link>
              </MenuItem>
            </li>
            <li>
              <MenuItem
                whileHover={{
                  scale: 1.2,
                }}
              >
                <Link to={"/words/statistics"}>
                  Stat
                  <svg
                    id="stat-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z" />
                  </svg>
                </Link>
              </MenuItem>
            </li>
            <li>
              <MenuItem
                whileHover={{
                  scale: 1.2,
                }}
              >
                <Link to={"/words/search"}>
                  Search
                  <svg
                    id="search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                  </svg>
                </Link>
              </MenuItem>
            </li>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
            </svg>
          </>
        )}
      </ul>

      <TitleBlock />

      <ul className="right">
        {PCMode ? (
          <>
            {/* 프로필 메뉴 만들기 */}
            {/* <span>{login.loggedIn && login.user?.name}</span> */}
            {/* <li>
              <MenuItem>
                <Link to={"/"}>Profile</Link>
              </MenuItem>
            </li> */}
            <li>
              <MenuItem
                whileHover={{
                  scale: 1.2,
                }}
              >
                {login.loggedIn ? null : (
                  // <Link to={"/users/profile"}>프로필</Link>
                  <Link to={"/join"}>Join</Link>
                )}
              </MenuItem>
            </li>
            <li>
              <MenuItem
                whileHover={{
                  scale: 1.2,
                }}
              >
                {login.loggedIn ? (
                  <Link to={"/login"} onClick={logout}>
                    Logout
                    <svg
                      id="logout-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z" />
                    </svg>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    Login
                    <svg
                      id="login-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z" />
                    </svg>
                  </Link>
                )}
              </MenuItem>
            </li>
          </>
        ) : (
          //휴대폰 모드
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
          </svg>
        )}
      </ul>
    </HeaderContainer>
  );
}

export default HeaderMenu;
