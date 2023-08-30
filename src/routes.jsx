import { createBrowserRouter } from "react-router-dom"
import LoginHome from "./pages/User Pages/Login/LoginHome"
import LoginWTPhone from "./pages/User Pages/Login/LoginWTPhone"
import LoginWTGmail from "./pages/User Pages/Login/LoginWTGmail"
import UserHome from "./pages/User Pages/Main Pages/UserHome"
import IndivudualCandidate from "./pages/User Pages/Main Pages/IndivudualCandidate"
import ResultsUser from "./pages/User Pages/Main Pages/ResultsUser"
import IndivudualResult from "./pages/User Pages/Main Pages/IndivudualResult"
import AdminHome from "./pages/Admin Pages/AdminHome"
import AdminCreateCandidate from "./pages/Admin Pages/AdminCreateCandidate"
import AdminCreatePosition from "./pages/Admin Pages/AdminCreateElection"
import AdminCreateUser from "./pages/Admin Pages/AdminCreateUser"
import AdminNotVoted from "./pages/Admin Pages/AdminNotVoted"
import AdminOfflineVote from "./pages/Admin Pages/AdminOfflineVote"
import AdminTables from "./pages/Admin Pages/AdminTables"
import AdminResults from "./pages/Admin Pages/AdminResults"

const Router= createBrowserRouter([
    {
        path:"/",
        element:<LoginHome/>
    },
    {
        path:"/loginphone",
        element:<LoginWTPhone/>
    },
    {
        path:"/logingmail",
        element:<LoginWTGmail/>
    },
    {
        path:"/home",
        element:<UserHome/>
    },
    {
        path:"/indivudual",
        element:<IndivudualCandidate/>
    },
    {
        path:"/result",
        element:<ResultsUser/>
    },
    {
        path:"/indivudualresult",
        element:<IndivudualResult/>
    },
    {
        path:"/admin/home",
        element:<AdminHome/>
    },
    {
        path:"/admin/tables",
        element:<AdminTables/>
    },
     {
        path:"/admin/results",
        element:<AdminResults/>
    },
    {
        path:"/admin/createcandidate",
        element:<AdminCreateCandidate/>
    },
    {
        path:"/admin/createelection",
        element:<AdminCreatePosition/>
    },
    {
        path:"/admin/createuser",
        element:<AdminCreateUser/>
    },
    {
        path:"/admin/notvoted",
        element:<AdminNotVoted/>
    },
    {
        path:"/admin/offlinevote",
        element:<AdminOfflineVote/>
    },
])
export default Router