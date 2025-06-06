import { useState } from "react";
import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import NoteList from "../NoteList/NoteList";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../services/noteService";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const notes = useQuery({
    queryKey: ["notes", query, currentPage],
    queryFn: () => fetchNotes(query, currentPage),
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox />
        {/* <Pagination /> */}
        <button className={"button"}>Create note</button>
      </header>
      <NoteList notes={notes.data?.notes ?? []} />
    </div>
  );
}
