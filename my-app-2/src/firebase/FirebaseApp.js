import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where
} from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { db } from "./firebase-config";

const FirebaseApp = () => {
  // colRef: collection reference -> reference tới collection trong firebase
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Truyền vào function collection: db và collection
    // 1. Get Collection Data (posts)
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     let posts = [];
    //     snapshot.docs.forEach((doc) => {
    //       posts.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     setPosts(posts);
    //   })
    //   .catch((err) => console.log(err));
    // 2. Get document in realtime
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setPosts(posts);
    });
    const singleDocRef = doc(db, "posts", "jsNhECuN9Odnry7XGR4q");
    onSnapshot(singleDocRef, (doc) => {
      console.log(doc.id, doc.data());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // Firestore queries
    const q = query(colRef, orderBy("title", "asc"), where("author", "==", "Tran Dang Khoi"), limit(5));
    // getDocs(q).then((snapshot) => {
    //   let posts = [];
    //   snapshot.docs.forEach((doc) => {
    //     posts.push({
    //       id: doc.id,
    //       ...doc.data(),
    //     });
    //   });
    //   console.log(posts);
    // });
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          ...doc.data()
        });
      });
      console.log(posts);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddPost = async (e) => {
    e.preventDefault();
    await addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp()
    });
    console.log("Successfully added a doc");
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
    const docToBeDeleted = doc(db, "posts", postId);
    await deleteDoc(docToBeDeleted);
    console.log("Successfully deleted the doc");
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const docToBeUpdate = doc(db, "posts", postId);
    await updateDoc(docToBeUpdate, {
      title: "Updated title"
    });
    console.log("Successfully updated the doc");
  };
  return (
    <div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5">
        <h2 className="text-center font-[30px] font-medium">Add Document</h2>
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Add post
          </button>
        </form>
        <h2 className="text-center mt-20 font-[30px] font-medium">Delete Document</h2>
        <form onSubmit={handleDeletePost}>
          <input
            type="text"
            className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
            placeholder="Enter your id"
            name="postId"
            onChange={(e) => setPostId(e.target.value)}
          />

          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-red-500 rounded-lg"
          >
            Delete post
          </button>
        </form>
        <form onSubmit={handleUpdatePost}>
          <h2 className="text-center mt-20 font-[30px] font-medium">Update Document</h2>
          <input
            type="text"
            className="w-full p-3 mb-5 border-2 border-gray-200 rounded outline-none focus:border-blue-400"
            placeholder="Enter your post's ID"
            name="postId"
            onChange={(e) => setPostId(e.target.value)}
          />

          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Update post
          </button>
        </form>
      </div>
      <div className="w-full mt-5 max-w-[500px] mx-auto bg-white shadow-lg p-5">
        {posts.length > 0 &&
          posts.map((item) => (
            <div key={item.title}>
              <div>
                {item.title} - {item.author}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
