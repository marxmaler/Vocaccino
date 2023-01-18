import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../atoms";
import HeaderMenu from "../components/HeaderMenu";
import LanguageSetter from "../components/LanguageSetter";
import Word from "../components/Word";
import { IWord } from "../interfaces";
import { SearchContainer } from "../styles/containerStyle";
import { SearchNoWords } from "../styles/formStyle";
import { wordListVar } from "../styles/motionVariants";
import { koPropToEnProp } from "../util/word";
import { SearchForm, SearchBtnContainer } from "../styles/screen/searchStyle";

interface IForm {
  query: string;
  queryBasis: string;
}

function Search() {
  const { user } = useRecoilValue(loginState);
  const [words, setWords] = useState<IWord[]>([]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
    setFocus,
  } = useForm<IForm>();
  const [langNum, setLangNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setFocus("query");
    }, 700);
  }, [setFocus]);

  const onValid = async ({ query, queryBasis }: IForm) => {
    const { words: matchedWords } = await (
      await fetch(
        `/api/words/${String(user?._id)}/${langNum}/${queryBasis}/${query}`
      )
    ).json();

    setWords(() => matchedWords);

    console.log(matchedWords);
  };
  return (
    <>
      <HeaderMenu />
      <SearchContainer>
        <h3>검색 언어</h3>
        <LanguageSetter
          page="search"
          langNum={langNum}
          setLangNum={setLangNum}
        />
        <SearchForm onSubmit={handleSubmit(onValid)}>
          <span>
            검색 기준 :{" "}
            <select
              {...register("queryBasis", { required: true, value: "spelling" })}
            >
              {["철자", "뜻", "유의어", "반의어"].map((basis, index) => (
                <option
                  key={`queryBasisOption_${index}`}
                  value={koPropToEnProp(basis)}
                >
                  {basis}
                </option>
              ))}
            </select>
          </span>
          <span>
            <strong>검색어</strong>
            <motion.input
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7 }}
              {...register("query", { required: true })}
            />
            <SearchBtnContainer>
              <button>검색</button>
            </SearchBtnContainer>
          </span>
        </SearchForm>
        <AnimatePresence exitBeforeEnter>
          <motion.ul
            key={"wordList"}
            variants={wordListVar}
            initial="hidden"
            animate="show"
            exit="hide"
          >
            {isSubmitSuccessful && words.length > 0
              ? words.map((word) => <Word key={String(word._id)} word={word} />)
              : isSubmitSuccessful && (
                  <SearchNoWords>
                    검색 조건에 맞는 단어가 없습니다.
                  </SearchNoWords>
                )}
          </motion.ul>
        </AnimatePresence>
        {isSubmitSuccessful && (
          <SearchBtnContainer>
            <Link to={"/"}>
              <button>뒤로 가기</button>
            </Link>
          </SearchBtnContainer>
        )}
      </SearchContainer>
    </>
  );
}

export default Search;
