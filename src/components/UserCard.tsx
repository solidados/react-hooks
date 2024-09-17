interface UserCardProps {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserCard = ({ name, username, email, phone }: UserCardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Username: @{username}</p>
        <p className="card-text">
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="card-text">
          Phone: <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
