function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-green-500 to-orange-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                                KTP
                        <img class="rounded w-40 h-60" src="firma.jpg"/>
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Nama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        <label
                             class="mb-2 font-bold text-I=lg text-gray-900"
                             for="Tempat/Tgl lahir"
                        >
                            Tempat/Tgl lahir
                        </label>
                        <input
                            class="border py-2 px-3 text-grey-800"
                            type="text"
                            name="Tempat/Tgl lahir"
                            id="naam"
                        />
                        <label
                            class="mb-2 font-bold text-lg text-gray-900"
                            for="Tempat/Tgl lahir"
                        >
                            Jenis kelamin
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Jenis kelamin"
                                id="naam"
                        />
                        <label
                            class="mb-2 font-bold text-lg-gray-900"
                            for="Tempat/Tgl lahir"
                        >
                      
                            Gol.Darah
                        </label>
                        <input
                            class="mb-2 font-py-2 px-3 text-grey-800"
                            type="text"
                            mame="naam"
                        />
                        <label
                            class="mb-2 font-bold text-lg text-gray-900"
                            for="Tempat/Tgl lahir"
                        >
                          Agama
                        </label>
                        <input
                            class="border py-2 px-3 text-gray-800"
                            type="text"
                            name="Agama"
                            id="naam"
                        />
                        <label
                            class="mb-2 font-bold text-lg text-gray-900"
                            for="Tempat/Tgl lahir"
                        >
                            Status Perkawinan
                            </label>
                            <input
                                class="mb-2 font-bold text-grey-800"
                                type="text"
                                name="Status Perkawinan"
                                id="naam"
                            />
                            <label
                                class="mb2 font-bold text-lg text-gray-900"
                                for="Tempat/Tgl lahir"
                            >
                                Pekerjaan
                                </label>
                                <input
                                    class="border py-2 px-3 text-grey-800"
                                    type="text"
                                    name="Pekerjaan"
                                    id="naam"
                                />
                                <label
                                    class="mb-2 font-bold text-lg text-gray-900"
                                    for="naam"
                                >
                                    Kewarganegaraan
                                </label>
                                <input
                                    class="border py-2 px-3 text-grey-800"
                                    type="text"
                                    name="kewarganegaraan"
                                    id="naam"
                                />






                            </div>
                            <button
                        class="block bg-orange-400 hover:bg-orange-600 text-white uppercase text-lg mx-auto p-4 rounded"
                        type="submit"
                        >
                            Buat Akun
                        </button>
                    </form>
                    <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                        Telah Memiliki Akun?
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;