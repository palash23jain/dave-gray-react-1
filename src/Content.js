import ItemList from "./ItemList";
const Content = ({ items, setItems, handleCheck, deleteHandle }) => {
  return (
    <main>
      <ItemList
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        deleteHandle={deleteHandle}
      />
    </main>
  );
};

export default Content;
