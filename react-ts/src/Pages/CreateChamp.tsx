import { useState } from "react";
import type { Champ } from "../types/Champ";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import * as Sentry from "@sentry/react";


const CreateChamp = () => {
  const [champ, setChamp] = useState<Champ>({
    name: "",
    role: "",
    lane: "",
    difficulty: 0,
    blue_essence: 0,
    damage_type: "",
    images: [],
    description: "",
  });
  const submit = () => {
    apiClient
      .put("/champions/create")
      .then(() => {
        toast.success("Sikeres létrehozás!");
      })
      .catch((err) => {toast.error("Sikeretelen létrehozás"), Sentry.captureException(err)});
  };
  return (
    <>
      <h1>Név</h1>
      <input
        type="text"
        onChange={(e) => setChamp({ ...champ, name: e.target.value })}
      />
      <h1>Role</h1>
      <input
        type="text"
        onChange={(e) => setChamp({ ...champ, role: e.target.value })}
      />
      <h1>Lane</h1>
      <input
        type="text"
        onChange={(e) => setChamp({ ...champ, lane: e.target.value })}
      />
      <h1>difficulty</h1>
      <input
        type="number"
        onChange={(e) => setChamp({ ...champ, difficulty: Number(e.target.value) })}
      />
      <h1>Blue essence</h1>
      <input
        type="number"
        onChange={(e) => setChamp({ ...champ, blue_essence: Number(e.target.value) })}
      />
      <h1>Descrtiption</h1>
      <input
        type="text"
        onChange={(e) => setChamp({ ...champ, description: e.target.value })}
      />
      <Button onClick={submit}>Létrehozás</Button>
    </>
  );
};
export default CreateChamp;
