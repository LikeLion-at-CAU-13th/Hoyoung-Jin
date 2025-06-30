import { atom } from "recoil";
import kapibara from "../image/image.js";

export const userNameAtom = atom({
  key: "user",
  default: "아기사자",
});

export const emailAtom = atom({
  key: "email",
  default: "likelion@cau.ac.kr",
});

export const isSubmittedAtom = atom({
  key: "isSubmitted",
  default: false,
});

export const userImgAtom = atom({
  key: "img",
  default: kapibara,
});
