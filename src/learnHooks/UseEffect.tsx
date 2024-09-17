import { useEffect, useState } from "react";
import PostCard from "../components/PostCard.tsx";
import CommentCard from "../components/CommentCard.tsx";
import UserCard from "../components/UserCard.tsx";

interface IPost {
  id: number;
  title: string;
  body: string;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface IComment {
  id: number;
  name: string;
  body: string;
  email: string;
}

type Item = IPost | IUser | IComment;

const UseEffect = () => {
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState<Item[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect((): void => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isPost = (item: Item): item is IPost => {
    return (
      (item as IPost).title !== undefined && (item as IPost).body !== undefined
    );
  };

  const isUser = (item: Item): item is IUser => {
    return (
      (item as IUser).username !== undefined &&
      (item as IUser).name !== undefined
    );
  };

  const isComment = (item: Item): item is IComment => {
    return (
      (item as IComment).body !== undefined &&
      (item as IComment).name !== undefined
    );
  };

  return (
    <>
      <h3 className="text-decoration-underline">useEffect()</h3>
      <div className="d-flex flex-column align-items-center gap-2 my-3">
        <h3>{windowWidth}</h3>
        <div className="d-flex justify-content-center align-items-center gap-2">
          <button
            className="btn btn-outline-info"
            onClick={() => setResourceType("posts")}
          >
            Posts
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => setResourceType("users")}
          >
            Users
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => setResourceType("comments")}
          >
            Comments
          </button>
        </div>
        <h2>{resourceType}</h2>
        <div className="container-fluid text-wrap d-flex flex-column gap-3">
          {resourceType === "posts" &&
            items
              .filter(isPost)
              .slice(0, 3)
              .map((item) => (
                <PostCard key={item.id} title={item.title} body={item.body} />
              ))}
          {resourceType === "users" &&
            items
              .filter(isUser)
              .slice(0, 3)
              .map((item) => (
                <UserCard
                  key={item.id}
                  name={item.name}
                  username={item.username}
                  email={item.email}
                  phone={item.phone}
                />
              ))}
          {resourceType === "comments" &&
            items
              .filter(isComment)
              .slice(0, 3)
              .map((item) => (
                <CommentCard
                  key={item.id}
                  name={item.name}
                  body={item.body}
                  email={item.email}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default UseEffect;
