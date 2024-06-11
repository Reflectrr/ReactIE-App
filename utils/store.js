import { create } from "zustand";

export const useReactIEStore = create((set => ({
    filename: "Paper2.json",
    reactions: null,
    extracting: false,
    setFilename: (filename) => set({ filename }),
    setReactions: (reactions) => set({ reactions }),
    setExtracting: (extracting) => set({ extracting }),
})));

export const usePDFToTextStore = create((set) => ({
    file: null,
    filename: null,
    parsing: false,
    text: null,
    setFile: (file) => set({ file }),
    setFilename: (filename) => set({ filename }),
    setText: (text) => set({ text }),
    setParsing: (parsing) => set({ parsing }),
}));
