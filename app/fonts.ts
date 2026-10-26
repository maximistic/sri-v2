import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";

export const display = Bricolage_Grotesque({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-bricolage",
})

export const serif = Instrument_Serif({
    weight: "400",
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-instrument",
})

export const mono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jetbrains",
})
