interface CommentCardProps {
  name: string;
  body: string;
  email: string;
}

const CommentCard = ({ name, body, email }: CommentCardProps) => {
  return (
    <div className="card">
      <div className="card-body d-flex flex-column gap-2">
        <h4 className="card-title">Title: {name}</h4>
        <h5 className="card-subtitle">Author: {email}</h5>
        <p className="card-text">{body}</p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
