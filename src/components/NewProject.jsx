import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onCancel, onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const projectData = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    onAdd(projectData);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="title" type="text" />
        <Input ref={description} label="description" textarea />
        <Input ref={dueDate} label="due date" type="date" />
      </div>
    </div>
  );
}
