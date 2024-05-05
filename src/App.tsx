import { useState } from "react";
import { Layout, Header, Footer } from "./components";
import { AddNote, Content } from "./pages";
import { Epages } from "./constatns/constatns.ts";

import styles from "./app.module.css";

function App() {
  const [page, setPage] = useState<Epages>(Epages.main);

  const addNote = () => {
    setPage(Epages.addNote);
  };

  return (
    <Layout className={page === Epages.addNote ? styles.addNote : ""}>
      <Header page={page} setPage={setPage} />
      {page === Epages.main && <Content changePage={addNote} />}
      {page === Epages.addNote && <AddNote />}
      <Footer />
    </Layout>
  );
}

export default App;
