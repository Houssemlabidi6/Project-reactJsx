import "./App.css";
import Descriptions from "./component/Description";
import Images from "./component/Image";
import Names from "./component/Name";
import Prices from "./component/Price";
import { Card, Button } from "react-bootstrap";
import "./styles.css";
var firstName = "Houssem";

function App() {
  return (
    <div className="App">
      {/* Ici Notre card */}
      <Card class="card" style={{ width: "20rem" }}>
        <Images class="card-img-top" />
        <Card.Body>
          <Card.Title>
            <Names />
          </Card.Title>
          <Card.Text>
            <Prices />
          </Card.Text>
          <Card.Text>
            <Descriptions />
          </Card.Text>
          <Button className="y" variant="primary">
            Acheter
          </Button>
        </Card.Body>
      </Card>
      {/* Condition hello firstName hello, there */}
      <div className="message">
        {firstName ? (
          <>
            <p className="x">Hello, {firstName}!</p>
            <img src="Avatar-Profil.png" alt="" style={{ width: 200 }} />
          </>
        ) : (
          <h1 className="x">Hello, there!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
