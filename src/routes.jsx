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
import AdminUserlist from "./pages/Admin Pages/AdminUserlist"
import AdminElectionlist from "./pages/Admin Pages/AdminElectionlist"
import SingleNonvoters from "./pages/Admin Pages/SingleNonvoters"
import AdminSingleResult from "./pages/Admin Pages/AdminSingleResult"
import SignInComponent from "./pages/User Pages/Login/SignInComponent"
import NonVoters from "./pages/User Pages/Main Pages/NonVoters"
import SingleNotVoted from "./pages/User Pages/Main Pages/SingleNotVoted"

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
        path:"/indivudual/:id",
        element:<IndivudualCandidate/>
    },
    {
        path:"/result",
        element:<ResultsUser/>
    },
    {
        path:"/nonvoters",
        element:<NonVoters/>
    },
    {
        path:"/nonvoters/:id",
        element:<SingleNotVoted/>
    },
    {
        path:"/indivudualresult/:id",
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
        path:"/admin/indivudualresult/:id",
        element:<AdminSingleResult/>
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
    {
        path:"/admin/nonvoters/:id",
        element:<SingleNonvoters/>
    },
    {
        path:"/admin/userlist",
        element:<AdminUserlist/>
    },
    {
        path:"/admin/electionlist",
        element:<AdminElectionlist/>
    },
    {
        path:"/demo",
        element:<SignInComponent/>
    },
])
export default Router