import { useEffect, useState } from "react";

const hiraganaData = [
    { huruf: "あ", romaji: "a" },
    { huruf: "い", romaji: "i" },
    { huruf: "う", romaji: "u" },
    { huruf: "え", romaji: "e" },
    { huruf: "お", romaji: "o" },

    { huruf: "か", romaji: "ka" },
    { huruf: "き", romaji: "ki" },
    { huruf: "く", romaji: "ku" },
    { huruf: "け", romaji: "ke" },
    { huruf: "こ", romaji: "ko" },

    { huruf: "さ", romaji: "sa" },
    { huruf: "し", romaji: "shi" },
    { huruf: "す", romaji: "su" },
    { huruf: "せ", romaji: "se" },
    { huruf: "そ", romaji: "so" },

    { huruf: "た", romaji: "ta" },
    { huruf: "ち", romaji: "chi" },
    { huruf: "つ", romaji: "tsu" },
    { huruf: "て", romaji: "te" },
    { huruf: "と", romaji: "to" },

    { huruf: "な", romaji: "na" },
    { huruf: "に", romaji: "ni" },
    { huruf: "ぬ", romaji: "nu" },
    { huruf: "ね", romaji: "ne" },
    { huruf: "の", romaji: "no" },

    { huruf: "は", romaji: "ha" },
    { huruf: "ひ", romaji: "hi" },
    { huruf: "ふ", romaji: "fu" },
    { huruf: "へ", romaji: "he" },
    { huruf: "ほ", romaji: "ho" },

    { huruf: "ま", romaji: "ma" },
    { huruf: "み", romaji: "mi" },
    { huruf: "む", romaji: "mu" },
    { huruf: "め", romaji: "me" },
    { huruf: "も", romaji: "mo" },

    { huruf: "や", romaji: "ya" },
    { huruf: "ゆ", romaji: "yu" },
    { huruf: "よ", romaji: "yo" },

    { huruf: "ら", romaji: "ra" },
    { huruf: "り", romaji: "ri" },
    { huruf: "る", romaji: "ru" },
    { huruf: "れ", romaji: "re" },
    { huruf: "ろ", romaji: "ro" },

    { huruf: "わ", romaji: "wa" },
    { huruf: "を", romaji: "o" },
    { huruf: "ん", romaji: "n" },
];

export default function TebakHiragana() {
    const [soal, setSoal] = useState(null);
    const [hasil, setHasil] = useState("");
    const [skor, setSkor] = useState(0);
    const [pilihan, setPilihan] = useState([]);
    const [sudahJawab, setSudahJawab] = useState(false);

    function randomSoal() {
        const soalRandom =
            hiraganaData[Math.floor(Math.random() * hiraganaData.length)];

        const jawabanSalah = hiraganaData
            .filter((item) => item.romaji !== soalRandom.romaji)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);

        const opsi = [soalRandom, ...jawabanSalah]
            .sort(() => 0.5 - Math.random())
            .map((item) => item.romaji);

        setSoal(soalRandom);
        setPilihan(opsi);
        setHasil("");
        setSudahJawab(false);
    }

    useEffect(() => {
        randomSoal();
    }, []);

    function cekJawaban(pilih) {
        if (pilih === soal.romaji) {
            setHasil("✅ Benar!");
            setSkor((prev) => prev + 1);
        } else {
            setHasil(`❌ Salah! Jawaban: ${soal.romaji}`);
        }

        setSudahJawab(true);
    }

    if (!soal) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            {/* <h1 className="text-3xl font-bold mb-6">Tebak Hiragana</h1> */}

            <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
                <div className="text-[9rem] mb-6">{soal.huruf}</div>

                <div className="flex justify-center gap-3 mb-4">
                    {pilihan.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => cekJawaban(item)}
                            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                 <button
          onClick={randomSoal}
          className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Berikutnya →
        </button>

                <p className="mb-2">{hasil}</p>
                <h3 className="font-semibold">Skor: {skor}</h3>
            </div>
        </div>
    );
}
