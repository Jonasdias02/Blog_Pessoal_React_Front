import img_home from "../../assets/img_home.png"

function Home() {

  

    return (
        <>
            <div className="bg-orange-500 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Farmácia Ferreira
                        </h2>
                        <p className='text-xl'>
                           Nosso lema é cuidar de você!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Cadastre-se aqui!
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src={img_home}
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home