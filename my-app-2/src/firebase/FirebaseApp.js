import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  // colRef: collection reference -> reference tới collection trong firebase
  useEffect(() => {
    // Truyền vào function collection: db và collection
    const colRef = collection(db, "posts");
    // 1. Get Collection Data (posts)
    getDocs(colRef)
      .then((snapshot) => {
        console.log(snapshot);
        let posts = [];
        snapshot.docs.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
          console.log(doc.data());
        });
        console.log(posts);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
};

export default FirebaseApp;
