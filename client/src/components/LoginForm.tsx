import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { loginState } from "../atoms";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { basicShowVariants } from "../styles/motionVariants";
import { ErrorMessage } from "../styles/formStyle";
import { DarkBox } from "../styles/boxStyle";
import { NoAccount } from "../styles/screen/loginStyle";
import {
  LoginFormContainer,
  LoginPageForm,
  LoginButtonContainer,
} from "../styles/screen/loginStyle";

interface IForm {
  email: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
    setFocus,
  } = useForm<IForm>();
  const navigate = useNavigate();
  const setLogin = useSetRecoilState(loginState);

  // const [h3Text, setH3Text] = useState(0);
  // const intervalId: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    setFocus("email");
    // clearInterval(intervalId.current as NodeJS.Timeout);
    // intervalId.current = setInterval(() => {
    //   setH3Text((prev) => (prev === 0 ? 1 : 0));
    // }, 2000);
  }, [setFocus]);

  const onValid = async (data: IForm) => {
    // console.log(data);
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    // console.log(response.status);
    if (response.status === 404) {
      setError("email", { message: "등록되지 않은 이메일입니다." });
    } else if (response.status === 400) {
      setError("password", { message: "비밀번호가 일치하지 않습니다." });
    } else if (response.status === 401) {
      const { user } = await response.json();
      if (user.email === data.email) {
        const { password, ...rest } = user;
        setLogin({
          loggedIn: true,
          user: rest,
        });

        navigate("/");
      } else {
        await fetch("/api/users/logout");
        setLogin({ loggedIn: false, user: null });
        const { user } = await (
          await fetch("/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
          })
        ).json();
        const { password, ...rest } = user;
        setLogin({
          loggedIn: true,
          user: rest,
        });

        navigate("/");
      }
    } else {
      const { user } = await response.json();
      const { password, ...rest } = user;
      setLogin({
        loggedIn: true,
        user: rest,
      });

      navigate("/");
    }
    setValue("email", "");
    setValue("password", "");
  };
  return (
    <>
      <LoginFormContainer>
        <LoginPageForm
          onSubmit={handleSubmit(onValid)}
          variants={basicShowVariants}
          initial="hidden"
          animate="show"
          custom={{ yValue: -50 }}
        >
          <h3>
            보카 한 잔 어때?
            {/* {h3Text === 0 ? "보카 한 잔 어때?" : "Fancy a cuppa voca?"} */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M400 192H32C14.25 192 0 206.3 0 224v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.75 0 112-50.25 112-112S461.8 192 400 192zM400 352H384V256h16C426.5 256 448 277.5 448 304S426.5 352 400 352zM107.9 100.7C120.3 107.1 128 121.4 128 136c0 13.25 10.75 23.89 24 23.89S176 148.1 176 135.7c0-31.34-16.83-60.64-43.91-76.45C119.7 52.03 112 38.63 112 24.28c0-13.25-10.75-24.14-24-24.14S64 11.03 64 24.28C64 55.63 80.83 84.92 107.9 100.7zM219.9 100.7C232.3 107.1 240 121.4 240 136c0 13.25 10.75 23.86 24 23.86S288 148.1 288 135.7c0-31.34-16.83-60.64-43.91-76.45C231.7 52.03 224 38.63 224 24.28c0-13.25-10.75-24.18-24-24.18S176 11.03 176 24.28C176 55.63 192.8 84.92 219.9 100.7z" />
            </svg>
          </h3>
          <ul>
            <DarkBox>
              <li>
                <label>이메일</label>
                <input
                  type={"email"}
                  {...register("email", { required: true })}
                  placeholder="Email"
                ></input>
              </li>
              <ErrorMessage>
                {errors?.email?.message && (
                  <span>{errors?.email?.message}</span>
                )}
              </ErrorMessage>
              <li>
                <label>비밀번호</label>
                <input
                  type={"password"}
                  {...register("password", { required: true })}
                  placeholder="Password"
                ></input>
              </li>
            </DarkBox>

            <NoAccount>
              아직 아이디가 없으세요?
              <Link to={"/join"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M344.7 238.5l-144.1-136C193.7 95.97 183.4 94.17 174.6 97.95C165.8 101.8 160.1 110.4 160.1 120V192H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C354.3 264.4 354.3 247.6 344.7 238.5zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32z" />
                </svg>
                회원 가입
              </Link>
            </NoAccount>
            <ErrorMessage>
              {errors?.password?.message && (
                <span>{errors?.password?.message}</span>
              )}
            </ErrorMessage>
          </ul>
          <LoginButtonContainer>
            <button>로그인</button>
          </LoginButtonContainer>
        </LoginPageForm>
      </LoginFormContainer>
    </>
  );
}

export default LoginForm;
