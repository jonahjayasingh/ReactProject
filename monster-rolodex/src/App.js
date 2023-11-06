import "./App.css";
// import { Component } from "react";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsterData, setMonsterData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filterwdMonster, setFilterwdMonster] = useState(monsterData);
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchString(searchField);
  };
  console.log("render");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setMonsterData(data);
      });
  }, []);
  useEffect(() => {
    const newFilterwdMonster = monsterData.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    setFilterwdMonster(newFilterwdMonster);
  }, [monsterData, searchString]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="Monster Search ..."
      />
      <CardList monsters={filterwdMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         return this.setState({ monsters: data });
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState({ searchString: searchField });
//   };

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filterwdMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchString);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           className="search-box"
//           placeholder="Monster Search ..."
//         />
//         <CardList monsters={filterwdMonster} />
//       </div>
//     );
//   }
// }

export default App;
