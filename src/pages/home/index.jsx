import { useContext } from "react";
import Context from "../../context/Context";
import ListNotes from "../../components/ListNotes";

export default function Home() {
  const { notes } = useContext(Context);
  return (
    <div className="list-notes">
      <div className="container-notes">
        <div className="header-notes">
          <h2>Notes</h2>
        </div>
        <div className="body-notes">
          {notes.length > 0 ? (
            <ListNotes data={notes} />
          ) : (
            <span>Nothing yet</span>
          )}
        </div>
      </div>
    </div>
  );
}
