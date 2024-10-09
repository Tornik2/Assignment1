const obj = {
  id: "10002",
  name: "Eco-Friendly Water Bottle",
  description: "Stay hydrated with our durable, eco-friendly water bottle.",
  price: 14.99,
  currency: "USD",
  imageURL: "https://example.com/images/product-10002.jpg",
};

function Assignment1() {
  // Map over the object entries to create table rows
  const list = (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(obj).map(([key, value], index) => (
          <tr key={index}>
            <td>{key}</td> {/* Key of the object */}
            <td>{value}</td> {/* Value of the key */}
            <td>{index}</td> {/* Position is the index */}
          </tr>
        ))}
      </tbody>
    </table>
  );
  const styles = {
    margin: "50px auto ",
    flexGrow: "1",
  };
  return <div style={styles}>{list}</div>;
}

export { Assignment1 };
