import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";
import { FiTrash } from "react-icons/fi";
import { FaGripLines } from "react-icons/fa";

function CardTemplate() {
  return (
    <>
      <div className="bg-[#2E3856] w-[1215px] h-44 rounded-md m-1.5 my-5">

        <div className="flex justify-end">
          <FaGripLines className="w-6 h-6 mt-4 mx-1 text-[#586380]" />
          <FiTrash className="w-6 h-6 text-white m-4" />
        </div>

        <hr className="border-t-2" />

        <div className="flex flex-row">
          <div className="mx-5 mt-4">
            <input
              type="text"
              placeholder='Enter term'
              className="text-white bg-[#2E3856] w-lg rounded-md text-md my-1.5 mx-1"
            />
            <hr className="text-white w-4/5" />
            <p className="text-white text-md my-1.5 mx-1">Term</p>
          </div>

          <div className="mx-5 mt-4">
            <input
              type="text"
              placeholder='Enter definition'
              className="text-white bg-[#2E3856] w-lg rounded-md text-md my-1.5 mx-1"
            />
            <hr className="text-white w-4/5" />
            <p className="text-white text-md my-1.5 mx-1">Definition</p>
          </div>

        </div>

      </div>
    </>
  )

}

function AddCard() {
  return (
    <>
      <div className="bg-[#2E3856] w-[1215px] h-32 rounded-md m-1.5">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl text-white font-bold text-center underline decoration-[#3ccfcf] underline-offset-8">
            ADD A CARD
          </p>
        </div>
      </div>
    </>
  )

}

export default function CreateFlashcardsSetPage() {
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <div className="bg-[#0A092D] min-h-screen ml-64 p-4">
        <div className="flex flex-row">
          <h1 className="mx-2 text-[#F6F7FB] text-3xl font-bold">Create a new flashcard set</h1>

          <div className="flex m-2 mx-3 space-x-3 ml-auto">
            <button className="bg-[#0A092D] w-24 p-2 rounded-md border-[#2E3856] border-2 text-[#2E3856] mx-4">Create</button>
            <button className="bg-[#2E3856] w-44 p-2 rounded-md border-[#2E3856] border-2 text-[#F6F7FB]">Create and Practice</button>
          </div>

        </div>

        <input
          type="text"
          placeholder='Enter a title, like "Biology - Chapter 22: Evolution"'
          className="text-white bg-[#2E3856] p-4 m-1.5 w-[1215px] rounded-md"
        />

        <br />

        <input
          type="text"
          placeholder="Add a description..."
          className="text-white bg-[#2E3856] p-4 m-1.5 w-[1215px] rounded-md"
        />

        <CardTemplate />
        <CardTemplate />
        <CardTemplate />
        <CardTemplate />
        <CardTemplate />

        <AddCard />

      </div>
    </>
  )
}
