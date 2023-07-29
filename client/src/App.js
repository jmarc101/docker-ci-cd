import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, world.
        </p>
        <p>
         This App is part of my experiment CI/CD with AWS Beanstalk. 🔥🚀
        </p>
        <a
          className="App-link"
          href="https://github.com/jmarc101/docker-ci-cd"
          target="_blank"
          rel="noopener noreferrer"
        >
          View github repo
        </a>
      </header>
    </div>
  );
}

export default App;
