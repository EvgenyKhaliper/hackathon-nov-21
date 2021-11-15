import './App.css';
import styled from 'styled-components';
import blob from './blob.mp3'
import {Route, Routes, useNavigate,} from "react-router-dom";
import {Autocomplete, createTheme, MenuItem, Modal, Select, TextField, ThemeProvider} from "@mui/material";
import {useState} from "react";
import {AutoComplete, Input} from "antd";

const Layout = styled.div`
    margin: 0 auto;
    width: 32rem;
    text-align: center;
`

const Putin = styled.div`
    width: 32rem;
`

const Content = styled.div`
    width: 32rem;
    display: grid;
    grid-gap: 1rem;
`

const Scoring = styled.ul`
    text-align: left;
    display: grid;
    grid-gap: 1rem;
`

const Start = styled.button`
    border: 2px
    solid white;
    background: none;
    color: white;
    border-radius: 1rem;
    font-size: 2rem;
    padding: .5rem 2rem;
    cursor: pointer;
    margin-top:1rem;
`

const Home = () => {
    let navigate = useNavigate();
    return (
        <Layout>
            <h1>InPutin</h1>
            <Putin>
                ⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣵⣿⣿⣿⠿⡟⣛⣧⣿⣯⣿⣝⡻⢿⣿⣿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣿⣿⠋⠁⣴⣶⣿⣿⣿⣿⣿⣿⣿⣦⣍⢿⣿⣿⣿⣿⣿
                ⣿⣿⣿⣿⢷⠄⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⢼⣿⣿⣿⣿
                ⢹⣿⣿⢻⠎⠔⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿⣿
                ⢸⣿⣿⠇⡶⠄⣿⣿⠿⠟⡛⠛⠻⣿⡿⠿⠿⣿⣗⢣⣿⣿⣿⣿
                ⠐⣿⣿⡿⣷⣾⣿⣿⣿⣾⣶⣶⣶⣿⣁⣔⣤⣀⣼⢲⣿⣿⣿⣿
                ⠄⣿⣿⣿⣿⣾⣟⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⢟⣾⣿⣿⣿⣿
                ⠄⣟⣿⣿⣿⡷⣿⣿⣿⣿⣿⣮⣽⠛⢻⣽⣿⡇⣾⣿⣿⣿⣿⣿
                ⠄⢻⣿⣿⣿⡷⠻⢻⡻⣯⣝⢿⣟⣛⣛⣛⠝⢻⣿⣿⣿⣿⣿⣿
                ⠄⠸⣿⣿⡟⣹⣦⠄⠋⠻⢿⣶⣶⣶⡾⠃⡂⢾⣿⣿⣿⣿⣿⣿
                ⠄⠄⠟⠋⠄⢻⣿⣧⣲⡀⡀⠄⠉⠱⣠⣾⡇⠄⠉⠛⢿⣿⣿⣿
                ⠄⠄⠄⠄⠄⠈⣿⣿⣿⣷⣿⣿⢾⣾⣿⣿⣇⠄⠄⠄⠄⠄⠉⠉
                ⠄⠄⠄⠄⠄⠄⠸⣿⣿⠟⠃⠄⠄⢈⣻⣿⣿⠄⠄⠄⠄⠄⠄⠄
                ⠄⠄⠄⠄⠄⠄⠄⢿⣿⣾⣷⡄⠄⢾⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄
                ⠄⠄⠄⠄⠄⠄⠄⠸⣿⣿⣿⠃⠄⠈⢿⣿⣿⠄⠄⠄⠄⠄⠄⠄
            </Putin>
            <Start onClick={() => {new Audio(blob).play(); navigate('/info');} }>start</Start>
        </Layout>
    );
}

const Info = () => {
    let navigate = useNavigate();
    return (
        <Layout>
            <h1>✯✯✯✯✯ Top Secret ✯✯✯✯✯</h1>
            <Content>
                 <p>
                     Dear tovarish, our nation is under attack!<br /><br />
                     Imperialist hacker "pr0f3550r 7rump" used 0-day exploit in our browser 'Medved' to intercept all auto-complete inputs values, and then to send the values - members of our great nation to our enemies.<br /><br />
                     To prevent this cowardly attack on our glorious nation, you and your comrads need to spot all auto-complete inputs and their values, then border the input and each value in red color.<br /><br /> 
                     This way SVR will be able to track red borders and warn the proletariat.
                 </p>
                <em>" У стра́ха глаза́ велики́. "</em>
                <p>
                    Our president personally asked me to inform you that only fully working, agnostic, creative, and scale-able solution will be accepted. <br /><br />
                    In case it won't be such an unpleasant surprice will be wating you. I can't provide you with more details at this point but uranium mining and cold will be least of your problems.
                </p>
            </Content>
            <Start onClick={() => navigate('/game') }>начать</Start>
        </Layout>
    );
}

const Game = () => {
    let navigate = useNavigate();
    const options = ['Anna Dmytriv', 'Aki Gao', 'Danny Barlev', 'Nadav Rosenberg', 'Lihi Tal', 'Michael Peer', 'Noy Hadaria', 'Daniel Ilan', 'Uri Ronen'];
    const options2 = options.map((o,i) => {return {label: o, value: o}});
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
        <Layout>
            <h1>Game</h1>
            <Content>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="1" />}
                />
                <TextField id="outlined-basic" label="2" variant="outlined" placeholder={2} />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={3}
                >
                    {
                        options.map((o) => (
                            <MenuItem value={o}>{o}</MenuItem>
                        ))
                    }
                </Select>
                <TextField id="outlined-basic" label="4" variant="outlined" onClick={() => setOpen(true)} placeholder={4} />
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <TextField id="outlined-basic" label="5" variant="outlined" placeholder={5} />
                </Modal>
                <TextField id="outlined-basic" label="6" variant="outlined" onClick={() => setOpen2(true)} placeholder={6} />
                <Modal
                    open={open2}
                    onClose={() => setOpen2(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="7" />}
                    />
                </Modal>
            </Content>
        </Layout>
    );
}

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
  return (
      <ThemeProvider theme={darkTheme}>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="info" element={<Info />} />
                  <Route path="game" element={<Game />} />
              </Routes>
          </div>
      </ThemeProvider>

  );
}

export default App;
