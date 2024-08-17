import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* List of tasks */}
      <div className="mb-4">
        <ul id="tasksList" className="list-group list-group-flush"></ul>
      </div>
    </>
  );
}
