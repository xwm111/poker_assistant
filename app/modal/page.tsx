'use client';
import { useState } from "react";
import Modal from "../ui/modal";

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentText,setCurrentText] = useState("")

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
        return (
            <div>
            <button onClick={()=>{
              setCurrentText("hhhhhhhh")
              openModal()
            }}> change text</button>
            <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Open Modal
            </button>
            <Modal isOpen={isModalOpen} onClose={()=>closeModal()}>
              <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
              <p>{currentText}</p>
            </Modal>
          </div>
        )

}