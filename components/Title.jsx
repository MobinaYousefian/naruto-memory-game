'use client'
import {useDispatch, useSelector} from "react-redux";
import {triggerInstructions} from "@/redux/features/instructionsSlice";
import {clsx} from "clsx";

export const Title = () => {
    const dispatch = useDispatch();
    const {isOpen} = useSelector(state => state.instructions);

    const handleTriggerInstructions = () => {
        dispatch(triggerInstructions());
    };

    return (
        <div className={"flex items-start backdrop-blur justify-between select-none"}>
            <div className={"cursor-pointer p-3"}>
                <button className={"group active:bg-[#C2410CD3] duration-100 transition-all hover:bg-[#F3772DC6] justify-center flex rounded-lg px-6 py-2 bg-[#FC5712AD] text-white text-2xl"}>
                    Start {"--"}
                    <span className={"transition-all duration-75 group-hover:translate-x-1"}>{">"}</span>
                </button>
            </div>
            <div className={"p-3"}>
                <h1 className={"px-4 py-2 font-bold text-4xl text-gray-800 rounded-lg bg-[#ffffffC4]"}>
                    Welcome to the memory game Naruto!
                </h1>
            </div>
            <div onClick={handleTriggerInstructions} className={"p-3"}>
                <h4 className={"active:bg-[#ffffffBA] cursor-pointer group duration-100 transition-all hover:bg-[#ffffffD1] px-4 py-2 text-gray-800 font-bold text-3xl bg-[#ffffffC4] rounded-lg"}>
                    Instructions
                    <button className={clsx(isOpen === false ? "group-hover:translate-y-0.5" : "group-hover:-translate-y-0.5" ,"transition-all duration-100 rotate-90 ml-3 font-sans text-xl")}>{isOpen === false ? ">" : "<"}</button>
                </h4>
            </div>
        </div>
    )
}