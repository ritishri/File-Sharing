import { useRef, useState, useEffect, createContext } from 'react';
import './App.css';
import { uploadFile } from './services/api';
import { Link } from 'react-router-dom';
import contact from './contact';
import about from './about';
// import Header from './Header.js';
const AppState = createContext();

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <AppState.Provider value={{about , contact}}>
      {/* <Header/> */}
      <div className="container main-div">
        <div className="file-div container-fluid">
          {/* navbar */}
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <h3>
          Easy<span className="span">Click</span>
        </h3>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
          

          <div className="d-flex justify-content-between g-col-6">
            <div className="text-center">
              <h2 className="">File Sharing</h2>
              <p className="">Upload and Share the download link</p>
              <button
                className="buttons"
                onClick={() => onUploadClick()}
              >
                Upload
              </button>
            </div>
            <img
              className="image-div"
              src="https://img.freepik.com/premium-vector/cloud-system-file-download-database-protection-concept-data-center-file-management-flat-illustration-vector-landing-page-template_128772-1808.jpg"
              alt=""
            ></img>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <a href={result} target="_blank">
            {result}
          </a>
        </div>
      </div>
    </AppState.Provider>
  );
}

export default App;

