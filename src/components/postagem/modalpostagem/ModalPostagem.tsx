import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
import FormPostagem from "../formpostagem/FormPostagem";


function ModalPostagem() {
    return(
        <>
            <Popup trigger={
                <button className="bg-gradient-to-b from-white to-[#EAEAEF] border border-[#BFC2C9] text-[#4F7C92]
                        px-4 py-1
                        shadow-sm
                        font-semibold transition-all duration-200
                        hover:from-[#FFFFFF]
                        hover:to-[#F5F5FF]
                        hover:border-[#8FB3C7]
                        hover:text-[#3E6D85]
                        hover:shadow-md">
                    Nova Postagem
                </button>
            }
    modal

    contentStyle={{
        borderRadius: "24px",
        border: "none",
        padding: "0",
        background: "transparent",
        width: "50%",
    }}

    overlayStyle={{
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(6px)",
    }}
>
    <div
        className="
            animate

            bg-white
            rounded-3xl
            p-8

            shadow-2xl
            border border-purple-200
        "
    >
        <FormPostagem />
    </div>
</Popup>
        </>
    );
}

export default ModalPostagem