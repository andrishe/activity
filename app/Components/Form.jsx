"use client";

import { useEffect, useState } from "react";
import { app, db } from "../db/configFirebase";
import { doc, collection, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Toast from "./Toast";
import { useRouter } from "next/navigation";

export default function Form() {
  const [inputs, setInputs] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [file, setFile] = useState();
  const [submit, setSubmit] = useState(false);

  const storage = getStorage(app);
  const router = useRouter();

  useEffect(() => {
    if (submit === true) {
      savePost();
      router.push("/");
    }
  }, [submit]);

  const savePost = async () => {
    const docRef = doc(collection(db, "posts"));
    await setDoc(docRef, inputs);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowToast(true);
    const storageRef = ref(storage, "images/" + file?.name);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Image envoyée avec succès");
      })
      .then((resp) => {
        getDownloadURL(storageRef).then(async (url) => {
          setInputs((values) => ({ ...values, image: url }));
          setSubmit(true);
        });
      });
  };

  return (
    <div className="mt-4">
      {showToast && (
        <div>
          <Toast
            message={"Post créé avec succès"}
            closeToast={() => setShowToast(false)}
          />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titre"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <textarea
          name="desc"
          placeholder="Description"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          name="lieu"
          type="text"
          placeholder="Ville"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          name="Session"
          type="text"
          placeholder="Date de session"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          name="image"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/git, image/jpeg, image/png"
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-[#fcc446] text-white p-2 rounded-md"
        >
          Créer un post
        </button>
      </form>
    </div>
  );
}
