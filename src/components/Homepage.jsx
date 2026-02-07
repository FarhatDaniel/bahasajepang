import { useNavigate } from "react-router-dom";
import Tabela from "../sections/Tabel";
import React from "react";


function Homepage() {
    const navigate = useNavigate();
    
    return (
        <>
            <section id="home" className="pt-30 pb-48 bg-light">
                <div className="container mx-auto">
                    <div className="flex text-center flex-wrap">
                        <div className="w-full self-center px-4 md:w-full">
                            <div className="w-full justify-center flex">

                            </div>
                            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl"> <span
                                className="font-bold text-[3rem] text-black lg:text-[6rem] md:text-[4rem] sm:text-[4rem]">Tebak Hiragana</span></h1>
                            {/* <h2 className="font-bold text-gray-500 mt-3">FrontEnd Web Developer</h2> */}
                            <p className="font-bold text-2xl text-gray-500 mb-2">Latihan Bahasa jepang Dasar</p>
                            <div className="flex w-full text-center justify-center py-2">
                                <p className="font-medium text-lg text-gray-600 max-w-xl mx-auto pb-3">
                                    <i>"Jika ada yang bisa kamu lakukan hari ini, lakukan itu. jangan tunggu hingga besok"</i></p>
                            </div>
                            <button className="mt-2 bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-7 border border-primary hover:bg-black rounded-4xl" onClick={() => navigate('/game')}>Mulai
                            </button>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage;