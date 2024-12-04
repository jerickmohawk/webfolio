const MyTemplate = ({ body }) => (
    <div>
      <p>First Name: {body.firstname}</p>
      <p>Last Name: {body.lastname}</p>
      <p>Phone: {body.number}</p>
      <p>Email: {body.email}</p>
      <p>Message: {body.message}</p>
    </div>
  );
  
  export default MyTemplate;
  