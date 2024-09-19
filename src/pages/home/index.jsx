import { useContext } from "react";
import Context from "../../context/Context";

export default function Home() {
  const { notes } = useContext(Context);
  return (
    <>
      <div className="container">
        <h2>To do list</h2>
        <p>Notes:</p>

        {
            notes.length > 0 
            ? notes.map((element, index) => (
                <div key={index}>
                    <p>{element}</p>
                    <button>remove</button>
                    <button>edit</button>
                </div>
            )) 
            : <h2>void</h2>
        }
      </div>
    </>
  );
}
