import * as React from "react";

import ServerCharge from "../components/ServerCharge/ServerCharge";

import styles from "./App.module.scss";

const SERVERS_ID: string[] = ["1", "2", "3", "4"];

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      {SERVERS_ID.map((server) => (
        <ServerCharge key={server} id={server} />
      ))}
    </main>
  );
};

export default App;
