export default ({ persons }) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {
        persons.map(({ firstName, lastName, phone }, idx) =>
        (
          <tr key={idx}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phone}</td>
          </tr>
        )
        )
      }
    </tbody>
  </table>
);
