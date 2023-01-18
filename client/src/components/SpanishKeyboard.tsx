import { useEffect, useRef, useState } from "react";
import { IKeyboardProps } from "../interfaces";
import {
  Key,
  keyBoardVar,
  Row,
  KeyboardWrapper,
} from "../styles/keyboardStyle";
import { onKeyClick } from "../util/keyboard";

const titles = [
  "~ + n",
  "' + a",
  "' + e",
  "' + i",
  "' + o",
  "' + u",
  '" + u',
  "alt + ?",
  "alt + !",
];

const capTitles = [
  "~ + N",
  "' + A",
  "' + E",
  "' + I",
  "' + O",
  "' + U",
  '" + U',
  "alt + ?",
  "alt + !",
];

function SpanishKeyboard({
  lastInput,
  setLastInput,
  keyboardRef,
  inputRef,
  shiftOn,
  setShiftOn,
  capsLockOn,
  setCapsLockOn,
  specialKeyOnRef,
  className,
}: IKeyboardProps) {
  const [cap, setCap] = useState(
    (!shiftOn && capsLockOn) || (shiftOn && !capsLockOn)
  );
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    // console.log(lastInput[0]);
    const pressedKey = document.getElementById(`esp_key_${lastInput}`);
    // console.log(pressedKey);
    if (pressedKey?.classList.contains("pressed") && timeoutId.current) {
      clearTimeout(timeoutId.current);
      pressedKey.classList.remove("pressed");
    }
    pressedKey?.classList.add("pressed");
    timeoutId.current = setTimeout(() => {
      pressedKey?.classList.remove("pressed");
    }, 100);
    setLastInput("");
  }, [lastInput, setLastInput]);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event) {
        setCapsLockOn(event.getModifierState("CapsLock"));
        setShiftOn(event.getModifierState("Shift"));
      }

      if (specialKeyOnRef) {
        if (event.key === "'") {
          if (!specialKeyOnRef.current.apostropheOn) {
            specialKeyOnRef.current.apostropheOn = true;
            event.preventDefault();
          }
        }
        if (event.key === '"') {
          if (!specialKeyOnRef.current.quotaionMarkOn) {
            specialKeyOnRef.current.quotaionMarkOn = true;
            event.preventDefault();
          }
        }
        if (event.key === "~") {
          if (!specialKeyOnRef.current.tildeOn) {
            specialKeyOnRef.current.tildeOn = true;
            event.preventDefault();
          }
        }
        //크롬에서 alt키 누를때마다 자꾸 설정창 focus되게 하는 거 막기
        if (event.altKey === true) {
          specialKeyOnRef.current.altOn = event.altKey;
          event.preventDefault();
        }
      }
    });
    document.addEventListener("keyup", (event) => {
      setShiftOn(event.getModifierState("Shift"));
    });
  }, [setCapsLockOn, setShiftOn, specialKeyOnRef]);

  useEffect(() => {
    setCap((!shiftOn && capsLockOn) || (shiftOn && !capsLockOn));
  }, [shiftOn, capsLockOn, setCap]);

  return (
    <KeyboardWrapper
      className={className}
      ref={keyboardRef}
      variants={keyBoardVar}
      initial="hidden"
      animate="appear"
      exit="disappear"
    >
      <Row>
        {cap
          ? ["Ñ", "Á", "É", "Í", "Ó", "Ú", "Ü", "¿", "¡"].map((key, index) => (
              <Key
                key={`esp_key_${key}`}
                id={`esp_key_${key}`}
                title={capTitles[index]}
                onClick={(event) => onKeyClick(event, inputRef)}
              >
                {key}
              </Key>
            ))
          : ["ñ", "á", "é", "í", "ó", "ú", "ü", "¿", "¡"].map((key, index) => (
              <Key
                key={`esp_key_${key}`}
                id={`esp_key_${key}`}
                title={titles[index]}
                onClick={(event) => onKeyClick(event, inputRef)}
              >
                {key}
              </Key>
            ))}
      </Row>
    </KeyboardWrapper>
  );
}

export default SpanishKeyboard;
