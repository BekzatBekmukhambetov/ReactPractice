export  default function Stats({ items }) {
  const numItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / numItem) * 100);

  if (numItem === 0) return <p className="stats">Please add item ➕</p>;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Everything packed Lets go ✈️"
          : `You have ${numItem} items, you packed ${packedItem} items,  already packed ${percentage}%`}
      </em>
    </footer>
  );
}
