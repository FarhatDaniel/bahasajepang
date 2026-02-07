import { hiraganaData } from "./HurufHiragana";

export default function Tabel() {
    const rows = [
        { label: " ", count: 5 },  // a, i, u, e, o
        { label: "k", count: 5 },
        { label: "s", count: 5 },
        { label: "t", count: 5 },
        { label: "n", count: 5 },
        { label: "h", count: 5 },
        { label: "m", count: 5 },
        { label: "y", count: 3 },
        { label: "r", count: 5 },
        { label: "w", count: 2 },
        { label: "n", count: 1 },
    ];

    let index = 0;

    return (
        <div className="p-4 md:p-8 w-full">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Tabel Hiragana</h2>
                
                {/* Wrapper untuk Scroll Horizontal jika layar sangat kecil */}
                <div className="overflow-x-auto pb-4">
                    <table className="w-full border-collapse min-w-125 md:min-w-full bg-white shadow-sm rounded-lg overflow-hidden">
                        <tbody>
                            {rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-b border-slate-100 last:border-0">
                                    {/* Label Huruf (a, k, s, dll) */}
                                    <td className="p-2 md:p-4 text-center font-bold text-slate-400 bg-slate-50 w-10 uppercase text-xs md:text-base">
                                        {row.label}
                                    </td>

                                    {Array.from({ length: 5 }).map((_, colIndex) => {
                                        if (colIndex < row.count) {
                                            const item = hiraganaData[index++];
                                            return (
                                                <td 
                                                    key={colIndex} 
                                                    className="border border-slate-100 p-2 md:p-4 text-center hover:bg-blue-50 transition-colors"
                                                >
                                                    <div className="text-2xl md:text-4xl font-japanese text-slate-800">
                                                        {item.huruf}
                                                    </div>
                                                    <div className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider">
                                                        {item.romaji}
                                                    </div>
                                                </td>
                                            );
                                        }
                                        return (
                                            <td key={colIndex} className="border border-slate-100 bg-slate-50/50 text-slate-200 text-center">
                                                –
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="text-center mt-6 text-slate-500 italic text-sm md:text-base">
                    * Gunakan tabel ini untuk menghafal dasar-dasar huruf Hiragana.
                </p>
            </div>
        </div>
    );
}