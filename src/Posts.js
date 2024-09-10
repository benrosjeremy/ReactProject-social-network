// import React, { useState, useEffect } from "react";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const [selectedPostId, setSelectedPostId] = useState(null); // מזהה הפוסט הנבחר
//   const [comments, setComments] = useState({});
//   const [newPostTitle, setNewPostTitle] = useState("");
//   const [newPostBody, setNewPostBody] = useState("");
//   const [search, setSearch] = useState("");
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   // trim מוריד את הרווחים שבהתחלה ובסוף
//   const handleAddPost = () => {
//     if (newPostTitle.trim() && newPostBody.trim()) {
//       const newPost = {
//         id: posts.length + 1,
//         title: newPostTitle,
//         body: newPostBody,
//       };
//       setPosts([newPost, ...posts]);
//       setNewPostTitle("");
//       setNewPostBody("");
//     }
//   };

//   const handleDeletePost = (id) => {
//     setPosts(posts.filter((post) => post.id !== id));
//     setSelectedPostId(null);
//   };

//   const handleSelectPost = (id) => {
//     setSelectedPostId(id === selectedPostId ? null : id);
//   };

//   const filteredPosts = posts.filter((post) =>
//     post.title.toLowerCase().includes(search.toLowerCase())
//   );

//   // הוספת תגובה לפוסט
//   const handleAddComment = (postId) => {
//     if (newComment.trim()) {
//       setComments((prevComments) => ({
//         ...prevComments,
//         [postId]: [...(prevComments[postId] || []), newComment],
//       }));
//       setNewComment("");
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h2>הוסף פוסט חדש</h2>
//         <input
//           type="text"
//           placeholder="כותרת הפוסט"
//           value={newPostTitle}
//           onChange={(e) => setNewPostTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="תוכן הפוסט"
//           value={newPostBody}
//           onChange={(e) => setNewPostBody(e.target.value)}
//         />
//         <button onClick={handleAddPost}>הוסף פוסט</button>
//       </div>

//       <div>
//         <label>חיפוש: </label>
//         <input
//           type="text"
//           value={search}
//           onChange={handleSearchChange}
//           placeholder="חפש לפי כותרת..."
//         />
//       </div>

//       <ul>
//         {filteredPosts.map((post) => (
//           <li key={post.id}>
//             <div>
//               <h3>
//                 {post.id}. {post.title}
//               </h3>
//               <button onClick={() => handleSelectPost(post.id)}>
//                 {selectedPostId === post.id ? "סגור" : "בחר"}
//               </button>

//               {selectedPostId === post.id && (
//                 <div>
//                   <p>{post.body}</p>
//                   <button onClick={() => handleDeletePost(post.id)}>
//                     מחק פוסט
//                   </button>

//                   {/* הוספת תגובה */}
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="הוסף תגובה"
//                       value={newComment}
//                       onChange={(e) => setNewComment(e.target.value)}
//                     />
//                     <button onClick={() => handleAddComment(post.id)}>
//                       הוסף תגובה
//                     </button>
//                   </div>

//                   <div>
//                     {comments[post.id]?.map((comment, index) => (
//                       <p key={index}>{comment}</p>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Posts;
import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null); // מזהה הפוסט הנבחר
  const [comments, setComments] = useState({});
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [search, setSearch] = useState("");
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const filteredPosts = data.filter(post => post.userId === 1);
        setPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleAddPost = () => {
    if (newPostTitle.trim() && newPostBody.trim()) {
      const newPost = {
        id: posts.length + 1,
        title: newPostTitle,
        body: newPostBody,
        userId: 1, // להוסיף את מזהה המשתמש החדש
      };
      setPosts([newPost, ...posts]); 
      setNewPostTitle("");
      setNewPostBody("");
    }
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    setSelectedPostId(null);
  };

  const handleSelectPost = (id) => {
    setSelectedPostId(id === selectedPostId ? null : id); 
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // הוספת תגובה לפוסט
  const handleAddComment = (postId) => {
    if (newComment.trim()) {
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [...(prevComments[postId] || []), newComment],
      }));
      setNewComment("");
    }
  };

  return (
    <div>
      <div>
        <h2>הוסף פוסט חדש</h2>
        <input
          type="text"
          placeholder="כותרת הפוסט"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="תוכן הפוסט"
          value={newPostBody}
          onChange={(e) => setNewPostBody(e.target.value)}
        />
        <button onClick={handleAddPost}>הוסף פוסט</button>
      </div>

      <div>
        <label>חיפוש: </label>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="חפש לפי כותרת..."
        />
      </div>

      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <div>
              <h3>
                {post.id}. {post.title}
              </h3>
              <button onClick={() => handleSelectPost(post.id)}>
                {selectedPostId === post.id ? "סגור" : "בחר"}
              </button>

              {selectedPostId === post.id && (
                <div>
                  <p>{post.body}</p>
                  <button onClick={() => handleDeletePost(post.id)}>מחק פוסט</button>
                  
                  {/* הוספת תגובה */}
                  <div>
                    <input
                      type="text"
                      placeholder="הוסף תגובה"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button onClick={() => handleAddComment(post.id)}>הוסף תגובה</button>
                  </div>
                  
                  <div>
                    {comments[post.id]?.map((comment, index) => (
                      <p key={index}>{comment}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
