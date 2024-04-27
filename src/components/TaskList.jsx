export default function TaskList({ items }) {
  return (
    <>
      <ul id="unordered-list" className="list-group">
        {items}
      </ul>
    </>
  );
}