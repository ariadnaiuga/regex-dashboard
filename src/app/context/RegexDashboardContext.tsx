"use client";

import React, {
  useContext,
  useState,
  ReactNode,
  createContext,
  useEffect,
} from "react";
import { RegExpInterface } from "../types";
import { DATA } from "./data";

type RegexDashboardContextType = {
  regExpressions: RegExpInterface[];
  setRegExpressions: (value: RegExpInterface[]) => void;
  text: string;
  setText: (value: string) => void;
};

const RegexDashboardContext = createContext<
  RegexDashboardContextType | undefined
>(undefined);

export const RegexDashboardProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [regExpressions, setRegExpressions] = useState<RegExpInterface[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const storedRegex = localStorage.getItem("regExpressions");
    if (storedRegex) {
      setRegExpressions(JSON.parse(storedRegex));
    } else {
      localStorage.setItem("regExpressions", JSON.stringify(DATA));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("regExpressions", JSON.stringify(regExpressions));
  }, [regExpressions]);

  return (
    <RegexDashboardContext.Provider
      value={{
        regExpressions,
        setRegExpressions,
        text,
        setText,
      }}
    >
      {children}
    </RegexDashboardContext.Provider>
  );
};

export const useRegexDashboardContext = () => {
  const context = useContext(RegexDashboardContext);
  if (!context)
    throw new Error(
      "useRegexDashboardContext must be used within RegexDashboardProvider"
    );
  return context;
};
