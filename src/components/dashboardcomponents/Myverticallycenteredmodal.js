import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

export function Myverticallycenteredmodal(props) {
  const [pdfFile, setpdffile] = useState(null);
  const [name, setName] = useState("");
  const [composer, setComposer] = useState("");
  const [scoreType, setScoreType] = useState("");
  const [message, setMessage] = useState("");

  const token = useSelector((state) => state.user.token);

  const handleFileChange = (e) => {
    setpdffile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const formData = new FormData();
    formData.append("score[pdf]", pdfFile);
    formData.append("score[name]", name);
    formData.append("score[composer]", composer);
    formData.append("score[score_type]", scoreType);
    try {
      const response = await fetch("http://localhost:3000/api/v1/scores", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: ` ${token}`,
          // "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Score added successfully!");
        console.log("Success:", data);
      } else {
        setMessage("There was an error adding the score.");
        console.log("Error:", data);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error adding the score.");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add score to your Dashboard
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div>
            <label>image:</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Composer:</label>
            <input
              type="text"
              value={composer}
              onChange={(e) => setComposer(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Score Type:</label>
            <input
              type="text"
              value={scoreType}
              onChange={(e) => setScoreType(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Score</button>
          {message && <p>{message}</p>}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
