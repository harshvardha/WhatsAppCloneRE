import { useState } from "react";
import { Group, Chat, MoreVert, Search, FilterList } from "@mui/icons-material";
import { EMPTY_PROFILE_PICTURE } from "../../contants/constants";
import Contact from "../../components/Contact/Contact";
import "./Home.css";

const Home = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="home">
            <div className="home--nav"></div>
            <div className="home--dashboard">
                <div className="contacts">
                    <div className="contacts--options">
                        <div className="profile-pic" style={{ backgroundColor: "#e0e4eb" }}>
                            <img src={EMPTY_PROFILE_PICTURE} alt="" />
                        </div>
                        <div className="options">
                            <Group className="icon" />
                            <Chat className="icon" />
                            <MoreVert className="icon" />
                        </div>
                    </div>
                    <div className="contacts--search">
                        <div className="search">
                            <span style={{ padding: "3px", backgroundColor: "#e0e4eb", borderTopLeftRadius: "7px", borderBottomLeftRadius: "7px" }}><Search className="icon" style={{ fontSize: "20px", marginLeft: "10px", marginTop: "5px" }} /></span>
                            <input
                                id="searchContacts"
                                type="text"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                            />
                            <FilterList style={{ color: "#54656f", alignSelf: "center", marginLeft: "10px", cursor: "pointer" }} />
                        </div>
                    </div>
                    <div className="contacts--contacts">
                        <Contact num={1} />
                        <Contact num={2} />
                        <Contact num={3} />
                        <Contact num={4} />
                        <Contact num={5} />
                        <Contact num={6} />
                        <Contact num={7} />
                        <Contact num={8} />
                        <Contact num={9} />
                        <Contact num={10} />
                        <Contact num={11} />
                        <Contact num={12} />
                        <Contact num={13} />
                        <Contact num={14} />
                        <Contact num={15} />
                        <Contact num={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;