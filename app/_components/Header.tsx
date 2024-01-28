


function Header() {
    return (
        <div className="w-full h-full bg-blue-50">
            <div
                className="text-[#333] font-[sans-serif]"
                style={{
                    backgroundImage: `url("/image/header.jpg")`,
                    width: "100%",
                    height: "100vh",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            >
                <div className="flex justify-center items-center h-full">
                    <div className="w-full flex justify-center items-center text-center">
                        <div className="max-md:order-1  bg-purple-950 p-4 rounded-md">
                            <h3 className="text-2xl font-extrabold mb-4 text-white">STARCODING IT SCHOOL</h3>
                            <p className="text-[35px] text-white font-semibold">
                                Սկսիր քո առաջին քայլերը IT ոլորտում <br /> STARCODING-ի հետ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header