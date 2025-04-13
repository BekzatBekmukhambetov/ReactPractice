import { Friend } from "./Friend";

export function FriendList({ friends, onSelectFriend, selectedFrined }) {
  return (
    <div>
      <ul>
        {" "}
        {friends.map((friend) => (
          <Friend
            friend={friend}
            selectedFrined={selectedFrined}
            onSelectFriend={onSelectFriend} />
        ))}
      </ul>
      ;
    </div>
  );
}
