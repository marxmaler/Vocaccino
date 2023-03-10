import { useRecoilState, useRecoilValue } from "recoil";
import {
  loginState,
  weeklyWordsState,
  weeklyWordsBeforeTodaySelector,
  weeklyWordsCntState,
} from "../atoms";
import HeaderMenu from "../components/HeaderMenu";
import { langs, languagesInKo } from "../util/language";
import PieChart from "../components/PieChart";
import React, { useEffect, useState } from "react";
import RadialBarChart from "../components/RadialBarChart";
import BarChart from "../components/BarChart";
import { useQuery } from "react-query";
import { fetchWeeklyWords, refetchUserData } from "../api";
import { getEightDateArray } from "../util/time";
import { ILanguageWordsCnt, IWord } from "../interfaces";
import LineAreaChart from "../components/LineAreaChart";
import LineChart from "../components/LineChart";
import { getLanguageWordsAndCntArr } from "../util/word";
import HorizontalBarChart from "../components/HorizontalBarChart";
import { motion } from "framer-motion";
import { basicShowVariants } from "../styles/motionVariants";
import {
  StatContainer,
  StatLiContainer,
} from "../styles/screen/statisticsStyle";

function Statistics() {
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  const { user } = loginInfo;
  const { isLoading: isLoadingUser, data: userData } = useQuery(
    "refetchUserData",
    () => refetchUserData(String(user?._id))
  );
  const [midLang, setMidLang] = useState("En");
  const [selectedMenu, setSelectedMenu] = useState("언어별 일일 평균");
  const [weeklyWords, setWeeklyWords] = useRecoilState(weeklyWordsState);
  const { isLoading: isLoadingWeeklyWords, data: weeklyWordsData } = useQuery(
    "fetchWeeklyWords",
    fetchWeeklyWords
  );
  const weeklyWordsBeforeToday = useRecoilValue(weeklyWordsBeforeTodaySelector);
  const weeklyWordsCntTotal = weeklyWordsBeforeToday.length;
  const weeklyWordsCntAvg: number = Math.round(weeklyWordsCntTotal / 7);

  const [weeklyWordsCnt, setWeeklyWordsCnt] =
    useRecoilState(weeklyWordsCntState);
  const newWeeklyWordCnt = [0, 0, 0, 0, 0, 0, 0, 0];
  const eightDates = getEightDateArray();

  const { languageWords, languageWordsCnt } = getLanguageWordsAndCntArr(
    weeklyWords,
    eightDates
  );
  const [wordCntState, setWordCntState] =
    useState<ILanguageWordsCnt>(languageWordsCnt);

  useEffect(() => {
    // console.log("weeklyWordsBeforeToday:", weeklyWordsBeforeToday);

    if (!isLoadingUser) {
      setLoginInfo((prev) => ({ ...prev, ...userData }));
    }

    if (!isLoadingWeeklyWords && weeklyWordsData?.result) {
      // console.log(weeklyWordsData.result);
      setWeeklyWords(() => weeklyWordsData.result);
      // console.log("weeklyWordsData.result:", weeklyWordsData.result);

      // 이 부분 분류 좀 더 효율적으로 하도록 추후 개선하기

      weeklyWordsData.result.forEach((word: IWord) => {
        for (let i = 0; i < 8; i++) {
          if (eightDates[i].getDate() === new Date(word.addedAt).getDate()) {
            newWeeklyWordCnt[i] += 1;
            break;
          }
        }
      });
      // console.log(newWeeklyWordCnt);
    }
    setWeeklyWordsCnt(() => [...newWeeklyWordCnt]);
    // console.log("languageWordsCnt:", languageWordsCnt);
    setWordCntState(() => languageWordsCnt);
    // console.log("weeklyWordsCnt:", weeklyWordsCnt);
    // console.log(weeklyWords);
  }, [isLoadingUser, isLoadingWeeklyWords]);

  const totals = langs.map((lang) =>
    user?.stat[lang].total === undefined ? 0 : user.stat[lang].total
  );
  let totalNum = 0;
  totals.forEach((total) => (totalNum += total));

  const selectMidLang = (event: React.FormEvent<HTMLSelectElement>) => {
    const selectedMidLang = event.currentTarget.value;
    setMidLang(() => selectedMidLang);
  };
  const selectStatisticMenu = (event: React.FormEvent<HTMLSelectElement>) => {
    const statMenu = event.currentTarget.value;
    setSelectedMenu(() => statMenu);
  };

  return (
    <>
      <HeaderMenu />
      {!(isLoadingUser && isLoadingWeeklyWords) && (
        <StatContainer>
          <motion.ul
            custom={{ delay: 0 }}
            variants={basicShowVariants}
            initial="hidden"
            animate="show"
          >
            <h3>집계</h3>
            <StatLiContainer>
              <li>전체 : {totalNum}</li>
              {totals.map((total, index) => (
                <li key={`total_${index}`}>
                  {languagesInKo[index]} : {total}
                </li>
              ))}
            </StatLiContainer>
            <PieChart labels={languagesInKo} series={totals} />
          </motion.ul>
          <motion.ul
            custom={{ delay: 0.4 }}
            variants={basicShowVariants}
            initial="hidden"
            animate="show"
          >
            <h3>복습 현황</h3>
            <StatLiContainer>
              <li>
                언어 :{" "}
                <select onChange={selectMidLang}>
                  {languagesInKo.map((language, index) => (
                    <option key={`midLangOption_${index}`} value={langs[index]}>
                      {language}
                    </option>
                  ))}
                </select>
              </li>

              <li>전체 : {user?.stat[midLang].total}</li>
              {["once", "twice", "threeTimes", "fourTimes"].map(
                (revTimes, index) => (
                  <li key={`reviewed_${revTimes}`}>
                    {
                      ["1회 복습", "2회 복습", "3회 복습", "4회 복습 (마스터)"][
                        index
                      ]
                    }{" "}
                    : {user?.stat[midLang][revTimes]}
                  </li>
                )
              )}
            </StatLiContainer>

            <BarChart
              labels={["0회 복습", "1회 복습", "2회 복습", "3회 복습"]}
              series={[
                (user?.stat[midLang].total ?? 0) -
                  (user?.stat[midLang].once ?? 0) -
                  (user?.stat[midLang].twice ?? 0) -
                  (user?.stat[midLang].threeTimes ?? 0) ?? 0,
                user?.stat[midLang].once ?? 0,
                user?.stat[midLang].twice ?? 0,
                user?.stat[midLang].threeTimes ?? 0,
              ]}
            />
            <RadialBarChart
              labels={[`마스터한 단어 : ${user?.stat[midLang].fourTimes}개`]}
              series={
                (user?.stat[midLang].fourTime && user.stat[midLang].total !== 0
                  ? [
                      (user?.stat[midLang].fourTimes /
                        user?.stat[midLang].total) *
                        100,
                    ]
                  : [0]) ?? [0]
              }
            />
          </motion.ul>
          <motion.ul
            custom={{ delay: 0.8 }}
            variants={basicShowVariants}
            initial="hidden"
            animate="show"
          >
            <h3>주간 학습 추이</h3>
            <StatLiContainer>
              <li>지난 7일 간 학습한 단어 : {weeklyWordsCntTotal}개</li>
              <li>일일 평균 : {weeklyWordsCntAvg}개</li>
              <li>오늘 학습한 단어 : {weeklyWordsCnt[7]}개</li>
            </StatLiContainer>

            <LineAreaChart
              labels={[
                "1주 전",
                "6일 전",
                "5일 전",
                "4일 전",
                "3일 전",
                "2일 전",
                "1일 전",
                "오늘",
              ]}
              avg={weeklyWordsCntAvg}
            />
            <StatLiContainer>
              <li>
                <span>
                  그래프 :{" "}
                  <select onChange={selectStatisticMenu}>
                    {["언어별 일일 평균", "언어별 1주 간 새로 추가된 단어"].map(
                      (menu, index) => (
                        <option key={`rightLangOption_${index}`} value={menu}>
                          {menu}
                        </option>
                      )
                    )}
                  </select>
                </span>
              </li>
            </StatLiContainer>
            {selectedMenu === "언어별 일일 평균" ? (
              <HorizontalBarChart
                labels={languagesInKo}
                languageWords={languageWords}
                selectedMenu={selectedMenu}
              />
            ) : (
              <LineChart
                labels={[
                  "1주 전",
                  "6일 전",
                  "5일 전",
                  "4일 전",
                  "3일 전",
                  "2일 전",
                  "1일 전",
                  "오늘",
                ]}
                selectedMenu={selectedMenu}
                languageWordsCnt={wordCntState}
                weeklyWordsCntAvg={weeklyWordsCntAvg}
              />
            )}
          </motion.ul>
        </StatContainer>
      )}
    </>
  );
}

export default Statistics;
