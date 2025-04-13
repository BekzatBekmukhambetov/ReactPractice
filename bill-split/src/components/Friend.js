import Button from "./Button";

export function Friend({ friend, onSelectFriend, selectedFrined }) {
  const isSelected = selectedFrined?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      {friend.name}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}${" "}
        </p>
      )}

      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}
