import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import Login from './pages/Login'
import CreateAcc from './pages/CreateAcc'
import StudentPortal from './pages/StudentPortal'
import TeacherPortal from './pages/TeacherPortal'
import AdminPortal from './pages/AdminPortal'
import CodeEditor from './pages/CodeEditor'
import GenerateQuestion from './pages/GenerateQuestion'
import VideoCon from './pages/VideoCon'

function App() {

  return (
    <BrowserRouter>
        <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/create-account' element={<CreateAcc/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/student' element={<StudentPortal/>}/>
              <Route path='/teacher' element={<TeacherPortal/>}/>
              <Route path='/admin' element={<AdminPortal/>}/>
              <Route path='/code_editor' element={<CodeEditor/>}/>
              <Route path='/generate_question' element={<GenerateQuestion/>}/>
              <Route path='/video_con' element={<VideoCon/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
