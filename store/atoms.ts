import { atom } from 'jotai';

export type ShowMenu = "nav" | "text" | "title" | "eventsFilter" | "tickets" | "777" | null;

export const showMenuAtom = atom<ShowMenu>(null);
export const textMenuContentAtom = atom<string | null>(null);
export const titleMenuContentAtom = atom<string | null>(null);

export const isMobileLoadedAtom = atom<boolean>(false);
export const isMobileAtom = atom<boolean>(true);
export const isMobileLandscapeAtom = atom<boolean>(false);